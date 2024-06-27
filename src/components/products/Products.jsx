import React, { useState } from "react";
import "../products/products.css";
import { useGetProductsQuery } from "../../context/api/productApi";
import star from "../../assets/Group 13.svg";
import { Pagination, Box } from "@mui/material";

const perPageCount = 5;

const Products = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetProductsQuery({ limit: perPageCount });
  console.log(data);
  return (
    <div className="container">
      <div className="product">
        <h5>Find your favourite smart watch.</h5>
        <h4>Our Latest Products</h4>
        <div className="products">
          {data?.data?.products?.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.urls[0]} width={210} height={210} alt="" />
              <h3 className="product_h3">{product.title}</h3>
              <img src={star} alt="" />
              <h3 className="product_h3">Price: {product.price}$</h3>
            </div>
          ))}
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          className="pagination"
          count={10}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </div>
  );
};

export default Products;
