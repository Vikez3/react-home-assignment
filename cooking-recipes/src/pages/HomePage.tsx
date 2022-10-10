import { RecipeType } from "../../data/types";
import RecipesListing from "../components/RecipesListing";

type Props = {
  data: RecipeType[];
};

export default function HomePage({data}: Props) {
  return (
    <div className="container py-5">
      <div className="text-center pb-3">
        <h1>Cooking Recipes</h1>
        <p>Try our tastey recipes and add your favourite ones.</p>
      </div>
      <RecipesListing data={data}/>
    </div>
  );
}
