import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";


const Products = () => {
    // const {addProduct} = useCartContext();
  
  const [productList, setProductList] = useState([]);
  const [tempDataList, setTempDataList] = useState([]);
 
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProductList(response.data);
      setTempDataList(response.data);
    })
  );

  const searchProduct = (query) => {
    if (!!query) {
        const filterProductList = productList.filter((product) => {
            return product.title.includes(query) || product.description.includes(query);
        });
        setTempDataList(filterProductList);
    } else {
        setProductList(tempDataList);
    }
}
  const Loading = () => {
    return (
      <>
        Loading....
        
      </>
    );
  };


  const ShowProducts = () => {
    return (
      <>
        {!!tempDataList.length ? tempDataList.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p class="card-text lead fw-bold">{product.price}</p>
                    <Link
                      to={`/products/${product.id}`}
                      class="btn btn-outline-dark"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        }) : isLoading ? "Loading..." : 'No Products Found!!!' }
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <form className=" d-flex" role="search">
              <center style={{ marginLeft: "37%" }}>
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => searchProduct(e.target.value)}
                />
              </center>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {isLoading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
