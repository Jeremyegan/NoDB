import React, { Component } from 'react'
import '../App';

import ObjectExp from './objectExp';

class Experience extends Component {
    constructor() {
        super()

        this.state = {
            imageUrl: '',
            what: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleAddClick = () => {
        let exp = this.state

        this.props.handleCreateExperience(exp)
    }

    
    

    render() {
        return (
            <div>
                <h1>Experience</h1>
                <div className="input">
                    <input className="imgInput"
                    type="text" name="imageUrl" placeholder="imageUrl" onChange={this.handleChange}/><br />

                    <input className="textInput"
                    type="text" name="what" placeholder="What to do?" onChange={this.handleChange}/><br />
                    
                    <button className="myAddButton" onClick={this.handleAddClick}>Add</button>
                </div> 
                 
                 {this.props.experience.map(experience => {
                     return <ObjectExp
                     key={experience.id} experience={experience}
                     deleteExperience={this.props.deleteExperience}
                     updateExperience={this.props.updateExperience} />
                 })}
                 
            </div> 
        )
    }
}

export default Experience
