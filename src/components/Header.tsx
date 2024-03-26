"use client";
interface HeaderProps {
  handleIsLoginedUser: () => void;
}
const Header: React.FC<HeaderProps> = ({ handleIsLoginedUser }) => {
  return (
    <header className="bg-white py-4 px-[64px] py-[28px]">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-1 cursor-pointer">
          <svg
            width="39"
            height="40"
            viewBox="0 0 39 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3725 30.1117C14.151 30.1117 9.90091 25.8638 9.90091 20.6402C9.90091 15.4166 14.1489 11.1686 19.3725 11.1686C24.5961 11.1686 28.844 15.4166 28.844 20.6402C28.844 25.8638 24.5961 30.1117 19.3725 30.1117ZM19.3725 17.3269C17.5442 17.3269 16.057 18.8141 16.057 20.6423C16.057 22.4706 17.5442 23.9578 19.3725 23.9578C21.2007 23.9578 22.6879 22.4706 22.6879 20.6423C22.6879 18.8141 21.2007 17.3269 19.3725 17.3269Z"
              fill="url(#paint0_linear_1_2266)"
            />
            <path
              d="M36.8717 39.5979H2.12829C0.951904 39.5979 0 38.646 0 37.4696V2.12829C0 0.951904 0.951904 0 2.12829 0H35.922C37.6229 0 39 1.37713 39 3.07804C39 4.77895 37.6229 6.15608 35.922 6.15608H6.15608V33.444H32.8461V17.3177H19.1136V11.1617H36.8739C38.0503 11.1617 39.0022 12.1136 39.0022 13.29V37.4718C39.0022 38.6482 38.0503 39.6001 36.8739 39.6001L36.8717 39.5979Z"
              fill="url(#paint1_linear_1_2266)"
            />
            <mask
              id="mask0_1_2266"
              className="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="9"
              y="11"
              width="20"
              height="20"
            >
              <path
                d="M19.3735 30.1172C14.1521 30.1172 9.90195 25.8692 9.90195 20.6456C9.90195 15.422 14.1499 11.1741 19.3735 11.1741C24.5971 11.1741 28.8451 15.422 28.8451 20.6456C28.8451 25.8692 24.5971 30.1172 19.3735 30.1172ZM19.3735 17.3323C17.5452 17.3323 16.058 18.8195 16.058 20.6478C16.058 22.4761 17.5452 23.9633 19.3735 23.9633C21.2018 23.9633 22.689 22.4761 22.689 20.6478C22.689 18.8195 21.2018 17.3323 19.3735 17.3323Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_1_2266)">
              <path
                d="M20.0695 11.165H7.69473V17.3211H20.0695V11.165Z"
                fill="url(#paint2_linear_1_2266)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_2266"
                x1="18.3774"
                y1="35.2662"
                x2="19.6207"
                y2="16.9944"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#26C2FF" />
                <stop offset="1" stopColor="#110687" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_2266"
                x1="26.9015"
                y1="8.38366"
                x2="12.6208"
                y2="30.4091"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#26C2FF" />
                <stop offset="1" stopColor="#005EBD" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_2266"
                x1="20.7904"
                y1="3.58649"
                x2="5.97008"
                y2="26.4495"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#26C2FF" />
                <stop offset="1" stopColor="#005EBD" />
              </linearGradient>
            </defs>
          </svg>

          <h1 className="flex flex-col items-start text-primary-20">
            <span className="text-lg font-bold font-poppins">Lorem Ipsum</span>{" "}
            <span className="text-sm font-normal">company</span>
          </h1>
        </div>

        <nav>
          <div
            className="rounded-full bg-lightGray w-12 h-12 flex justify-center items-center cursor-pointer"
            onClick={() => {
              handleIsLoginedUser();
            }}
          >
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7779 9.1652C10.9565 9.714 9.9909 10.0072 9.0031 10.0078H8.9969C7.6719 10.007 6.40142 9.4803 5.46447 8.5433C4.52678 7.60567 4 6.3339 4 5.00781C4 4.01891 4.29324 3.05221 4.84265 2.22996C5.39206 1.40772 6.17295 0.76686 7.0866 0.38842C8.0002 0.00998029 9.0055 -0.0890399 9.9755 0.10389C10.9454 0.29681 11.8363 0.77302 12.5355 1.47228C13.2348 2.17154 13.711 3.06246 13.9039 4.03236C14.0969 5.00227 13.9978 6.0076 13.6194 6.92123C13.241 7.83486 12.6001 8.6158 11.7779 9.1652ZM9 8.0078C9.5933 8.0078 10.1734 7.83187 10.6667 7.50222C11.1601 7.17258 11.5446 6.70404 11.7716 6.15586C11.9987 5.60768 12.0581 5.00449 11.9424 4.42254C11.8266 3.8406 11.5409 3.30605 11.1213 2.88649C10.7018 2.46694 10.1672 2.18121 9.5853 2.06546C9.0033 1.9497 8.4001 2.00911 7.852 2.23618C7.3038 2.46324 6.83524 2.84776 6.50559 3.3411C6.17595 3.83445 6 4.41447 6 5.00781C6 5.80346 6.31607 6.56652 6.87868 7.12913C7.4413 7.69174 8.2044 8.0078 9 8.0078ZM16 17C16 17.2652 15.8946 17.5196 15.7071 17.7071C15.5196 17.8946 15.2652 18 15 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17C2 16.2044 2.31607 15.4413 2.87868 14.8787C3.44129 14.3161 4.20435 14 5 14H13C13.7956 14 14.5587 14.3161 15.1213 14.8787C15.6839 15.4413 16 16.2044 16 17ZM1.46447 13.4645C2.40215 12.5268 3.67392 12 5 12H13C14.3261 12 15.5979 12.5268 16.5355 13.4645C17.4732 14.4021 18 15.6739 18 17C18 17.7956 17.6839 18.5587 17.1213 19.1213C16.5587 19.6839 15.7956 20 15 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7956 0 17C0 15.6739 0.52678 14.4021 1.46447 13.4645Z"
                fill="#4B5563"
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
