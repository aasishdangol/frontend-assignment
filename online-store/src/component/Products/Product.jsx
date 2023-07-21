import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addCart } from '../../redux/action';
import { useParams } from 'react-router-dom';
import axios from 'axios'
// import {Link} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';


const Product = () => {
    const{id}=useParams();
    const[product,setProduct]=useState([]);
    const[loading,setLoading]=useState(true);
    const dispatch = useDispatch();
    const addProduct = (product) =>{
        dispatch(addCart(product));
    }

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/2`)
    .then((response)=>{
        setProduct(response.data);
        setLoading(false);
        console.log(product);
    })    
    },[]);

    const Loading =()=>{
        return(
            <>
          <div className="col-md-6">
            <Skeleton height={400}/>
         </div>
         <div className="col-md-6" style={{lineHeight:2}}>
            <Skeleton height={50} width={300} />
            <Skeleton height={75}/>
            <Skeleton height={25} width={150}/>
            <Skeleton height={50}/>
            <Skeleton height={150}/>
            <Skeleton height={50} width={100}/>
            <Skeleton height={50} width={100} style={{marginLeft:6}}/>
         </div>
            </>
        )
    }
   
    const ShowProduct =()=>{
        return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                    {/* <img src={product.image} alt="" /> */}
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
                    <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>Add to Cart</button>
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