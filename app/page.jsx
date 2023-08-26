import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center
        '>AI POWERED PROMPTS</span>
      </h1>
      <p className='desc text-ceneter'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, obcaecati voluptatem eveniet laborum rem, ad commodi cupiditate et in natus ut odio id ex maiores consequuntur sapiente eligendi fugit! Dolorum!
      </p>
      <Feed />
    </section>
  )
}

export default Home