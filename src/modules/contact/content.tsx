import emailjs from '@emailjs/browser';
import React from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import styled from 'styled-components';

import { StandardContainer } from '../../_common/components/standard';
import { color, mediaQuery, textSize } from '../../global/style'; ;

const StyledContainer = styled(StandardContainer)`
  background-color: ${color.darkGray};
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  color: ${color.lightText};
  gap: 6rem;
  text-align: left;
`;

const FlexWhatWeDo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  text-align: center;
  justify-content: center;
`;

const WhatWeDo = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;
  min-width: min-content;
  border-radius: 1rem;
`;

const Text = styled.p`
  ${textSize.p}
  text-align: center;
`;

const FormContainer = styled.form`
  display: grid;
  padding: 2rem;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const FormField = styled.label`
  ${textSize.p}
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  gap: 0.5rem;
  ${mediaQuery.medium`
    grid-column: span 1;
  `}
`;

const FormFieldSpan = styled(FormField)`
  grid-column: span 2;
`;

const StyledInput = styled.input`
  ${textSize.p}
  padding: 0.5rem;
`;

const StyledTextArea = styled.textarea`
  ${textSize.p}
  padding: 0.5rem;
  resize: none;
`;

const SubmitButton = styled.button`
  ${textSize.p}
  cursor: pointer;  
  padding: 0.5rem 1rem;
  border: 0;
  grid-column: span 2;
  width: min-content;
  margin-left: auto;
`;

const Content = () => {
  const [toSend, setToSend] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = React.useCallback(async (event: any) => {
    event.preventDefault();
    try {
      await emailjs.send(
        'service_mif6kp5',
        'template_zl9ivuq',
        toSend,
        'zS105_6YutEc5OvSu'
      );
      toast.success('Here is your toast.');
    } catch(e) {
      toast.error('Woops, something went wrong. You can always contact me by sending an email directly to jonathan.couck@outlook.com.');
    }
  }, [toSend]);

  const handleChange = React.useCallback((e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }, [toSend]);

  return (
    <StyledContainer>
      <FlexWhatWeDo>
        <WhatWeDo style={{ background: 'linear-gradient(0deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
          <HiOutlineDeviceMobile color={color.primary} size='6rem' style={{ margin: '0 auto' }} />
          <Text>+32&nbsp;494&nbsp;21&nbsp;85&nbsp;31</Text>
        </WhatWeDo>
        <WhatWeDo style={{ background: 'linear-gradient(0deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
          <FaLinkedinIn color={color.primary} size='6rem' style={{ margin: '0 auto' }} />
          <Text>@jonathancouck</Text>
        </WhatWeDo>
        <WhatWeDo style={{ background: 'linear-gradient(0deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
          <AiOutlineMail color={color.primary} size='6rem' style={{ margin: '0 auto' }} />
          <Text>jonathan.couck@outlook.com</Text>
        </WhatWeDo>
      </FlexWhatWeDo>
      <FormContainer onSubmit={handleSubmit} style={{ background: 'linear-gradient(0deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
        <FormField>
          Name / Company
          <StyledInput type='text' name='name' onChange={handleChange} />
        </FormField>
        <FormField>
          Email
          <StyledInput type='text' name='email' onChange={handleChange} />
        </FormField>
        <FormFieldSpan>
          Message
          <StyledTextArea rows={5} name='message' onChange={handleChange} />
        </FormFieldSpan>
        <SubmitButton type='submit'>Send</SubmitButton>
      </FormContainer>
    </StyledContainer>
  );
};

export default Content;