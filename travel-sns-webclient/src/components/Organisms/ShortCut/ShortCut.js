import React from 'react';
import styles from './ShortCut.scss';
import classNames from 'classnames/bind';
import { BoardInfo } from 'components';

const cx = classNames.bind(styles);

const ShortCut = ({data, image}) => {
    const itemList = data.map(
        d => (
            <BoardInfo
                title={d.title}
                like={d.like}
                comment={d.comment}
                write={d.user}
                date={d.item.date}
                country={d.place.country}
                city={d.place.city}
            />
        )
    )
    return(
        <div className={cx('cut')}>
            <div className={cx('image')}>
                {image}
            </div>
            <div className={cx('info')}>
                {itemList}
            </div>
        </div>
    )
}

export default ShortCut;