"use client"
import Hero from "@/components/homepage/Hero"
import List from "@/components/homepage/List"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Home() {
  const [posts, setPosts] = useState(null)
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f4bf25eddd3c443298c3a597bd747f17')
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => console.log(error))

    axios.get('https://newsapi.org/v2/top-headlines/sources?apiKey=f4bf25eddd3c443298c3a597bd747f17')
      .then((response) => {
        setCategories(response.data)
      })
      .catch((error) => console.log(error))
  }, [])



  return (
    <>
    {
      posts !== null && categories !== null ?
        <>
          <Hero posts={posts.articles.slice(0, 3)} />
          <List posts={posts.articles} categories={categories.sources.slice(0, 12)} />
        </> : <div className="absolute w-full h-full top-0 left-0 bg-white z-50 flex justify-center items-center font-bold text-neutral-600 text-xl">Loading...</div>
     }
    </>
  )
}
