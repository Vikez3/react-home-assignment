import React from "react";
import { RecipeType } from "../../data/types";

type Props = {
  recipeItem: RecipeType;
};

export default function RecipeCard({ recipeItem }: Props) {
  let min = recipeItem.prepTime;
  let hour = 0;

  if (recipeItem.prepTime! > 60) {
    hour++;
  }

  function timeConvert(n: number) {
    let num = n
    let hours = num / 60
    let rhours = Math.floor(hours)
    let minutes = (hours - rhours) * 60
    let rminutes = Math.round(minutes)
    return `${rhours}:${rminutes} `
  }
  return (
    <div className="col-3 mb-4">
      <div className="card">
        <img
          src={recipeItem.img}
          className="card-img-top"
          alt={recipeItem.name}
        />
        <div className="card-body">
          <h5 className="card-title">{recipeItem.name}</h5>
          <p className="card-text">Source: {recipeItem.recipeSource}</p>
          <p className="card-text">
            Preparation time is {timeConvert(recipeItem.prepTime!)}hrs
          </p>
          <p className="card-text">Ingredients:</p>
          <ul></ul>
          <p className="card-text">
            {recipeItem.prepInstructions?.slice(0, 50)}...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
