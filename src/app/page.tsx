"use client";

import Avatar from './avatar'

export default function Home() {
  return (
    <>
      <div className="bg-[#0B001A] lg:max-w-[100vw] lg:w-full lg:h-screen w-screen h-screen min-[360px]:max-w-[100vw] max-[430px]:w-full min-[540px]:max-w-[100vw] sm:w-full ">
        {/* BACKGROUND BULET */}
            <div className="rounded-full blur-[145px] backdrop-blur-sm h-60 w-60 relative right-[102px] bg-[#ED3A85] z-0 "></div>
            <div className="lg:rounded-full lg:blur-[80px] lg:backdrop-blur-sm lg:h-52 lg:w-52 lg:absolute lg:top-[-20px] lg:ml-[720px] lg:bg-[#81039B] z-0 "></div>
            {/* <div className="rounded-full h-4 w-4 relative left-4 bg-[#9B1F53] z-0 "></div> */}
            <div className="lg:rounded-full lg:h-4 lg:w-4 lg:relative lg:top-[-100px] lg:left-[1280px] lg:bg-[#9B1F53] z-0 "></div>
            <div className="lg:rounded-full lg:h-4 lg:w-4 lg:relative lg:top-[90px] lg:left-[1000px] lg:bg-[#9B1F53] z-0 "></div>

            {/* BAGIAN JUDUL DAN TEKS */}
            <div className="flex flex-col justify-center items-center relative top-[-50px] text-white min-[360px]:px-5 max-[430px]:px-8">
                <h1 className="text-[42.2px] lg:text-[72.1px] font-bold" data-aos="zoom-in">Welcome To </h1>
                <h1 className="text-[42.2px] lg:text-[72.1px] font-extrabold mt-[-20px]" data-aos="zoom-in">Ivonium</h1>
                <p className="text-center text-[16px] px-2" data-aos="zoom-in" data-aos-delay="700">Menciptakan generasi muda yang sehat, kuat dengan keterampilan <br /> yang berkualitas.</p>
                <button className="w-32 outline-[#D9D9D9] outline outline-offset-2 outline-2 rounded-[12px] text-[#D9D9D9] relative top-12 hover:text-[#9B1F53] hover:outline-[#9B1F53] transition-all duration-75 ease-in ">Learn More</button>
            </div>

            {/* GARIS DIBAWAH YANG GERAK */}
            <div className="flex items-center justify-center bg-[#3F0B2F] rounded-lg relative top-[40px]">
                <div className="absolute min-[360px]:w-[335px] min-[375px]:w-[338px] min-[412px]:w-[375px] w-[415px] lg:w-[1140px] h-[5px] bg-[#9B1F53] rounded-lg overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-[#ED3A85] h-full w-1/3 slide-infinite"></div>
                </div>
            </div>
            <div className='mt-52 ml-5'>
              <Avatar />
            </div>
        </div>
        <div className='bg-[#0B001A] w-full h-screen'>
        </div>
    </>
  )
}
