import React, { useState } from 'react';
import eyeIcon from '../../assets/icons/eye.svg';
import eyeOffIcon from '../../assets/icons/eye-off.svg';
import {
  ClearButton,
  IconButton,
  InputWrapper,
  StyledImg,
  StyledInput,
  Wrapper,
} from './';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  clearable?: boolean;
};

const Input = ({ type = 'text', clearable = false, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <Wrapper>
      <InputWrapper>
        <StyledInput
          {...props}
          type={inputType}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {type === 'password' && (
          <IconButton onClick={() => setShowPassword((prev) => !prev)}>
            <StyledImg
              src={showPassword ? eyeOffIcon : eyeIcon}
              alt="Toggle password"
            />
          </IconButton>
        )}
      </InputWrapper>

      {clearable && value && (
        <ClearButton onClick={() => setValue('')}>✕</ClearButton>
      )}
    </Wrapper>
  );
};

export default Input;
