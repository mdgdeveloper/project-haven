import React from 'react'

type Props = {
  label: string,
  link: string,
}

const MainButton = ({ label, link }: Props) => {
  return (
    <div>
      <a href={link} className="bg-teal-700 hover:bg-teal-600 text-white py-2 px-4 rounded inline-block">{label}</a>
    </div>
  )
}

export default MainButton