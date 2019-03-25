import React, { Component } from 'react'

class Exp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.experience.id,
            imageUrl: props.experience.imageUrl,
            where: props.experience.where,
            edit: false
        }
    }

    handleEditClick = () => {
        this.setState({
          edit: true
        })
      }
    
    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleEditClick = () => {
        this.setState({
            edit: true
        })
    }

    handleUpdateClick = () => {
        this.props.updateExperience(this.state)
        this.setState({
            edit: false
        })
    }

    handleDeleteClick = () => {
        this.props.deleteExperience(this.state.id)
        this.setState({
            edit: false
        })
    }



    render() {
        return this.state.edit ? (
            <div className="update">
                <input type="text" name="what" value={this.state.what} onChange={this.handleChange}/>
                <input type="text" name="imgUrl" value={this.state.imageUrl} onChange={this.handleChange}/>
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        ) : (
            <div className="polaroid" style={{position: 'center', margin: '25px', borderBottom: 'solid white 2px'}}>
                
                <img src={this.props.experience.imageUrl} alt="" width="300vw" />
                <div className="container">
                <p>{this.props.experience.what}</p></div>
                <button href="#" class="myButton" onClick={this.handleEditClick}>Edit</button>
                <button href="#" class="myButton" onClick={this.handleDeleteClick}>Delete</button>
                
            </div>
        )
    }
}

export default Exp