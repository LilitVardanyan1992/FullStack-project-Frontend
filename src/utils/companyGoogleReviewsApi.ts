import { $authHost } from "./index";

// for getCompanyByUser function
export interface IUserInterface {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  surname: string;
  company: {
    id: number;
    companyName: string;
    companyAddress: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

const fetchGoogleReviews = async function (
  companyName: string,
  companyAddress: string
) {
  try {
    const data = {
      data: {
        companyName,
        companyAddress,
      },
    };
    const result = $authHost.post("/companies", data);
    return { success: true };
  } catch (error) {
    throw new Error("Error company with google reviews sync");
  }
};

const getCompanyByUser = async (id: number) => {
  try {
    const response = await $authHost.get(
      `http://localhost:1337/api/users/${id}?populate=*`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetchong company y user");
  }
};

const getReviewsByCompany = async (id: number): Promise<IUserInterface> => {
  try {
    const response = await $authHost.get(
      `/companies/${id}/?sort[0]=createdAt:asc&populate=*`
    );
    const google_reviews = response?.data?.data?.attributes?.google_reviews;

    return google_reviews;
  } catch (error) {
    throw new Error("Error fetching google reviews by company");
  }
};

export { fetchGoogleReviews, getCompanyByUser, getReviewsByCompany };
