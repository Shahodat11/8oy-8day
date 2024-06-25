import React, { useState } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useCreateProductMutation } from "../../context/api/productApi";
import LocalImages from "./LocalImages";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};

const CreateProduct = () => {
  const [files, setFiles] = useState("");

  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const [createProduct, { isLoading }] = useCreateProductMutation();

  const handleChangeProduct = (e) => {
    e.preventDefault();
    const form = new FormData();

    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("units", formData.units);
    form.append("description", formData.description);
    form.append("info", JSON.stringify({}));

    Array.from(files).forEach((img) => {
      form.append("files", img, img.name);
    });

    createProduct(form);
    console.log(formData);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleChangeProduct}>
          <h2>CreateProduct</h2>
          <input
            value={formData.title}
            onChange={handleChange}
            type="text"
            name="title"
          />
          <input
            value={formData.price}
            onChange={handleChange}
            type="number"
            name="price"
          />
          <input
            value={formData.oldPrice}
            onChange={handleChange}
            type="number"
            name="oldPrice"
          />
          <input
            value={formData.category}
            onChange={handleChange}
            type="text"
            name="category"
          />
          <input
            value={formData.units}
            onChange={handleChange}
            type="text"
            name="units"
          />
          <textarea
            value={formData.description}
            onChange={handleChange}
            name="description"
            id=""
          ></textarea>
          <textarea
            value={formData.info}
            onChange={handleChange}
            name="info"
            id=""
          ></textarea>
          <div>
            <input
              onChange={(e) => setFiles(e.target.files)}
              type="file"
              multiple
              accept="image/*"
            />
            <LocalImages files={files} setFiles={setFiles} />
          </div>
          <button disabled={isLoading}>create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
