import axios, { AxiosError } from "axios";
import { Recipe } from "./interface";

const API_URL = "http://localhost:5000";

export const retrieveAllRecipes = async () => {
  try {
    const res = await axios.get(`${API_URL}/recipes`);

    return res.data.message;
  } catch (err: any) {
    throw new Error((err as AxiosError).message);
  }
};
export const createOneRecipe = async (data: Omit<Recipe, "id">) => {
  try {
    const res = await axios.post(`${API_URL}/recipes`, {
      ...data,
    });

    return res.data.message;
  } catch (err: any) {
    console.log(err);
    throw new Error((err as AxiosError).message);
  }
};
