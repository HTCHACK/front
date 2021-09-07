import Api from "./api";
import NProgress from "nprogress";

const END_POINT = "getCars";
const getProducts = "getProducts";
const getHolds = "getHolds";

Api.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

Api.interceptors.response.use((response) => {
  NProgress.done();
  return response;
});

export default {
  getCars() {
    return Api.get(END_POINT);
  },

  getProducts(id) {
    return Api.get(`${getProducts}/${id}`);
  },

  getHolds(id) {
    return Api.get(`${getHolds}/${id}`);
  },
};
