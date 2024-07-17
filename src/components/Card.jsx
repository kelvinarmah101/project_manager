
import { Fingerprint } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  return (
    <Link to={item.link ?? ''} className='h-[300px] relative bg-white rounded-2xl p-6 pr-4 shadow-sm border bg-opacity-30 top-0 hover:-top-3 hover:shadow-xl hover:bg-blue-200 hover:border-blue-500'>
      <div className="icon">
        { item.icon ?? <Fingerprint size={60} strokeWidth={1}/>}
      </div>

      <div className="title font-bold text-xl my-3">{item.name ?? "Status Checker"}</div>

      <p className='text-sm'>{item.text ?? " Put Text Here!"}</p>
    </Link>
  )
}

export const Card2 = ({ item }) => {
  return (
    <div className='relative bg-white rounded-2xl p-4 shadow-sm border bg-opacity-30 top-0 hover:-top-3 hover:shadow-xl hover:bg-blue-200 hover:border-blue-500'>
      <div className="image h-[230px] overflow-hidden rounded-xl">
        <img src="/images/background.jpg" alt="" className="h-full w-full object-cover" />
      </div>

      <div className="title font-bold text-lg my-3">{item.title ?? "Status Checker"}</div>

      <p className='text-sm'>{item.description}</p>
    </div>
  )
}

export default Card