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
      <div className="container">
        <form onSubmit={handleChangeProduct}>
          <h4 className="login-h2">CreateProduct</h4>
          <input
            value={formData.title}
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="title"
          />
          <input
            value={formData.price}
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="price"
          />
          <input
            value={formData.oldPrice}
            onChange={handleChange}
            type="number"
            name="oldPrice"
            placeholder="oldPrice"
          />
          <input
            value={formData.category}
            onChange={handleChange}
            type="text"
            name="category"
            placeholder="category"
          />
          <input
            value={formData.units}
            onChange={handleChange}
            type="text"
            name="units"
            placeholder=""
          />
          <textarea
            value={formData.description}
            onChange={handleChange}
            name="description"
            id=""
            placeholder="description"
          ></textarea>
          <textarea
            value={formData.info}
            onChange={handleChange}
            name="info"
            id=""
            placeholder="info"
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
