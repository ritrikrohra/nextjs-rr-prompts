import Link from 'next/link';
import React from 'react'

const Form = (props) => {
  const { type, post, setPost, submitting, handleSubmit } = props;
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue-gradient">
          {type} Post
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and Share. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, et sapiente? Odio quas nemo at, ad commodi minima rem dolore beatae nisi molestiae est corrupti ullam earum! Totam, ad quo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, et sapiente? Odio quas nemo at, ad commodi minima rem dolore beatae nisi molestiae est corrupti ullam earum! Totam, ad quo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, et sapiente? Odio quas nemo at, ad commodi minima rem dolore beatae nisi molestiae est corrupti ullam earum! Totam, ad quo?
      </p>
      <form action=""
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>
          <textarea value={post?.prompt}
            onChange={(e) => setPost({
              ...post,
              prompt: e.target.value
            })
            }
            placeholder='Prompt here'
            required
            className='form_textarea'></textarea>
        </label>
        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag

          </span>
          <input value={post?.tag}
            onChange={(e) => setPost({
              ...post,
              tag: e.target.value
            })
            }
            placeholder='#tag'
            required
            className='form_input'></input>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className='text-gray-500 text-sm'>
            Cancel
          </Link>
          <button type='submit' disabled={submitting}
            className='px-5 py-1.5 text-sm'
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form