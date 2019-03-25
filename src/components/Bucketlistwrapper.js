import React, { Component } from 'react';
import axios from 'axios';

import Travel from './Travel';
import Experience from './Experience';



class BucketlistWrapper extends Component {
    constructor() {
        super();
        
        this.state = {
            travels: [],
            experienced: []
            
        }
    }
    
    updateTravel = travels => {
        axios.put(`/api/bucketlist/travel/${travels.id}`, travels).then(res => {
            this.setState({
                travels: res.data
            })
        }).catch(err => console.log(err))
    }
    
    deleteTravel = id => {
        axios.delete(`/api/bucketlist/travel/${id}`)
        .then(res => {
            this.setState({
                travels: res.data
            })
        }).catch(err => console.log('there was an error.', err))
    }

     createTravel = travels => {
        axios.post('/api/bucketlist/travel', travels).then(res => {
            this.setState({
                travels: res.data
            })
        }).catch(err => {
            console.log('an error occurred while adding item:', err)
        })
    }
        



        updateExperience = experience => {
            axios.put(`/api/bucketlist/experience/${experience.id}`, experience).then(res => {
                this.setState({
                    experienced: res.data
                })
            }).catch(err => console.log(err))
        }

        createExperience = experience => {
            axios.post('/api/bucketlist/experience', experience).then(res => {
            this.setState({
                    experienced: res.data
                })
            }).catch(err => {
            console.log('an error occurred while adding item:', err)
            })
        }

        deleteExperience = id => {
            axios.delete(`/api/bucketlist/experience/${id}`)
            .then(res => {
                this.setState({
                    experienced: res.data
                })
            }).catch(err => console.log('there was an error.', err))
        }

 


    componentDidMount() {
        axios.get('/api/bucketlist/travel').then(res => {
            this.setState({
                travels: res.data,
            })
        }).catch(err => {
            console.log('there is an issue ', err)
        })
    

        axios.get('/api/bucketlist/experience').then(res => {
            this.setState({
                experienced: res.data
            })
        }).catch(err => {
            console.log('there is an issue ', err)
        })
    }   



    render() {
        return(
            <div className="Wrapper">
                <div className="Travel"><Travel 
            travel={this.state.travels}
            handleCreateTravel={this.createTravel}
            updateTravel={this.updateTravel}
            deleteTravel={this.deleteTravel} /></div>
    
                <div className="Experience"><Experience 
            experience={this.state.experienced}
            handleCreateExperience={this.createExperience}
            updateExperience={this.updateExperience}
            deleteExperience={this.deleteExperience} /></div>
            </div>
            
        )
    }




}

export default BucketlistWrapper;