import Image from "next/image";
import { PiCheckCircleThin } from "react-icons/pi";
import { PiCaretRightThin } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import React from 'react'

const landing = () => {
    const data = [
        {
            title: "Effortless Task Creation",
            text: "Seamlessly create new tasks with ease, whether you're working individually or collaborating with your team.",
            img: "/images/work1.jpg"
        },
        {
            title: "Organization with Streamlined List View",
            text: "Immerse yourself in a clean and intuitive list view that enhances visibility and simplifies your workflow.",
            img: "/images/work2.jpg"
        },
        {
            title: "Potential of Your Efficiency with AutoFlow",
            text: "Seamlessly automate repetitive tasks, streamline processes, and elevate your productivity to new heights.",
            img: "/images/work3.jpg"
        },
        {
            title: "Summaries for Enhanced Task Management",
            text: "Elevate your productivity with succinct task summaries that provide a quick overview of key details.",
            img: "/images/work4.jpg"
        }
    ];

    return (
        <main className="bg-white font-Switzer w-full h-full">
            <section className="bg-white w-full h-full">
                <div className="flex flex-col md:flex-row mt-20 mx-5 md:mx-20 justify-between items-center gap-10">
                    <h1 className="text-2xl md:text-4xl mt-5 ml-0 md:ml-20 font-bold w-full md:w-[45%] text-center md:text-left">
                        Discover How Various Departments Use Taskmanly.
                    </h1>
                    <p className="text-sm text-slate-400 w-full md:w-[30%] leading-relaxed text-center md:text-left mr-0 md:mr-36">
                        Discover how different departments utilize our platform to streamline workflows, improve collaboration, and increase productivity. Explore real-world examples demonstrating its transformative effects on task management.
                    </p>
                </div>
                <div className="mt-14 mx-5 md:mx-40 flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-16">
                    <Button className="border rounded-md border-black font-Switzer font-medium bg-[#F5F5F5] text-black px-6 md:px-11 py-2">
                        Marketing
                    </Button>
                    <Button className="border rounded-md bg-[#F5F5F5] font-Switzer font-medium text-black px-6 md:px-11 py-2">
                        Operations
                    </Button>
                    <Button className="border rounded-md bg-[#F5F5F5] font-Switzer font-medium text-black px-10 md:px-20 py-2">
                        IT
                    </Button>
                    <Button className="border rounded-md bg-[#F5F5F5] font-Switzer font-medium text-black px-10 md:px-14 py-2">
                        Product
                    </Button>
                    <Button className="border rounded-md bg-[#F5F5F5] font-Switzer font-medium text-black px-6 md:px-11 py-2">
                        Company-wide
                    </Button>
                </div>
                <div className="mt-14 mb-14 mx-5 md:mx-40 flex flex-col md:flex-row gap-10 md:gap-28 justify-center items-center">
                    <Image
                        src="/images/first.jpg"
                        width={550}
                        height={550}
                        alt="Picture of the bg"
                        className="w-full md:w-auto"
                    />
                    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                        <h1 className="text-2xl font-bold">Achieve Campaign Objectives</h1>
                        <p className="text-xs mt-3 w-full md:w-[90%] text-slate-400">
                            Rally around defined objectives, maximize resource effectiveness, and confidently expand the workflow of any campaign.
                        </p>
                        <div className="flex gap-2 mt-5 md:mt-3 items-center">
                            <PiCheckCircleThin className="text-[#848383]" />
                            <p className="text-xs text-slate-400">Enhance clarity to concentrate on evolving business requirements.</p>
                        </div>
                        <div className="flex gap-2 mt-3 items-center">
                            <PiCheckCircleThin className="text-[#848383]" />
                            <p className="text-xs text-slate-400">Optimize outcomes during product launches.</p>
                        </div>
                        <div className="flex gap-2 mt-3 items-center">
                            <PiCheckCircleThin className="text-[#848383]" />
                            <p className="text-xs text-slate-400">Automate and expand processes for approvals.</p>
                        </div>
                        <Button className="mt-3 text-white text-xs bg-[#4C4DDC] px-4 py-2" variant="outline">
                            Explore Marketing
                        </Button>
                    </div>
                </div>
            </section>

            <section className="bg-black pb-10 text-white w-full h-full mt-5">
                <div className="mt-20 p-5 md:p-14 mx-5 md:mx-20 font-Switzer">
                    <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
                        Focus on Tasks that Generate Revenue.
                    </h1>
                    <p className="text-sm md:text-base text-[#C2C2C2] text-center mx-auto w-full md:w-3/4">
                        Taskmanly plays a pivotal role in facilitating the coordination of complex tasks among different teams, ensuring a seamless collaboration that ultimately contributes to the achievement of tangible and impactful business results.
                    </p>
                </div>

                <div className="grid grid-cols-1  md:grid-cols-2 gap-7 mx-16 px-3 md:px-12 lg:px-24">
                    {data.map((item, index) => (
                        <div key={index} className="rounded-md border border-white p-4 w-full md:w-[80%] lg:w-[90%] overflow-hidden space-y-3">
                            <h1 className="text-xl font-bold">{item.title}</h1>
                            <p className="text-sm text-[#C2C2C2]">{item.text}</p>
                            <div className="flex items-center text-sm">
                                <p className="mr-2">Learn more</p>
                                <PiCaretRightThin />
                            </div>
                            <Image
                                src={item.img}
                                width={850}
                                height={600}
                                alt="Picture of the bg"
                                className="rounded-sm object-cover w-full"
                            />
                        </div>
                    ))}
                </div>



            </section>
        </main>
    )
}

export default landing;
