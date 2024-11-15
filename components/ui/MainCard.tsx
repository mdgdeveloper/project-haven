import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  image: string,
  title: string,
  description: string,
  link: string,
}

const MainCard = ({ image, title, description, link }: Props) => {
  return (
    <Link href={link}>
      <div className="h-[350px] w-[450px]  rounded-md shadow-md flex flex-col justify-between hover:ring-2 hover:ring-teal-600 transform ease-in transition-all duration-200">
        <div className="h-3/4 relative">
          <div className="absolute h-full w-[450px] opacity-40"><Image src={`/images/${image}`} fill alt="Image" /></div>
          <div className="absolute bottom-0 text-gray-700 px-5 py-3 text-3xl font-semibold w-full">
            <div className="w-full text-center bg-white bg-opacity-40 ">{title}
            </div>
          </div>
        </div>
        <div className="bg-gray-200 text-gray-800 h-1/4 p-5 rounded-b-md">{description}</div>
      </div>
    </Link>
  )
}

export default MainCard