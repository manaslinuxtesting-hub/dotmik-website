import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Futurereadyapi = () => {
    return (
        <div className="lg:px-20 px-10 lg:py-40 py-20">
            <div className="flex w-full relative gap-14 h-full flex-wrap mx-auto md:max-w-[1350px]">
                <h2 className="pb-0 leading-[1.2] text-large-36 font-semibold text-black" data-aos="fade-up">
                    Future-Ready APIs for <br /> <span className="text-[#fc9d08]"> Scalable Growth</span>
                </h2>
                {/* API Block 1 */}
                <div className="flex flex-wrap justify-between items-center gap-20 pt-10 sticky top-20 bg-white z-10" >
                    <div className="lg:flex-1 flex flex-col">
                        <h2 className="pb-0 leading-none text-large-30 font-normal text-black pb-5">
                            Aadhaar Verification
                        </h2>
                        <p className="text-xextra-small font-light text-start">
                            Verify Aadhaar existence, mobile number, state, age-band, and gender effortlessly
                            with our Aadhaar Verification API—ensuring secure, fast, and fraud-proof user authentication.
                        </p>
                        <p className="pt-8 pb-4 text-small font-normal">Learn More :</p>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit text-xextra-small">
                            Instantpay Aadhaar Verification API
                        </Link>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit mt-2 text-xextra-small">
                            Know Aadhaar Verification
                        </Link>
                    </div>
                    <div className="lg:flex-1">
                        <Image
                            src={Images.car}
                            alt="support"
                            quality={100}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>

                {/* API Block 2 */}
                <div className="flex flex-wrap justify-between items-center gap-20 pt-10 sticky top-20 bg-white z-10" >
                    <div className="lg:flex-1 flex flex-col">
                        <h2 className="pb-0 leading-none text-large-30 font-normal text-black pb-5">
                            Aadhaar-PAN Linking Status Verification
                        </h2>
                        <p className="text-xextra-small font-light  text-start">
                            Ensure tax compliance and authenticity while reducing manual efforts and providing quick and reliable means for quick Aadhaar-PAN linkage verification.
                        </p>
                        <p className="pt-8 pb-4 text-small font-normal">Learn More :</p>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit text-xextra-small">
                            Instantpay Aadhaar-Pan Linking Status API
                        </Link>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit mt-2 text-xextra-small">
                            Importance Of Aadhaar-Pan Linking Verification
                        </Link>
                    </div>
                    <div className="lg:flex-1">
                        <Image
                            src={Images.car}
                            alt="support"
                            quality={100}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>

                {/* API Block 3 */}
                <div className="flex flex-wrap justify-between items-center gap-20 pt-10 sticky top-20 bg-white z-10" >
                    <div className="lg:flex-1 flex flex-col">
                        <h2 className="pb-0 leading-none text-large-30 font-normal text-black pb-5">
                            Driving License Verification API
                        </h2>
                        <p className="text-xextra-small font-light  text-start">
                            Authenticate driver’s license validity to enhance security, verify authenticity in transactions, and extract personal details, vehicle permissions, and RTO-registered photos.                        </p>
                        <p className="pt-8 pb-4 text-small font-normal">Learn More :</p>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit text-xextra-small">
                            Driving License Verification API
                        </Link>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit mt-2 text-xextra-small">
                            Know Driving License Verification
                        </Link>
                    </div>
                    <div className="lg:flex-1">
                        <Image
                            src={Images.car}
                            alt="support"
                            quality={100}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
                {/* API Block 4 */}
                <div className="flex flex-wrap justify-between items-center gap-20 pt-10 sticky top-20 bg-white z-10" >
                    <div className="lg:flex-1 flex flex-col">
                        <h2 className="pb-0 leading-none text-large-30 font-normal text-black pb-5">
                            PAN Verification
                        </h2>
                        <p className="text-xextra-small font-light  text-start">
                            Verify PAN details instantly for seamless identity authentication, fraud prevention, KYC compliance, and tax record validation via NSDL & Income Tax databases.</p>
                        <p className="pt-8 pb-4 text-small font-normal">Learn More :</p>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit text-xextra-small">
                            Instantpay PAN Verification API
                        </Link>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit mt-2 text-xextra-small">
                            Know PAN Verification
                        </Link>
                    </div>
                    <div className="lg:flex-1">
                        <Image
                            src={Images.car}
                            alt="support"
                            quality={100}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
                {/* API Block 5 */}
                <div className="flex flex-wrap justify-between items-center gap-20 pt-10 sticky top-20 bg-white z-10" >
                    <div className="lg:flex-1 flex flex-col">
                        <h2 className="pb-0 leading-none text-large-30 font-normal text-black pb-5">
                            Voter ID Verification API
                        </h2>
                        <p className="text-xextra-small font-light  text-start">
                            Enhance customer verification by validating Voter ID via EPIC Number, ensuring regulatory compliance and securing user accounts and transactions.
                        </p>
                        <p className="pt-8 pb-4 text-small font-normal">Learn More :</p>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit text-xextra-small">
                            Voter ID Verification API
                        </Link>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit mt-2 text-xextra-small">
                            Know Voter ID Verification
                        </Link>
                    </div>
                    <div className="lg:flex-1">
                        <Image
                            src={Images.car}
                            alt="support"
                            quality={100}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
                {/* API Block 6 */}
                <div className="flex flex-wrap justify-between items-center gap-20 pt-10 sticky top-20 bg-white z-10" >
                    <div className="lg:flex-1 flex flex-col">
                        <h2 className="pb-0 leading-none text-large-30 font-normal text-black pb-5">
                            PEP & Sanctions Search
                        </h2>
                        <p className="text-xextra-small font-light  text-start">
                            Identify potential high-risk individuals or entity for compliance related to anti-money laundering (AML) regulations or are subject to sanctions on any international sanction lists.                        </p>
                        <p className="pt-8 pb-4 text-small font-normal">Learn More :</p>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit text-xextra-small">
                            Instantpay PEP & Sanctions Search API
                        </Link>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit mt-2 text-xextra-small">
                            Know PEP & Sanctions Search
                        </Link>
                    </div>
                    <div className="lg:flex-1">
                        <Image
                            src={Images.car}
                            alt="support"
                            quality={100}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
                {/* API Block 7 */}
                <div className="flex flex-wrap justify-between items-center gap-20 pt-10 sticky top-20 bg-white z-10" >
                    <div className="lg:flex-1 flex flex-col">
                        <h2 className="pb-0 leading-none text-large-30 font-normal text-black pb-5">
                            Email Intelligence
                        </h2>
                        <p className="text-xextra-small font-light  text-start">
                            Validate and analyse email addresses in real-time, prevent fraud, and optimise engagement by detecting invalid or high-risk email addresses before they enter your system.                     </p>
                        <p className="pt-8 pb-4 text-small font-normal">Learn More :</p>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit text-xextra-small">
                            Instantpay Email Intelligence API
                        </Link>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit mt-2 text-xextra-small">
                            Know Email Intelligence
                        </Link>
                    </div>
                    <div className="lg:flex-1">
                        <Image
                            src={Images.car}
                            alt="support"
                            quality={100}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
                {/* API Block 7 */}
                <div className="flex flex-wrap justify-between items-center gap-20 pt-10 sticky top-20 bg-white z-10" >
                    <div className="lg:flex-1 flex flex-col">
                        <h2 className="pb-0 leading-none text-large-30 font-normal text-black pb-5">
                            EPFO UAN Verification API
                        </h2>
                        <p className="text-xextra-small font-light  text-start">
                            Verify EPFO UAN details via mobile number for seamless onboarding, data accuracy, and EPFO compliance, ensuring efficient and secure workforce management.                        </p>
                        <p className="pt-8 pb-4 text-small font-normal">Learn More :</p>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit text-xextra-small">
                            Instantpay EPFO UAN Verification API
                        </Link>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit mt-2 text-xextra-small">
                            Know EPFO UAN Verification
                        </Link>
                    </div>
                    <div className="lg:flex-1">
                        <Image
                            src={Images.car}
                            alt="support"
                            quality={100}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
                {/* API Block 8 */}
                <div className="flex flex-wrap justify-between items-center gap-20 pt-10 sticky top-20 bg-white z-10"   >
                    <div className="lg:flex-1 flex flex-col">
                        <h2 className="pb-0 leading-none text-large-30 font-normal text-black pb-5">
                            Litigation Check
                        </h2>
                        <p className="text-xextra-small font-light  text-start">
                            Verify businesses or individuals' criminal records through India’s litigation databases, ensuring secure hiring, fraud prevention, compliance, and risk assessment.    </p>
                        <p className="pt-8 pb-4 text-small font-normal">Learn More :</p>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit text-xextra-small">
                            Instantpay Litigation Check API
                        </Link>
                        <Link href="#" className="py-3 bg-black rounded-full text-white px-10 w-fit mt-2 text-xextra-small">
                            Know Litigation Check
                        </Link>
                    </div>
                    <div className="lg:flex-1">
                        <Image
                            src={Images.car}
                            alt="support"
                            quality={100}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Futurereadyapi;
