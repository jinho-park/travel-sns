import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.scss';
import { Header } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const PageTemplate = ({header}) =>{
    return(
        <div classNames={cx('page')}>
            <Header>dd</Header>
        </div>
    )
}

export default PageTemplate;