import axios from "axios";

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export function getAddressInfo(CEP) {
  return api.get(`${CEP}/json/`)
};







