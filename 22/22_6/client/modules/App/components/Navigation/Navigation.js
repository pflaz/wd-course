import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.css';
import { Link } from 'react-router';

const Navigation = (props, context) =>
    <div className={styles['navigation']}>
        <ul>
            <li>Menu</li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/">Posts</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>

Navigation.propTypes = {
};

export default Navigation;
