import React from 'react';
import styles from './Join.scss';
import classNames from 'classnames/bind';
import { Button, Grid, Form, Icon, Divider } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const Join = ({divstyle}) => {

       
    return(
        <div className={cx('Join')}>
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
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password Confirm'
                            type='password'
                        />
                        <Form.Input
                            fluid
                            icon='id badge'
                            iconPosition='left'
                            placeholder='Nickname'
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
                                <Button color = 'grey' fluid size = 'large' style={{ color: 'white', marginBottom: '1em' }} >회원가입 완료</Button>
                            </Grid.Column>
                        </Grid>

                        <Divider/>

                        <Button color='facebook' fluid size = 'medium'>
                            <Icon name='facebook' /> 페이스북으로 가입하기
                        </Button>
                       
                        
        </div>
    )
}


export default Join;