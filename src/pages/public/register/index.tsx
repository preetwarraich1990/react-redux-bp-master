import * as React from 'react';
import styled from 'styled-components';
import PhoneNumber from 'awesome-phonenumber';
import { useFormik } from 'formik';
import AuthContent from '../../../components/AuthContent';
import Divider from '../../../components/Divider';
import Button from '../../../components/form/Button';
import FormField from '../../../components/form/FormField';
import TextInput from '../../../components/form/TextInput';
//import { userSignup } from '@root/redux/slices/signup';
//import { SignupPostData } from '@root/redux/slices/signup/types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Recaptcha from '../../../components/form/Recaptcha';
import AuthLoader from '../../../components/AuthLoader';
import { useNavigate } from 'react-router-dom';

// console.log(buttonBgUrl, "buttonBgUrl");

const PageContainer = styled.div``;

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 100px 0;
`;

const SignUpFormContainer = styled.div`
  width: 463px;
  height: 1200px;
  z-index: 100;
`;

const SignUpSocialButtons = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 70px;
`;

const StyledButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
`;

const StyledFormContainer = styled.div`
  margin-top: 10px;
  display: block;
  width: 100%;

  & [type='text'],
  & [type='password'] {
    position: relative;
  }
  & [type='password'] {
    font-family: caption;
  }
`;

const StyledTextInput = styled(TextInput)`
  &.firstInput {
    margin-right: 5px;
  }
  &.lastInput {
    margin-left: 5px;
  }
`;


const RecaptchaContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
const FormFieldRow = styled.div`
  display: flex;
`;

const SignupPage: React.FC = () => {
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      mobile: '',
      isCaptchaVerified: false,
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2))
      navigate('/confirm');
    },
    validate: (values) => {
      let errors: any = {};

      const emailRegex =
        // eslint-disable-next-line no-useless-escape
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!values.firstName) {
        errors.firstName = 'Required';
      }
      if (!values.lastName) {
        errors.lastName = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      } else if (!values.email.match(emailRegex)) {
        errors.email = 'Please enter the valid email!';
      }
      if (!values.username) {
        errors.username = 'Required';
      }

      if (values.mobile) {
        const pn = new PhoneNumber(values.mobile);
        if (!pn.isValid()) {
          errors.mobile = 'Please enter the valid phone number!';
        }
      }
      if (
        values.firstName &&
        values.lastName &&
        values.email &&
        values.username
      ) {
        if (!values.isCaptchaVerified) {
          errors.isCaptchaVerified = 'Please verify captcha!';
        }
      }

      return errors;
    },
    // validationSchema: SignupValidateSchema
  });

  const isSignupRequesting = false;
  const isUserCreated = false;
  const errorText = '';

  React.useEffect(() => {
    if (errorText) {
      //toast.error(`Signup failed: ${errorText}`);
    }
  }, [errorText]);

  React.useEffect(() => {
    if (isUserCreated) {
      // toast.success('User created successfully!');
      // history.replace('/confirm');
    }
  }, [isUserCreated]);

  const handleRecaptchaChange = (value: any) => {
    if (value) {
      //setIsCaptchaVerified(true);
      formik.setFieldValue('isCaptchaVerified', true);
    }
  };

  const isRequesting = isSignupRequesting;

  return (
    <PageContainer>
      <SignUpContainer>
        <SignUpFormContainer>
            <AuthContent
              title='Welcome to Haiku Pro'
              subtitle='Sign up for an account with'
            />
            <SignUpSocialButtons>
              <Divider text='or' />
              <StyledFormContainer>
                <FormFieldRow>
                  <FormField>
                    <StyledTextInput
                      className='firstInput'
                      label='first name'
                      value={formik.values.firstName}
                      onChange={(text: string) =>
                        formik.setFieldValue('firstName', text)
                      }
                    />
                    {formik.errors.firstName && formik.touched.firstName && (
                      <span className='error'>{formik.errors.firstName}</span>
                    )}
                  </FormField>
                  <FormField>
                    <StyledTextInput
                      className='lastInput'
                      label='last name'
                      value={formik.values.lastName}
                      onChange={(text: string) =>
                        formik.setFieldValue('lastName', text)
                      }
                    />
                    {formik.errors.lastName && formik.touched.lastName && (
                      <span className='error'>{formik.errors.lastName}</span>
                    )}
                  </FormField>
                </FormFieldRow>
                <FormField>
                  <TextInput
                    label='email'
                    value={formik.values.email}
                    onChange={(text: string) =>
                      formik.setFieldValue('email', text)
                    }
                  />
                  {formik.errors.email && formik.touched.email && (
                    <span className='error'>{formik.errors.email}</span>
                  )}
                </FormField>

                <FormField>
                  <TextInput
                    label='username'
                    value={formik.values.username}
                    onChange={(text: string) =>
                      formik.setFieldValue('username', text)
                    }
                  />
                  {formik.errors.username && formik.touched.username && (
                    <span className='error'>{formik.errors.username}</span>
                  )}
                </FormField>

                <FormField>
                  <PhoneInput
                    country={'us'}
                    value={formik.values.mobile}
                    onChange={(phone: string) =>
                      formik.setFieldValue('mobile', '+' + phone)
                    }
                  />
                  {formik.errors.mobile && formik.touched.mobile && (
                    <span className='error'>{formik.errors.mobile}</span>
                  )}
                </FormField>

                <FormField>
                  <RecaptchaContainer>
                    <Recaptcha onChange={handleRecaptchaChange} />
                  </RecaptchaContainer>
                  {formik.errors.isCaptchaVerified && (
                    <span className='error'>
                      {formik.errors.isCaptchaVerified}
                    </span>
                  )}
                </FormField>
              </StyledFormContainer>
              <StyledButtonContainer>
                <FormField>
                  <Button
                    onClick={() => formik.handleSubmit()}
                    label='Sign Up'
                    disabled={isRequesting}
                  />
                </FormField>
              </StyledButtonContainer>
            </SignUpSocialButtons>
            {isRequesting ? <AuthLoader /> : null}
        </SignUpFormContainer>
      </SignUpContainer>
    </PageContainer>
  );
};

export default SignupPage as React.FC;
