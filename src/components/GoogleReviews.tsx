import { useEffect, useState, useRef } from "react";
import { getReviewsByCompany } from "@/utils/companyGoogleReviewsApi";
import SingleGoogleReview from "./SingleGoogleReview";
import { getOneUserWithCompanyRelation } from "@/utils/userApi";

type GoogleReviewsProps = {
  userId: number;
  onClose: () => void;
};

const GoogleReviews = ({ userId, onClose }: GoogleReviewsProps) => {
  const [companyData, setCompanyData] = useState<any | null>(null);
  const [googleReviews, setGoogleReviews] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const [showError, setShowError] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOneUserWithCompanyRelation(userId);
        const company = data.data.company;
        if (company) {
          setCompanyData(company);
          try {
            const googleReviewsData: any = await getReviewsByCompany(
              company.id
            );
            const sorted = googleReviewsData.data.sort((a: any, b: any) => {
              const dateA: any = new Date(a.attributes.review_datetime_utc);
              const dateB: any = new Date(b.attributes.review_datetime_utc);
              return dateB - dateA;
            });

            setGoogleReviews(sorted || []);
          } catch (error) {
            console.error("Error fetching google reviews data:", error);
          }
        } else {
          setTimeout(() => {
            setShowError(true);
          }, 2000);
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    setIsOpen(true);
  }, [companyData]);

  function handlerClose() {
    setIsOpen(false);
    onClose();
  }

  if (showError) {
    return <div>There is no company data for that user.</div>;
  }

  if (!companyData) {
    return <div>Loading...</div>;
  }

  const { companyName, companyAddress } = companyData;

  return (
    <div
      className={`py-[24px] pl-[24px] pr-[30px] max-md:pr-[10px] parent flex flex-col mb-[26px] bg-white ${
        isOpen ? "" : "hidden"
      } `}
    >
      {isOpen && (
        <div className="flex justify-between items-center mr-[34px] pb-[26px] border-b-2 border-gray-300">
          <div className="flex flex-col justify-between items-start">
            <div className="text-[18px] text-primary font-bold">
              {companyName}
            </div>
            <div className="text-primary text-[14px] font-medium">
              {companyAddress}
            </div>
          </div>
          <div className="cursor-pointer">
            <svg
              ref={svgRef}
              onClick={() => handlerClose()}
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.7071 2.20711C18.0976 1.81658 18.0976 1.18342 17.7071 0.792893C17.3166 0.402369 16.6834 0.402369 16.2929 0.792893L9 8.08579L1.70711 0.792893C1.31659 0.402369 0.683421 0.402369 0.292897 0.792893C-0.0976277 1.18342 -0.0976277 1.81658 0.292897 2.20711L7.58579 9.5L0.292894 16.7929C-0.0976314 17.1834 -0.0976315 17.8166 0.292894 18.2071C0.683418 18.5976 1.31658 18.5976 1.70711 18.2071L9 10.9142L16.2929 18.2071C16.6834 18.5976 17.3166 18.5976 17.7071 18.2071C18.0976 17.8166 18.0976 17.1834 17.7071 16.7929L10.4142 9.5L17.7071 2.20711Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      )}
      <div
        style={{
          maxHeight: "calc(100vh - 250px)",
          overflow: "scroll",
        }}
        key={1}
        className={`overflow-y-scroll scrollbar-thin scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track bg-white  pt-[26px] flex flex-col gap-[32px] ${
          isOpen ? "" : "hidden"
        } pr-[34px]`}
      >
        {googleReviews.map((item) => (
          <SingleGoogleReview key={item.id} review={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;
