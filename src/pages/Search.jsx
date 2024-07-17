
import { Box, Filter, ListFilter, Menu, Plus, SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Card2 } from '../components/Card'
import { Back } from '../components'

const navs = [
    {
        name: "Acturial Science",
    },{
        name: "Biochemistry",
    },{
        name: "Biological Science",
    },{
        name: "Biology",
    },{
        name: "Chemistry",
    },{
        name: "Computer Science",
    },{
        name: "Environmental Science",
    },{
        name: "Food Science and Technology",
    },{
        name: "Mathematics",
    },{
        name: "Meteorology and Climate Science",
    },{
        name: "Opotometry",
    },{
        name: "Physics",
    },{
        name: "Statistics",
    },
]

const cards = [
    {
      "title": "Smart Home Automation System",
      "description": "Design and implementation of a smart home automation system using IoT and machine learning techniques.",
      "author": "John Doe"
    },
    {
      "title": "E-Healthcare System",
      "description": "Development of an e-healthcare system for remote patient monitoring and diagnosis using telemedicine and data analytics.",
      "author": "Jane Smith"
    },
    {
      "title": "Intelligent Traffic Management System",
      "description": "Design and development of an intelligent traffic management system using computer vision and machine learning algorithms.",
      "author": "Bob Johnson"
    },
    {
      "title": "Cybersecurity Threat Detection System",
      "description": "Development of a cybersecurity threat detection system using machine learning and natural language processing techniques.",
      "author": "Alice Brown"
    },
    {
      "title": "Environmental Monitoring System",
      "description": "Design and implementation of an environmental monitoring system using IoT and data analytics for air and water quality monitoring.",
      "author": "Mike Davis"
    },
    {
      "title": "Chatbot for Customer Service",
      "description": "Development of a chatbot for customer service using natural language processing and machine learning algorithms.",
      "author": "Emily Chen"
    },
    {
      "title": "Image Processing for Medical Diagnosis",
      "description": "Development of an image processing system for medical diagnosis using deep learning and computer vision techniques.",
      "author": "David Lee"
    },
    {
      "title": "Recommendation System for E-Commerce",
      "description": "Design and implementation of a recommendation system for e-commerce using collaborative filtering and machine learning algorithms.",
      "author": "Sarah Taylor"
    },
    {
      "title": "Natural Language Processing for Sentiment Analysis",
      "description": "Development of a natural language processing system for sentiment analysis using machine learning and deep learning techniques.",
      "author": "Kevin White"
    },
    {
      "title": "Robotics and Computer Vision for Object Recognition",
      "description": "Design and implementation of a robotics and computer vision system for object recognition using machine learning and deep learning algorithms.",
      "author": "Lisa Nguyen"
    }
  ]

const Search = () => {

    const [menu, setMenu] = useState(false);
    const [selected, setSelected] = useState([]);
    const [ filters, setFilters] = useState(navs);
    const [ projects, setProjects ] = useState(cards);
    const [ search, setSearch ] = useState('');

    const toggleSelect = (id) => {
        console.log(id, id in selected);
        if(id in selected) setSelected(selected.filter(selected_id => selected_id != id));
        else
        setSelected([...selected, id]);

        console.log(selected);
    }

    const addFilter = (Filter) => {
        
        let exists = false;

        for( let index = 0; index < filters.length; index++) {
            if( filters[index] == filter ) {
                exists = true;
                break;
            }
        }

        if(exists) return
        
        setSelected([...selected, filters.length]); //make the added filter active

        setFilters([...filters, {name: filter}]);
    }

  return (
        <div>
        <main className={`dashboard flex bg-gray-100 ${menu && "active"}`}>
            <div className={`left ${menu && "active"} relative max-[980px]:fixed max-[980px]:bg-black max-[980px]:bg-opacity-50 top-0 left-0 z-20`}>
                <div className="relative z-10 content h-screen shadow-lg bg-white overflow-y-scroll pb-6">
                    <div className="h-[70px] px-6 bg-blue-600 flex items-center gap-3">
                        <div className="logo h-[30px] w-[30px] bg-orange-500"></div>
                        <div className="name uppercase font-black text-white">Academic Project Manager Portal</div>
                    </div>
                    <div className="">
                        <div className="input p-3">
                            <label className="text-sm text-gray-500 flex items-center mb-1.5">
                                <ListFilter size={15}/>
                                <span>Add Filters</span>
                            </label>
                            <div className="search-box flex items-center justify-between w-full border rounded-xl overflow-hidden">
                                <input type="text" className='h-[45px] outline-none px-3' style={{width: 'calc(100% - 50px)'}} />
                                <button className='h-[45px] w-[45px] flex items-center justify-center bg-blue-500 text-white'>
                                    <Plus />
                                </button>
                            </div>
                        </div>
                        <div className=" text-gray-400 px-6 mb-2">Filters</div>
                        <div className="grid grid-cols-1  gap-1.5 px-3">
                            {filters.map((item, index) => 
                                <div onClick={() => toggleSelect(index)} className={`border rounded-3xl hover:bg-black hover:text-white ${ (index in selected) && "bg-black text-white" } item flex items-center py-1.5 gap-3 my-1.5 px-2 cursor-pointer`}>
                                    <div className="name text-xs">{item.name.substring(0, 35)}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div onClick={() => setMenu(false)} className="absolute z-0 top-0 left-0 h-full w-full"></div>
            </div>
            <div className="right ">
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
                            <div className="h-[40px] w-[40px] rounded-full relative overflow-hidden">
                                <img src="/images/background.jpg" className='h-full w-full object-cover' />
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="content p-10 pt-0 overflow-y-scroll" style={{height: 'calc(100vh - 70px)'}}>

                    <div className="pt-5"></div>

                    <Back />

                    <div className="pt-5"></div>

                    <div className="search bg-white w-full h-[60px] border flex rounded-2xl overflow-hidden">
                            <input type="text" className="px-3 border-none outline-none h-full" placeholder="Search by title here" style={{width: 'calc(100% - 60px)'}} />
                            <div className="flex items-center justify-center h-full w-[60px]">
                                <SearchIcon />
                            </div>
                    </div>

                    <div className="grid-box gap-6 mt-6">
                        {projects.map( item => 
                            <Card2 key={item.name} item={item} />
                        )}
                    </div>
                </div>  
            </div>
        </main>
    </div>
  )
}

export default Search






















