"use client"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import Link from "next/link"

const metadata = {
  title: "Welcome Back!",
  subtitle: "The faster you fill up, the faster you get knowledge!",
}

export default function Login() {
  return (
    <main className="w-full flex justify-center items-center h-screen top-0 right-0 absolute z-50">
      <div className="w-full md:w-1/2 bg-white relative flex flex-col gap-8 justify-center items-center h-full">
        <motion.div
          initial={{ height: "100%" }}
          animate={{ height: 0, transition: { duration: 1, ease: "circOut" } }}
          className="absolute z-50 w-full top-0 right-0 bg-white"
        ></motion.div>
        <div className="absolute flex justify-between items-center w-full top-0 right-0 p-4">
          <h1 className="text-neutral-600 font-bold text-xl">dotnote</h1>
          <Link href="/">
            <XMarkIcon className="w-5" />
          </Link>
        </div>
        <LoginHeader />
        <LoginFormProvider />
        <LoginDivider />
        <LoginFormInput />
        <LoginRegisterSection />
      </div>
      <div
        className="hidden bg-cover grayscale md:flex md:w-1/2 md:h-full"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/900×700/?girl)`,
        }}
      >
        <motion.div
          initial={{ height: "100%" }}
          exit={{ height: 0 }}
          animate={{
            height: 0,
            transition: { ease: "circOut", duration: 1, delay: 0.2 },
          }}
          className="flex-1 bg-white"
        ></motion.div>
        <motion.div
          initial={{ height: "100%" }}
          animate={{
            height: 0,
            transition: { ease: "circOut", duration: 1, delay: 0.4 },
          }}
          className="flex-1 bg-white"
        ></motion.div>
        <motion.div
          initial={{ height: "100%" }}
          animate={{
            height: 0,
            transition: { ease: "circOut", duration: 1, delay: 0.7 },
          }}
          className="flex-1 bg-white"
        ></motion.div>
        <motion.div
          initial={{ height: "100%" }}
          animate={{
            height: 0,
            transition: { ease: "circOut", duration: 1, delay: 1 },
          }}
          className="flex-1 bg-white"
        ></motion.div>
      </div>
    </main>
  )
}
const LoginHeader = () => {
  return (
    <header className="w-full">
      <h1 className="font-['playfair'] font-bold text-neutral-600 text-xl text-center">
        {metadata.title}
      </h1>
      <p className="text-center text-neutral-600">{metadata.subtitle}</p>
    </header>
  )
}
const LoginFormProvider = () => {
  return (
    <div className="w-full bg-white p-4 h-auto flex flex-col justify-center items-center">
      <main className="w-full flex flex-col gap-8 justify-center items-center">
        <div className="flex justify-center gap-2 items-center">
          <Link
            href="/"
            className="flex rounded-full border py-2 px-4 bg-white text-neutral-600 justify-center items-center gap-2"
          >
            Login with
            {/*  prettier-ignore */}
            <svg viewBox="0 0 16 16" width={24} xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"></path><path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"></path><path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"></path><path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"></path></g></svg>
          </Link>
          <Link
            href="/"
            className="flex rounded-full border py-2 bg-white text-neutral-600 px-4 justify-center items-center gap-2"
          >
            Login with
            {/*  prettier-ignore */}
            <svg viewBox="0 0 24 24" width={24} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M20.9992 5.95846C21.0087 6.565 20.9333 7.32649 20.8658 7.8807C20.8395 8.09686 20.8037 8.27676 20.7653 8.42453C21.6227 10.01 22 11.9174 22 14C22 16.4684 20.8127 18.501 18.9638 19.8871C17.1319 21.2605 14.6606 22 12 22C9.33939 22 6.86809 21.2605 5.0362 19.8871C3.18727 18.501 2 16.4684 2 14C2 11.9174 2.37732 10.01 3.23472 8.42452C3.19631 8.27676 3.16055 8.09685 3.13422 7.8807C3.06673 7.32649 2.99133 6.565 3.00081 5.95846C3.01149 5.27506 3.10082 4.5917 3.19988 3.91379C3.24569 3.60028 3.31843 3.30547 3.65883 3.11917C4.00655 2.92886 4.37274 2.99981 4.73398 3.1021C5.95247 3.44713 7.09487 3.93108 8.16803 4.51287C9.2995 4.17287 10.5783 4 12 4C13.4217 4 14.7005 4.17287 15.832 4.51287C16.9051 3.93108 18.0475 3.44713 19.266 3.1021C19.6273 2.99981 19.9935 2.92886 20.3412 3.11917C20.6816 3.30547 20.7543 3.60028 20.8001 3.91379C20.8992 4.5917 20.9885 5.27506 20.9992 5.95846ZM20 14C20 12.3128 19.6122 10 17.5 10C16.5478 10 15.6474 10.2502 14.7474 10.5004C13.8482 10.7502 12.9495 11 12 11C11.0505 11 10.1518 10.7502 9.25263 10.5004C8.35261 10.2502 7.45216 10 6.5 10C4.39379 10 4 12.3197 4 14C4 15.7636 4.82745 17.231 6.23588 18.2869C7.66135 19.3556 9.69005 20 12 20C14.3099 20 16.3386 19.3555 17.7641 18.2869C19.1726 17.231 20 15.7636 20 14ZM10 14.5C10 15.8807 9.32843 17 8.5 17C7.67157 17 7 15.8807 7 14.5C7 13.1193 7.67157 12 8.5 12C9.32843 12 10 13.1193 10 14.5ZM15.5 17C16.3284 17 17 15.8807 17 14.5C17 13.1193 16.3284 12 15.5 12C14.6716 12 14 13.1193 14 14.5C14 15.8807 14.6716 17 15.5 17Z" fill="#000000"></path> </g></svg>
          </Link>
        </div>
      </main>
    </div>
  )
}
const LoginDivider = () => {
  return (
    <div className="w-full max-w-xs gap-4 flex justify-center items-center">
      <div className="flex-1 border"></div>
      <span className="text-neutral-400">Or Login With</span>
      <div className="flex-1 border"></div>
    </div>
  )
}
const LoginFormInput = () => {
  return (
    <form className="w-full max-w-xs flex flex-col justify-center items-center gap-6">
      <label className="w-full flex flex-col gap-3">
        <span className="text-sm text-neutral-400">Email</span>
        <input
          type="email"
          id="email"
          required
          className="w-full bg-neutral-200 border p-1 md:p-2 text-sm"
        />
      </label>
      <label className="w-full flex flex-col gap-3">
        <span className="text-sm text-neutral-400">Password</span>
        <input
          type="password"
          id="password"
          required
          className="w-full bg-neutral-200 border p-1 md:p-2 text-sm"
        />
      </label>
      <button
        type="submit"
        className="text-white py-2 px-4 rounded-full bg-neutral-800"
      >
        Login
      </button>
    </form>
  )
}
const LoginRegisterSection = () => {
  return (
    <div className="absolute p-8 bottom-0 right-0">
      <p className="text-neutral-400">
        Not have any account?{" "}
        <Link href={"/register"} className="text-neutral-600 font-bold">
          Register
        </Link>{" "}
      </p>
    </div>
  )
}
