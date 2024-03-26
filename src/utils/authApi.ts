import { $host } from "./index";

const register = async (data: any) => {
  return $host.post("/auth/local/register", data);
};

const login = async (data: { identifier: string; password: string }) => {
  return $host.post("/auth/local", data);
};

export { register, login };
