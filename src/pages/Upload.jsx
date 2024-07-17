import { UploadCloud } from 'lucide-react'
import React from 'react'

const Upload = () => {
  return (
    <div>
      
      <div className="upload bg-white rounded-xl text-center flex flex-col items-center justify-center p-12 border border-black border-opacity-50">
        <div className="w-[200px] h-[150px] rounded-full flex items-center justify-center">
          <UploadCloud size={150} strokeWidth={0.75}/>
        </div>

        <h1 className='font-semibold text-3xl mt-4'>Drag and Drop</h1>
        <p className='text-gray-600 max-w-[400px] mx-auto mt-3 text-sm'>You can also click the button bellow to upload your project, uploaded file should be a zip of all project documents</p>

        <button className="bg-blue-500 hover:bg-blue-600 active:hover-blue-700 text-white text-center px-6 py-2 rounded mt-4 text-xs">
          Click To Upload
        </button>
      </div>

      <div className="bg-white p-6 pt-0 rounded-xl mt-9">
        <div className="top py-6 font-bold text-xl text-gray-500 border-b border-gray-100">
          Project Details
        </div>

        <div className="col-span-1 my-1 mt-6">
          <label htmlFor="" className='my-1.5 block text-gray-700 font-medium'>Title</label>
          <input type="text" className='border border-gray-400 rounded-lg p-3 w-full outline-none' />
        </div>

        <div className="col-span-1 my-1 mt-3">
          <label htmlFor="" className='my-1.5 block text-gray-700 font-medium'>Description</label>
          <textarea type="text" className='border border-gray-400 rounded-lg p-3 w-full outline-none h-[200px]' />
        </div>

        <div className="flex items-center justify-end mt-6">
          <button className="bg-blue-500 text-white px-6 py-3 text-center rounded">Upload Project</button>
        </div>
      </div>


    </div>
  )
}

export default Upload