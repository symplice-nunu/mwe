import {FaJsfiddle} from 'react-icons/fa'
import {FaBan} from 'react-icons/fa'
import {FaBrush} from 'react-icons/fa'
import mweLogo from '../../Assets/images/og.png'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar(){
    // const[active, setActive] = useState(true);
    const location = useLocation();

    // const getActive = () => {
    //     // setActive(!active);
    // }
    const active = location.pathname
    const links = [
        {
            path: '/dashboard',
            link: 'Dashboard',
            icon: <FaJsfiddle />
        },
        {
            path: '/news',
            link: 'News',
            icon: <FaBan />
        },
        {
            path: '/add_news',
            link: 'Add News',
            icon: <FaBrush />
        },
    ]
    return(
         /* Sidebar Options. Done by Symplice 21.03.2023  */
        <div className="mx-4 w-[140px] pt-8  hidden md:flex flex-col justify-between text-sky-800 ">
               <div className='grid grid-col gap-y-4'>
               <div className="flex items-center text-red-500 text-6xl px-4">
                    <div>
                    <img className='h-20 w-20' src={mweLogo} alt="logo"/>
                    </div>
                </div>
                {
                    links.map((item, index) => {
                        return (
                        <Link to={item.path}>
                            <div className={`mt-1 flex items-center  ${active === item.path ? "bg-sky-300" : null} px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer`}>
                                <div>
                                     {item.icon}
                                </div>
                                <div>&nbsp;{item.link}</div>
                            </div>
                         </Link>
                         )
                    })
                }
               </div>

            </div>
    )
}
