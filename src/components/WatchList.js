import React, { Component } from 'react'
import watch from '../watch'
import List from './List'


class WatchList extends Component {


    state = {
        watchList: watch
    }

    mappedWatches = this.state.watchList.map(elem => {
        return (
            <span >
                <img src={elem.img} height='240px' width='240px' />
                <p>{ elem.brand }</p>
                <p>{ elem.model }</p>
            </span>
        )
    })

    render() {
        
        return (
            <div>
                <h2>Watch List</h2>
                <span>{ this.mappedWatches }</span>
            </div>
        )
    }
}









export default WatchList