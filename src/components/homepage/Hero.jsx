"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLongRightIcon,
  BookmarkIcon,
  HeartIcon,
} from "@heroicons/react/24/outline"

const metadata = {
  title: "Stay Curious",
  subtitle:
    "Discover stories, thinking, and expertise from writers on any topic.",
}

export default function Hero() {
  return (
    <main className="w-full flex justify-center items-center p-4 h-auto md:h-[600px]">
      <div className="w-full flex flex-col justify-center items-center md:flex-row max-w-screen-xl h-full">
        <div className="w-full md:w-auto flex flex-col gap-8 py-20 md:py-0">
          <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-2xl font-bold text-neutral-600 md:text-4xl font-['playfair']">
              {metadata.title}
            </h1>
            <p className="max-w-xs text-neutral-400 text-sm md:text-base">
              {metadata.subtitle}
            </p>
          </div>
          <div>
            <Link
              href="/"
              className="text-white inline-block bg-neutral-600 font-bold py-3 px-5 rounded-full text-sm md:text-xl"
            >
              Start Reading
            </Link>
          </div>
        </div>
        <div className="w-full h-auto md:h-full md:w-auto md:flex-1">
          <Grid />
        </div>
      </div>
    </main>
  )
}

const Grid = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 gap-8 sm:gap-0 sm:grid-cols-3 grid-rows-2 md:grid-rows-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
      <div className="md:col-span-1 relative lg:col-span-2 md:px-4 px-2 sm:col-span-2">
        <motion.div
          initial={{ height: "100%" }}
          animate={{
            height: 0,
            transition: { duration: 1.5, delay: 0.3, ease: "circOut" },
          }}
          className="absolute z-20 w-full bg-white"
        ></motion.div>
        <MainCard />
      </div>
      <div className="hidden relative sm:flex md:hidden lg:flex md:px-4 px-2 flex-col gap-12 justify-start items-center">
        <motion.div
          initial={{ height: "100%" }}
          animate={{
            height: 0,
            transition: { duration: 1.5, delay: 0.7, ease: "circOut" },
          }}
          className="absolute z-20 w-full bg-white"
        ></motion.div>
        <MiniCard />
        <MiniCard />
      </div>
      <div
        className="sm:col-span-3 relative md:hidden my-8 md:my-0 xl:flex justify-end items-end xl:col-span-1 p-4 h-48 md:h-auto grayscale hover:grayscale-0 transition-all duration-500 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/1920×1080/?girl)`,
        }}
      >
        <motion.div
          initial={{ width: "100%" }}
          animate={{
            width: 0,
            transition: { duration: 2, delay: 1, ease: "circOut" },
          }}
          className="absolute h-full top-0 right-0 z-20 bg-white"
        ></motion.div>
        <Link
          href="/posts"
          className="flex justify-center text-neutral-600 items-center gap-1 bg-white py-2 px-4"
        >
          Popular Posts
          <ArrowLongRightIcon className="w-5 text-neutral-400" />
        </Link>
      </div>
    </div>
  )
}
const MainCard = () => {
  return (
    <div className="h-full w-full flex justify-between flex-col gap-4">
      <header
        className="w-full aspect-video bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/1920×1080/?programming)`,
        }}
      ></header>
      <main className="w-full mb-auto flex flex-col justify-center items-start gap-2">
        <h1 className="font-bold text-neutral-600 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-neutral-500 text-sm cutoff-text cutoff-text-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic
          laborum deserunt non totam a consectetur quisquam nemo tempore
          placeat!
        </p>
        <Link href="/" className="text-neutral-600 font-bold">
          Read more...
        </Link>
      </main>
      <footer className="flex justify-start items-center gap-2">
        <div className="">
          <div className="w-10 rounded-full aspect-square bg-neutral-600"></div>
        </div>
        <div className="flex-1 flex justify-center items-start flex-col">
          <h3 className="md:text-base text-sm text-neutral-600">gdapriana</h3>
          <span className="md:text-sm text-xs text-neutral-400">editor</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <BookmarkIcon className="w-5 text-neutral-400 hover:text-neutral-600 cursor-pointer" />
          <HeartIcon className="w-5 text-neutral-400 hover:text-neutral-600 cursor-pointer" />
        </div>
      </footer>
    </div>
  )
}
const MiniCard = () => {
  return (
    <div className="w-full h-1/2 flex flex-col justify-between items-start">
      <header
        className="w-full grayscale aspect-video bg-cover"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/1920×1080/?random)`,
        }}
      ></header>
      <main className="w-full flex flex-col items-start justify-center mb-auto">
        <h1 className="cutoff-text cutoff-text-3 font-bold text-neutral-600 md:text-base text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          nostrum.
        </h1>
      </main>
      <footer className="flex w-full justify-start items-center gap-2">
        <div className="">
          <div className="w-5 rounded-full aspect-square bg-neutral-600"></div>
        </div>
        <div className="flex-1 flex justify-center items-start flex-col">
          <h3 className="text-sm text-neutral-600">gdapriana</h3>
          <span className="text-xs text-neutral-400">editor</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <BookmarkIcon className="w-5 text-neutral-400 hover:text-neutral-600 cursor-pointer" />
          <HeartIcon className="w-5 text-neutral-400 hover:text-neutral-600 cursor-pointer" />
        </div>
      </footer>
    </div>
  )
}
