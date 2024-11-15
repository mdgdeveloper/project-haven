// import Image from "next/image";

import MainButton from "@/components/ui/MainButton";
import MainCard from "@/components/ui/MainCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full mt-10">
      {/* Main Title */}
      <div className="bg-teal-50 h-[550px] flex items-center justify-center flex-col">
        <div className="mb-10 mt-10">
          <Image src="/images/psvlogo.webp" alt="logo" width={130} height={100} />
        </div>
        <div className=" w-7/12 text-center text-4xl">Learn in this Emotional Support Platform <br /><span className="bg-teal-900 text-white px-3 shadow shadow-gray-400">how to manage successfully your emotions</span> using a powerful toolset</div>
        <div className="mt-12">
          <MainButton label="Contact us!" link="/support" />
        </div>
      </div>
      {/* Main Links */}
      <div className="mt-12 px-10 flex items-center justify-center mb-10">
        <div className="mb-10 flex gap-10 max-w-[1000px] flex-wrap">
          <MainCard image="support3.png" title="Emotional Support" description="Emotional support information for your daily life with access to multiple online tools" link="/support" />
          <MainCard image="support5.jpeg" title="Post Emergency" description="Emotional support information for your daily life with access to multiple online tools" link="/emergency-preparedness" />
          <MainCard image="support7.jpeg" title="Peer Support Network" description="Emotional support information for your daily life with access to multiple online tools" link="/peer-support-network" />
          <MainCard image="support6.jpeg" title="PSV Resources" description="Emotional support information for your daily life with access to multiple online tools" link="/resources" />
        </div>

      </div>
    </div>
  );
}
