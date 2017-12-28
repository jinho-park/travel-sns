import React from 'react';
import styles from './User.scss';
import classNames from 'classnames/bind';
import { Popup, Icon } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const User = ({children}) => {
    return(
        <div className={cx('user')}>
            <div className={cx('id')}>{children} 님 환영합니다</div>
            <div className={cx('iconGroup')}>
                <Popup
                    trigger={<Icon link name="sign out" size="big"/>}
                    content='Logout'
                />
                <Popup 
                    trigger={<Icon link name="setting" size="big"/>}
                    content='setting'
                />
            </div>
        </div>
    )
}

export default User;