import React from 'react';
import { getModifiedClassNames } from 'ts/functions';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'red' | 'green' | 'blue';
}

export const Button: React.FC<Props> = ({ color = 'green', ...props }) => {
  const modifiers = {
    disabled: props.disabled,
    [color]: true,
  };

  return <button className={getModifiedClassNames('a-button', modifiers)}>{props.children}</button>;
};
