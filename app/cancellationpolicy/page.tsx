"use client";

import Link from "next/link";
import 'aos/dist/aos.css';

const Cancellationpolicy = () => {
    return (
        <>
            <div className="h-banner py-40 lg:px-20 px-10 blog-banner ">
                <div className="md:w-[1350px] mx-auto">
                    <h1 className="pt-10 pb-10 leading-[1.2] text-white text-center lg:text-medium-50 !font-bold text-5xl" data-aos="fade-up">
                        Cancellation Policy
                    </h1>
                    <p className="text-small font-normal text-white " data-aos="fade-up">Thank you for choosing our software development services.We understand that circumstances may arise where you need to cancel a project or service. Our cancellation policy is designed to be fair and transparent to both parties involved.
                    </p>
                    <h2 className="pt-8 pb-8 leading-[1.2] text-white text-start !font-bold text-large-30" data-aos="fade-up">
                        Cancellation Period:
                    </h2>
                    <p className="text-small font-normal text-white pb-6" data-aos="fade-up">Clients may cancel a project or service at any time, but please note that certain conditions and fees may apply depending on the stage of the project.</p>
                    <h2 className="pt-10 pb-8 leading-[1.2] text-white text-start !font-bold text-large-30" data-aos="fade-up">
                        Cancellation Fees:
                    </h2>
                    <ul className="pb-6" data-aos="fade-up">
                        <li className="text-small font-normal text-white ">Early Stage Cancellation: If a project is cancelled within the first 30 days from the project start date and no work has commenced, there will be no cancellation fee.</li>
                        <li className="text-small font-normal text-white ">Mid-Stage Cancellation: If a project is cancelled after work has commenced but is not yet completed, a cancellation fee will apply based on the amount of work completed and costs incurred up to the cancellation date.</li>
                        <li className="text-small font-normal text-white ">Late Stage Cancellation: If a project is cancelled after it is completed but before delivery or acceptance, the full project fee may still apply.</li>

                    </ul>
                    <h2 className="pt-10 pb-8 leading-[1.2] text-white text-start !font-bold text-large-30" data-aos="fade-up">
                        Refunds:
                    </h2>
                    <p className="text-small font-normal text-white " data-aos="fade-up">Refunds, if applicable, will be processed within a reasonable timeframe after the cancellation is confirmed. The amount of refund, if any, will be determined based on the stage of the project at the time of cancellation.</p>
                    <h2 className="pt-10 pb-8 leading-[1.2] text-white text-start !font-bold text-large-30" data-aos="fade-up">
                        Process:
                    </h2>
                    <ul className="pb-6" data-aos="fade-up">
                        <li className="text-small font-normal text-white ">Clients must notify us of their intent to cancel a project or service in writing (via email or formal letter).`</li>
                        <li className="text-small font-normal text-white ">Our team will assess the cancellation request and provide details on applicable fees or refunds.</li>
                        <li className="text-small font-normal text-white "> Clients are responsible for any outstanding payments up to the cancellation date.</li>
                    </ul>
                    <h2 className="pt-10 pb-8 leading-[1.2] text-white text-start !font-bold text-large-30" data-aos="fade-up">
                        Exceptions:
                    </h2>
                    <p className="text-small font-normal text-white pb-6" data-aos="fade-up">Force Majeure: In exceptional circumstances such as acts of nature, unforeseen events, or other valid reasons beyond the client's control, the cancellation policy may be waived or adjusted at our discretion.</p>
                    <h2 className="pt-10 pb-8 leading-[1.2] text-white text-start !font-bold text-large-30" data-aos="fade-up">
                        Communication:
                    </h2>
                    <p className="text-small font-normal text-white pb-6" data-aos="fade-up">Clear and open communication is key to resolving cancellation matters efficiently. We encourage clients to discuss any concerns or issues with us directly to explore possible alternatives before opting for cancellation.
                    </p>
                    <h2 className="pt-10 pb-8 leading-[1.2] text-white text-start !font-bold text-large-30" data-aos="fade-up">
                        Revisions:
                    </h2>
                    <p className="text-small font-normal text-white pb-6" data-aos="fade-up">We reserve the right to revise this cancellation policy at any time. Clients will be notified of any changes in advance.

                        By engaging our services, clients acknowledge and agree to abide by this cancellation policy. If you have any questions or require clarification on any aspect of our policy, please feel free to contact us. We value your business and are committed to providing exceptional service.
                    </p>

                </div>
            </div>
        </>
    );
};

export default Cancellationpolicy;
