import React from 'react';
import styles from './Login.scss';
import classNames from 'classnames/bind';
import { Button, Grid, Form, Icon } from 'semantic-ui-react';

import { WelcomeButton } from 'components';

const cx = classNames.bind(styles);

const Login = ({ds_off}) => {
    return(
        <div className={cx('Login' , {ds_off}) } >

           
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='ID'
                        />

                        
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <div className={cx('error')}>* 없는 회원정보입니다. 다시 확인해주세요.</div>


                        <Grid>
                            <Grid.Column floated='left' width={5}>
                                <Button animated fluid size = 'large'>
                                    <Button.Content visible>이전</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='left arrow' />
                                    </Button.Content>
                                </Button> 
                            </Grid.Column>
                            <Grid.Column floated='right' width={11}>
                            <WelcomeButton color = 'orange' label="로그인" /> 
                            </Grid.Column>
                        </Grid>


                       
     

        </div>
    )
}


export default Login;