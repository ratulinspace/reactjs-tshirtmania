import React from 'react';
import User5 from '../User5/User5';
import User6 from '../User6/User6';
import User7 from '../User7/User7';

const User1 = ({ house }) => {

    return (
        <div>
            <h3>0001</h3>
            <h4><small>House: {house}</small></h4>
            <div style={{ display: 'flex' }}>
                <User5></User5>
                <User6></User6>
                <User7></User7>
            </div>
        </div>
    );
};

export default User1;