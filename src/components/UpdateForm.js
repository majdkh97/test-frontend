import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.gettingData}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Description" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default UpdateForm
