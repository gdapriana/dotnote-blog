import { CalendarDaysIcon } from "@heroicons/react/24/outline"

export default function List() {
  return (
    <div className="w-full flex py-20 justify-center items-center">
      <div className="w-full p-4 xl:p-0 flex flex-col max-w-7xl">
        {/*List*/}
        <div className="w-full">
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
          <div className="w-full py-8 flex-col gap-4 justify-center items-center">
            <ListCard />
            <ListCard />
          </div>
        </div>

        {/*Cetegories*/}
        <div className="w-full"></div>
      </div>
    </div>
  )
}

const ListCard = () => {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-3">
      <div className="col-span-2 flex justify-start items-center gap-2">
        <div className="w-8 rounded-full aspect-square bg-neutral-800"></div>
        <p className="text-neutral-400">
          <span className="text-neutral-600">gedeapriana</span> in{" "}
          <span className="text-neutral-600">programming</span>
        </p>
        <p className="flex justify-center items-center text-neutral-600">
          <CalendarDaysIcon className="w-5" /> 5 Days Ago
        </p>
      </div>
      <div>2</div>
      <div>3</div>
      <div className="col-span-2">4</div>
    </div>
  )
}
