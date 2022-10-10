import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeType } from "../../data/types";
import DeleteModal from "../components/Modal";
import NotFound from "../components/NotFound";
import { incrementByAmount } from "../redux/counter";
import { useAppDispatch } from "../redux/hooks";

type Props = {
  data: RecipeType[];
};

export default function DeatailPage({ data }: Props) {
  const { id } = useParams();

  const [newData, setNewData] = useState(data);
  const dispatch = useAppDispatch();

  const currentRecipe = data.find((item) => item.id === id);
  const ingredients = currentRecipe?.ingredients;

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleRemoveRecipe = () => {
    const fillteredData = newData.filter((item) => {
      return item.id !== id;
    });
    setNewData(fillteredData);
    handleCloseModal();

    fetch(`http://localhost:5000/recipes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        window.location.href = "http://localhost:3000/";
      }
    });
  };

  useEffect(() => {
    dispatch(incrementByAmount(newData));
  }, [newData]);

  if (currentRecipe) {
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
          <button className="btn btn-danger w-75" onClick={handleShowModal}>
            Remove recipe
          </button>
        </div>
        <DeleteModal
          handleRemoveData={handleRemoveRecipe}
          modalShow={showModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
    );
  } else {
    return <NotFound />;
  }
}
