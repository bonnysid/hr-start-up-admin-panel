import { FC } from 'react';
import * as ST from './styled';

export enum ButtonVariant {
  OUTLINE = 'outline',
  FILLED = 'filled',
}

type OwnProps = {
  type?: ButtonVariant;
  text?: string;
};

type Props = Omit<React.ComponentPropsWithRef<'button'>, keyof OwnProps> & OwnProps;

export const Button: FC<Props> = ({ type = ButtonVariant.FILLED, children, text, ...rest }) => {
  return (
    <ST.Wrapper className={`${type}`} {...rest}>
      {text || children}
    </ST.Wrapper>
  );
}
