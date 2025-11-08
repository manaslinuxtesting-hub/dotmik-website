import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Digishop = () => {
    return (
        <div className=" bg-[#000]" data-aos="fade-up">
            <div className="flex relative gap-20 lg:py-40 py-20  flex-wrap  w-full h-full mx-auto   ">
                <div className="overflow-hidden whitespace-nowrap">
                    <ul className="flex animate-scroll">
                        <li className="px-20    text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Mobile Recharge Shop</h4></li>
                        <li className="px-20   text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Grocery Store</h4></li>
                        <li className="px-20    text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Electronics Store</h4></li>
                        <li className="px-20    text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Stationery Shop</h4></li>
                        {/* duplicate content for seamless loop */}
                        <li className="px-20    text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Mobile Recharge Shop</h4></li>
                        <li className="px-20   text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Grocery Store</h4></li>
                        <li className="px-20    text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Electronics Store</h4></li>
                        <li className="px-20    text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Stationery Shop</h4></li>

                    </ul>
                    <ul className="flex animate-scroll-right py-30">
                        <li className="px-20 text-tiny-2xl">
                            <h4 className="bg-white text-black px-5 py-2 rounded-md">Printing and Xerox Shops</h4>
                        </li>
                        <li className="px-20 text-tiny-2xl">
                            <h4 className="bg-white text-black px-5 py-2 rounded-md">Mobile Recharge Shop</h4>
                        </li>
                        <li className="px-20 text-tiny-2xl">
                            <h4 className="bg-white text-black px-5 py-2 rounded-md">Electronics Store</h4>
                        </li>
                        <li className="px-20 text-tiny-2xl">
                            <h4 className="bg-white text-black px-5 py-2 rounded-md">Travel Agencies</h4>
                        </li>

                        {/* duplicate content for seamless loop */}
                        <li className="px-20 text-tiny-2xl">
                            <h4 className="bg-white text-black px-5 py-2 rounded-md">Printing and Xerox Shops</h4>
                        </li>
                        <li className="px-20 text-tiny-2xl">
                            <h4 className="bg-white text-black px-5 py-2 rounded-md">Mobile Recharge Shop</h4>
                        </li>
                        <li className="px-20 text-tiny-2xl">
                            <h4 className="bg-white text-black px-5 py-2 rounded-md">Electronics Store</h4>
                        </li>
                        <li className="px-20 text-tiny-2xl">
                            <h4 className="bg-white text-black px-5 py-2 rounded-md">Travel Agencies</h4>
                        </li>
                    </ul>
                    <ul className="flex animate-scroll">
                        <li className="px-20   text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Community Centers</h4></li>
                        <li className="px-20   text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Repair and Service Centers</h4></li>
                        <li className="px-20    text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Petrol Pumps</h4></li>

                        {/* duplicate content for seamless loop */}
                         <li className="px-20    text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Community Centers</h4></li>
                        <li className="px-20   text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Repair and Service Centers</h4></li>
                        <li className="px-20   text-tiny-2xl"><h4 className="bg-white text-black px-5 py-2 rounded-md">Petrol Pumps</h4></li>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Digishop;
