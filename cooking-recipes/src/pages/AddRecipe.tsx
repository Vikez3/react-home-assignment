import React from "react";

type Props = {};

export default function AddRecipe({}: Props) {
  return (
    <div className="container pt-5">
      <h1 className="text-center">Add your recipe</h1>
      <form action="#" className="p-4">
        <div className="row mb-2">
          <div className="col-6">
            <label htmlFor="">Enter recipe name</label>
            <input type="text" name="" className="form-control mt-2" />
          </div>
          <div className="col-6">
            <label htmlFor="">Enter recipe source</label>
            <input type="text" name="" className="form-control mt-2" />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <label htmlFor="">Enter preparation time</label>
            <input type="number" name="" className="form-control mt-2" />
          </div>
          <div className="col-6">
            <label htmlFor="">Enter image url</label>
            <input type="text" className="form-control mt-2" />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <label htmlFor="">Choose ingredient</label>
            <select name="" className="form-control mt-2">
              <option value="">Choose ingredient</option>
            </select>
          </div>
          <div className="col-6">
            <label htmlFor="">Choose ingridient quantity</label>
            <input type="number" className="form-control mt-2" />
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col-6">
            <label htmlFor="">Enter recipe source</label>
            <textarea name="" id="" className="form-control mt-2"></textarea>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <button className="btn btn-primary w-100">
                  Add one more ingridient
                </button>
              </div>
              <div className="col-6">
                <button className="btn btn-success w-100">Add Recipe</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
