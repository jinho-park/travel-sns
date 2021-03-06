import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.scss';
import { AddItem } from 'components';
import { Rail } from 'semantic-ui-react';
import { BoardContainer, HeaderContainer } from 'containers';

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
                <HeaderContainer>
                    {HeaderContainer}
                </HeaderContainer>
            </div>
            <main className={cx('content', {
                responsive, padding
            })}>
                <div className={cx('add')}>
                    <AddItem center="true"/>
                </div>
                <div className={cx('item')}>
                    <BoardContainer/>
                </div>
            </main>
        </div>
    )
}

export default PageTemplate;