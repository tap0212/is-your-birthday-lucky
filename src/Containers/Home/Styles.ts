import { COLORS } from '@/styling/colors';
import { FONT_SIZE } from '@/styling/fonts';
import { media } from '@/styling/media';
import { configureFelx } from '@/styling/styles';
import { DatePicker, Form } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  padding: 2rem;
  min-height: 100vh;
  background-color: ${COLORS.SECONDARY};
  ${FONT_SIZE.large()}
  ${configureFelx({ direction: 'row', alignItems: 'center', justify: 'center' })}
`;
export const StyledForm = styled(Form)`
  &.ant-form {
    width: 50%;
    padding: 0 2rem;
    ${media.tablet} {
      width: 100%;
      padding: 0 1rem;
    }
  }
`;
export const CustomFormInput = styled(Form.Item)`
  &.ant-form-item {
    margin: 1rem 0;
  }
`;

export const StyledPicker = styled(DatePicker)`
  &.ant-picker {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid ${COLORS.ACCENT};
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  cursor: pointer;
  ${configureFelx({ direction: 'column', alignItems: 'center', justify: 'center' })}
`;
