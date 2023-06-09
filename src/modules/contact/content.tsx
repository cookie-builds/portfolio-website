import emailjs from '@emailjs/browser';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

import { StandardContainer, StandardSection } from '../../_common/components/standard';
import { color, fontWeight, mediaQuery, textSize } from '../../global/style';

const { REACT_APP_EMAIL_SERVICE, REACT_APP_EMAIL_TEMPLATE, REACT_APP_EMAIL_PUBLIC_KEY } = process.env;

const StyledContainer = styled(StandardContainer)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const StyledSection = styled(StandardSection)`
  text-align: left; 
`;

const FormContainer = styled.form`
  display: grid;
  padding: 2rem;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

const FormField = styled.label`
  ${textSize.p}
  font-weight: ${fontWeight.medium};
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
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`;

const StyledTextArea = styled.textarea`
  ${textSize.p}
  padding: 0.5rem;
  resize: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`;

const SubmitButton = styled.button`
  ${textSize.p}
  cursor: pointer;
  background-color: ${color.lightGray};
  font-weight: ${fontWeight.bold};
  color: ${color.darkText};
  padding: 0.5rem 1rem;
  border: 0;
  grid-column: span 2;
  width: 7rem;
  height: 2.5rem;
  margin-left: auto;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(FaSpinner)`
  animation: ${rotate} 1s linear infinite;
`;

const Title = styled.div`
  ${textSize.title}
  font-weight: ${fontWeight.bold};
  margin: 0 0 1rem 0;
`;

const OtherLink = styled.a`
  color: ${color.primary};
`;

const OtherContact = styled.div`
  ${textSize.p}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

const OtherDiv = styled.div`
  font-weight: ${fontWeight.medium};
`;

const Content = () => {
  const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    try {
      if (process.env.REACT_APP_EMAIL_SERVICE && process.env.REACT_APP_EMAIL_TEMPLATE && process.env.REACT_APP_EMAIL_PUBLIC_KEY) {
        await emailjs.send(
          process.env.REACT_APP_EMAIL_SERVICE, 
          process.env.REACT_APP_EMAIL_TEMPLATE,
          data,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY
        );
      } else {
        throw new Error();
      }
      toast.success('The notification has been sent out! I will contact you very soon. Thanks');
    } catch(e) {
      toast.error('Woops, something went wrong. Please contact me directly at jonathan.couck@outlook.com');
    }
  };

  return (
    <StyledContainer>
      <StyledSection>
        <Title>Contact me here:</Title>
        <FormContainer onSubmit={handleSubmit(onSubmit)} style={{ background: 'linear-gradient(0deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
          <FormField>
            Name/company
            <StyledInput type='text' {...register('name', { required: true })} aria-invalid={errors.name ? 'true' : 'false'}/>
            {errors.name?.type === 'required' && <p role="alert" style={{ color: 'red', margin: '0' }}>Name/company is required</p>}
          </FormField>
          <FormField>
            Email
            <StyledInput type='text' {...register('email', { required: true })} aria-invalid={errors.email ? 'true' : 'false'}/>
            {errors.email?.type === 'required' && <p role="alert" style={{ color: 'red', margin: '0' }}>Email is required</p>}
          </FormField>
          <FormFieldSpan>
            Message
            <StyledTextArea rows={5} {...register('message', { required: true })} aria-invalid={errors.message ? 'true' : 'false'}/>
            {errors.message?.type === 'required' && <p role="alert" style={{ color: 'red', margin: '0' }}>Message is required</p>}
          </FormFieldSpan>
          <SubmitButton type='submit' disabled={isSubmitting}>
            {isSubmitting && 
            <Spinner color={color.darkText} />
            }
            {!isSubmitting && 'Send'}
          </SubmitButton>
        </FormContainer>
      </StyledSection>
      <StyledSection>
        <Title>Or send me a direct message here:</Title>
        <OtherContact>
          <OtherDiv>Email \ <OtherLink href='mailto:jonathan.couck@outlook.com' target='_blank'>jonathan.couck@outlook.com</OtherLink><br/></OtherDiv>
          <OtherDiv>LinkedIn \ <OtherLink href='https://www.linkedin.com/in/jonathancouck/' target='_blank'>@jonathancouck</OtherLink><br/></OtherDiv>
          <OtherDiv>Facebook \ <OtherLink href='https://www.facebook.com/Jonathan.Couck/' target='_blank'>Jonathan&nbsp;Couck</OtherLink><br/></OtherDiv>
          <OtherDiv>Instagram \ <OtherLink href='https://www.instagram.com/jcouck/' target='_blank'>@jcouck</OtherLink><br/></OtherDiv>
        </OtherContact>
      </StyledSection>
    </StyledContainer>
  );
};

export default Content;