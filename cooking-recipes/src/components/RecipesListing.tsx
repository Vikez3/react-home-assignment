import React from "react";
import { RecipeType } from "../../data/types";
import RecipeCard from "./RecipeCard";

type Props = {
  data: RecipeType[];
};

export default function RecipesListing({ data }: Props) {
  return (
    <div className="container fluid my-3">
      <div className="row">
        {data.map((item) => (
          <RecipeCard key={item.id} recipeItem={item} />
        ))}
      </div>
    </div>
  );
}
