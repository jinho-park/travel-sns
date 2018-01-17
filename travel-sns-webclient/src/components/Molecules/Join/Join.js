import React from 'react';
import styles from './Join.scss';
import classNames from 'classnames/bind';
import { Button, Grid, Form, Icon, Divider, Label } from 'semantic-ui-react';
import { WelcomeButton } from 'components';

const cx = classNames.bind(styles);

const Join = ({
        mode,
        onPrevClickhandle,
        onChangeInput,
        onRegisterhandle,
        forms,
        error,
        onKeyPress
    }) => {

    if(mode !== 'auth') {
        return null;
    }

    const {
        email,
        password,
        password2,
        nickname
    } = forms.toJS();

    const {
        email: emailError,
        password: passwordError,
        nickname: nicknameError
    } = error ? error.toJS() : { };

    return(
        <div className={cx('Join') } >
            <Form.Input
                value={email}
                name="email"
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail'
                onChange={onChangeInput}
            />
            { emailError ? <Label className={cx('error')} basic color='red' pointing>{emailError}</Label> : null}

                <Form.Input
                    value={password}
                    name="password"
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={onChangeInput}
                />
                <Form.Input
                    value={password2}
                    name="password2"
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password Confirm'
                    type='password'
                    onChange={onChangeInput}
                />
                { passwordError ? <Label basic color='red' pointing>{passwordError}</Label> : null}
                <Form.Input
                    value={nickname}
                    name="nickname"
                    fluid
                    icon='id badge'
                    iconPosition='left'
                    placeholder='Nickname'
                    onChange={onChangeInput}
                    onKeyPress={onKeyPress}
                />
                { nicknameError ? <Label basic color='red' pointing>{nicknameError}</Label> : null}
                <Grid>
                    <Grid.Column floated='left' width={5}>
                        <WelcomeButton animated click={onPrevClickhandle}>
                            <Button.Content visible>이전</Button.Content>
                            <Button.Content hidden>
                                <Icon name='left arrow' />
                            </Button.Content>
                        </WelcomeButton> 
                    </Grid.Column>
                    <Grid.Column floated='right' width={11}>
                        <WelcomeButton color = 'orange' click={onRegisterhandle}>
                            회원가입
                        </WelcomeButton> 
                    </Grid.Column>
                </Grid>
                <Divider/>
                <WelcomeButton color='facebook'>
                   <Icon name='facebook' size='small'/>
                   FaceBook
                </WelcomeButton>        
        </div>
    )
}


export default Join;