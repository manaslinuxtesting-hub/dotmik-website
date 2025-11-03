import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import 'aos/dist/aos.css';

const Powerofbank = () => {
  return (
    <>
      <div className="relative lg:py-40 py-20 w-full h-full mx-auto text-center px-10 md:max-w-[1350px]">
        <h2 className="pt-10 pb-8 leading-none text-center lg:text-medium-50 !font-bold text-5xl text-black" data-aos="fade-up">Feel the Energy of Integrated Banking
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 pt-10">
          <div className="flex flex-col border border-[#606060] p-8 rounded-[10px] text-start card-hover" data-aos="fade-up">
            <Image
              src={Icons.accountheadling}
              alt="support"
              width={40}
              height={40}
              className=" mb-6"
            />
            <h4 className="mb-2 text-large-30 font-semibold leading-[1.2]">Integrated Account Handling</h4>
            <p className="text-1x8 text-lightblack">Merge your bank accounts effortlessly and oversee them through a single, user-centric platform.
            </p>
          </div>
          <div className="flex flex-col border border-[#545454] p-8 rounded-[10px] text-start card-hover" data-aos="fade-up">
            <Image
              src={Icons.cconneactedbank}
              alt="support"
              width={50}
              height={50}
              className=" p-2.5 mb-6"
            />
            <h4 className="mb-2 text-large-30 font-semibold leading-[1.2]">Top Connected Banking</h4>
            <p className="text-1x8 text-lightblack">Our dashboard connects all banks while ensuring your data’s safety with multiple layers of security.</p>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 pt-5">
          <div className="flex flex-col border border-[#606060] p-8 rounded-[10px] text-start card-hover" data-aos="fade-up">
            <Image
              src={Icons.sacalbussness}
              alt="support"
              width={50}
              height={50}
              className="p-2  mb-6"
            />
            <h4 className="mb-2 text-large-30 font-semibold leading-[1.2]">Scale Your Business with Smart, Secure Banking
            </h4>
            <p className="text-1x8 text-lightblack">Our platform connects all your bank accounts into a secure, scalable dashboard that handles large volumes, prevents fraud, and ensures uninterrupted business growth.
            </p>
          </div>
          <div className="flex flex-col border border-[#545454] p-8 rounded-[10px] text-start card-hover" data-aos="fade-up">
            <Image
              src={Icons.quiceaccun}
              alt="support"
              width={50}
              height={50}
              className=" p-1.5  mb-6"
            />
            <h4 className="mb-2 text-large-30 font-semibold leading-[1.2]">Quick Account Reconciliation</h4>
            <p className="text-1x8 text-lightblack">Instantly categorizes and reconciles transactions from connected accounts, minimizing effort.</p>
          </div>
          <div className="flex flex-col border border-[#545454] p-8 rounded-[10px] text-start card-hover" data-aos="fade-up">
            <Image
              src={Icons.preimemfinnce}
              alt="support"
              width={50}
              height={50}
              className=" p-2  mb-6"
            />
            <h4 className="mb-2 text-large-30 font-semibold leading-[1.2]">Premium Financial Solutions</h4>
            <p className="text-1x8 text-lightblack">Unify financial management, gift cards, and 100+ brand vouchers to empower teams and strengthen customer loyalty.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Powerofbank;
