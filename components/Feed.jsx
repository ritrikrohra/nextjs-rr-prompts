"use client"

import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard'

export const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {
        data?.map((post) => {
          return (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
          )
        })
      }
    </div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState("")
  const [posts, setPosts] = useState([]);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, [])

  return (
    <section className="feed">
      <form className='relative w-full flex-center' action="">
        <input type="text"
          placeholder='search'
          value={searchText}
          onChange={handleSearchText}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={() => {
        }}
      />
    </section>
  )
}

export default Feed