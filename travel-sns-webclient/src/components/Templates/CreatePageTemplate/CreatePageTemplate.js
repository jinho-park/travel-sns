import React from 'react';
import classNames from 'classnames/bind';
import styles from './CreatePageTemplate.scss';
import { Header, CustomInput } from 'components';
import { Dropdown, TextArea, Button } from 'semantic-ui-react';

const cx = classNames.bind(styles);
const options = [
    { key: 'key1', text: 'text1', value: 'value1' },
    { key: 'key2', text: 'text2', value: 'value2' },
    { key: 'key3', text: 'text3', value: 'value3' },
  ];

const CreatePageTemplate = ({header}) =>{
    return(
        <div className={cx('page')}>
            <div className={cx('header')}>
                <Header logo="aa"/>
            </div>
            <div className={cx('mainContent')}>
                <div className={cx('standardDiv')}>
                    <CustomInput placeholder="이야기의 제목을 입력해 주세요"/>
                </div>
                <p/>
                <div className={cx('dropdownDiv')}>
                    <Dropdown defaultValue='value1' options={options} />
                </div>
                <div className={cx('dropdownDiv')}>
                    <Dropdown defaultValue='value2' options={options} />
                </div>
                <p/>
                <div className={cx('standardDiv')}>
                    <TextArea placeholder='country hashs'/>
                </div>
                <p/>
                <div className={cx('standardDiv')}>
                    날짜 추가
                    <p/>
                    <Button circular icon='add circle' />
                </div>
                <p/>
                <div className={cx('standardDiv')}>
                    <Button>임시저장</Button>
                    <Button>게시</Button>
                </div>
            </div>
        </div>
    )
}

export default CreatePageTemplate;