"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const UpdatePromptPage = (props) => {

    const router = useRouter();
    useEffect(() => {
        console.log("ROUTER BEFORE >>>", router)
        console.log("props BEFORE >>>", props);
    }, [])
  return (
    <div>

    </div>
  )
}

export default UpdatePromptPage