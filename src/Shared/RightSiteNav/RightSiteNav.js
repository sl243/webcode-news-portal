import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandSlide from '../BrandSlide/BrandSlide';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSiteNav = () => {
    const {googleSignIn} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
        .then ( result => {
            const user = result.user;
            console.log(user)
        })
        .catch( error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-1' variant="outline-primary"><FaGoogle></FaGoogle> Google With Signup</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Github With Signup</Button>
            </ButtonGroup>
            <div className='mt-5'>
                <h5>Follow Us</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp></FaWhatsapp> Whats App</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaLinkedin></FaLinkedin> Linkedin</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-5'>
                <BrandSlide></BrandSlide>
            </div>
        </div>
    );
};

export default RightSiteNav;