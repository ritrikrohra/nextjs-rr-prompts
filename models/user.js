import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please provide an email address"],
        unique: [true, "Email already exists"],
    },
    userName: {
        type: String,
        required: [true, "Please provide an username"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    image: {
        type: String,
    }
})

//if already exists, use it, if not, create it
const User = models.User || model("User", UserSchema);
export default User;