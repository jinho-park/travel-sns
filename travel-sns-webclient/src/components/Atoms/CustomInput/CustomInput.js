import React from 'react';
import styles from './CustomInput.scss';
import classNames from 'classnames/bind';
import { Input } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const CustomInput = ({placeholder}) => {
    return(
        <div>
            <Input className={cx('customInput')} placeholder={placeholder}/>
        </div>
    )
}

export default CustomInput;