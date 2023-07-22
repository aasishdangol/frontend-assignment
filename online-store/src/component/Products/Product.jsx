import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addItem } from '../../redux/action';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios'

import Skeleton from 'react-loading-skeleton';



const Product = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const[productList,setProductList]=useState([]);
    const[loading,setLoading]=useState(true);


    const dispatch = useDispatch();
    const addProduct = (product) =>{
        dispatch(addItem(product));
    }

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProductList(response.data);
                setLoading(false);
                console.log(response.data);

            });
    }, [id]);

    const Loading =()=>{
        return(
            <>
          <div className="col-md-6">
            <Skeleton height={400}/>
         </div>
         <div className="col-md-6" style={{lineHeight:2}}>
            Loading....
         </div>
            </>
        )
    }
   
    const ShowProduct =()=>{
        return(
            <>
                <div className="col-md-6">
                    <img src={productList.image} alt={productList.image} height="400px" width="400px" />
                    {/* <img src={product.image} alt="" /> */}
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {productList.category}
                    </h4>
                    <h1 className='display-5'>{productList.title}</h1>
                    <p className='lead fw-bolder'>Rating{productList.rating && productList.rating.rate}
                     <i className='fa fa-start'></i></p>
                     <h3 className='display-6 fw-bold my-4'> ${productList.price}</h3>
                     <p className="lead">{productList.description}</p>
                    <button className="btn btn-outline-dark" onClick={()=>addProduct(productList)}>Add to Cart</button>
                    <button className="btn btn-outline-dark" onClick={()=>navigate("/cart")}>Go to Cart</button>
                    
                </div>
            </>
        )
    }
  return (
    <div>
        <div className="container py-5">
            <div className="row py-4">
                {loading ? <Loading/> : <ShowProduct/> }
            </div>
        </div>
    </div>
  )
}


export default Product