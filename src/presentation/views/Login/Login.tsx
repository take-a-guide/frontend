'use client';

import { CssBaseline, Paper, Box, Grid } from '@mui/material';
import Link from 'next/link';
import tagLogoOrange from '@/presentation/assets/tag-logo-orange.png';
import { Button } from '@/presentation/components/Button/Button';
import { LoginStyles } from '@/presentation/views/Login/styles';
import { useLogin } from '@/presentation/views/Login/hooks/useLogin';
import { Input } from '@/presentation/components/Input/Input';

export const Login: React.FC = () => {
  const { handleInputChange, handleSubmit } = useLogin();

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={false} sm={4} md={6} sx={LoginStyles.LeftSide} />
      <CssBaseline />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6}>
        <Box sx={LoginStyles.RightSide}>
          <LoginStyles.LogoContainer>
            <LoginStyles.TagLogo src={tagLogoOrange} alt="Take a Guide Icon" />
            <LoginStyles.Title>Login to your account</LoginStyles.Title>
          </LoginStyles.LogoContainer>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
            width="100%"
          >
            <>
              <LoginStyles.InputContainer>
                <Input
                  placeholder="Email"
                  onChange={handleInputChange}
                  name="email"
                  required
                />
                <Input
                  placeholder="Password"
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  required
                />
              </LoginStyles.InputContainer>

              <Grid item xs={12} marginTop={2}>
                <Button.Primary $width="100%">Login</Button.Primary>
              </Grid>

              <Grid
                container
                sx={{ justifyContent: 'center', marginTop: '.5rem' }}
              >
                <Grid item>
                  {`Don't have an account?`}
                  <Link
                    href="/signup"
                    style={{
                      textDecoration: 'underline',
                      marginLeft: '0.25rem',
                    }}
                  >
                    {'Sign Up'}
                  </Link>
                </Grid>
              </Grid>
            </>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
