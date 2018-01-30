import React from 'react';
import styles from './ItemHead.scss';
import classNames from 'classnames/bind';
import country_city from 'country-city';
import { Dropdown, Button, Input } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const ItemHead = ({
    onChangehandle,
    onTagClickhandle,
    onDateClickhandle,
    onTempClickhandle,
    onSelectModalhandle,
    title,
    country,
    options
}) => {
    const city = country_city.getCities(country);
    const option2 = [];

    city.forEach(function(item, index){
        const data = {
            key : item,
            value : item,
            text : item
        };

        option2[index] = data;
    });

    return(
        <div>
            <div className={cx('standardDiv')}>
                <Input 
                    name="title"
                    value={title}
                    placeholder="이야기의 제목을 입력해 주세요"
                    onChange={onChangehandle}
                />
            </div>
            <div className={cx('dropdownDiv')}>
                <Dropdown
                    name="country"
                    search 
                    className={cx('dropdown')} 
                    defaultValue='Korea, Republic of' 
                    options={options}
                    onChange={onChangehandle}
                    value={country}
                />
                <Dropdown
                    name="city"
                    search
                    className={cx('dropdown')}
                    defaultValue='Seoul'
                    options={option2}
                    onChange={onChangehandle}
                />
            </div>
            <div className={cx('standardDiv')}>
                <Input
                    className={cx('')}
                    label={<Button onClick={onTagClickhandle}>Add Tag</Button>}
                    labelPosition="right"
                    icon='tags'
                    iconPosition='left'
                    placeholder='Enter tag'
                    name="tag"
                />
            </div>
            <div className={cx('standardDiv')}>
                <Button
                    circular
                    icon='add circle'
                    onClick={onDateClickhandle}
                >
                    날짜 추가
                </Button>
            </div>
            <div className={cx('standardDiv')}>
                <Button
                    className={cx('button')}
                    onClick={onTempClickhandle}
                >
                    임시저장
                </Button>
                <Button
                    className={cx('button')}
                    onClick={onSelectModalhandle}
                >
                    게시
                </Button>
            </div>
        </div>
    )
}

export default ItemHead;