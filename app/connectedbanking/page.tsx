import Powerofbank from "../components/powerofbank/page";
import Financesmanage from "../components/financesmanage/page";
import Beyond from "../components/beyond/page";
import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Newsletter from "../components/newsletter/page";
import 'aos/dist/aos.css';
import Images from "@/app/constants/images";
import Image from "next/image";
const Connectedbanking = () => {
  return (
    <>
      <div className="h-banner py-40 lg:px-20 px-10 !pb-0 blog-banner">
        <h1 className="pt-10 pb-8 leading-none text-heading text-center lg:text-medium-54 font-bold text-5xl" data-aos="fade-up">
          Seamlessly automate and track <br /> all your bank accounts in one spot

        </h1>
        <p className="text-white text-small px-5 text-center" data-aos="fade-up">
          Link all your business accounts across banks on one platform to monitor in <br /> real time and process payouts from a single virtual account.

        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-12" data-aos="fade-up">
          <Link href="/" className="flex items-center gap-2 banner-button">
            Launch API
          </Link>
          <Link href="/" className="flex items-center gap-2 banner-button">
            Let's Talk
          </Link>
        </div>
        <Image
          src={Images.connectedbanner} alt="support" className="object-cover object-center mx-auto rounded-none md:w-[65%] mt-24 " />
      </div>

      {/* Correct usage of Powerofbank */}
      <Powerofbank />
      <Financesmanage />
      <Beyond />
      <Faq />
      <Security />
      <Newsletter />
    </>
  );
};

export default Connectedbanking;
