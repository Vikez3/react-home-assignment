import { Link } from "react-router-dom";
import { RecipeType } from "../../data/types";

type Props = {
  recipeItem: RecipeType;
};

export default function RecipeCard({ recipeItem }: Props) {
  let ing = recipeItem.ingredients;
  const keys = ing?.map((item) => Object.keys(item));
  const slicedKeys = keys?.slice(0, 3);

  function timeConvert(n: number) {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return `${rhours}:${rminutes}`;
  }

  return (
    <div className="card-col col-12 col-md-4 col-lg-3 mb-4">
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
            Preparation time:{" "}
            {recipeItem.prepTime! > 60
              ? `${timeConvert(recipeItem.prepTime!)}hr`
              : `${recipeItem.prepTime}min`}
          </p>
          <p className="card-text">Ingredients:</p>
          <ul>
            {slicedKeys!.map((key) => (
              <li key={`${recipeItem.id}-${key}`}>{key}</li>
            ))}
          </ul>
          <p className="card-text">
            {recipeItem.prepInstructions!.length > 50
              ? `${recipeItem.prepInstructions?.slice(0, 50)}...`
              : recipeItem.prepInstructions}
          </p>
          <Link to={`detail/${recipeItem.id}`} className="btn btn-outline-info">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
