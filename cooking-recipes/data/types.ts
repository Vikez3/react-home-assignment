export interface IngredientType {
  flour?: number;
  milk?: number;
  oil?: number;
  salt?: number;
  sugar?: number;
  eggs?: number;
  tomatoes?: number;
  peppers?: number;
  cheese?: number;
  potatoes?: number;
  meat?: number;
  pasta?: number;
  ketchup?: number;
}

export interface RecipeType {
  id?: string;
  img?: string;
  name?: string;
  recipeSource?: string;
  ingredients?: IngredientType[];
  prepTime?: number;
  prepInstructions?: string;
}
