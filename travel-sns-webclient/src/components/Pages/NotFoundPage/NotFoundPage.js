import React from 'react';
import styles from './NotFoundPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NotFoundPage = () => {
    return (
        <div className={cx('not')}>
            404 NOT FOUND
            페이지를 찾을 수 없습니다
        </div>
    )
}

export default NotFoundPage;