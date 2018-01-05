import React, { Component } from 'react';
import styles from './WelcomeHeader.scss';
import classNames from 'classnames/bind';
import { SearchBar, User, Welcome_LoginJoin } from 'components';
import { Sticky } from 'semantic-ui-react';

const cx = classNames.bind(styles);

export default class WelcomeHeader extends Component {
    state={}

    handleContextRef = contextRef => this.setState({ contextRef });

    render(){
        const { logo } = this.props;
        const { contextRef } = this.state;

        return(
            <Sticky context={contextRef}>
                <div className={cx('header')}>
                    <div className={cx('wrapper-item')}>
                        <div className={cx('logo')}>
                            {logo}
                        </div>
                        <div className={cx('search')}>
                            <SearchBar/>
                        </div>
                        <div className={cx('LoginJoin')}>
                            <Welcome_LoginJoin />
                        </div>
                    </div>
                </div>
            </Sticky>
        )
    }
}