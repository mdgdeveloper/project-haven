import Image from "next/image"


const Support = () => {
  return (
    <div className="mt-16 bg-teal-100 h-52 relative">
      <div className="absolute w-full h-52 opacity-10"><Image src="/images/support4.jpeg" fill alt="Support" className="object-cover object-center" /></div>
      <div className="flex items-center justify-center h-full text-4xl font-semibold">Emotional Support</div>
    </div>
  )
}

export default Support