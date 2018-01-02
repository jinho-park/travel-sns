import React from 'react';
import styles from './Join.scss';
import classNames from 'classnames/bind';
import { Button, Grid, Form, Icon, Divider } from 'semantic-ui-react';
import { WelcomeButton } from 'components';

const cx = classNames.bind(styles);

const Join = ({ds_off}) => {
    return(
        <div className={cx('Join' , {ds_off}) } >
            <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail'
            />
            <div className={cx('error')}>*이미 있는 E-mail입니다.</div>
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password Confirm'
                    type='password'
                />
                <div className={cx('error')}>*비밀번호가 동일하지 않습니다. 다시 확인해주세요.</div>
                <Form.Input
                    fluid
                    icon='id badge'
                    iconPosition='left'
                    placeholder='Nickname'
                />
                <div className={cx('error')}>*이미 있는 닉네임입니다.</div>
                <Grid>
                    <Grid.Column floated='left' width={5}>
                        <WelcomeButton animated>
                            <Button.Content visible>이전</Button.Content>
                            <Button.Content hidden>
                                <Icon name='left arrow' />
                            </Button.Content>
                        </WelcomeButton> 
                    </Grid.Column>
                    <Grid.Column floated='right' width={11}>
                        <WelcomeButton color = 'orange'>
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