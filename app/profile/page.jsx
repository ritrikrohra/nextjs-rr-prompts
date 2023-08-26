"use client"

import React, {useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const ProfilePage = () => {

  const router = useRouter();

    const {data: session} = useSession();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
          setPosts(data);
        }
        if(session?.user.id) fetchPosts();
      }, [])

    const handlEdit = (id) => {
      console.log("id >>>", id)
      router.push(`/update-prompt?idx=${id}`)
    }

    const handleDelete = async (id) => {
        
    }
 
  return (
    <Profile 
    name={session?.user.name}
    desc={session?.user.email}
    data={posts}
    handleEdit={handlEdit}
    handleDelete={handleDelete}
    />
  )
}

export default ProfilePage