import React, { Component } from 'react'

class Watch extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            modelInput: ''
        }
        
    }
    handleInput = (val) => {
        this.setState({ modelInput: val })
    }

    handleToggle = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleEdit = (id) => {
        this.props.modelFn(id, this.state.modelInput)
        this.handleToggle()
    }
    render(){
        return (
            <div>
                <img src={this.props.watch.image} alt={this.props.watch.model}/>
                {this.state.isEditing
                ? (
                    <div>
                        <input 
                            value={this.state.modelInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.watch.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.watch.name}</p>
                        <button onClick={this.handleToggle}>Edit Model</button>
                    </div>
                )}
                <button onClick={() => this.props.releaseFn(this.props.watch.id)}>Release</button>
            </div>
        )
    }

}

export default Watch