import React from 'react'

import { Card } from "../components"
import { Box, FileSearch, HelpCircle, LayoutGrid, Newspaper, SearchCheck, Upload, User } from 'lucide-react';

const Dashboard = () => {

  const cards = [
    {
      name: "Student Profile",
      icon: <User size={70} strokeWidth={1}/>,
      link: '/dashboard/profile',
      text: "AAAA",
    
    },
    {
      name: "Search Project",
      icon: <FileSearch size={70} strokeWidth={1}/>,
      link: '/dashboard/search'
    },
    {
      name: "Upload Project",
      icon: <Upload size={70} strokeWidth={1}/>,
      link: '/dashboard/upload'
    },
    {
      name: "Capstone Project",
      icon: <Box size={70} strokeWidth={1}/>,
      link: '/dashboard/capstone'
    },
        {
      name: "News and Updates",
      icon: <Newspaper size={70} strokeWidth={1}/>,
      link: '/dashboard/news'
    },
    {
      name: "Help ?",
      icon: <HelpCircle size={70} strokeWidth={1}/>,
      link: '/dashboard/help'
    
    },
  ];
  return (
    <div>
      <div className="grid-box gap-6">
        {cards.map( item => 
          <Card key={item.name} item={item} />
        )}
      </div>
    </div>
  )
}

export default Dashboard