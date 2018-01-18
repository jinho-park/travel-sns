import React from 'react';
import styles from './User.scss';
import classNames from 'classnames/bind';
import { Popup, Icon } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const User = ({children, onLogouthandle, onSettinhandle}) => {
    return(
        <div className={cx('user')}>
            <div className={cx('id')}>{children}</div>
            <div className={cx('iconGroup')}>
                <Popup
                    trigger={<Icon 
                        link 
                        name="sign out"
                        size="big"
                        onClick={onLogouthandle}
                    />}
                    content='Logout'
                />
                <Popup 
                    trigger={<Icon 
                        link 
                        name="setting" 
                        size="big"
                        onClick={onSettinhandle}
                    />}
                    content='setting'
                />
            </div>
        </div>
    )
}

export default User;