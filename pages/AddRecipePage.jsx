import React, { useState, useRef } from "react";

const AddRecipePage = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const handleCancelImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div
      className="bg-slate-200 flex flex-col w-screen h-screen"
      style={{ padding: "2rem" }}
    >
      <div className="flex flex-col flex-grow">
        <form
          className="flex flex-col justify-between flex-grow space-y-4 p-10 "
          style={{ background: "white", gap: "1.75rem" }}
        >
          <div className="flex justify-center text-3xl mb-4 font-bold">
            Add New Recipe
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex text-xl font-semibold">Recipe Name:</label>
            <input
              type="text"
              className="flex w-full p-2 rounded-lg "
              style={{ border: "2px solid black" }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex text-xl font-semibold">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 border border-gray-300 "
              ref={fileInputRef}
            />
            {image && (
              <div className="flex flex-col items-center">
                <img
                  src={image}
                  alt="Preview"
                  className="w-64 h-64 object-cover mt-4"
                />
                <button
                  type="button"
                  onClick={handleCancelImage}
                  className="mt-2  text-white p-2 "
                  style={{ background: "red" }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex text-xl font-semibold">Category</label>
            <select
              name="category"
              id="category"
              multiple
              className="p-2 border border-gray-300 rounded-lg"
              style={{ border: "2px solid black " }}
            >
              <option>Healthy</option>
              <option>Spicy</option>
              <option>Weight-Loss</option>
              <option>Italian</option>
              <option>Traditional</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex text-xl font-semibold">Description:</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-lg w-full  "
              style={{
                border: "2px solid black ",
                height: "80px",
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex text-xl font-semibold">Time to cook:</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              style={{ border: "2px solid black" }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex text-xl font-semibold">Ingredients:</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-lg"
              style={{ border: "2px solid black" }}
            />
          </div>
          <button
            type="submit"
            style={{ background: "Orange" }}
            className="font-bold p-1 rounded-full"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipePage;
