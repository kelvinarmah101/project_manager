import { User } from 'lucide-react'
import React from 'react'

const Profile = () => {

  const values = [
    {
      name: 'Surname',
      value: 'ADENIYI'
    },
    {
      name: 'Other Name(s)',
      value: 'David Shalom'
    },
    {
      name: 'Birth Date',
      value: 'Tuesday, May 7, 2002'
    },
    {
      name: 'Gender',
      value: 'Male'
    },
    {
      name: 'School Email Address',
      value: 'dsadeniyi@st.knust.edu.h'
    },
    {
      name: 'KNUST Mobile Number',
      value: '0508527319'
    },
    {
      name: 'Other Email Address',
      value: 'adedavid.tech@gmail.com'
    },
    {
      name: 'Primary Phone Number',
      value: '0508809987'
    }
  ];


  return (
    <div>

      <div className="personal text-center bg-white rounded-xl shadow border overflow-hidden mb-3">
        <div className="top bg-blue-200 p-9 text-4xl max-[500px]:text-2xl font-semibold capitalize">
          student Profile
        </div>

        <div className="profile p-9">
          <div className="bg-orange-500 border-4 text-5xl text-white flex items-center justify-center image h-[150px] w-[150px] mx-auto rounded-full">
            SH
          </div>

          <div className="names">
            <div className="font-medium text-3xl max-[500px]:text-xl my-3 mb-1">Adeniyi David Shalom</div>
            <div className="font-medium text-xl  max-[500px]:text-base mb-1.5">Bsc Computer Science</div>
            <div className="font-semibold text-gray-600 text-sm">Index Number: 4185520</div>
            <div className="font-semibold text-gray-600 text-sm">Student ID: 20272394</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-3">

        <div className="top">

          <div className="border-b border-green-200 p-3 text-center flex items-center gap-1.5 w-full">
            <User />
            <span>Personal Details</span>
          </div>

        </div>

        <form action="" className='grid grid-cols-2 max-[700px]:grid-cols-1 gap-6'>

          {values.map( item => 
            <div className="col-span-1 my-1">
              <label htmlFor="" className='my-1.5 block text-gray-700'>{item.name}</label>
              <input type="text" className='border border-gray-400 rounded-lg p-3 w-full bg-gray-100' value={item.value} disabled />
            </div>
          )}

          <div className="col-span-1 my-1"></div>

        </form>


      </div>
    </div>
  )
}

export default Profile