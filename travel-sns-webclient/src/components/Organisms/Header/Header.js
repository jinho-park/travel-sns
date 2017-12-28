import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { SearchBar, User } from 'components';

const cx = classNames.bind(styles);

const Header = ({logo}) => {
    return(
        <div className={cx('header')}>
            <div className={cx('wrapper-item')}>
                <div className={cx('logo')}>
                    {logo}
                </div>
                <div className={cx('search')}>
                    <SearchBar/>
                </div>
                <div className={cx('user')}>
                    <User>data</User>
                </div>
            </div>
        </div>
    )
}

export default Header;