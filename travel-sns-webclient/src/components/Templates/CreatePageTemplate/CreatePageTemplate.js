import React from 'react';
import classNames from 'classnames/bind';
import styles from './CreatePageTemplate.scss';
import { ItemHeadContainer } from 'containers';

const cx = classNames.bind(styles);

const CreatePageTemplate = ({
        header,
        padding,
        responsive,
    }) =>{
    
    return(
        <div className={cx('page')}>
            <div className={cx('header')}>
                <header>
                    {header}
                </header>
            </div>
            <div className={cx('mainContent', {padding, responsive})}>
                <ItemHeadContainer/>
            </div>
        </div>
    )
}

export default CreatePageTemplate;