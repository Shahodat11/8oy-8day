import React, { useState } from "react";
import "../products/products.css";
import { useGetProductsQuery } from "../../context/api/productApi";
import star from "../../assets/Group 13.svg";
import { Pagination, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Products = () => {
  const [page, setPage] = useState(+sessionStorage.getItem("page-count" || 1));
  const [perPageCount, setPerPageCount] = useState(
    +localStorage.getItem("page") || 5
  );
  const { data } = useGetProductsQuery({ limit: perPageCount, page });
  console.log(data);

  const handleChangePagination = (_, value) => {
    setPage(value);
    sessionStorage.setItem("page-count", value);
  };

  let totalPagination = Math.ceil(data?.data?.count / perPageCount);

  const handleChangePage = (e) => {
    let value = e.target.value;
    setPerPageCount(value);
    localStorage.setItem("page", e.target.value);

    let result = Math.ceil((page * perPageCount) / value);

    setPage(result);
    sessionStorage.setItem("page-count", result);
  };

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
          count={totalPagination}
          page={page}
          onChange={handleChangePagination}
          color="primary"
        />
      </Box>
      <Box>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Pages</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={perPageCount}
            onChange={handleChangePage}
            autoWidth
            label="Pages"
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Products;
