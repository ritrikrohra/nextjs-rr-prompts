import User from '@models/user';
import { connectToDatabase } from '@utils/database';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

console.log({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
})

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            });
            session.user.id = sessionUser._id.toString();
            return session
        },
        async signIn(data) {
            try {
                const { profile } = data;
                await connectToDatabase();

                //if user exists
                const userExits = await User.findOne({
                    email: profile.email
                })
                //if not, create a new user
                if (!userExits) {
                    await User.create({
                        email: profile.email,
                        userName: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
                return true;
            } catch (err) {
                console.log("USER CREATION ERROR", err);
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST };