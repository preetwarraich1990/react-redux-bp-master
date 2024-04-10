import * as React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { useNavigate} from 'react-router-dom'

import { useAuth } from '../../../hoc/AuthProvider'
import * as Yup from 'yup';
import TextInput from '../../../components/form/TextInput'
import FormField from '../../../components/form/FormField'
import Button from '../../../components/form/Button'


const Login: React.FC = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const LoginValidateSchema = Yup.object().shape({
    username: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      auth.signin(values, () => {
        navigate('/welcome')
      })
    },
    validationSchema: LoginValidateSchema
  })

  return (
    <PageContainer>
      <LoginContainer>
        <LoginFormContainer>
          <FormField>
                  <TextInput
                    label='email'
                    value={formik.values.username}
                    onChange={(text: string) =>
                      formik.setFieldValue('username', text)
                    }
                  />
                  {formik.errors.username && formik.touched.username && (<span className="error">{formik.errors.username}</span>)}
                </FormField>
                
                <FormField>
                  <TextInput
                    type='password'
                    label='password'
                    value={formik.values.password}
                    showPassword={showPassword}
                    onChange={(text: string) =>
                      formik.setFieldValue('password', text)
                    }
                    onRightIconClick={() => setShowPassword(!showPassword)}
                  />
                  {formik.errors.password && formik.touched.password && (<span className="error">{formik.errors.password}</span>)}
                </FormField>
                
              <StyledButtonContainer>
                <Button
                  onClick={() => formik.handleSubmit()}
                  label={formik.isSubmitting ? 'Logining in...' : 'Log In'}
                  disabled={false}
                />
              </StyledButtonContainer>
        </LoginFormContainer>
      </LoginContainer>
    </PageContainer>
  )
}

export default Login as React.FC

const PageContainer = styled.div``

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 100px 0;
`

const LoginFormContainer = styled.div`
  width: 463px;
  height: 1030px;
  z-index: 100;
`

const StyledButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
`

