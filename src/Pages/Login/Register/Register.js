import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { Register, userProfileUpdate, userEmailVerity } = useContext(AuthContext);
    const [error, setError] = useState();
    const [accepted, setAccepted] = useState();

    const handleSignInSubmit = (event) => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name)

        Register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                handleUserProfileUpdate(name, photoURL)
                handleUserEmailVerification()
                toast.success('Please Verity Your Email Address')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    // Check box handler Accept Terms and conditions
    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    // user profile update
    const handleUserProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        userProfileUpdate(profile)
        .then( () =>{})
        .catch(e => console.error(e))
    }


    // user email verification 
    const handleUserEmailVerification = () => {
        userEmailVerity()
        .then( () => {})
        .catch(error => console.log(error))
    }

    return (
        <Form onSubmit={handleSignInSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name='name' type="text" placeholder=" Enter Your Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter Your Email Address" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="photoURL" placeholder="Enter Your Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleAccepted}
                    type="checkbox"
                    label={<>Accept <Link to='/terms'>Terms and Condition</Link></>}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-muted">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;