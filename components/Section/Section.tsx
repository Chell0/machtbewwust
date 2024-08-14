"use client";
import Slider from "react-slick";
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
        <div className="w-3/4 m-auto mt-5">
            <Slider {...settings}>
                {materials.map((material) => (
                    <div key={material.title} className="py-4 px-4">
                        <MaterialCards card={material} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
