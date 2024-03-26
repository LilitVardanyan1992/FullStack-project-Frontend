"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./style.css";
import { fetchGoogleReviews } from "@/utils/companyGoogleReviewsApi";

const Profile = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyAddress: "",
    syncReviews: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetchGoogleReviews(
        formData.companyName,
        formData.companyAddress
      );

      router.push("/dashboard");
    } catch (error) {
      console.error("Error fetching Google reviews:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-end items-center bg-gray-100 pr-[64px] pt-[24px] cursor-pointer">
        <p className="pr-[16px]" onClick={() => router.push("/dashboard")}>
          Dashboard
        </p>
        <svg
          width="40px"
          height="40px"
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/");
          }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12L13 12"
            stroke="#323232"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
            stroke="#323232"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
            stroke="#323232"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[12px]">Logout</span>
      </div>
      <div className="flex justify-center items-start min-h-screen bg-gray-100">
        <div className="max-w-md w-full py-12 px-6">
          <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
                disabled={!formData.syncReviews}
                className={`input ${
                  formData.syncReviews ? "" : "input-disabled"
                }`}
              />
              <p className="text-xs text-gray-500">
                {formData.syncReviews
                  ? "Enter your company name"
                  : "Enable sync reviews to edit"}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyAddress"
                placeholder="Company Address"
                value={formData.companyAddress}
                onChange={handleChange}
                required
                disabled={!formData.syncReviews}
                className={`input ${
                  formData.syncReviews ? "" : "input-disabled"
                }`}
              />
              <p className="text-xs text-gray-500">
                {formData.syncReviews
                  ? "Enter your company address"
                  : "Enable sync reviews to edit"}
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="syncReviews"
                checked={formData.syncReviews}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">
                Sync Google Reviews
              </label>
            </div>
            <button
              type="submit"
              className="button"
              disabled={!formData.syncReviews}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
