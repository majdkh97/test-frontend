import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import UpdateForm from './UpdateForm';

export class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteArtData: [],
            show: false,
            index:-1
        }
    }
    componentDidMount = async () => {
        await axios.get(`http://localhost:3030/art/favorite`).then(response => {
            this.setState({
                favoriteArtData: response.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    deleteFromFavorite = async (index) => {
        axios.delete(`http://localhost:3030/art/favorite/${index}`).then(response => {
            this.setState({
                favoriteArtData: response.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    handleShow = (index) => {
        this.setState({
            show: true,
            index:index
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }


    gettingData = async (e) => {
        e.preventDefault();
        const reqbody = {
            title: e.target.title.value,
            description:e.target.description.value
        }
        await axios.put(`http://localhost:3030/art/favorite/${this.state.index}`,reqbody).then(response =>{
            this.setState({
                favoriteArtData:response.data
            })
            }).catch(error =>{
                console.log(error)
        })
        this.handleClose();
    }
    render() {
        return (
            <div>
                {
                    this.state.favoriteArtData.map((item, index) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{item.Title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => this.deleteFromFavorite(index)}>Delete</Button>
                                    <Button variant="primary" onClick={() => this.handleShow(index)}>Update</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                {
                    <UpdateForm
                    show={this.state.show}
                    handleClose={this.handleClose}
                    gettingData={this.gettingData}

                    />
                }
            </div>
        )
    }
}

export default Favorite
