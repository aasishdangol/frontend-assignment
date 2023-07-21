import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Product = () => {
    const{id}=useParams();
    const[product,setProduct]=useState([]);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((response)=>{
        setProduct(response.data);
        setLoading(false);
        console.log(product);
    })
        
    },[]);

    const Loading =()=>{
        return(
            <>
            Loading....
            </>
        )
    }
    const ShowProduct =()=>{
      
        return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>Rating{product.rating && product.rating.ratr}
                     <i className='fa fa-start'></i></p>
                     <h3 className='display-6 fw-bold my-4'> ${product.price}</h3>
                     <p className="lead">{product.description}</p>
                </div>
            </>
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                {loading ? <Loading/> : <ShowProduct/> }
            </div>
        </div>
    </div>
  )
}


export default Product