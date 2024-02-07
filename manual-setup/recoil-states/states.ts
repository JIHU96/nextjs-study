import { atom } from "recoil";

export const movie = {
  title: atom({
    key: "title",
    default: "recoil default",
  }),
};
