import Image from "next/image";
import { PiCheckCircleThin } from "react-icons/pi";
import { PiCaretRightThin } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import React from "react";

const landing = () => {
  const data = [
    {
      title: "Effortless Task Creation",
      text: "Seamlessly create new tasks with ease, whether you're working individually or collaborating with your team.",
      img: "/images/work1.jpg",
    },
    {
      title: "Organization with Streamlined List View",
      text: "Immerse yourself in a clean and intuitive list view that enhances visibility and simplifies your workflow.",
      img: "/images/work2.jpg",
    },
    {
      title: "Potential of Your Efficiency with AutoFlow",
      text: "Seamlessly automate repetitive tasks, streamline processes, and elevate your productivity to new heights.",
      img: "/images/work3.jpg",
    },
    {
      title: "Summaries for Enhanced Task Management",
      text: "Elevate your productivity with succinct task summaries that provide a quick overview of key details.",
      img: "/images/work4.jpg",
    },
  ];

  const features = [
    "Enhance clarity to concentrate on evolving business requirements",
    "Optimize outcomes during product launches",
    "Automate and expand processes for approvals.",
  ];

  const buttons = ["Marketing", "Operations", "IT", "Product", "Company-wide"];

  return (
    <main className="bg-white font-Switzer">
      <section className="bg-white [&>*]:container [&>*]:mx-auto">
        <div className="flex flex-col md:flex-row mt-15 md:mt-20 mx-5 md:mx-20 justify-between items-center gap-6">
          <h1 className="text-3xl md:text-4xl mt-5  md:ml-20 font-semibold  w-full md:w-[45%] text-left">
            Discover How Various Departments Use Taskmanly.
          </h1>
          <p className="text-xs md:text-sm text-slate-400 w-full md:w-[30%] leading-relaxed text-left md:text-left mr-0 md:mr-36">
            Discover how different departments utilize our platform to
            streamline workflows, improve collaboration, and increase
            productivity. Explore real-world examples demonstrating its
            transformative effects on task management.
          </p>
        </div>

        <div className="mt-7 flex flex-nowrap justify-start lg:justify-center overflow-x-scroll no-scrollbar gap-3 md:gap-6 lg:gap-16">
          {buttons.map((item, index) => (
            <Button className="first:border rounded-md border-black font-Switzer font-medium bg-[#F5F5F5] text-black px-6 md:px-11 py-5">
              {item}
            </Button>
          ))}
        </div>

        <div className="mt-8 mx-5 md:mx-40 flex flex-col md:flex-row gap-10 md:gap-28 justify-center items-center">
          <Image
            src="/images/first.jpg"
            width={600}
            height={550}
            alt="Picture of the bg"
            className="size-96 object-contain md:w-auto h-auto"
          />
          <div className=" flex flex-col justify-center items-center md:items-start text-left md:text-left">
            <h1 className="text-2xl font-bold">Achieve Campaign Objectives</h1>
            <p className="text-xs mt-3 w-full md:w-[90%] text-slate-400">
              Rally around defined objectives, maximize resource effectiveness,
              and confidently expand the workflow of any campaign.
            </p>
            <ul className="flex flex-col items-center justify-start gap-3 mt-2">
              {features.map((item, index) => (
                <li key={index} className="flex gap-2 align-start w-full">
                  <PiCheckCircleThin className="text-[#848383] size-4  min-w-fit" />
                  <p className="text-xs text-slate-400">{item}</p>
                </li>
              ))}
            </ul>

            <Button
              className="mt-3 text-white text-xs  bg-[#4C4DDC] px-4 py-2 w-full sm:w-fit"
              variant="outline" 
            >
              Explore Marketing
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-black pb-10 text-white size-full mt-5 [&>*]:container [&>*]:mx-auto">
        <div className="mt-15 p-5 md:p-14 mx-5 md:mx-20 font-Switzer">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Focus on Tasks that Generate Revenue.
          </h1>
          <p className="text-xs lg:text text-[#C2C2C2] text-center mx-auto w-full lg:w-3/4">
            Taskmanly plays a pivotal role in facilitating the coordination of
            complex tasks among different teams, ensuring a seamless
            collaboration that ultimately contributes to the achievement of
            tangible and impactful business results.
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-7 mx-16 px-3 md:px-12 lg:px-24">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-md border col-span-1 border-white w-full overflow-hidden space-y-3"
            >
              <div className="p-4 flex flex-col gap-3">
                <h1 className="text-lg md:text-xl font-bold">{item.title}</h1>
                <p className="text-xs md:text-sm text-[#C2C2C2]">{item.text}</p>
                <button className="flex items-center text-sm">
                  <p className="mr-2">Learn more</p>
                  <PiCaretRightThin />
                </button>
              </div>
              <Image
                src={item.img}
                width={850}
                height={600}
                alt="Picture of the bg"
                className="rounded-sm object-cover w-full "
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default landing;
