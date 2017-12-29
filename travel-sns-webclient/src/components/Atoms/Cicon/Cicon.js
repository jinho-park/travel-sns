import React from 'react';
import {Icon} from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './Cicon.scss';

const cx = classNames.bind(styles);

const Cicon = ({name, link, children, size, color}) => {
    return(
        <div className={cx('icon')}>
            <Icon link={link} name={name} size={size} color={color}/>
            {children}
        </div>
    )
}

export default Cicon;