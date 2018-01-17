import React from 'react';
import styles from './Login.scss';
import classNames from 'classnames/bind';
import { Button, Grid, Form, Icon } from 'semantic-ui-react';
import { WelcomeButton } from 'components';

const cx = classNames.bind(styles);

const Login = ({
        mode, 
        onPrevClickhandle,
        onLoginhandle,
        onChangeInput,
        forms,
        onKeyPress
    }) => {
    if(mode !== 'login') return null;

    const {
        email,
        password
    } = forms.toJS();

    return(
        <div className={cx('Login') } >
            <Form.Input
                fluid
                icon='user'
                onChange={onChangeInput}
                iconPosition='left'
                placeholder='ID'
                name="email"
                value={email}
            />
            <Form.Input
                fluid
                icon='lock'
                onChange={onChangeInput}
                iconPosition='left'
                placeholder='Password'
                type='password'
                name="password"
                value={password}
                onKeyPress={onKeyPress}
            />

            <div className={cx('error')}>* 없는 회원정보입니다. 다시 확인해주세요.</div>
            <Grid>
                <Grid.Column floated='left' width={5}>
                    <WelcomeButton animated click={onPrevClickhandle}>
                        <Button.Content visible>이전</Button.Content>
                            <Button.Content hidden>
                                <Icon name='left arrow'/>
                            </Button.Content>
                        </WelcomeButton> 
                </Grid.Column>
                <Grid.Column floated='right' width={11}>
                <WelcomeButton
                    color='orange'
                    click={onLoginhandle}
                >
                로그인
                </WelcomeButton> 
                </Grid.Column>
            </Grid>
        </div>
    )
}


export default Login;