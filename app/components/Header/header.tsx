"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";

type MobileSubMenuState = {
  company: boolean;
  products: boolean;
  banking: boolean;
  payments: boolean;
  insurance: boolean;
  identity: boolean;
  others: boolean;
  solutions: boolean;
  developers: boolean;
  docs: boolean;
  apis: boolean;
};

const Header = () => {
  const pathname = usePathname(); // current route

  // typed state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<MobileSubMenuState>({
    company: false,
    products: false,
    banking: false,
    payments: false,
    insurance: false,
    identity: false,
    others: false,
    solutions: false,
    developers: false,
    docs: false,
    apis: false,
  });

  // typed refs for DOM elements
  const productsRef = useRef<HTMLDivElement | null>(null);
  const solutionsRef = useRef<HTMLDivElement | null>(null);
  const companyRef = useRef<HTMLDivElement | null>(null);
  const developersRef = useRef<HTMLDivElement | null>(null);

  // Toggle desktop dropdown (typed)
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setOpenSubMenu(null);
  };

  // Toggle mobile submenu (use keyof MobileSubMenuState for safety)
  const toggleMobileSubMenu = (menu: keyof MobileSubMenuState) => {
    setMobileSubMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  // Close dropdowns/submenus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedInsideAny =
        (productsRef.current && productsRef.current.contains(target)) ||
        (companyRef.current && companyRef.current.contains(target)) ||
        (solutionsRef.current && solutionsRef.current.contains(target)) ||
        (developersRef.current && developersRef.current.contains(target));

      if (!clickedInsideAny) {
        setOpenDropdown(null);
        setOpenSubMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset dropdowns/submenus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setOpenSubMenu(null);
    setMobileMenuOpen(false);
    setMobileSubMenu({
      company: false,
      products: false,
      banking: false,
      payments: false,
      insurance: false,
      identity: false,
      others: false,
      solutions: false,
      developers: false,
      docs: false,
      apis: false,
    });
  }, [pathname]); // runs every time the route changes

  return (
    <div className="w-full lg:w-[80%] mx-auto 2xl:px-4 relative">
      <header className="w-full flex items-center justify-between px-4 lg:px-6 py-4 lg:fixed lg:w-[80%] mx-auto top-0 z-90 bg-[#111111] lg:rounded-[14px]">
        {/* Logo */}
        <Link href="/" className="text-white font-extrabold text-[28px] sm:text-[34px] tracking-[1.5px]">
          <h2 className="!font-bold">
            <span className="text-[#fc9d08]">Dot</span>Mik
          </h2>
        </Link>

        <nav className="hidden lg:flex gap-8 relative">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Welcome
          </Link>

          {/* {company menu} */}
          <div className="relative" ref={companyRef}>
            <button
              onClick={() => toggleDropdown("company")}
              className="flex items-center gap-1 text-white hover:text-gray-300 transition"
            >
              Association
              <ChevronDown size={18} className={`transition-transform ${openDropdown === "company" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "company" && (
              <div
                className="absolute left-0 mt-4 w-60 bg-white flex flex-col justify-between shadow-lg
               rounded-lg z-50 h-[450px] transform -translate-x-[50%] -translate-y-[-1%]
         after:content-[''] after:absolute after:top-0 after:left-[65%] after:-ml-[0px] after:-mt-[10px]
         after:w-0 after:h-0 after:z-[1]
         after:border-b-[10px] after:border-b-white
         after:border-l-[10px] after:border-l-transparent
         after:border-r-[10px] after:border-r-transparent"
              >
                <ul className="flex flex-col justify-between gap-5 w-full p-6">
                  <li className="rounded-lg flex-1 whitespace-nowrap">
                    <Link href="aboutus" className="text-gray-700 hover:text-black">
                      Footprint
                    </Link>
                  </li>
                  <li className="rounded-lg flex-1 whitespace-nowrap">
                    <Link href="contactus" className="text-gray-700 hover:text-black">
                      Reach DotMik
                    </Link>
                  </li>
                  <li className="rounded-lg flex-1 whitespace-nowrap">
                    <Link href="careers" className="text-gray-700 hover:text-black">
                      Career Track
                    </Link>
                  </li>
                </ul>
                <div className="flex flex-col w-full ">
                  <a className="flex-1 bg-[#fc9d08] p-2 text-extra-small" href="">Contact Sales</a>
                  <a className="flex-1 bg-[#000] p-2 text-white rounded-bl-lg rounded-br-lg text-extra-small" href="">Contact Sales</a>
                </div>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative" ref={productsRef}>
            <button
              onClick={() => toggleDropdown("products")}
              className="flex items-center gap-1 text-white hover:text-gray-300 transition"
            >
              Units
              <ChevronDown
                size={18}
                className={`transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`}
              />
            </button>

            {openDropdown === "products" && (
              <div className="absolute left-0 mt-4 w-60 bg-white flex flex-col justify-between shadow-lg
               rounded-lg z-50 h-[524px] transform -translate-x-[50%] -translate-y-[-1%]
         after:content-[''] after:absolute after:top-0 after:left-[65%] after:-ml-[0px] after:-mt-[10px]
         after:w-0 after:h-0 after:z-[1]
         after:border-b-[10px] after;border-b-white after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent">
                {/* Banking */}
                <div className="p-2 ">
                  <div>
                    <button
                      onClick={() =>
                        setOpenSubMenu(openSubMenu === "banking" ? null : "banking")
                      }
                      className="flex justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Banking Tech
                      <ChevronDown size={16} className={`transition-transform ${openSubMenu === "banking" ? "rotate-270" : ""}`} />
                    </button>
                    {openSubMenu === "banking" && (
                      <div className="pl-6 py-6 flex flex-col gap-1 absolute left-full top-0 bg-white w-[520px] p-8 rounded-lg h-full shadow-[0px_1px_4px_0px_#ddd]">
                        <ul className="flex flex-wrap justify-between gap-5">
                          <li className="border border-[#ddd] p-4 rounded-lg flex-1">
                            <Link href="connectedbanking" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.coneactedbanking}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Connected Banking
                              <p className="text-extra-small pt-1">Unite your bank and financial <br /> accounts in one location</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg flex-1">
                            <Link href="expensecard" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.expensecard}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Expense Card
                              <p className="text-extra-small pt-1">Manage corporate <br /> expenses</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="gift" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.giftcard}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Gift Card
                              <p className="text-extra-small pt-1">Thoughtful Gift For Every Occasian</p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Payments */}
                  <div>
                    <button
                      onClick={() => setOpenSubMenu(openSubMenu === "payments" ? null : "payments")}
                      className="flex justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Payment Paths
                      <ChevronDown size={16} className={`transition-transform ${openSubMenu === "payments" ? "rotate-270" : ""}`} />
                    </button>
                    {openSubMenu === "payments" && (
                      <div className="py-4 flex flex-col gap-1 absolute left-full top-0 bg-white w-[530px] h-[524px] p-4 rounded-lg h-auto shadow-[0px_1px_4px_0px_#ddd]">
                        <ul className="flex flex-wrap justify-between gap-5">
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="singlepayouts" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.singalepay}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Single Payout
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="blukpayout" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.bulkpayout}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Bluk Payout
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="payoutlink" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.paylink}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Payout Link
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="utilitypayment" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.utilitybill}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Utility Bill Payments
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="pos" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.poss}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Pos
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="staticqr" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.staticqr}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Static QR
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Insurance */}
                  <div>
                    <button
                      onClick={() => setOpenSubMenu(openSubMenu === "insurance" ? null : "insurance")}
                      className="flex justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Insurance Path
                      <ChevronDown size={16} className={`transition-transform ${openSubMenu === "insurance" ? "rotate-270" : ""}`} />
                    </button>
                    {openSubMenu === "insurance" && (
                      <div className="pl-6 py-6 flex flex-col gap-1 absolute left-full top-0 bg-white w-[530px] p-8 rounded-lg h-full shadow-[0px_1px_4px_0px_#ddd]">
                        <ul className="flex flex-wrap justify-between gap-5">
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="generalinsurance" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.generalinsurance}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              General Insurance
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="healthinsurance" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.healthinsu}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Health Insurance
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="lifeinsurance" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.lifeinsu}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Life Insurance
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Identity */}
                  <div>
                    <button
                      onClick={() => setOpenSubMenu(openSubMenu === "identity" ? null : "identity")}
                      className="flex justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Identity Verification
                      <ChevronDown size={16} className={`transition-transform ${openSubMenu === "identity" ? "rotate-270" : ""}`} />
                    </button>
                    {openSubMenu === "identity" && (
                      <div className="pl-6 py-6 flex flex-col gap-1 absolute left-full top-0 bg-white w-[530px] p-8 rounded-lg h-full shadow-[0px_1px_4px_0px_#ddd]">
                        <ul className="flex flex-wrap justify-between gap-5">
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="individualverification" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.indiverifi}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Individual Verification
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="businessverification" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.businessverifi}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Business Verification
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="financialverification" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.financialvirifi}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Financial Verification
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Other Services */}
                  <div>
                    <button
                      onClick={() => setOpenSubMenu(openSubMenu === "others" ? null : "others")}
                      className="flex justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Next Level Outcomes
                      <ChevronDown size={16} className={`transition-transform ${openSubMenu === "others" ? "rotate-270" : ""}`} />
                    </button>
                    {openSubMenu === "others" && (
                      <div className="pl-6 py-6 flex flex-col gap-1 absolute left-full top-0 bg-white w-[545px] p-8 rounded-lg h-full shadow-[0px_1px_4px_0px_#ddd]">
                        <ul className="flex flex-wrap justify-between gap-5">
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="bankingagent" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.bankagent}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Become a Banking Agent
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="bankingagent" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.inshurasnceagent}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 mb-4"
                              />
                              Become a Insurance Agent
                              <p className="text-extra-small pt-1">All current accounts in one place</p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col w-full ">
                  <Link href="" className="flex-1 bg-[#fc9d08] p-2 text-extra-small">Contact Sales</Link>
                  <Link href="" className="flex-1 bg-[#000] p-2 text-white rounded-bl-lg rounded-br-lg text-extra-small">Contact Sales</Link>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => toggleDropdown("solutions")}
              className="flex items-center gap-1 text-white hover:text-gray-300 transition"
            >
              Utilization
              <ChevronDown size={18} className={`transition-transform ${openDropdown === "solutions" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "solutions" && (
              <div className="absolute left-0 mt-4 w-[520px] bg-white flex flex-col justify-between shadow-lg rounded-lg z-50 transform -translate-x-[50%] -translate-y-[-1%]
         after:content-[''] after:absolute after:top-0 after:left-[57%] after:-ml-[0px] after:-mt-[10px]
         after:w-0 after:h-0 after:z-[1]
         after:border-b-[10px] after:border-b-white
         after:border-l-[10px] after:border-l-transparent
         after:border-r-[10px] after:border-r-transparent">
                <ul className="flex flex-wrap justify-between gap-5 p-6">
                  <li className="border border-[#ddd] p-4 rounded-lg flex-1 whitespace-nowrap">
                    <Link href="ecommerce" className="text-gray-700 font-semibold hover:text-black ">
                      <Image
                        src={Icons.ecommerce}
                        alt="support"
                        width={50}
                        height={50}
                        className="bg-[#fff] p-2.5 mb-4"
                      />
                      E-Commerce
                    </Link>
                  </li>
                  <li className="border border-[#ddd] p-4 rounded-lg flex-1 ">
                    <Link href="logistic" className="text-gray-700 font-semibold hover:text-black">
                      <Image
                        src={Icons.logistics}
                        alt="support"
                        width={50}
                        height={50}
                        className="bg-[#fff] p-2.5 mb-4"
                      />
                      Logistics
                    </Link>
                  </li>
                  <li className="border border-[#ddd] p-4 rounded-lg flex-1 ">
                    <Link href="insurance" className="text-gray-700 font-semibold hover:text-black whitespace-nowrap">
                      <Image
                        src={Icons.insurance}
                        alt="support"
                        width={50}
                        height={50}
                        className="bg-[#fff] p-2.5 mb-4"
                      />
                      Insurance Path
                    </Link>
                  </li>
                  <li className="border border-[#ddd] p-4 rounded-lg flex-1 ">
                    <Link href="healthcare" className="text-gray-700 font-semibold hover:text-black">
                      <Image
                        src={Icons.healthcare}
                        alt="support"
                        width={50}
                        height={50}
                        className="bg-[#fff] p-2.5 mb-4"
                      />
                      Healthcare
                    </Link>
                  </li>
                  <li className="border border-[#ddd] p-4 rounded-lg flex-1 ">
                    <Link href="marketplace" className="text-gray-700 font-semibold hover:text-black">
                      <Image
                        src={Icons.marketplace}
                        alt="support"
                        width={50}
                        height={50}
                        className="bg-[#fff] p-2.5 mb-4"
                      />
                      Marketplace
                    </Link>
                  </li>
                  <li className="border border-[#ddd] p-4 rounded-lg flex-1 ">
                    <Link href="education" className="text-gray-700 font-semibold hover:text-black">
                      <Image
                        src={Icons.education}
                        alt="support"
                        width={50}
                        height={50}
                        className="bg-[#fff] p-2.5 mb-4"
                      />
                      Education
                    </Link>
                  </li>
                </ul>
                <div className="flex w-full ">
                  <Link href="" className="flex-1 bg-[#fc9d08] p-2 rounded-bl-lg text-extra-small">Contact Sales</Link>
                  <Link href="" className="flex-1 bg-[#000] p-2 text-white rounded-br-lg text-extra-small">Contact Sales</Link>
                </div>
              </div>
            )}
          </div>

          {/* Developer’s Hub Dropdown */}
          <div className="relative" ref={developersRef}>
            <button
              onClick={() => toggleDropdown("developers")}
              className="flex items-center gap-1 text-white hover:text-gray-300 transition"
            >
              Code Forge
              <ChevronDown
                size={18}
                className={`transition-transform ${openDropdown === "developers" ? "rotate-180" : ""}`}
              />
            </button>

            {openDropdown === "developers" && (
              <div className="absolute left-0 mt-4 w-60 bg-white flex flex-col justify-between shadow-lg rounded-lg z-50 h-[450px] transform -translate-x-[60%] -translate-y-[-1%]
         after:content-[''] after:absolute after:top-0 after:left-[65%] after:-ml-[0px] after:-mt-[10px]
         after:w-0 after:h-0 after:z-[1]
         after:border-b-[10px] after:border-b-white
         after:border-l-[10px] after:border-l-transparent
         after:border-r-[10px] after:border-r-transparent">
                {/* Documentation */}
                <div className="p-2">
                  <div>
                    <button
                      onClick={() =>
                        setOpenSubMenu(openSubMenu === "docs" ? null : "docs")
                      }
                      className="flex justify-between text-start w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Documentation & Guides
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${openSubMenu === "docs" ? "rotate-270" : ""}`}
                      />
                    </button>
                    {openSubMenu === "docs" && (
                      <div className="p-4 flex flex-col gap-1 absolute left-full top-0 bg-white w-[520px] p-8 rounded-lg h-full shadow-[0px_1px_4px_0px_#ddd]">
                        <ul className="flex flex-wrap justify-between gap-5">
                          <li className="border border-[#ddd] p-4 rounded-lg flex-1 whitespace-nowrap">
                            <Link href="developerapi" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                              />
                              Developer API
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg flex-1 whitespace-nowrap">
                            <Link href="https://dotmik-software.readme.io/reference/authentication" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                              />
                              API Documentation
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg whitespace-nowrap">
                            <Link href="https://dotmik-software.readme.io/reference/authentication" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                              />
                              Integration Guide
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* APIs */}
                  <div>
                    <button
                      onClick={() =>
                        setOpenSubMenu(openSubMenu === "apis" ? null : "apis")
                      }
                      className="flex justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Build with APIs
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${openSubMenu === "apis" ? "rotate-270" : ""}`}
                      />
                    </button>
                    {openSubMenu === "apis" && (
                      <div className="flex flex-col gap-1 absolute left-full top-0 bg-white w-[520px] p-4 rounded-lg h-full">
                        <ul className="flex flex-wrap justify-between gap-5">
                          <li className="border border-[#ddd] p-4 rounded-lg flex-1 whitespace-nowrap">
                            <Link href="https://dotmik-software.readme.io/reference/authentication" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                              />
                              Automate Your Payouts
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg flex-1 whitespace-nowrap">
                            <Link href="https://dotmik-software.readme.io/reference/authentication" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                              />
                              Manage & Pay All Bills
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg flex-1 whitespace-nowrap">
                            <Link href="https://dotmik-software.readme.io/reference/authentication" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                              />
                              Banking Services
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg flex-1 whitespace-nowrap">
                            <Link href="https://dotmik-software.readme.io/reference/authentication" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                              />
                              Collect Money
                            </Link>
                          </li>
                          <li className="border border-[#ddd] p-4 rounded-lg">
                            <Link href="https://dotmik-software.readme.io/reference/authentication" className="text-gray-700 font-semibold hover:text-black">
                              <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                              />
                              Prevent Fraud
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col w-full ">
                  <Link href="" className="flex-1 bg-[#fc9d08] p-2 text-extra-small">Contact Sales</Link>
                  <Link href="" className="flex-1 bg-[#000] p-2 text-white rounded-bl-lg rounded-br-lg text-extra-small">Contact Sales</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/blogs" className="text-white hover:text-gray-300 transition">
            Diaries
          </Link>
        </nav>

        {/* Desktop Login */}
        <div className="hidden lg:flex">
          <Link href="/login" className="banner-button">
            Ingress
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full pt-10 left-0 w-full h-[100vh] bg-black text-white z-40 p-4 max-h-screen overflow-y-auto">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-800 rounded">
                Welcome
              </Link>
            </li>

            {/* Company */}
            <li>
              <button
                className="flex justify-between w-full px-4 py-2 hover:bg-gray-800 rounded"
                onClick={() => toggleMobileSubMenu("company")}
              >
                Association
                <ChevronDown size={16} className={`${mobileSubMenu.company ? "rotate-180" : ""} transition-transform`} />
              </button>
              {mobileSubMenu.company && (
                <ul className="pl-6 mt-2 flex flex-col gap-1">
                  <li><Link href="aboutus" className="block px-2 py-1 hover:bg-gray-700 rounded">Footprint</Link></li>
                  <li><Link href="contactus" className="block px-2 py-1 hover:bg-gray-700 rounded">Reach DotMik</Link></li>
                  <li><Link href="careers" className="block px-2 py-1 hover:bg-gray-700 rounded">Career Track</Link></li>
                </ul>
              )}
            </li>

            {/* Products */}
            <li>
              <button
                className="flex justify-between w-full px-4 py-2 hover:bg-gray-800 rounded"
                onClick={() => toggleMobileSubMenu("products")}
              >
                Units
                <ChevronDown size={16} className={`${mobileSubMenu.products ? "rotate-180" : ""} transition-transform`} />
              </button>
              {mobileSubMenu.products && (
                <ul className="pl-6 mt-2 flex flex-col gap-1">
                  {/* Banking */}
                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-1 hover:bg-gray-700 rounded"
                      onClick={() => toggleMobileSubMenu("banking")}
                    >
                      Banking Tech
                      <ChevronDown size={14} className={`${mobileSubMenu.banking ? "rotate-180" : ""} transition-transform`} />
                    </button>
                    {mobileSubMenu.banking && (
                      <ul className="pl-4 mt-1 flex flex-col gap-1">
                        <li><Link href="connectedbanking" className="block px-2 py-1 hover:bg-gray-700 rounded">Connected Banking</Link></li>
                        <li><Link href="expensecard" className="block px-2 py-1 hover:bg-gray-700 rounded">Expense Card</Link></li>
                        <li><Link href="gift" className="block px-2 py-1 hover:bg-gray-700 rounded">Gift Card</Link></li>
                      </ul>
                    )}
                  </li>

                  {/* Payments */}
                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-1 hover:bg-gray-700 rounded"
                      onClick={() => toggleMobileSubMenu("payments")}
                    >
                      Payment Paths
                      <ChevronDown size={14} className={`${mobileSubMenu.payments ? "rotate-180" : ""} transition-transform`} />
                    </button>
                    {mobileSubMenu.payments && (
                      <ul className="pl-4 mt-1 flex flex-col gap-1">
                        <li><Link href="singlepayouts" className="block px-2 py-1 hover:bg-gray-700 rounded">Single Payout</Link></li>
                        <li><Link href="blukpayout" className="block px-2 py-1 hover:bg-gray-700 rounded">Bluk Payout</Link></li>
                        <li><Link href="payoutlink" className="block px-2 py-1 hover:bg-gray-700 rounded">Payout Link</Link></li>
                        <li><Link href="utilitypayment" className="block px-2 py-1 hover:bg-gray-700 rounded">Utility Bill Payments</Link></li>
                        <li><Link href="pos" className="block px-2 py-1 hover:bg-gray-700 rounded">Pos</Link></li>
                        <li><Link href="staticqr" className="block px-2 py-1 hover:bg-gray-700 rounded">Static QR</Link></li>
                      </ul>
                    )}
                  </li>

                  {/* Insurance */}
                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-1 hover:bg-gray-700 rounded"
                      onClick={() => toggleMobileSubMenu("insurance")}
                    >
                      Insurance
                      <ChevronDown size={14} className={`${mobileSubMenu.insurance ? "rotate-180" : ""} transition-transform`} />
                    </button>
                    {mobileSubMenu.insurance && (
                      <ul className="pl-4 mt-1 flex flex-col gap-1">
                        <li><Link href="generalinsurance" className="block px-2 py-1 hover:bg-gray-700 rounded">General Insurance</Link></li>
                        <li><Link href="healthinsurance" className="block px-2 py-1 hover:bg-gray-700 rounded">Health Insurance</Link></li>
                        <li><Link href="lifeinsurance" className="block px-2 py-1 hover:bg-gray-700 rounded">Life Insurance</Link></li>
                      </ul>
                    )}
                  </li>

                  {/* Identity */}
                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-1 hover:bg-gray-700 rounded"
                      onClick={() => toggleMobileSubMenu("identity")}
                    >
                      Identity Verification
                      <ChevronDown size={14} className={`${mobileSubMenu.identity ? "rotate-180" : ""} transition-transform`} />
                    </button>
                    {mobileSubMenu.identity && (
                      <ul className="pl-4 mt-1 flex flex-col gap-1">
                        <li><Link href="individualverification" className="block px-2 py-1 hover:bg-gray-700 rounded">Individual Verification</Link></li>
                        <li><Link href="businessverification" className="block px-2 py-1 hover:bg-gray-700 rounded">Business Verification</Link></li>
                        <li><Link href="financialverification" className="block px-2 py-1 hover:bg-gray-700 rounded">Financial Verification</Link></li>
                      </ul>
                    )}
                  </li>

                  {/* Others */}
                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-1 hover:bg-gray-700 rounded"
                      onClick={() => toggleMobileSubMenu("others")}
                    >
                      Next Level Outcomes
                      <ChevronDown size={14} className={`${mobileSubMenu.others ? "rotate-180" : ""} transition-transform`} />
                    </button>
                    {mobileSubMenu.others && (
                      <ul className="pl-4 mt-1 flex flex-col gap-1">
                        <li><Link href="bankingagent" className="block px-2 py-1 hover:bg-gray-700 rounded">Become a Banking Agent</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* Solutions */}
            <li>
              <button
                className="flex justify-between w-full px-4 py-2 hover:bg-gray-800 rounded"
                onClick={() => toggleMobileSubMenu("solutions")}
              >
                Utilization
                <ChevronDown size={16} className={`${mobileSubMenu.solutions ? "rotate-180" : ""} transition-transform`} />
              </button>
              {mobileSubMenu.solutions && (
                <ul className="pl-6 mt-2 flex flex-col gap-1">
                  <li><Link href="ecommerce" className="block px-2 py-1 hover:bg-gray-700 rounded">E-Commerce</Link></li>
                  <li><Link href="logistic" className="block px-2 py-1 hover:bg-gray-700 rounded">Logistics</Link></li>
                  <li><Link href="insurance" className="block px-2 py-1 hover:bg-gray-700 rounded">Insurance</Link></li>
                  <li><Link href="healthcare" className="block px-2 py-1 hover:bg-gray-700 rounded">Healthcare</Link></li>
                  <li><Link href="marketplace" className="block px-2 py-1 hover:bg-gray-700 rounded">Marketplace</Link></li>
                  <li><Link href="education" className="block px-2 py-1 hover:bg-gray-700 rounded">Education</Link></li>
                </ul>
              )}
            </li>

            {/* Developers */}
            <li>
              <button
                className="flex justify-between w-full px-4 py-2 hover:bg-gray-800 rounded"
                onClick={() => toggleMobileSubMenu("developers")}
              >
                Code Forge
                <ChevronDown size={16} className={`${mobileSubMenu.developers ? "rotate-180" : ""} transition-transform`} />
              </button>
              {mobileSubMenu.developers && (
                <ul className="pl-6 mt-2 flex flex-col gap-1">
                  {/* Docs */}
                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-1 hover:bg-gray-700 rounded"
                      onClick={() => toggleMobileSubMenu("docs")}
                    >
                      Documentation & Guides
                      <ChevronDown size={14} className={`${mobileSubMenu.docs ? "rotate-180" : ""} transition-transform`} />
                    </button>
                    {mobileSubMenu.docs && (
                      <ul className="pl-4 mt-1 flex flex-col gap-1">
                        <li><Link href="developerapi" className="block px-2 py-1 hover:bg-gray-700 rounded">Developer API</Link></li>
                        <li><Link href="https://dotmik-software.readme.io/reference/authentication" className="block px-2 py-1 hover:bg-gray-700 rounded">API Documentation</Link></li>
                        <li><Link href="https://dotmik-software.readme.io/reference/authentication" className="block px-2 py-1 hover:bg-gray-700 rounded">Integration Guide</Link></li>
                      </ul>
                    )}
                  </li>

                  {/* APIs */}
                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-1 hover:bg-gray-700 rounded"
                      onClick={() => toggleMobileSubMenu("apis")}
                    >
                      Build with APIs
                      <ChevronDown size={14} className={`${mobileSubMenu.apis ? "rotate-180" : ""} transition-transform`} />
                    </button>
                    {mobileSubMenu.apis && (
                      <ul className="pl-4 mt-1 flex flex-col gap-1">
                        <li><Link href="https://dotmik-software.readme.io/reference/authentication" className="block px-2 py-1 hover:bg-gray-700 rounded">Automate Your Payouts</Link></li>
                        <li><Link href="https://dotmik-software.readme.io/reference/authentication" className="block px-2 py-1 hover:bg-gray-700 rounded">Manage & Pay All Bills</Link></li>
                        <li><Link href="https://dotmik-software.readme.io/reference/authentication" className="block px-2 py-1 hover:bg-gray-700 rounded">Banking Services</Link></li>
                        <li><Link href="https://dotmik-software.readme.io/reference/authentication" className="block px-2 py-1 hover:bg-gray-700 rounded">Collect Money</Link></li>
                        <li><Link href="https://dotmik-software.readme.io/reference/authentication" className="block px-2 py-1 hover:bg-gray-700 rounded">Prevent Fraud</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* Blog */}
            <li>
              <Link href="/blogs" className="block px-4 py-2 hover:bg-gray-800 rounded">Diaries</Link>
            </li>

            {/* Mobile Login */}
            <li>
              <Link href="/login" className="block px-4 py-2 mt-2 bg-white text-black rounded text-center hover:bg-blue-500">
                Ingress
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
