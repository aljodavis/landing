import { Button } from "@/components/ui/button";
import { PiCheckCircleThin } from "react-icons/pi";
import Image from "next/image";
import { PiCaretRightThin } from "react-icons/pi";
import React from "react";

const pricing = () => {
  const data = [
    {
      title: "Personal",
      text: "For individuals and small teams looking to manage their tasks.",
      head: "US $0",
      sub: "Free forever",
      line: "Manage tasks and personal to-dos:",
      list: [
        "Collaborate with up to 10 teammates",
        "Unlimited tasks",
        "Unlimited projects",
        "Unlimited messages",
        "Unlimited activity log",
        "Unlimited file storage (100MB per file)",
        "Basic search filters",
        "Status updates",
        "iOS and Android mobile apps",
        "Time tracking with integrations",
        "100+ free integrations with your favorite apps",
      ],
    },
    {
      title: "Starter",
      text: "For growing teams that need to track their projects' progress.",
      head: "US$10.99",
      sub: "per month",
      line: "Everything in Personal, plus:",
      list: [
        "Collaborate with up to 500 teammates",
        "Taskmanly Intelligence",
        "Workflow Builder",
        "Project dashboards",
        "Advanced search",
        "Global custom fields",
        "Forms",
        "250 Automations per month",
        "Start dates and times",
        "Custom project templates",
        "Private teams & projects",
        "Unlimited free guests",
      ],
    },
    {
      title: "Advanced",
      text: "For companies that need to manage a portfolio of work.",
      head: "US$24.99",
      sub: "per month",
      line: "Everything in Starter, plus:",
      list: [
        "Collaborate with up to 500 teammates",
        "Goals",
        "20 Portfolios",
        "Taskmanly Intelligence",
        "Workload",
        "25,000 Automations per month",
        "Forms branching & customization",
        "Approvals",
        "Lock custom fields",
        "Advanced reporting",
        "Time tracking",
        "Scaled security",
      ],
    },
  ];

  const taskData = [
    "Effortless Task Creation",
    "Organization with Streamlined List View",
    "Potential of Your Efficiency with AutoFlow",
  ];

  return (
    <main className="bg-white font-Switzer">
      <section className="bg-white [&>*]:container [&>*]:mx-auto p-6">
        <div className="flex flex-col mt-20 gap-6 text-center justify-center items-center">
          <h1 className="text-2xl md:text-4xl font-semibold w-full sm:w-3/4 lg:w-1/2">
            Transparent Pricing Plans for Your Success Journey
          </h1>
          <p className="text-[#878787] text-xs mx-auto w-full md:w-2/3">
            Explore our comprehensive pricing section designed to cater to your
            specific needs. Enjoy transparency, flexibility, and scalability as
            you embark on your success journey.
          </p>
          <div className="flex flex-row ">
            <Button
              className=" p-4 md:mt-3  text-white text-xs bg-[#4C4DDC] w-28 md:w-full text-wrap md:text-nowrap"
              variant="outline"
            >
              Individuals & Small Teams
            </Button>
            <Button
              className=" p-4 md:mt-3 text-black text-xs bg-[#FFFFFF] w-28 md:w-full text-wrap md:text-nowrap"
              variant="outline"
            >
              Businesses & Enterprises
            </Button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:w-fit xl:w-96 rounded-md border border-black h-full"
            >
              <div className="bg-black p-4  flex flex-col justify-between">
                <h1 className="text-2xl font-bold text-white">{item.title}</h1>
                <p className="mt-2 text-sm text-[#C2C2C2]">{item.text}</p>
              </div>
              <div className="bg-white p-4  flex flex-col justify-between">
                <div className="mb-2 ">
                  <h1 className="text-3xl font-medium">
                    {item.head}
                    <span className="text-xs font-normal"> {item.sub}</span>
                  </h1>
                </div>
                <button className="mt-1  text-white text-xs bg-[#4C4DDC] py-2  rounded">
                  Get Started
                </button>
                <p className="font-normal text-xs py-3">{item.line}</p>
                <ul className="mt-3 mx-5 space-y-2 text-xs list-none list-inside">
                  {item.list.map((listItem, listIndex) => (
                    <li key={listIndex} className="flex flexrow">
                      <PiCheckCircleThin className="text-[#848383] size-4  min-w-fit sm:hidden" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black h-screen w-full flex flex-col items-center justify-center min-h-fit text-white [&>*]:container [&>*]:mx-auto">
        <div className="min-h-fit flex flex-col gap-4 text-center justify-center items-center">
          <p className="mt-16 text-xs ">Why Choose Us</p>
          <h1 className="text-3xl font-semibold  sm:w-3/4 md:w-full">
            Focus on Tasks that Generate Revenue.
          </h1>
          <p className="text-[#878787] text-xs mx-auto w-80 md:w-2/3">
            Taskmanly plays a pivotal role in facilitating the coordination of
            complex tasks among different teams, ensuring a seamless
            collaboration that ultimately contributes to the achievement of
            tangible and impactful business results.
          </p>
        </div>
        <div className="flex items-center justify-start relative max-h-screen">
          <div className="flex md:transform md:-rotate-90 flex-col  w-full md:w-2/5 min-w-fit">
            {taskData.map((item, index) => (
              <div
                className="flex border border-1 items-center justify-center gap-2 p-3 rounded-sm flex-col w-full"
                key={index}
              >
                <p className="text-nowrap min-w-fit">{item}</p>
                <div className="hidden sm:block sm:flex-grow sm:border-t sm:border-[#606060] max-w-3xl"></div>
              </div>
            ))}
          </div>
          <div className="h-fit p-10">
            <div className="rounded-md border border-white size-full">
              <div className="p-3 md:p-5 flex flex-col gap-2">
                <h1 className="text-base md:text-xl font-normal">
                  Summaries for Enhanced Task Management
                </h1>
                <p className="text-xs md:text-sm text-[#C2C2C2]">
                  Elevate your productivity with succinct task summaries that
                  provide a quick overview of key details.
                </p>
                <div className="flex items-center text-sm">
                  <p className="mr-2">Learn more</p>
                  <PiCaretRightThin />
                </div>
              </div>
              <Image
                src="/images/work4.jpg"
                width={1800}
                height={1600}
                alt="Picture of the bg"
                className="rounded-sm object-contain size-full"
              />
            </div>
          </div>
        </div>
        {/* <div className="mt-4 md:mt-10 h-screen w-full">
          <div className="mt-1 size-full flex flex-col md:flex-row justify-start items-center ">
            <div className="flex w-full">
              {taskData.map((item, index) => (
                <div
                  className="flex border border-1 items-center justify-center gap-2 p-3 rounded-sm md:-rotate-90 flex-col"
                  key={index}
                >
                  <p className="text-nowrap">{item}</p>
                  <div className="hidden sm:block sm:flex-grow sm:border-t sm:border-[#606060] max-w-3xl"></div>
                </div>
              ))}
              <div className="rounded-md border border-white w-full min-w-fit">
                <div className="p-3 md:p-5">
                  <h1 className="text-base md:text-xl font-normal mb-2">
                    Summaries for Enhanced Task Management
                  </h1>
                  <p className="text-xs md:text-sm mb-4 text-[#C2C2C2]">
                    Elevate your productivity with succinct task summaries that
                    provide a quick overview of key details.
                  </p>
                  <div className="flex items-center text-sm mb-4">
                    <p className="mr-2">Learn more</p>
                    <PiCaretRightThin />
                  </div>
                </div>
                <Image
                  src="/images/work4.jpg"
                  width={800}
                  height={600}
                  alt="Picture of the bg"
                  className="rounded-sm object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
};

export default pricing;
