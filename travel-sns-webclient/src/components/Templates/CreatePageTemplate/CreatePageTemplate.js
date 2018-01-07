import React from 'react';
import classNames from 'classnames/bind';
import styles from './CreatePageTemplate.scss';
import { CustomInput, AddDate } from 'components';
import { Dropdown, Button, Input } from 'semantic-ui-react';

const cx = classNames.bind(styles);
const options = [
    { key: 'key1', text: 'text1', value: 'value1' },
    { key: 'key2', text: 'text2', value: 'value2' },
    { key: 'key3', text: 'text3', value: 'value3' },
  ];

const CreatePageTemplate = ({
        header,
        padding,
        responsive,
    }) =>{
    return(
        <div className={cx('page')}>
            <div className={cx('header')}>
                <header>
                    {header}
                </header>
            </div>
            <div className={cx('mainContent', {padding, responsive})}>
                <div className={cx('standardDiv')}>
                    <CustomInput placeholder="이야기의 제목을 입력해 주세요"/>
                </div>
                <div className={cx('dropdownDiv')}>
                    <Dropdown className={cx('dropdown')} defaultValue='value1' options={options} />
                    <Dropdown className={cx('dropdown')} defaultValue='value2' options={options} />
                </div>
                <div className={cx('standardDiv')}>
                    <Input
                        className={cx('input')}
                        label={<Button>Add Tag</Button>}
                        labelPosition="right"
                        icon='tags'
                        iconPosition='left'
                        placeholder='Enter tag'
                    />
                </div>
                <AddDate add={true}/>
                <div className={cx('standardDiv')}>
                    <Button circular icon='add circle'>날짜 추가</Button>
                </div>
                <div className={cx('standardDiv')}>
                    <Button className={cx('button')}>임시저장</Button>
                    <Button className={cx('button')}>게시</Button>
                </div>
            </div>
        </div>
    )
}

export default CreatePageTemplate;