import React, { Component } from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { SearchBar, User } from 'components';
import { Sticky } from 'semantic-ui-react';

const cx = classNames.bind(styles);

export default class Header extends Component {
    state={}

    handleContextRef = contextRef => this.setState({ contextRef });

    render(){
        const { 
            logo,
            user,
            onLogouthandle,
            onSettinghandle
         } = this.props;
        const { contextRef } = this.state;

        return(
            <Sticky context={contextRef}>
                <div className={cx('header')}>
                    <div className={cx('wrapper-item')}>
                        <div className={cx('logo')}>
                            {logo}
                        </div>
                        <div className={cx('search')}>
                            <SearchBar className={cx('searchbar')}/>
                        </div>
                        <div className={cx('user')}>
                            <User
                                onLogouthandle={onLogouthandle}
                                onSettinghandle={onSettinghandle}
                            >
                                {user}
                            </User>
                        </div>
                    </div>
                </div>
            </Sticky>
        )
    }
}