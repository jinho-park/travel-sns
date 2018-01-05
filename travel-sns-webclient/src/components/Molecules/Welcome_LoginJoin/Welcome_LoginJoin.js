import React from 'react';
import styles from './Welcome_LoginJoin.scss';
import classNames from 'classnames/bind';
import { Popup, Icon, Button } from 'semantic-ui-react';
import { Join, Login } from 'components';

const cx = classNames.bind(styles);

const Welcome_LoginJoin = ({children}) => {
    return(
        <div className={cx('user')}>
            <div className={cx('id')}>{children}</div>
            <div className={cx('iconGroup')}>
                <Popup
                    trigger={<Button inverted color='grey'>회원가입</Button>}
                    content={<Join />}
                />
                <Popup 
                    trigger={<Button inverted color='orange'>로그인</Button>}
                    content={<Login />}
                />
            </div>
        </div>
    )
}

export default Welcome_LoginJoin;