
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Menu, Box, FileSearch, HelpCircle, Newspaper, SearchCheck, Upload, User, Grid2X2, GridIcon, Grid, Grid2x2, LayoutGrid, User2Icon } from 'lucide-react';

const navs = [
  {
    name: "Dashboard",
    icon: <Grid2X2 size={20} strokeWidth={2}/>,
    link: '/dashboard',
  },
  {
      name: "Student Profile",
      icon: <User size={20} strokeWidth={2}/>,
      link: '/dashboard/profile',
    },
  {
    name: "Search Project",
    icon: <FileSearch size={20} strokeWidth={2}/>,
    link: '/dashboard/search',
  },
  {
    name: "Upload Project",
    icon: <Upload size={20} strokeWidth={2}/>,
    link: '/dashboard/upload',
  },
  {
    name: "Capstone Project",
    icon: <Box size={20} strokeWidth={2}/>,
    link: '/dashboard/capstone',
  },
  //     {
  //   name: "News and Updates",
  //   icon: <Newspaper size={20} strokeWidth={2}/>,
  //   link: '/dashboard/news',
  // },
  {
    name: "Help ?",
    icon: <HelpCircle size={20} strokeWidth={2}/>,
    link: '/dashboard/help',
  },
  {
    name: "Log out",
    icon: <User2Icon size={20} strokeWidth={2}/>,
    link: '/'
  }
];

const Dashboard = () => {

    const [menu, setMenu] = useState(false);

  return (
    <div>
        <main className={`dashboard flex bg-gray-100 ${menu && "active"} relative z-0`}>
            <div className={`left ${menu && "active"} relative max-[980px]:fixed max-[980px]:bg-black max-[980px]:bg-opacity-50 top-0 left-0 z-20`}>
                <div className=" content h-screen shadow-lg bg-white relative z-10">
                    <div className="h-[70px] px-6 bg-blue-600 flex items-center gap-3">
                        <div className="logo h-[30px] w-[30px] bg-orange-500"></div>
                        <div className="name uppercase font-black text-white">Academic Project Manager</div>
                    </div>
                    <div className="">
                        <div className="my-4 text-gray-400 px-6 mb-2">Navigation</div>
                        {navs.map(item => 
                            <Link to={item.link} className="item flex items-center py-3 gap-3 hover:bg-blue-100 my-1.5 px-6 cursor-pointer">
                                <div className="icon">{item.icon}</div>
                                <div className="name text-lg">{item.name}</div>
                            </Link>
                        )}
                    </div>
                </div>

                <div onClick={() => setMenu(false)} className="absolute top-0 left-0 h-full w-full z-0"></div>
            </div>
            <div className="right z-0 ">
                <nav className='h-[70px] relative overflow-hidden'>
                    <div className="absolute h-[390px] w-full z-0">
                        <img src="/images/background.jpg" className="h-full w-full object-cover" />
                    </div>
                    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-60 z-10"></div>

                    <div className="relative h-full scale-x-110 text-white z-20 px-20 max-[980px]:pl-12 max-[980px]:pr-8 flex items-center justify-between">
                        <div onClick={() => setMenu(!menu)} className="icon items-center justify-center">
                            <Menu />
                        </div>

                        <div className="bg-slate-600 h-full px-3 flex items-center justify-center">
                            <div className="h-[40px] w-[40px] rounded-full relative overflow-hidden cursor-pointer">
                                <img src="/images/background.jpg" className='h-full w-full object-cover ' />
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="content p-10 max-[500px]:p-5 overflow-y-scroll relative z-0 mt-20" style={{height: 'calc(100vh - 70px)'}}>
                    <Outlet />
                </div>  
            </div>
        </main>
    </div>
  )
}

export default Dashboard