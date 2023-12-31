import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

function AboutMe() {

    const { isLoading, error, data } = useQuery('background', () =>
        axios.get('api/background')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <BannerLayout>
           <div className="px-4 pt-10 pb-2 aos-zoom-in">
                <div className="max-w-full mx-auto text-center leading-relaxed mb-8">
                    <div className="mt-5 md:mt-0 text-2xl mb-5 text-Snow font-semibold">About Me</div>

                    {/* Added paragraph for About Me content */}
                        <p className="text-base text-Snow leading-relaxed mb-8 text-justify max-w-full">
                            Precious isn't just a software engineer; he's a symphony conductor, orchestrating lines of code into digital masterpieces. Python, Django, React JS, and TypeScript are his instruments, each wielded with the expertise of a seasoned virtuoso. But his talents extend beyond the technical realm. Like a sculptor shaping his own destiny, Precious is an SEO savant, molding online landscapes to attract and captivate audiences.

                            <br />
                            <br />

                            His passion for technology isn't a solitary pursuit. It's a shared flame, burning brightly in the co-founding of Grandalat Tech Agency. This agency serves as Precious' canvas, where he and his team translate their digital prowess into innovative solutions for the real world. Whether it's crafting sleek websites, building intuitive apps, or weaving intricate SEO strategies, Grandalat paints a picture of technological brilliance.

                            <br />
                            <br />

                            Yet, beneath the surface of technical expertise lies a human touch. Precious' code hums with the rhythm of understanding, each line a testament to his empathy for the people who will use it. He's a bridge builder, connecting the technical and the human, the complex and the intuitive.

                            <br />
                            <br />

                            So, when you meet Precious, don't just see a software engineer or an SEO whiz. See a visionary, a collaborator, a tech renaissance man weaving a future where technology and humanity dance in perfect harmony. That's the essence of Precious.
                        </p>

                    {/* Remaining code ... */}

                    {isLoading ? (
                        [1, 2, 3].map(() => (
                            <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                        ))
                    ) : (
                        data && data[0]?.aboutmeCards?.map((data, key) => (
                            <AboutMe_Card key={key} data={data} />
                        ))
                    )}
                </div>
            </div>

            <Footer />
        </BannerLayout>
    );
}

export default AboutMe;
