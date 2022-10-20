import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>This is terms and condition. please read carefully.</h2>
            <p> Go Back to:
                <Link to='/register'> Register</Link>
            </p>
        </div>
    );
};

export default TermsAndConditions;