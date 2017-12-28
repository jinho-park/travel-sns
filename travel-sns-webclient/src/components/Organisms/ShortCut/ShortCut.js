import React from 'react';
import styles from './ShortCut.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ShortCut = () => {
    return(
        <div className={cx('cut')}>item</div>
    )
}

export default ShortCut;