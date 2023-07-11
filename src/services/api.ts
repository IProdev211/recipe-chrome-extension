import axios, { AxiosError } from "axios";
import { Recipe } from "./interface";

const API_URL =
  "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo";

export const retrieveAllRecipes = async () => {
  try {
    const res = await axios.get(`${API_URL}/recipes`);

    return res.data.message;
  } catch (err: any) {
    return new Error((err as AxiosError).message);
  }
};
export const createOneRecipe = async (data: Omit<Recipe, "id">) => {
  try {
    const res = await axios.post(`${API_URL}/recipes`, {
      ...data,
    });

    return res.data.message;
  } catch (err: any) {
    return new Error((err as AxiosError).message);
  }
};
