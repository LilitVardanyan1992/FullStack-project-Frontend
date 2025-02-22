"use client";
import React from "react";
import StarSVG from "./StarSvg";

interface SingleGoogleReviewProps {
  review: {
    author_title: string;
    review_text: string;
    review_datetime_utc: string;
    author_image: string;
    review_rating: number;
  };
}

const SingleGoogleReview: React.FC<SingleGoogleReviewProps> = ({ review }) => {
  const {
    author_title,
    review_text,
    review_datetime_utc,
    author_image,
    review_rating,
  } = review;

  return (
    <div>
      <div className="flex justify-between items-start mb-[15px]">
        <div className="flex justify-between items-center gap-[14px]">
          <div>
            <img src={author_image} height={40} width={40} />
          </div>
          <div className="flex flex-col items-start gap-[3px]">
            <div className="font-semibold text-[14px] text-primary">
              {author_title}
            </div>
            <div className="flex justify-between items-center gap-[6px]">
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.407 8.14421C14.407 7.59608 14.3625 7.19608 14.2662 6.78128H8.00391V9.25528H11.6797C11.6056 9.87015 11.2054 10.7961 10.3161 11.4183L10.3036 11.5011L12.2836 13.0342L12.4208 13.0479C13.6807 11.8849 14.407 10.1738 14.407 8.14421Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M8.00277 14.6659C9.80364 14.6659 11.3155 14.0732 12.4198 13.0511L10.315 11.4214C9.75177 11.814 8.99584 12.0881 8.00277 12.0881C6.23898 12.0881 4.74196 10.9251 4.20832 9.31772L4.1301 9.32432L2.07123 10.9169L2.04431 10.9917C3.14113 13.1695 5.39409 14.6659 8.00277 14.6659Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.20883 9.31754C4.06802 8.90274 3.98653 8.45828 3.98653 7.99901C3.98653 7.53974 4.06802 7.09528 4.20142 6.68048L4.19769 6.59215L2.11302 4.97397L2.04481 5.0064C1.59276 5.91011 1.33337 6.92494 1.33337 7.99901C1.33337 9.07308 1.59276 10.0879 2.04481 10.9916L4.20883 9.31754Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M8.00277 3.9111C9.25524 3.9111 10.1001 4.45184 10.5818 4.90372L12.4642 3.06668C11.3081 1.9926 9.80364 1.33334 8.00277 1.33334C5.39409 1.33334 3.14113 2.82963 2.04431 5.00739L4.20091 6.68148C4.74196 5.07408 6.23898 3.9111 8.00277 3.9111Z"
                    fill="#EB4335"
                  />
                </svg>
              </div>
              <div>
                <StarSVG rating={review_rating} />
              </div>
            </div>
          </div>
        </div>
        <div className="font-medium text-[12px] text-secondary">
          {review_datetime_utc}
        </div>
      </div>
      <div className="text-[14px] font-normal text-secondary">
        {review_text}
      </div>
    </div>
  );
};

export default SingleGoogleReview;
