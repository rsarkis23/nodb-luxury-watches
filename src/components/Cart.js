import React, { Component } from 'react'
import Watch from './Watch'
import App from '../App'


let watchesInCart = []

const Cart = props => {
    const mappedCartedWatches = watchesInCart.map((watch, index) => {
        <Watch 
            key = {index}
            watch = {watch}
            nameFn = {props.nameFn}
            releaseFn = {props.releaseFn} /> 
    })


    
        return(
            <div>
                <h2>Cart</h2>
                <div>
                    {/* { mappedCartedWatches } */}
                </div>
            </div>
        )
}
    


export default Cart