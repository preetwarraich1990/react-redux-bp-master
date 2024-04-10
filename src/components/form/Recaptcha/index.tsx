/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import GoogleRecaptcha from 'react-google-recaptcha'

interface RecaptchaProps {
  onChange: (value: any) => void
}
const Recaptcha: React.FC<RecaptchaProps> = ({ onChange }) => {
  return (
    <GoogleRecaptcha
      sitekey={"6Lei9PgdAAAAADgGc8rnY9fAAE3Pxqqaq6SbiWb-"}
      onChange={onChange}
    />
  )
}

export default Recaptcha
