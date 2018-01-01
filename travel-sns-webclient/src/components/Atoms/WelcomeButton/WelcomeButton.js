import React from 'react';
import styles from './WelcomeButton.scss';
import classNames from 'classnames/bind';
import { Button } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const WelcomeButton = ({color, label, onClick}) => {
    return(
        <div>
            <Button className={cx('WelcomeButton')} 
                    fluid size = 'large'
                    style={{ color: 'white', marginBottom: '1em' }}
                    color={color}
                    onclick={{onClick}}> {label} </Button>
        </div>
    )
}

export default WelcomeButton;