import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import styles from './Tags.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Tags = ({children, onDeleteClick}) => {
    return(
        <div>
            {children}
            <Icon />
        </div>
    )
}