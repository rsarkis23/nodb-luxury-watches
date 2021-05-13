import logo from './logo.svg'
import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import WatchList from './components/WatchList'
import Finder from './components/Finder'
import Cart from './components/Cart'
import watch from './watch'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      watchList: watch,
      cartedWatches: []
  
    }
    // this.cartedWatch = this.cartedWatch.bind(this)
  }

  componentDidMount(){

    axios.get('/api/carted-watch')
      .then(res => {
        this.setState({ watchesInCart: res.data })
      })
      .catch(err => console.log(err))

  }

  addWatch(watch){
    axios.post('/api/carted-watch', {watch: watch})
      .then(res => {
        this.setState({ watchesInCart: res.data })
      })
      .catch(err => console.log(err))
  }

  editName = (id, newModel) => {
    let body = {model: newModel};

    axios.put(`/api/carted-watch/${id}`, body)
      .then(res => {
        this.setState({ watchesInCart: res.data})
      })
      .catch(err => console.log(err))

  }
  deleteWatch = (id) => {
    axios.delete(`/api/carted-watch/${id}`)
      .then(res => {
        this.setState({ caughtPokemon: res.data })
      })
      .catch(err => console.log(err))
  }


  render(){
    return (
      <div className='App'>
        <Header />
        <WatchList onClick={(e) => this.addWatch
        } />
        <Finder 
        catchFn={ this.addWatch }/>
        <Cart 
        cartedWatches = { this.state.cartedWatches }
        modelFn = {this.editModel}
        />
      </div>
    )
  }  
}

export default App;
