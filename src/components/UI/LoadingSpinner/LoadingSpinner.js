import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classes from './LoadingSpinner.module.css';



const LoadingSpinner = () => (
    <div>
        <FontAwesomeIcon icon={faSpinner} size='2x' spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} className={classes.LoadingSpinner}/>
    </div>
)

export default LoadingSpinner;