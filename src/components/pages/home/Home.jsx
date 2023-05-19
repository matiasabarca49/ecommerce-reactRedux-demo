import React from 'react'
import ItemList from './ItemList'

const Home = ({ products })=> {

    return(
        <div>
            <div style={{width: "100%" ,height: "100px"}}>
                <h1 className='text-center mt-5'>Tienda</h1>
            </div>
            <div className="container-fluid row gap-4 p-4 mx-auto justify-content-center">  
                {products.map( product => (
                    <ItemList key={product.id} product={ product } />
                ))}
            </div>
        </div>
        
    )
} 

export default Home