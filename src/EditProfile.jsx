import React from 'react';
import { Table, Button } from 'react-bootstrap';

function EditProfile(props) {
    let { userDetails,editUser } = props

    return (
        <React.Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Age</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {userDetails?.map((user, index) => (
                        <tr key={index}>
                            <td>{user?.email}</td>
                            <td>{user?.name}</td>
                            <td>{user?.mobile}</td>
                            <td>{user?.age}</td>
                            <td>
                                <Button variant="primary" type="submit" onClick={() => editUser(user,index)}>
                                    Edit 
                                </Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </React.Fragment>
    );
}

export default EditProfile;