import { CalendarDaysIcon, BookmarkIcon, HeartIcon, Squares2X2Icon } from "@heroicons/react/24/outline"

export default function List({ posts, categories }) {
  return (
    <div className="w-full flex py-20 justify-center items-center">
      <div className="w-full p-4 xl:p-0 flex flex-col md:flex-row max-w-7xl">
        {/*List*/}
        <div className="w-full md:w-2/3 border-r">
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
          <div className="w-full py-8 flex-col px-4 flex gap-4 justify-center items-center">
            {
              posts.slice(0, 5).map((item, index) => <ListCard post={item} key={index} /> )
            }

          </div>
        </div>

        {/*Cetegories*/}
        <div className="w-full flex justify-center md:items-start items-center md:w-1/3">
          <Categories categories={categories} />
        </div>
      </div>
    </div>
  )
}

const ListCard = ({ post }) => {
  return (
    <div className="w-full flex justify-center border-b py-8 gap-2 flex-col items-center">
      <div className="flex w-full text-neutral-400 text-sm gap-2 justify-start items-center">
        <div className="w-8 rounded-full aspect-square bg-red-50"></div>
        <span>•</span>
        <p className="text-neutral-600 whitespace-nowrap overflow-hidden">{post.author} <span className="text-neutral-400">in</span> programming</p>
        <span className="hidden sm:inline">•</span>
        <p className="whitespace-nowrap hidden sm:inline overflow-hidden">{post.publishedAt} <CalendarDaysIcon className="w-5 inline" /></p>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex-1 flex flex-col justify-start items-start md:gap-2">
          <h1 className="cutoff-text cutoff-text-1 text-base md:text-lg font-bold text-neutral-600">{post.title}</h1>
          <p className="cutoff-text cutoff-text-2 text-xs md:text-sm text-neutral-400">
            {post.description}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-20 md:w-32 aspect-square bg-cover" style={{backgroundImage: `url(${post.urlToImage})`}}></div>
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
const Categories = ({categories}) => {
  return (
    <div className="w-full flex justify-center md:items-start md:px-8 flex-col items-center gap-4">
      <h1 className="text-xl font-bold text-neutral-600">Categories</h1>
      <div className="flex justify-center items-center md:justify-start flex-wrap gap-x-2 gap-y-4">
        {
          categories.map((item, index) => {
            return <a key={index} href="http://" className="bg-neutral-200 hover:bg-neutral-100 transition-all duration-500 text-neutral-600 py-2 px-4 rounded-full">{item.category}</a>
          })
        }

      </div>
    </div>
  )
}