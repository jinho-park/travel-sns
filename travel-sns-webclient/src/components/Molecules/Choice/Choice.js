import React from 'react';
//import createReactClass from 'create-react-class';
import styles from './Choice.scss';
import classNames from 'classnames/bind';
import { WelcomeButton} from 'components';

const cx = classNames.bind(styles);

const Choice = ({mode, onLoginClickhandle, onResisterClickhandle}) => {
    if(mode !== 'init') return null;
        return(
            <div className={ cx('Choice') }>
                <WelcomeButton
                    color='orange'
                    name='login'
                    click={onLoginClickhandle}
                >
                    로그인
                </WelcomeButton>
                <WelcomeButton
                    color='grey'
                    name='register'
                    click={onResisterClickhandle}
                >
                    회원가입
                </WelcomeButton>
            </div>

        )
}  


export default Choice;


