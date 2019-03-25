import React, { Component } from 'react'


import ObjectTrav from './objectTrav'

class Travel extends Component {
    constructor() {
        super()

        this.state = {
            imageUrl: '',
            where: ''  
        }
    }

    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let travel = this.state

        this.props.handleCreateTravel(travel)
    }


    render() {
        return (
            <div>
                <h1>Travel</h1>
                <div className="input" >
                    <input className="imgInput"
                    type="text" name="imageUrl" placeholder="imageUrl" onChange={this.handleChange}/><br />

                    <input className="textInput"
                    type="text" name="where" placeholder="Where to go?" onChange={this.handleChange}/><br />

                    <button href="#" class="myAddButton" 
                    onClick={this.handleClick}>Add</button>
                </div>
                {this.props.travel.map(travel => {
                     return <ObjectTrav
                     key={travel.id} travel={travel}
                     deleteTravel={this.props.deleteTravel}
                     updateTravel={this.props.updateTravel} />
                 })}
                
                </div>
            )       
    }

}

export default Travel