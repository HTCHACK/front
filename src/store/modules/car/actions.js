import Car from "@/api/Car";

export const getCars = ({ commit }) => {
  Car.getCars().then((response) => {
    commit("SET_CARS", response.data.all);
  });
};

export const getProducts = ({ commit }, productsId) => {
  Car.getProducts(productsId).then((response) => {
    commit("SET_PRODUCT", response.data.productsId);
  });
};

export const getHolds = ({ commit }, holdsId) => {
  Car.getHolds(holdsId).then((response) => {
    commit("SET_HOLD", response.data.holdsId);
  });
};
