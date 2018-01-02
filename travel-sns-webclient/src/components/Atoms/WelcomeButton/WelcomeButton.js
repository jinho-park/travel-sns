import React from 'react';
import styles from './WelcomeButton.scss';
import classNames from 'classnames/bind';
import { Button } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const WelcomeButton = ({color, children, onclick, animated, name}) => {
    return(
        <div className={cx('WelcomeButton')}>
            <Button 
                fluid
                animated={animated}
                size = 'large'
                color={color}
                name={name}
                onClick={onclick}
            >
                {children}
            </Button>
        </div>
    )
}

export default WelcomeButton;