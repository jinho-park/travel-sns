import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.scss';
import { Header } from 'components';

const cx = classNames.bind(styles);

const PageTemplate = ({header}) =>{
    return(
        <div className={cx('page')}>
            <div className={cx('header')}>
            <Header logo="aa"/>
            </div>
        </div>
    )
}

export default PageTemplate;