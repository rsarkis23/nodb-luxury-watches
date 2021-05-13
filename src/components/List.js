import React, { Component } from 'react'
import WatchList from './WatchList'


class List extends Component{
    handleAddToCart = () => {
        const watch = this.props
        let newWatch = {
            name: this.brand,
            model: this.model,
            img: this.img

        }
        this.props.catchFn(newWatch)
    }


    render() {
        return(
            <div onClick={ this.addToCart }></div>
        )
    }
}


export default List