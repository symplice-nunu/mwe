import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { FaRegComment } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TrendingComments() {
  let [categories] = useState({
    Trending: [
      {
        id: 1,
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/03-750x375.jpg',
        title: 'Instagram Is Testing Photo Albums, Because Nothing Is Sacred Anymore',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/01/19-750x375.jpg',
        title: "Google, Facebook Extend Work From Home Policies Until 2021",
        date: '3h ago',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/37-750x375.jpg',
        title: "These Foods to Absolutely Avoid If You Want Clear, Glowing Skin",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/07-750x375.jpg',
        title: "Will It Be Safe to Travel This Summer? Here’s Your Options",
        date: '6h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Comments: [
      {
        id: 1,
        comment: 'comment',
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/01-750x375.jpg',
        title: 'Economists See Few Monetary Policy Changes With Powell Leading Fed',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        comment: 'comment',
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/13-750x375.jpg',
        title: 'TJekardah Nightlife Offers Many Hotspots for People with Alternative Lifestyles',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 2,
        comment: 'comment',
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/37-750x375.jpg',
        title: 'These Foods to Absolutely Avoid If You Want Clear, Glowing Skin',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 2,
        comment: 'comment',
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/03-750x375.jpg',
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Latest: [
      {
        id: 2,
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/32-750x375.jpg',
        title: 'This Easy Cardio Swap Will Help You Train for A Half Marathon',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 1,
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/01-750x375.jpg',
        title: 'Economists See Few Monetary Policy Changes With Powell Leading Fed',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/13-750x375.jpg',
        title: 'Jekardah Nightlife Offers Many Hotspots for People with Alternative Lifestyles',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 2,
        photo: 'https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/03-750x375.jpg',
        title: 'Instagram Is Testing Photo Albums, Because Nothing Is Sacred Anymore',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  })

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl  p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  '  text-[13px] font-[Heebo] px-[22px] py-[5px] leading-5 text-[#686868]',
                  ' ',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12]'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md"
                  >
                   <div className='grid grid-cols-2 mb-[23px]'>
                   <div><img className='w-[150px] object-cover h-[100px]' src={post.photo} alt='news' /></div>
                   <div>
                   <div>
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>
                    </div>

                    <div>
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li className={`${post.comment === "comment" ? "hidden" : null}`}>{post.date}</li>
                      <li className={`${post.comment === "comment" ? "hidden" : null}`}>&middot;</li>
                      <li><div className='flex space-x-1'>
                        <div>{post.commentCount}</div>
                        <div className='mt-[2px]'> <FaRegComment /></div>
                        </div></li>
                      <li className={`${post.comment === "comment" ? "hidden" : null}`}>&middot;</li>
                      <li className={`${post.comment === "comment" ? "hidden" : null}`}>{post.shareCount} shares</li>
                    </ul>
                    </div>
                   </div>
                   </div>
                    <Link
                      to="/"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        ' focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
