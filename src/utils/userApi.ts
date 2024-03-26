import { $authHost } from "./index";

export interface IUserMe {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  surname: string;
  company?: {};
}
const getUsers = async () => {
  const response = await $authHost.get(
    "/users?&populate=company&sort[1]=company.createdAt:desc"
  );
  const filtered = response.data.filter((user: IUserMe) => user.company);
  return filtered;
};

const getOneUserWithCompanyRelation = async (id: number) => {
  return await $authHost.get(`/users/${id}?populate=*`);
};

const getUserMe = async (): Promise<IUserMe> => {
  try {
    const response = await $authHost.get(`/users/me`);
    return response.data as IUserMe;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export { getUsers, getOneUserWithCompanyRelation, getUserMe };
