import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../../reducers/cart/cartSlice'


const constStyle = {
  position: "absolute",
  width: "100%", 
  backgroundColor: "#fff",
  zIndex: "999",
  padding: "20px 0"
}

const previewCart = () => {

  const distpach = useDispatch()
  const { productList, totalPrice } = useSelector(state => state.cart)

  return (
    <div style={constStyle} className='shadow px-5'>
      {totalPrice
      
        ?  <div className='my-5'>
            {productList.map( product => (
              <div key={product.id} className='d-flex justify-content-evenly align-items-center rounded-start border border-secondary mx-auto mb-2 p-2'>
                <h5 style={{margin: "0", width: "300px"}} className='fs-5'>{product.title}</h5>
                <h5 style={{margin: "0", width: "200px"}} className='fs-5' >{product.quantity} x ${product.price}</h5>
                <h5 style={{margin: "0", width: "100px"}} className='fs-5'>${product.price * product.quantity} </h5>
                <button className='btn btn-danger fs-5' onClick={ () => distpach(deleteProduct({id: product.id, quantity: product.quantity}))} > X</button>
              </div>
            ))} 
          </div>
        : <div className='text-center fs-2' style={{ color: 'gray', opacity: "0.4" }}> - Carrito Vacio - </div>

      }
      
      <div className="h4 pb-2 mb-2 text-start border-bottom border-dark-subtle">
        <h4 className='fs-2'>Total</h4>
      </div>
      <div className='text-end fs-3 fw-bold' >${totalPrice}</div>
    </div>
  )
}

export default previewCart