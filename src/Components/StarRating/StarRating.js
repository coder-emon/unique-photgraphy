import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const StartRating = ({ stars }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index} className="text-[#ffc107] text-3xl">
                {stars >= index + 1 ? (
                    <FaStar></FaStar>
                ) : stars >= number ? (
                    <FaStarHalfAlt></FaStarHalfAlt>
                ) : (
                    <AiOutlineStar></AiOutlineStar>
                )}
            </span>
        );
    });
    return <div className="flex">{ratingStar}</div>;
};

export default StartRating;
