import React, {Component} from 'react'
import axios from 'axios'
import List from './List'


class Finder extends Component {
    constructor(props){
        super(props);
        this.state = {
            uncartedWatches: []
        }
    }

    componentDidMount(){
        this.getUncartedWatches();
    }

    getUncartedWatches = () => {
    }
    

    render(){
        console.log(this.state.uncartedWatches)
        const mappedWatches = this.state.uncartedWatches.map((watch, i) => (
            <List
                key={i}
                watch={watch}
                catchFn={this.props.catchFn}
                refreshFn={this.getUncartedWatches}/>
        ))
        return (
            <div className='Images'>
                { mappedWatches }
            </div>
        )
    }
}

export default Finder;