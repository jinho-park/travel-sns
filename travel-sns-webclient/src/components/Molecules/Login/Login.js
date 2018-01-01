import React from 'react';
import styles from './Login.scss';
import classNames from 'classnames/bind';
import { Button, Grid, Form, Icon } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const Login = ({divstyle}) => {
    return(
        <div className={cx('Login')} style={{display:'none'}}>

           
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
                                <Button color = 'orange' fluid size = 'large' style={{ color: 'white', marginBottom: '1em' }} >로그인</Button>
                            </Grid.Column>
                        </Grid>
                       
     

        </div>
    )
}


export default Login;