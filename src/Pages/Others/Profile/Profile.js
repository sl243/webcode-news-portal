import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName)
    const photoURLRef = useRef(user.photoURL)

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    
    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} name='name' type="text" placeholder=" Enter Your Full Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control readOnly defaultValue={user.email} name='email' type="email" placeholder="Enter Your Email Address" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user.photoURL} name='photoURL' type="photoURL" placeholder="Enter Your Photo URL" />
            </Form.Group>

            <Button variant="primary" type="submit" >
                Profile Update
            </Button>
            <Form.Text className="text-muted">
               
            </Form.Text>
        </Form>
        </div>
    );
};

export default Profile;