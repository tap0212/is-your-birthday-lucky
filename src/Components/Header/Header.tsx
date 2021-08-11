import { COLORS } from '@/styling/colors';
import { configureFelx } from '@/styling/styles';
import React from 'react';
import styled from 'styled-components';
type Props = {
  title: string;
};

const Wrapper = styled.div`
  width: 100vw;
  height: 4rem;
  background-color: ${COLORS.PRIMARY};
  padding-left: 1rem;
  ${configureFelx({ direction: 'row', alignItems: 'center', justify: 'center' })}
`;
const Header = ({ title }: Props) => {
  return (
    <Wrapper>
      <h2 style={{ color: `${COLORS.ACCENT}` }}>{title}</h2>
    </Wrapper>
  );
};

export default React.memo(Header);
