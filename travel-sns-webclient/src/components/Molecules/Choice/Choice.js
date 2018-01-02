import React from 'react';
//import createReactClass from 'create-react-class';
import styles from './Choice.scss';
import classNames from 'classnames/bind';
import { WelcomeButton} from 'components';

const cx = classNames.bind(styles);

const Choice = ({ds_off, onLoginClickhandle, onResisterClickhandle}) => {
        return(
            <div className={ cx('Choice' , {ds_off}) }>
                <WelcomeButton
                    color='orange'
                    name='login'
                    onclick={onLoginClickhandle}
                >
                    로그인
                </WelcomeButton>
                <WelcomeButton
                    color='grey'
                    name='register'
                    onclick={onResisterClickhandle}
                >
                    회원가입
                </WelcomeButton>
            </div>

        )
}  


export default Choice;


