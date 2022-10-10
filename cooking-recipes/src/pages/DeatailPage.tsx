import React from "react";
import { useParams } from "react-router-dom";
import { RecipeType } from "../../data/types";

type Props = {
  data: RecipeType[];
};

export default function DeatailPage({ data }: Props) {
  const { id } = useParams();

  const currentRecipe = data.find((item) => item.id === id);
  const ingredients = currentRecipe?.ingredients;

  return (
    <div className="container py-5">
      <h1 className="text-center">{currentRecipe!.name}</h1>
      <div className="row pt-4">
        <div className="col-12 col-lg-6">
          <img
            className="detail-img rounded"
            src={currentRecipe?.img}
            alt={currentRecipe?.name}
          />
        </div>
        <div className="col-12 col-lg-6">
          <p>
            <span className="fw-bold">Recipe source:</span>{" "}
            {currentRecipe?.recipeSource}
          </p>
          <p>
            <span className="fw-bold">Preparation time:</span>{" "}
            {currentRecipe?.prepTime}
          </p>
          <p>
            <span className="fw-bold">Ingredients:</span>
          </p>
          <ul>
            {ingredients?.map((ing) => {
              for (let [key, value] of Object.entries(ing)) {
                return (
                  <li key={`${Date.now()}-${key}-${value}`}>
                    {key}: {value}gr
                  </li>
                );
              }
            })}
          </ul>
          <p>
            <span className="fw-bold">Preparation instructions:</span>{" "}
            {currentRecipe?.prepInstructions}
          </p>
        </div>
      </div>
      <div className="py-3 text-center">
        <button className="btn btn-danger w-75">Remove recipe</button>
      </div>
    </div>
  );
}
