import React from 'react';
import styles from './AddItem.scss';
import classNames from 'classnames/bind';
import { Card } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const AddItem = ({center, click}) => {
    return(
        <div className={cx('additem')}>
            <Card
                link
                centered
                description='당신의 여행을 기록해보세요'
                href='/create'
            />
        </div>
    )
}

export default AddItem;