import emailjs from '@emailjs/browser';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

import { StandardContainer, StandardSection } from '../../_common/components/standard';
import { color, fontWeight, mediaQuery, textSize } from '../../global/style';
;

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

const Content = () => {
  const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    try {
      await emailjs.send(
        'service_mif6kp5',
        'template_zl9ivuq',
        data,
        'zS105_6YutEc5OvSu'
      );
      toast.success('The notification has been sent out! I will contact you very soon. Thanks');
    } catch(e) {
      toast.error('Woops, something went wrong. Please contact me directly at jonathan.couck@outlook.com');
    }
  };
  return (
    <StandardContainer>
      <StyledSection>
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
    </StandardContainer>
  );
};

export default Content;