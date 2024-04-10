import * as React from 'react';
import FacebookIcon from '../svg/FacebookIcon';
import FacebookLogin from 'react-facebook-login';

const SocialFacebook: React.FC = () => {
  const [login, setLogin] = React.useState<boolean>(false);
  
  const responseFacebook = (response:any) => {
    console.log(response);
    // Login failed
    if (response.status === 'unknown') {
      alert('Login failed!');
      setLogin(false);
      return false;
    }
    console.log('Facebook Login Data---->',response);
    console.log('Facebook Picture---->', response.picture.data.url);
    //setData(response);
    //setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <FacebookLogin
      appId="498179468154723"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="my-facebook-button-class"
      icon={<FacebookIcon />}
      textButton=" Facebook"
    />
  );
};

export default SocialFacebook as React.FC;
