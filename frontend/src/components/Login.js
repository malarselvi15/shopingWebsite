import React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';

// Background image URL
const backgroundImageUrl = 'https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-image_133225.jpg';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

const signIn = async (provider, formData) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      alert(
        `Signing in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`
      );
      resolve();
    }, 300);
  });
  return promise;
};

const Login = () => {
  const theme = useTheme();

  // Inline styles for the main container
  const containerStyle = {
    height: '100vh', // Full height of the viewport
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={containerStyle}>
      <AppProvider theme={theme}>
        <SignInPage signIn={signIn} providers={providers} />
      </AppProvider>
    </div>
  );
};

export default Login;
