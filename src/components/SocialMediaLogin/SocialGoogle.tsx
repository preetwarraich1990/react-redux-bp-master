import * as React from 'react';
import GoogleIcon from '../svg/GoogleIcon';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const SocialGoogle: React.FC = () => {
  const responseGoogle = (res:any) => {
    console.log('Google Login Success: currentUser:', res.profileObj);
    /*alert(
          `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );*/
    refreshTokenSetup(res);
  };
    
  const responseGoogleFailure = (res:any) => {
    console.log('Google Login failed: res:', res);
    /*alert(
          'Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz'
        );*/
  };

  return (
    <GoogleLogin
      clientId="730512337887-5i55pcs2d6grusov89j9ktkcfp0u55ei.apps.googleusercontent.com"
      render={renderProps => (
        <button className="my-google-button-class" onClick={renderProps.onClick} disabled={renderProps.disabled}><GoogleIcon /> Google</button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogleFailure}
      cookiePolicy={'single_host_origin'}
      style={{ marginTop: '100px' }}
      isSignedIn={true}
    />
  );
};

export default SocialGoogle as React.FC;
