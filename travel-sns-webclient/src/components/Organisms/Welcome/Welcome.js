import React from 'react';
import styles from './Welcome.scss';
import classNames from 'classnames/bind';
import { Segment, Grid, Form } from 'semantic-ui-react';
import { Login, Choice, Join } from 'components';


const cx = classNames.bind(styles);


const Welcome = () => {

    

    return(
        <div className={cx('Parent_Welcome')}>
        
                <Grid 
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                <Grid.Column style={{ maxWidth: 400 }}>
                    <Form size='large'>
                        <Segment raised>        
                            
                            <Choice/>
                            <Login divstyle="" />
                            <Join divstyle="none"/>


                        </Segment>
                    </Form>
                </Grid.Column>
                </Grid>
         
        </div>




    )
}



 


      


export default Welcome;