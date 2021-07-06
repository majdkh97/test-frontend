import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';


const serverUrl = process.env.REACT_APP_SERVER_URL

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artData: [],
        }
    }

    componentDidMount = async () => {
        await axios.get(`${serverUrl}/art`).then(response => {
            this.setState({
                artData: response.data
            })
            console.log(this.state.artData)
        }).catch(error => {
            console.log(error)
        })
    }

    addToFavorite = async (item) => {
        const reqbody = {
            title: item.title,
            thumbnail: item.thumbnail,
            artist_name: item.artist_name,
            description: item.description
        }
        await axios.post(`http://localhost:3030/art/favorite`,reqbody)
    }


    render() {
        return (
            <div>
                {this.state.artData.map(item => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{item.Title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Button variant="primary" onClick={() => this.addToFavorite(item)}>Add to Favorite</Button>
                            </Card.Body>
                        </Card>
                    )
                })}

            </div>
        )
    }
}

export default Home
