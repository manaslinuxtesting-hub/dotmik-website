import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Crafted from "../components/crafted/page";
import Allatoneplace from "../components/allatoneplace/page";
import Cardsuniquely from "../components/cardsuniquely/page";
import Automatecard from "../components/automatecard/page";
import 'aos/dist/aos.css'; 

const Expensecard = () => {
    return (
        <>
            <div className="h-banner py-40 lg:px-20 px-10 blog-banner">
                <h1 className="pt-10 pb-8 leading-[64px] text-white text-center lg:text-medium-54 font-bold text-5xl"  data-aos="fade-up">
                    One Card for All Your <br  />
                    Business Expenses
                </h1>
                <p className="text-white lg:text-1x8  font-normal text-xl px-5 text-center"  data-aos="fade-up">
                    Manage team expenses, track real-time spending, and efficiently <br /> handle payroll with enhanced visibility and control without any separate account.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-12"  data-aos="fade-up">
                    <Link href="/" className="flex items-center gap-2 banner-button">
                        Launch API
                    </Link>
                    <Link href="/" className="flex items-center gap-2 banner-button">
                        Let's Talk   
                    </Link>
                </div>
            </div>

            <Crafted />
            <Allatoneplace />
            <Cardsuniquely />
            <Automatecard />
            <Faq />
            <Security />

        </>
    );
};

export default Expensecard;
