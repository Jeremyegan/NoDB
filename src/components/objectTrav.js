import React, { Component } from 'react'

class Trav extends Component {
    constructor(props) {
        super(props)

        this.state = {
           id: props.travel.id,
           imageUrl: props.travel.imageUrl,
           where: props.travel.where,
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

    handleUpdateClick = () => {
        this.props.updateTravel(this.state)
        this.setState({
            edit: false
        })
    }

    handleDeleteClick = () => {
        this.props.deleteTravel(this.state.id)
        this.setState({
            edit: false
        })
    }



    render() {
        return this.state.edit ? (
            <div className="update">
                <input type="text" name="where" value={this.state.where} onChange={this.handleChange}/>
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange}/>
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        ) : (
            <div className="polaroid" style={{position: 'center', margin: '25px', borderBottom: 'solid white 2px'}}>
                <img src={this.props.travel.imageUrl} alt="" width="300vw" />
                
                <p>{this.props.travel.where}</p>
                
                <button href="#" class="myButton" 
                onClick={this.handleEditClick}>Edit</button>
                
                <button href="#" class="myButton" 
                onClick={this.handleDeleteClick}>Delete</button>
            </div>
        )
    }
}

export default Trav