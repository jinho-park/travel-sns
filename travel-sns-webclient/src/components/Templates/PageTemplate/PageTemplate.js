import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.scss';
import { Header, AddItem, ShortCut } from 'components';

const cx = classNames.bind(styles);

const PageTemplate = ({header}) =>{
    return(
        <div className={cx('page')}>
            <div className={cx('header')}>
            <Header logo="logo"/>
            </div>
            <main className={cx('content')}>
                <div className={cx('add')}>
                    <AddItem center='true'/>
                </div>
                <div className={cx('item')}>
                    <ShortCut/>
                </div>
            </main>
        </div>
    )
}

export default PageTemplate;