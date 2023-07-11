export interface Recipe {
  id: string;
  name: string; //The name of the recipe.
  origin: string; //The origin of the recipe.
  description: string; //The description of the recipe.
  difficulty: number; //The difficulty level of the recipe.
  protein: string; //The protein used in the recipe.
  produce: string; //The produce used in the recipe.
  spice: string; //The spice used in the recipe.
  cookingOil: string; //The cooking oil used in the recipe.
  volume: number; //The volume of the recipe.
  serves: number; //The number of servings the recipe provides.
  authenticity: string; //The authenticity of the recipe.
  stock: string; //The stock used in the recipe.
}
