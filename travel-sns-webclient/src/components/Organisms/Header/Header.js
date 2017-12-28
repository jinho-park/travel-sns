import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
    return(
        <div className={cx('header')}>
            <div className={cx('logo')}></div>
            <div className={cx('search')}></div>
            <div className={cx('user')}></div>
        </div>
    )
}

export default Header;