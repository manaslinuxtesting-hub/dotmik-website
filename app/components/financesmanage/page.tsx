import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';


const Financesmanage = () => {
    return (
        <div className="h-banner blog-banner scroll-smooth relative" >
            <div className="relative lg:py-40 !pb-0 py-0 w-full mx-auto text-center px-10 md:max-w-[1350px]">
                {/* Navigation Tabs */}
                <div className="flex justify-between bg-white px-10 py-6 rounded-[50px] sticky top-[10px] hidden lg:flex z-[50] shadow-md">
                    <Link href="#management" className="text-small">A/C Management</Link>
                    <Link href="#payouts" className="text-small">Payouts</Link>
                    <Link href="#collections" className="text-small">Collections</Link>
                    <Link href="#reconciliation" className="text-small">Reconciliation</Link>
                    <Link href="#reporting" className="text-small">Reporting</Link>
                </div>
                {/* Finance Section */}
                <div id="management" className="pt-20 scroll-mt-24">
                    <h2 className=" pb-4 leading-none text-center text-large-30 font-semibold text-white" data-aos="fade-up">
                        Control Your Finances with Assurance

                    </h2>
                    <p className="text-small font-normal text-white lg:px-40" data-aos="fade-up">
                        Easily manage accounts and master your finances with DotMik’s connected banking solution.

                    </p>

                    <div className="flex flex-wrap gap-5  py-16 lg:pb-16 pb-0" data-aos="fade-up">
                        <div className="flex flex-col  border border-[#606060] rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                               
                                 <Image
                                    src={Images.m1}
                                    alt="support"
                                    width={50}     
                                    height={50}   
                                    quality={100}  
                                    className="w-full lg:h-[250px] object-contain"
                                    priority        
                                    unoptimized    
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-large-24 font-semibold text-white leading-none ">Consolidated Account View
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Check balances, monitor transactions, and manage cash flow — all consolidated in a single, intuitive interface.</p>
                            </div>
                        </div>
                        <div className="flex flex-col  border border-[#606060] rounded-[20px] text-start flex-1 " >
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                              
                                  <Image
                                    src={Images.m2}
                                    alt="support"
                                    width={50}   
                                    height={50}   
                                    quality={100}   
                                    className="w-full lg:h-[250px] object-contain"
                                    priority        
                                    unoptimized   
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">Optimise Cash Flow

                                </h4>
                                <p className="text-small font-normal text-white pt-2">Track your financial health with current data on spending, account balances, and cash flow.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col  border border-[#606060]  rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                                <Image
                                    src={Images.m3}
                                    alt="support"
                                    width={50}   
                                    height={50}   
                                    quality={100}   
                                    className="w-full lg:h-[250px] object-contain"
                                    priority        
                                    unoptimized   
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">Encrypted Authentication
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Leverage industry-leading encryption and authentication protocols to ensure the utmost security of your finances.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="payouts" className="pt-20 scroll-mt-24" data-aos="fade-up">
                    <h2 className=" pb-4 leading-none text-center text-large-30 font-semibold text-white">
                        Redefining Payouts with Connected Accounts
                    </h2>
                    <p className="text-small font-normal text-white lg:px-40">
                        Make instant and automated payments directly from your connected bank account, making it convenient  and efficient for your business payouts.
                    </p>

                    <div className="flex flex-wrap gap-5  py-16 lg:pb-16 pb-0">
                        <div className="flex flex-col  border border-[#606060] rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                                <Image
                                    src={Images.m4}
                                    alt="support"
                                    width={50}     
                                    height={50}    
                                    quality={100}   
                                    className="w-full lg:h-[250px] object-contain"
                                    priority       
                                    unoptimized     
                                />

                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">All Payment Modes
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Support for all major payment methods - IMPS, NEFT, RTGS, and UPI.</p>
                            </div>
                        </div>
                        <div className="flex flex-col  border border-[#606060] rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                              
                                 <Image
                                    src={Images.m5}
                                    alt="support"
                                    width={50}     
                                    height={50}    
                                    quality={100}   
                                    className="w-full lg:h-[250px] object-contain"
                                    priority       
                                    unoptimized     
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">Make Bulk Payouts
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Efficient bulk payments processing by uploading a single Excel file.</p>
                            </div>
                        </div>
                        <div className="flex flex-col  border border-[#606060]  rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                                <Image
                                    src={Images.m6}
                                    alt="support"
                                    width={50}     
                                    height={50}    
                                    quality={100}  
                                    className="w-full lg:h-[250px] object-contain"
                                    priority       
                                    unoptimized     
                                />

                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">Schedule Payments
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Option to schedule payments in advance or set up recurring automatic payments.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="collections" className="pt-20 scroll-mt-24" data-aos="fade-up">
                    <h2 className=" pb-4 leading-none text-center text-large-30 font-semibold text-white">
                        Collect Payments from Customers with Ease
                    </h2>
                    <p className="text-small font-normal text-white lg:px-40">
                        Get paid from your customers directly into your preferred current account, ensuring a smooth payment experience for your customers with multiple convenient payment options.
                    </p>

                    <div className="flex flex-wrap gap-5  py-16 lg:pb-16 pb-0">
                        <div className="flex flex-col  border border-[#606060] rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                               <Image
                                    src={Images.m7}
                                    alt="support"
                                    width={50}     // bigger width, not just 50
                                    height={50}    // maintain aspect ratio
                                    quality={100}   // <-- increase quality
                                    className="w-full lg:h-[250px] object-contain"
                                    priority        // loads image earlier
                                    unoptimized     // disables next/image optimization
                                />

                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">Multiple Payment Modes
                                </h4>
                                <p className="text-small font-normal text-white pt-2">UPI, Credit & Debit Cards, Net Banking, and Wallets.</p>
                            </div>
                        </div>
                        <div className="flex flex-col  border border-[#606060] rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                             
                                <Image
                                    src={Images.m8}
                                    alt="support"
                                    width={50}    
                                    height={50}   
                                    quality={100} 
                                    className="w-full lg:h-[250px] object-contain"
                                    priority        
                                    unoptimized 
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">QR Code Solution
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Create unique QR codes and streamline collections for multiple stores.</p>
                            </div>
                        </div>
                        <div className="flex flex-col  border border-[#606060]  rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                                <Image
                                    src={Images.m9}
                                    alt="support"
                                    width={50}    
                                    height={50}   
                                    quality={100} 
                                    className="w-full lg:h-[250px] object-contain"
                                    priority        
                                    unoptimized 
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-large-24 font-semibold text-white leading-none ">Create & Send Links
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Accept digital payments, anytime, anywhere with collection links.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="reconciliation" className="pt-20 scroll-mt-24" data-aos="fade-up">
                    <h2 className=" pb-4 leading-none text-center text-large-30 font-semibold text-white  break-normal [line-break:anywhere]">
                        No More Manual Reconciliation
                    </h2>
                    <p className="text-small font-normal text-white lg:px-40">
                        Reconcile transactions across all your connected accounts while ensuring uncompromised data accuracy.
                    </p>

                    <div className="flex flex-wrap gap-5  py-16 lg:pb-16 pb-0">
                        <div className="flex flex-col  border border-[#606060] rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                                <Image
                                    src={Images.m10}
                                    alt="support"
                                    width={50}    
                                    height={50}   
                                    quality={100}  
                                    className="w-full lg:h-[250px] object-contain"
                                    priority        
                                    unoptimized    
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">Automate Spend Categorization
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Make informed financial decisions based on accurate, consolidated spending data.</p>
                            </div>
                        </div>
                        <div className="flex flex-col  border border-[#606060] rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                                <Image
                                    src={Images.m2}
                                    alt="support"
                                    width={50}
                                    height={50}
                                    className="w-full lg:h-[250px]"
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">Reconcile Payments Faster
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Achieve quick and easy payment reconciliation, eliminating manual bookkeeping.</p>
                            </div>
                        </div>
                        <div className="flex flex-col  border border-[#606060]  rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                                 <Image
                                    src={Images.m12}
                                    alt="support"
                                    width={50}    
                                    height={50}   
                                    quality={100}
                                    className="w-full lg:h-[250px] object-contain"
                                    priority      
                                    unoptimized   
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">Efficient Transaction Matching
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Our advanced algorithms identify and reconcile transactions across your accounts.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="reporting" className="pt-20 scroll-mt-24" data-aos="fade-up">
                    <h2 className=" pb-4 leading-none text-center text-large-30 font-semibold text-white">
                        Smart Reporting via Intuitive Dashboard
                    </h2>
                    <p className="text-small font-normal text-white lg:px-40">
                        Stay on top of your finances with our intuitive dashboard or app and manage accounts payable, accounts receivable, and cash flow across all connected accounts.
                    </p>

                    <div className="flex flex-wrap gap-5  py-16 lg:pb-16 pb-0">
                        <div className="flex flex-col  border border-[#606060] rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                               <Image
                                    src={Images.m13}
                                    alt="support"
                                    width={50}    
                                    height={50}   
                                    quality={100}   
                                    className="w-full lg:h-[250px] object-contain"
                                    priority     
                                    unoptimized   
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">Track on the Go
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Stay on top of your finances by monitoring income and expenses in real-time.</p>
                            </div>
                        </div>
                        <div className="flex flex-col  border border-[#606060] rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                               
                                 <Image
                                    src={Images.m14}
                                    alt="support"
                                    width={50}    
                                    height={50}    
                                    quality={100} 
                                    className="w-full lg:h-[250px] object-contain"
                                    priority      
                                    unoptimized   
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">Intelligent Insights
                                </h4>
                                <p className="text-small font-normal text-white pt-2">Generate comprehensive reports for valuable insights into your monetary situation.</p>
                            </div>
                        </div>
                        <div className="flex flex-col  border border-[#606060]  rounded-[20px] text-start flex-1">
                            <div className="bg-white p-2 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
                               <Image
                                    src={Images.m15}
                                    alt="support"
                                    width={50}    
                                    height={50}    
                                    quality={100} 
                                    className="w-full lg:h-[250px] object-contain"
                                    priority      
                                    unoptimized   
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4  text-large-24 font-semibold text-white leading-none ">Complete Visibility
                                </h4>
                                <p className="text-small  font-normal text-white pt-2">Gain complete control and visibility over your finances with user-friendly tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-right-effect bg-right-effect-bank"></div>
        </div>
    );
};

export default Financesmanage;
