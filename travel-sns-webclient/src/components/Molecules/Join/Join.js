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
        error
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
        unformEmail,
        duplicateEmail,
        checkpassword,
        duplicateNick
    } = error.toJS();

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
            { duplicateEmail ? <Label basic color='red' pointing>이미 있는 이메일 입니다</Label> : null}
            { unformEmail ? <Label basic color='red' pointing>잘못된 이메일 형식입니다</Label> : null}

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
                { duplicateEmail ? <Label basic color='red' pointing>비밀번호가 일치하지 않습ㄴ디ㅏ</Label> : null}
                <Form.Input
                    value={nickname}
                    name="nickname"
                    fluid
                    icon='id badge'
                    iconPosition='left'
                    placeholder='Nickname'
                    onChange={onChangeInput}
                />
                <div className={cx('error')}>*이미 있는 닉네임입니다.</div>
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