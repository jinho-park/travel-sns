import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.scss';
import { AddItem, ShortCut } from 'components';

const cx = classNames.bind(styles);

const PageTemplate = ({
        header, 
        children, 
        responsive,
        padding,
        like,
        comment,
        image,
        title,
        write,
        date
    }) =>{

    return(
        <div className={cx('page')}>
            <div className={cx('header')}>
                <header>
                    {header}
                </header>
            </div>
            <main className={cx('content', { 
                responsive, padding
            })}>
                <div className={cx('add')}>
                    <AddItem center="true"/>
                </div>
                <div className={cx('item')}>
                    <ShortCut 
                        image={image} 
                        like={like} 
                        comment={comment} 
                        title={title}
                        write={write}
                        date={date}
                    >
                        
                    </ShortCut>
                </div>
            </main>
        </div>
    )
}

export default PageTemplate;