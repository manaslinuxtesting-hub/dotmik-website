"use client";
import 'aos/dist/aos.css';

import Images from "@/app/constants/images";
import Image from "next/image";
import Team from "../team/page";


const Aboutus = () => {
  return (
    <section className="relative h-banner contact-banner py-0">

      <div className="relative w-full lg:h-[1150px] h-[600px] about-banner">
        <Image
          src={Images.aboutbanner} alt="support" fill priority quality={100} className="object-cover object-center rounded-none " />
      </div>
      <div className=" inset-0 flex flex-col items-center justify-center text-center lg:mt-[-400px] mt-[-200px] z-[22] relative">
        <h1 className="pt-10 pb-4 leading-none text-white lg:text-5lg text-5xl !font-bold" data-aos="fade-up">
          DotMik : Our Story Unfolded
          <br className='hidden lg:flex' />
        </h1>
        <p className="text-white lg:text-2xl text-xl px-5" data-aos="fade-up">
          Innovating Solutions, Empowering
          Businesses, Creating a Legacy.
        </p>
      </div>
      <div className="w-full h-full mx-auto  2xl:container lg:py-60 py-20  px-10 relative">
        <div className="flex gap-20 items-center flex-wrap lg:flex-nowrap" >
          <div className="lg:flex-1 ">
            <h2 className="text-white leading-[1.2] text-heading lg:text-5lg text-5xl  !font-bold" data-aos="fade-up">Why DotMik Stands Out in Service Excellence?</h2>
            <p className="text-white pt-8 text-small font-normal" data-aos="fade-up">At DotMik, we reject the
              “one-size-fits-all” approach. Every solution we deliver is strategically
              tailored to your unique requirements, ensuring measurable results and maximum
              efficiency for your business objectives.</p>
            <p className="text-white  pt-5 text-small font-normal" data-aos="fade-up">Our offerings extend far beyond project
              completion. With India’s most skilled and dedicated team, we provide
              solutions that drive long-term value and sustainable growth. Our experts
              work tirelessly, day and night, to resolve your business challenges swiftly
              and seamlessly, optimizing your operational workflow.</p>
            <p className="text-white  pt-5 text-small font-normal" data-aos="fade-up">Partnering with DotMik means you’re not
              just availing a service—you’re contributing to a History Makers Footprint.
              Our methodology blends innovation, commitment, and enduring value,
              establishing trust across India and globally.</p>
            <p className="text-white  pt-5 text-small font-normal" data-aos="fade-up">DotMik – Empowering Your Success, Today
              and Tomorrow</p>
          </div>
          <div className="lg:flex-1 flex gap-5">
            <div className="flex gap-2 flex-col">
              <Image
                src={Images.about1}
                alt="support"

                priority
                quality={100}
                className="object-cover object-center rounded-[18px]"
              />
              <Image
                src={Images.about2}
                alt="support"

                priority
                quality={100}
                className="object-cover object-center rounded-[18px]"
              />
            </div>

            <div className="">
              <Image
                src={Images.about3}
                alt="support"

                priority
                quality={100}
                className="object-cover object-center rounded-[18px] h-full"
              />
            </div>
          </div>
          <div className="bg-left-effect"></div>
          <div className="bg-right-effect"></div>
        </div>
      </div>
      <Team />
      <div className="w-full h-full bg-white md:py-40 py-20 px-10 px-10">
        <div className="flex items-center w-full h-full mx-auto  2xl:container  flex-wrap">
          <div className="lg:flex-1 md:mb-20 text-center  mx-auto lg:text-left">
            <h2 className="  leading-[1.2] text-start lg:text-5lg text-5xl  !font-bold" data-aos="fade-up">Proven Outcomes That Empower You </h2>
          </div>
          <div className="lg:flex-1 md:mt-0 mt-5 mx-auto lg:mx-0 relative">
            <div className="bg-state-effect"></div>
            <div className="flex md:gap-[160px] gap-10 justify-center md:flex-nowrap flex-wrap text-center md:text-left md:px-10">
              <div className="flex flex-col  md:w-auto w-full">
                <h3 className="leading-none  lg:text-large-7lg font-semibold text-5lg " data-aos="fade-up">100K+</h3>
                <p className=" text-small font-normal pt-4" data-aos="fade-up">Transactions Per Day</p>
              </div>
              <div className="flex flex-col   md:w-auto w-full">
                <h3 className="leading-none  lg:text-large-7lg font-semibold text-5lg " data-aos="fade-up">&#x20B9;50M+</h3>
                <p className=" text-small font-normal pt-4" data-aos="fade-up">Monthly Payment Value</p>
              </div>
            </div>
            <div className="verticleLine hidden md:block lg:block"></div>
            <div className="horizantelLine hidden md:block lg:block"></div>
            <div className="flex md:gap-[160px] gap-10 justify-center md:justify-between lg:justify-center md:pt-16 pt-10 flex-wrap text-center md:text-left md:px-10">
              <div className="flex flex-col md:w-auto w-full">
                <h3 className="leading-none  lg:text-large-7lg font-semibold text-5lg " data-aos="fade-up">8K+</h3>
                <p className="text-small font-normal pt-4" data-aos="fade-up">Active Users</p>
              </div>
              <div className="flex flex-col md:w-auto w-full">
                <h3 className="leading-none  lg:text-large-7lg font-semibold text-5lg " data-aos="fade-up">4.5</h3>
                <p className=" text-small font-normal  pt-4" data-aos="fade-up">App Store Ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full md:max-w-[1100px] mx-auto md:pt-40 py-20 lg:px-5  px-10 relative">
        <div className="bg-halfcercel-effect"></div>

        <h2 className="text-white  leading-[1.2] text-center md:mb-24 mb-16 lg:text-5lg text-5xl  !font-bold" data-aos="fade-up">Principles That Guide Us Every Day</h2>
        <div className="flex gap-10 mb-10 flex-wrap lg:flex-nowrap">
          <div className="flex flex-col justify-between bg-black rounded-[24px] md:p-[60px] p-[30px] gap-10 lg:w-fit w-auto border border-white" data-aos="fade-up">
            <div className="flex flex-col" >
              <h3 className="text-white text-tiny-2xl font-medium">Transparency in Every Step.</h3>
              <p className="text-xextra-small font-normal  text-white " >
                We convey our thoughts clearly, ensuring complex ideas are easily
                comprehensible.
              </p>
            </div>
            <h4 className="text-white text-medium-2xl lg:whitespace-nowrap font-semibold" >Clarity & Precision</h4>
          </div>

          <div className="flex flex-col justify-between bg-white rounded-[24px] md:p-[60px] p-[30px] gap-10 w-fit" data-aos="fade-up">
            <div className="flex flex-col">
              <h3 className="text-tiny-2xl font-medium" >
                We turn obstacles into opportunities by reimagining resources
                creatively.
              </h3>
              <p className="text-xextra-small font-normal" >
                We embrace collaboration, cultivating powerful ideas across every level.              </p>
            </div>
            <h4 className="text-medium-2xl lg:whitespace-nowrap font-semibold" >Value
              Innovation</h4>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-[24px] md:p-[60px] p-[30px] gap-10 " data-aos="fade-up">
          <div className="flex flex-col">
            <h3 className="text-tiny-2xl font-medium" >
              We move
              forward with relentless perseverance.
            </h3>
            <p className="text-xextra-small font-normal" >
              Together,
              we lift each other up, cherish every success, and keep striving for our bold
              ambitions.
            </p>
          </div>
          <h4 className="text-medium-2xl lg:whitespace-nowrap [line-break:anywhere]  font-semibold" >Unshakeable loyalty</h4>
        </div>
        <div className="flex gap-10 mt-10 flex-wrap lg:flex-nowrap" data-aos="fade-up">
          <div className="flex flex-col justify-between bg-white rounded-[24px] md:p-[60px] p-[30px] gap-10 lg:w-[60%]"  data-aos="fade-up">
            <div className="flex flex-col">
              <h3 className="text-tiny-2xl font-medium" >
                We empower business leaders to act with conviction and unlock growth through timely, informed decisions.
              </h3>
              <p className="text-xextra-small font-normal" >
                Empowering businesses with strategic insights, real-time analytics, and expert support to drive smart decisions, accelerate growth, and achieve sustainable success.
              </p>
            </div>
            <h4 className="text-medium-2xl font-semibold" >Driven by Insight. Ready to Act</h4>
          </div>
          <div className="flex flex-col justify-between bg-black rounded-[24px] md:p-[60px] p-[30px] gap-10 w-fit border border-white lg:w-[40%]" data-aos="fade-up">
            <div className="flex flex-col">
              <h4 className="text-white text-large-32 font-bold mb-5" >Leading with Purpose and Vision</h4>
              <h3 className="text-white text-tiny-2xl font-medium mb-5" >We champion visionary thinking and calculated risks to lead innovation across unexplored frontiers.</h3>
              <p className="text-xextra-small font-normal text-white" >
                Every decision we make is guided by strategy and aligned with our vision for sustainable, long-term growth.
              </p>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col justify-between bg-black rounded-[24px] md:p-[60px] p-[30px] gap-10 mt-10 border border-white" data-aos="fade-up">
          <div className="flex flex-col">
             <h4 className="text-white mb-6  lg:whitespace-nowrap text-large-32 font-bold" >Empowered Yet Humble</h4>
            <h3 className="text-tiny-2xl font-medium text-white mb-2" >
            Rooted in humility, we let our accomplishments speak while staying focused, authentic, and approachable.
            </h3>
            <p className="text-xextra-small font-normal text-white " >
             With humility at our core, we embrace every voice, respect every perspective, and grow stronger through collaboration.
            </p>
          </div>
         
        </div>
      </div>
    </section>


  );
};

export default Aboutus;
