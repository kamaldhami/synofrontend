import React, { useState } from 'react';
import EditProfile from './EditProfile';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';


function Profile(props) {

    const [user, setUser] = useState({
        email: '',
        name: '',
        mobile: '',
        age: ''
    })

    const [userDetails, setUserDetails] = useState([])
    const [index, setIndex] = useState(null)


    let arr = [5, 2, 7, 9, 13, 3, 8]
    var max = arr[0];
    var min = arr[0];
    var maxIndex = 0;
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        } else if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }

    console.log(maxIndex,minIndex)

    const handleState = (e) => {
        let name = e.target.name
        let value = e.target.value
        let newUser = { ...user }
        newUser[name] = value
        setUser(newUser)
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (index == null) {
            setUserDetails([...userDetails, user]);
        } else {
            let newUserDetails = [...userDetails]
            newUserDetails[index] = user
            setUserDetails(newUserDetails)
        }

        setUser({
            email: '',
            name: '',
            mobile: '',
            age: ''
        })
    }

    const editUser = (data, index) => {
        setIndex(index)
        setUser({
            email: data?.email || '',
            name: data?.name || '',
            mobile: data?.mobile || '',
            age: data?.age || ''
        })
    }

    return (
        <React.Fragment>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <Form onSubmit={submitForm}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' value={user.email} onChange={(e) => handleState(e)} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' value={user.name} onChange={(e) => handleState(e)} placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="text" name='mobile' value={user.mobile} onChange={(e) => handleState(e)} placeholder="Enter Mobile" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" name='age' value={user.age} onChange={(e) => handleState(e)} placeholder="Enter Age" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <EditProfile userDetails={userDetails} editUser={editUser} />
            </Container>
        </React.Fragment>
    );
}

export default Profile;