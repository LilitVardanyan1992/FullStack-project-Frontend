"use client";
import React from "react";
import { useState, FormEvent } from "react";
import { register } from "@/utils/authApi";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    surname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      if (response.status === 200) {
        router.push("/login");
      } else {
        setError("Failed to register. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setError("An error occurred while registering");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <svg
          width="39"
          height="40"
          viewBox="0 0 39 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-10 w-auto"
        >
          <path
            d="M19.3724 30.1117C14.151 30.1117 9.90088 25.8638 9.90088 20.6402C9.90088 15.4166 14.1488 11.1686 19.3724 11.1686C24.596 11.1686 28.844 15.4166 28.844 20.6402C28.844 25.8638 24.596 30.1117 19.3724 30.1117ZM19.3724 17.3269C17.5442 17.3269 16.057 18.8141 16.057 20.6423C16.057 22.4706 17.5442 23.9578 19.3724 23.9578C21.2007 23.9578 22.6879 22.4706 22.6879 20.6423C22.6879 18.8141 21.2007 17.3269 19.3724 17.3269Z"
            fill="url(#paint0_linear_1_2119)"
          />
          <path
            d="M36.8717 39.5979H2.12829C0.951904 39.5979 0 38.646 0 37.4696V2.12829C0 0.951904 0.951904 0 2.12829 0H35.922C37.6229 0 39 1.37713 39 3.07804C39 4.77895 37.6229 6.15608 35.922 6.15608H6.15608V33.444H32.8461V17.3177H19.1136V11.1617H36.8739C38.0503 11.1617 39.0022 12.1136 39.0022 13.29V37.4718C39.0022 38.6482 38.0503 39.6001 36.8739 39.6001L36.8717 39.5979Z"
            fill="url(#paint1_linear_1_2119)"
          />
          <mask
            id="mask0_1_2119"
            className="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="9"
            y="11"
            width="20"
            height="20"
          >
            <path
              d="M19.3735 30.1172C14.1521 30.1172 9.90198 25.8692 9.90198 20.6456C9.90198 15.422 14.1499 11.1741 19.3735 11.1741C24.5971 11.1741 28.8451 15.422 28.8451 20.6456C28.8451 25.8692 24.5971 30.1172 19.3735 30.1172ZM19.3735 17.3323C17.5453 17.3323 16.0581 18.8195 16.0581 20.6478C16.0581 22.4761 17.5453 23.9633 19.3735 23.9633C21.2018 23.9633 22.689 22.4761 22.689 20.6478C22.689 18.8195 21.2018 17.3323 19.3735 17.3323Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1_2119)">
            <path
              d="M20.0695 11.165H7.6947V17.3211H20.0695V11.165Z"
              fill="url(#paint2_linear_1_2119)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_2119"
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
              id="paint1_linear_1_2119"
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
              id="paint2_linear_1_2119"
              x1="20.7904"
              y1="3.58649"
              x2="5.97005"
              y2="26.4495"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#26C2FF" />
              <stop offset="1" stopColor="#005EBD" />
            </linearGradient>
          </defs>
        </svg>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="username"
                type="text"
                autoComplete="name"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="surname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                id="surname"
                name="surname"
                type="text"
                autoComplete="surname"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
