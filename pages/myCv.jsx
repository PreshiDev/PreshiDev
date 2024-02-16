import React, { useState, useEffect } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

function MyCv() {
    const [cvUrl, setCvUrl] = useState("/My-Curriculum-Vitae.pdf");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set loading state to false to indicate that the CV URL is available
        setIsLoading(false);
    }, []);

    return (
        <BannerLayout>
            <div className="px-4 pt-10 pb-2 aos-zoom-in">
                <div className="max-w-full mx-auto text-center leading-relaxed mb-8">
                    <div className="mt-5 md:mt-0 text-2xl mb-5 text-Snow font-semibold">About Me</div>

                    {/* Added paragraph for About Me content */}
                    <p className="text-base text-Snow leading-relaxed mb-8 text-justify max-w-full">
                        {/* Your About Me content here */}
                    </p>

                    {/* Display CV PDF */}
                    {!isLoading && (
                        <iframe src={cvUrl} className="w-full h-screen"></iframe>
                    )}

                    {/* Display loading indicator */}
                    {isLoading && (
                        <Skeleton active />
                    )}
                </div>
            </div>

            <Footer />
        </BannerLayout>
    );
}

export default MyCv;
