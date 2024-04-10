import * as React from 'react';
import LinkedInIcon from '../svg/LinkedInIcon';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import Button from '../form/Button';

const SocialLinkedin: React.FC = () => {
  const [code, setCode] = React.useState<string>('');
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const { linkedInLogin } = useLinkedIn({
    clientId: '78k1kbmsoykro3',
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      console.log(code);
      setCode(code);
      setErrorMessage('');
    },
    scope: 'r_emailaddress r_liteprofile',
    onError: (error) => {
      console.log(error);
      setCode('');
      setErrorMessage(error.errorMessage);
    },
  });

  return (
    <Button icon={LinkedInIcon} label="LinkedIn" onClick={linkedInLogin}/>
  );
};

export default SocialLinkedin as React.FC;
