import React from 'react';
import styles from './SearchBar.scss';
import classNames from 'classnames/bind';
import { Input } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const SearchBar = () => {
    return(
        <div className={cx('search')}>
            <Input icon="search" placeholder="Search..." size='mini'/>
        </div>
    )
}

export default SearchBar;