"use client";
import Slider from "react-slick";

// Local imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MaterialCards from "../MaterialCards/MaterialCards";
import { SectionProps } from "@/app/lib/interface";


export default function Section({ materials }: SectionProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="w-3/4 m-auto mt-5">
                <Slider {...settings}>
                    {materials.map((material) => (
                        <div key={material.title} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-4">
                            <MaterialCards card={material} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
