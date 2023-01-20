import styled from 'styled-components';
import { ReactComponent as Icon } from '@src/assets/admin.svg';
import { COLORS } from '@src/utils/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: grid;
  grid-row-gap: 16px;
  padding: 24px;
  background: white;
  border-radius: 16px;
  min-width: 500px;
  box-shadow: 0 7px 15px rgb(0 0 0 / 5%);
`;

export const Logo = styled(Icon)`
  fill: #6193f2;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${COLORS.lightGray10};
`;

export const Title = styled.div`
  font-size: 18px;
  margin-left: 6px;
  font-weight: 500;
`;
