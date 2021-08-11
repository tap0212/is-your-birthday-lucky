import Button from '@/Components/Button';
import Input from '@/Components/Input';
import { HomeCreators } from '@/store/reducers/homeReducer';
import { makeSelectHome, selectSample } from '@/store/selectors/homeSelectors';
import { isBirthDayLucky } from '@/utils';
import { Form, message } from 'antd';
import moment from 'moment';
import { Moment } from 'moment';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import Lottie from 'lottie-react-web';
import * as happy from 'assets/lotties/happy.json';
import * as sad from 'assets/lotties/sad.json';

import { createStructuredSelector } from 'reselect';
import { CustomFormInput, Overlay, StyledForm, StyledPicker, Wrapper } from './Styles';
import { COLORS } from '@/styling/colors';
interface StateProps {
  sample: string;
}
interface DispatchProps {
  dispatchSetSample: () => void;
}
type Props = RouteComponentProps;

export type PropsType = StateProps & DispatchProps & Props;
const Home = (props: PropsType) => {
  const [isLucky, setIsLucky] = useState<boolean | null>(null);
  const [form] = Form.useForm();
  const [isShowingAnimation, setIsShowingAnimation] = useState<boolean>(false);
  useEffect(() => {
    if (isLucky !== null) {
      setIsShowingAnimation(true);
    }
  }, [isLucky]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: isLucky ? happy : sad,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const onFinish = (values: any) => {
    setIsLucky(isBirthDayLucky(values.dob, Number(values.luckyNumber)));
  };
  const onFinishFailed = (_errorInfo: any) => {
    message.error('Something went wrong!');
  };
  const hideAnimation = () => {
    form.resetFields();
    setIsShowingAnimation(false);
  };
  const disabledDate = (current: Moment) => !(current && current < moment().endOf('day'));
  return (
    <Wrapper>
      <StyledForm
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1 style={{ textAlign: 'center' }}>You&apos;re just few details away!</h1>
        <CustomFormInput name={'dob'} rules={[{ required: true, message: 'Please select date!' }]}>
          <StyledPicker disabledDate={disabledDate} />
        </CustomFormInput>

        <CustomFormInput
          name={'luckyNumber'}
          rules={[{ required: true, message: 'Please enter a valid number!' }]}
        >
          <Input type={'number'} placeholder={'Enter your lucky number'} />
        </CustomFormInput>

        <CustomFormInput>
          <Button text={'Submit'} htmlType="submit" />
        </CustomFormInput>
      </StyledForm>
      {isShowingAnimation && (
        <Overlay onClick={hideAnimation}>
          <Lottie
            options={defaultOptions}
            height={200}
            style={{
              width: '100%',
              maxWidth: '300px',
              margin: '0',
            }}
          />
          <h2 style={{ color: `${COLORS.SECONDARY}` }}>
            {isLucky ? "Yay! You're the man!" : 'Aww Snap!'}
          </h2>
        </Overlay>
      )}
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome,
  sample: selectSample(),
});
const mapDispatchToProps = {
  dispatchSetSample: () => HomeCreators.sample(),
};

const withConnect = connect<StateProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps);
export default compose<React.FC<PropsType>>(withConnect, memo)(Home);
