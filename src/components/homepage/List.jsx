import { CalendarDaysIcon, BookmarkIcon, HeartIcon, Squares2X2Icon } from "@heroicons/react/24/outline"

export default function List() {
  return (
    <div className="w-full flex py-20 justify-center items-center">
      <div className="w-full p-4 xl:p-0 flex flex-col md:flex-row max-w-7xl">
        {/*List*/}
        <div className="w-full md:flex-1">
          <div className="w-full flex border-b text-neutral-400 justify-start items-center">
            <div className="cursor-pointer font-bold text-neutral-600 border-b p-2 border-neutral-600">
              Trending
            </div>
            <div className="cursor-pointer p-2 border-neutral-600">Popular</div>
            <div className="cursor-pointer p-2 border-neutral-600">
              Staff Pick
            </div>
          </div>

          {/*Card*/}
          <div className="w-full py-8 flex-col px-4 flex gap-8 justify-center items-center">
            <ListCard />
            <ListCard />
          </div>
        </div>

        {/*Cetegories*/}
        <div className="w-full md:w-auto">
          Test
        </div>
      </div>
    </div>
  )
}

const ListCard = () => {
  return (
    <div className="w-full flex justify-center border-b py-8 gap-2 flex-col items-center">
      <div className="flex w-full text-neutral-400 text-sm gap-2 justify-start items-center">
        <div className="w-8 rounded-full aspect-square bg-red-50"></div>
        <span>•</span>
        <p className="text-neutral-600 whitespace-nowrap overflow-hidden">gedeapriana <span className="text-neutral-400">in</span> programming</p>
        <span className="hidden sm:inline">•</span>
        <p className="whitespace-nowrap hidden sm:inline overflow-hidden">24 sept <CalendarDaysIcon className="w-5 inline" /></p>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="cutoff-text cutoff-text-1 text-base font-bold text-neutral-600">Hello World in every Programming Languages</h1>
          <p className="cutoff-text cutoff-text-2 text-xs text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies elit feugiat ullamcorper egestas. Ut pharetra ac tortor a mollis. Nullam ante lectus, interdum at enim ac, feugiat porta lorem. Nulla eleifend faucibus nulla, id condimentum augue finibus vitae. Vivamus efficitur leo sed orci lobortis luctus. Morbi fringilla non ex.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-20 md:w-32 aspect-square bg-indigo-400"></div>
        </div>
      </div>
      <div className="w-full flex justify-between text-sm gap-2 text-neutral-400 items-center">
        <div className="flex justify-center gap-2 items-center">
          <span className="bg-neutral-200 py-1 px-3 rounded-full">Programming</span>
          <span>•</span>
          <p>5 min read</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <HeartIcon className="w-5" />
          <BookmarkIcon className="w-5" />
          <Squares2X2Icon className="w-5" />
        </div>
      </div>
    </div>
  )
}
