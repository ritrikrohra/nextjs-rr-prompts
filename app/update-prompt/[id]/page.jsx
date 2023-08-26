"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const UpdatePromptIDPage = (props) => {

    const router = useRouter();
    useEffect(() => {
        console.log("ROUTER AFTER >>>", router)
        console.log("props >>>", props)
    }, [])
  return (
    <div>

    </div>
  )
}

export default UpdatePromptIDPage