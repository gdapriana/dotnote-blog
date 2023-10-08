"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Bars3BottomRightIcon,
  BellAlertIcon,
  BookmarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"

export default function Header({ navigator }) {
  return (
    <header className="w-full flex justify-center items-center p-4">
      <nav className="w-full flex justify-between items-center max-w-screen-xl gap-4">
        <Brand />
        <Navigator navigator={navigator} />
        <Hamburger />
        <Auth />
      </nav>
    </header>
  )
}
const Brand = () => {
  return (
    <motion.a
      initial={{ x: 100 }}
      exit={{ x: 100 }}
      animate={{ x: 0, transition: { duration: 2, ease: "circOut" } }}
      className="text-xl z-10 font-bold text-neutral-600"
    >
      dotnote
    </motion.a>
  )
}
const Navigator = ({ navigator }) => {
  return (
    <div className="flex-1 border-l bg-white z-20 pl-4 h-full flex justify-between items-center">
      <ul className="md:flex hidden gap-2 justify-center items-center me-auto">
        {navigator.map((item, index) => (
          <Link
            key={index}
            className="text-neutral-500 transition-all duration-300 hover:text-neutral-600 hover:font-bold"
            href={item.path}
          >
            {item.name}
          </Link>
        ))}
      </ul>

      <div className="flex justify-center items-center gap-2">
        <MagnifyingGlassIcon className="w-5 cursor-pointer text-neutral-400 hover:text-neutral-600" />
        <BookmarkIcon className="w-5 cursor-pointer text-neutral-400 hover:text-neutral-600" />
        <motion.div
          whileHover={{
            rotateZ: [0, -20, 20, -20, 20, -20, 20, 0],
            transition: { duration: 1 },
          }}
        >
          <BellAlertIcon className="w-5 cursor-pointer text-neutral-400 hover:text-neutral-600" />
        </motion.div>
      </div>
    </div>
  )
}
const Hamburger = () => {
  return (
    <motion.div className="md:hidden">
      <Bars3BottomRightIcon className="w-5" />
    </motion.div>
  )
}
const Auth = () => {
  return (
    <Link
      href="/login"
      className="py-2 px-4 border rounded-full text-neutral-600"
    >
      Login
    </Link>
  )
}
