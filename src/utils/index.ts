import axios from "axios";

const $host = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
});

const $authHost = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
});

const authInterceptor = async (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

const onResponseFail = (error: {
  status: any;
  response: { status: any };
  message: string;
}) => {
  const status = error.status || error.response.status;
  if (status === 401 || (status === 400 && error.message === "jwt expired")) {
    localStorage.removeItem("token");
  }

  return Promise.reject(error);
};

const handleTokenExpiration = () => {
  localStorage.removeItem("token");
  window.location.href = "/auth/local";
};

$authHost.interceptors.request.use(authInterceptor, onResponseFail);

$authHost.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error, "errorerror");
    if (
      error.response.data.message == "jwt expired" &&
      error.response.data.statusCode == 400
    ) {
      handleTokenExpiration();
    }
  }
);

export { $host, $authHost };
