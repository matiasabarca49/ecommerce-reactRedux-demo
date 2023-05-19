import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../reducers/cart/cartSlice'

const ItemList = ( {product } ) => {

  const distpach = useDispatch()

  return (
    
     <div  className=" col-2 col-6 col-sm-4 card  mb-3 flex-grow-1" style={{maxWidth: "18rem"}}>
        <div className="card-header bg-transparent ">
            <p className="card-text"><small className="text-body-secondary">{product.category}</small></p>
        </div>
        <div className="card-body">
            <h5 className="card-title fs-4 text fw-bold">{product.title}</h5>
            <p className="card-text">{product.description}</p>
        </div>
        <div className="card-footer bg-transparent fs-4 text ">${product.price}</div>
        <button onClick={ () => distpach(addProduct(product)) }  className="btn btn-success mb-3">Agregar al Carrito</button>
    </div>
  )
}

export default ItemList