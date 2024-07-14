
import Image from "next/image";
import { PiCheckCircleThin } from "react-icons/pi";
import { PiCaretRightThin } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import React from 'react'

const landing = () => {
    return (
        <main className="bg-white font-Switzer">
            <section className='bg-white'>
                <div className='flex flex-col md:flex-row mt-20 mx-20 justify-between items-center gap-10'>
                    <h1 className='text-4xl ml-20 font-bold w-[45%]'>Discover How Various Departments Use Taskmanly.</h1>
                    <p className='text-sm text-slate-400 w-[30%] leading-relaxed justify-center text-left mr-36'>
                        Discover how different departments utilize our platform to streamline workflows, improve collaboration, and increase productivity. Explore real-world examples demonstrating its transformative effects on task management.
                    </p>
                </div>
                <div className='mt-14 mx-40 flex md:gap-16 sm:gap-3'>
                    <div className='border rounded-md border-black font-Switzer font-medium bg-[#F5F5F5] text-black px-11 py-2'>
                        Marketing
                    </div>
                    <div className='border rounded-md bg-[#F5F5F5] font-Switzer font-medium text-black px-11 py-2'>
                        Operations
                    </div>
                    <div className='border rounded-md bg-[#F5F5F5] font-Switzer font-medium text-black px-20 py-2'>
                        IT
                    </div>
                    <div className='border rounded-md bg-[#F5F5F5] font-Switzer font-medium text-black px-14 py-2'>
                        Product
                    </div>
                    <div className='border rounded-md bg-[#F5F5F5] font-Switzer font-medium text-black px-11 py-2'>
                        Company-wide
                    </div>
                </div>

                <div className="mt-14 mb-14 mx-40 flex gap-28 justify-center items-center">
                    <Image
                        src="/images/first.jpg"
                        width={550}
                        height={550}
                        alt="Picture of the bg"
                        className=""
                    />
                    <div className="justify-center items-center text-left">
                        <h1 className="text-2xl font-bold">Achieve Campaign Objectives</h1>
                        <p className="text-xs mt-3 w-[90%] text-slate-400">Rally around defined objectives, maximize resource effectiveness, and confidently expand the workflow of any campaign.</p>
                        <div className="flex gap-2">
                            <PiCheckCircleThin className="mt-5 text-[#848383]" />
                            <p className="mt-5 text-xs text-slate-400">Enhance clarity to concentrate
                                on evolving business requirements.</p>
                        </div>
                        <div className="flex gap-2">
                            <PiCheckCircleThin className="mt-3 text-[#848383]" />
                            <p className="mt-3 text-xs text-slate-400">Optimize outcomes during product launches.</p>
                        </div>
                        <div className="flex gap-2">
                            <PiCheckCircleThin className="mt-3 text-[#848383]" />
                            <p className="mt-3 text-xs text-slate-400">Automate and expand processes for approvals.</p>
                        </div>

                        <Button className="mt-3 text-white text-xs bg-[#4C4DDC] " variant="outline">Explore Marketing</Button>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white w-full h-full mt-5">
                <div className="mt-20 p-14 mx-20 font-Switzer">
                    <h1 className=" text-4xl font-bold text-center mb-4">Focus on Tasks that Generate Revenue.</h1>
                    <p className="text-base text-[#C2C2C2] text-center mx-auto w-3/4">
                        Taskmanly plays a pivotal role in facilitating the coordination of complex tasks among different teams, ensuring a seamless collaboration that ultimately contributes to the achievement of tangible and impactful business results.
                    </p>
                </div>
                <div className="flex justify-center mx-auto space-x-6">
                    <div className="rounded-md border border-white p-2 w-[40%] overflow-hidden">
                        <h1 className="text-xl font-bold mb-2">Effortless Task Creation</h1>
                        <p className="text-sm mb-4 text-[#C2C2C2]">Seamlessly create new tasks with ease, whether you're working individually or collaborating with your team.</p>
                        <div className="flex items-center text-sm mb-4">
                            <p className="mr-2">Learn more</p>
                            <PiCaretRightThin />
                        </div>
                        <Image
                            src="/images/work1.jpg"
                            width={800}
                            height={550}
                            alt="Picture of the bg"
                            className="rounded-sm object-fill"
                        />
                    </div>
                    <div className="rounded-md border border-white p-2 w-[40%]">
                        <h1 className="text-xl font-bold mb-2">Organization with Streamlined List View</h1>
                        <p className="text-sm mb-4 text-[#C2C2C2]">Immerse yourself in a clean and intuitive list view that enhances visibility and simplifies your workflow.</p>
                        <div className="flex items-center text-sm mb-4">
                            <p className="mr-2">Learn more</p>
                            <PiCaretRightThin />
                        </div>
                        <Image
                            src="/images/work2.jpg"
                            width={800}
                            height={600}
                            alt="Picture of the bg"
                            className="rounded-sm"
                        />
                    </div>
                </div>

                <div className="mt-6 py-1 flex justify-center mx-auto space-x-6">
                    <div className="rounded-md border border-white p-2 w-[40%]">
                        <h1 className="text-xl font-bold mb-2">Effortless Task Creation</h1>
                        <p className="text-sm mb-4 text-[#C2C2C2]">Seamlessly create new tasks with ease, whether you're working individually or collaborating with your team.</p>
                        <div className="flex items-center text-sm mb-4">
                            <p className="mr-2">Learn more</p>
                            <PiCaretRightThin />
                        </div>
                        <Image
                            src="/images/work1.jpg"
                            width={800}
                            height={550}
                            alt="Picture of the bg"
                            className="rounded-sm object-fill"
                        />
                    </div>
                    <div className="rounded-md border border-white p-2 w-[40%]">
                        <h1 className="text-xl font-bold mb-2">Organization with Streamlined List View</h1>
                        <p className="text-sm mb-4 text-[#C2C2C2]">Immerse yourself in a clean and intuitive list view that enhances visibility and simplifies your workflow.</p>
                        <div className="flex items-center text-sm mb-4">
                            <p className="mr-2">Learn more</p>
                            <PiCaretRightThin />
                        </div>
                        <Image
                            src="/images/work2.jpg"
                            width={800}
                            height={600}
                            alt="Picture of the bg"
                            className="rounded-sm"
                        />
                    </div>
                </div>


                


            </section>
        </main>
    )
}

export default landing
