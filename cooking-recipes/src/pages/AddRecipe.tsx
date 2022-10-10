import { objectTraps } from "immer/dist/internal";
import { useEffect, useState } from "react";
import { RecipeType } from "../../data/types";
import { incrementByAmount } from "../redux/counter";
import { useAppDispatch } from "../redux/hooks";

type Props = {
  data: RecipeType[];
};

export default function AddRecipe({ data }: Props) {
  const dispatch = useAppDispatch();

  const [recipesData, setrecipesData] = useState(data);
  const [ingredients, setIngerients] = useState([]);
  const [newRecipe, setNewRecipe] = useState<RecipeType>({
    id: Date.now().toString(),
    img: "",
    name: "",
    recipeSource: "",
    ingredients: [],
    prepTime: 0,
    prepInstructions: "",
  });

  const [newIngredientType, setNewIngredientType] = useState("");
  const [newIngredientQuantity, setNewIngredientQuantity] = useState(0);
  const [newIngredient, setNewIngredient] = useState({});
  const [recipeValidation, setRecipeValidation] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/ingredients")
      .then((res) => res.json())
      .then((data) => setIngerients(data));
  }, []);

  useEffect(() => {
    if (
      newRecipe.name !== "" &&
      newRecipe.prepTime !== 0 &&
      newRecipe.prepInstructions !== "" &&
      newRecipe.img !== "" &&
      newRecipe.ingredients!.length !== 0
    ) {
      setRecipeValidation(false);
    } else {
      setRecipeValidation(true);
    }
  }, [newRecipe]);

  useEffect(() => {
    dispatch(incrementByAmount(recipesData));
  }, [recipesData]);

  const updateApiData = (dataObject: RecipeType) => {
    fetch(`http://localhost:5000/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    })
  };

  return (
    <div className="container py-5">
      <h1 className="text-center">Add your recipe</h1>
      <div className="row">
        <div className="col-12 col-lg-8">
          <form
            action="#"
            className="p-4"
            onSubmit={(e) => {
              e.preventDefault();
              updateApiData(newRecipe);
              setNewRecipe({ ...newRecipe, id: Date.now().toString() });
              setrecipesData([...recipesData, newRecipe]);
              setNewRecipe({
                id: Date.now().toString(),
                img: "",
                name: "",
                recipeSource: "",
                ingredients: [],
                prepTime: 0,
                prepInstructions: "",
              });
            }}
          >
            {recipeValidation === true && (
              <p className="text-danger">
                A recipe must have name, preparation time, instructions, image
                url, and at least one ingredient.
              </p>
            )}
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">Enter recipe name</label>
                <input
                  type="text"
                  value={newRecipe.name}
                  className="form-control mt-2"
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, name: e.target.value })
                  }
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Enter recipe source</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  value={newRecipe.recipeSource}
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, recipeSource: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">
                  Enter preparation time (in minutes)
                </label>
                <input
                  type="number"
                  value={newRecipe.prepTime}
                  className="form-control mt-2"
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, prepTime: +e.target.value })
                  }
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Enter image url</label>
                <input
                  type="text"
                  value={newRecipe.img}
                  className="form-control mt-2"
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, img: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row mb-2 align-items-end">
              <div className="col-12 col-md-4">
                <label className="form-label">Choose ingredient</label>
                <select
                  className="form-control mt-2"
                  value={newIngredientType}
                  onChange={(e) => {
                    setNewIngredientType(e.target.value);
                    setNewIngredient([e.target.value]);
                  }}
                >
                  <option value="">Choose ingredient</option>
                  {ingredients.map((ing, idx) => (
                    <option
                      key={`ingridient-option-key${Date.now() + idx}`}
                      value={ing}
                    >
                      {ing}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label">Choose ingridient quantity</label>
                <input
                  type="number"
                  className="form-control mt-2"
                  value={newIngredientQuantity}
                  disabled={newIngredientType === "" ? true : false}
                  onChange={(e) => {
                    setNewIngredientQuantity(+e.target.value);
                    setNewIngredient({
                      [newIngredientType]: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="col-12 col-md-4">
                <button
                  className="btn btn-primary w-100 mt-2"
                  disabled={newIngredientQuantity <= 0 ? true : false}
                  onClick={(e) => {
                    e.preventDefault();
                    setNewIngredientType("");
                    setNewIngredientQuantity(0);
                    if (Object.keys(newIngredient).length !== 0) {
                      newRecipe.ingredients!.push(newIngredient);
                      setNewIngredient({});
                    }
                  }}
                >
                  Add ingridient
                </button>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-12 col-md-6">
                <label className="form-label">
                  Enter recipe preparation instructions
                </label>
                <textarea
                  className="form-control mt-2"
                  value={newRecipe.prepInstructions}
                  onChange={(e) =>
                    setNewRecipe({
                      ...newRecipe,
                      prepInstructions: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="col-12 col-md-6">
                <button
                  className="btn btn-success w-100 mt-2"
                  disabled={recipeValidation === true ? true : false}
                  type="submit"
                >
                  Add Recipe
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-4 p-4 ">
          <h3>Newrecipe data review</h3>
          <p>Name: {newRecipe.name}</p>
          <p>Source: {newRecipe.recipeSource}</p>
          <p>Preparation time: {newRecipe.prepTime}min</p>
          <p>Image url: {newRecipe.img}</p>
          <p>Instructions: {newRecipe.prepInstructions}</p>
          <p>Ingredients: </p>
          <ul>
            {newRecipe.ingredients?.map((ing, idx) => {
              for (let [key, value] of Object.entries(ing)) {
                return (
                  <li key={`${Date.now()}-${key}-${value}-${idx}`}>
                    {key}: {value}gr
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
