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
    <LoginStyles.GridContainer>
      <Grid item justifyContent="center">
        <LoginStyles.Box>
          <LoginStyles.LogoContainer>
            <LoginStyles.TagLogo src={tagLogoOrange} alt="Take a Guide Icon" />
            <LoginStyles.Title>Entre em sua conta</LoginStyles.Title>
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
                  name="Email"
                  required
                />
                <Input
                  placeholder="Senha"
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
                sx={{ justifyContent: 'center', margin: '2rem 0' }}
              >
                <Grid item>
                  {`Não possui uma conta?`}
                  <Link
                    href="/sign-up"
                    style={{
                      textDecoration: 'underline',
                      marginLeft: '0.25rem',
                    }}
                  >
                    {'Cadastre-se'}
                  </Link>
                </Grid>
              </Grid>
            </>
          </Box>
        </LoginStyles.Box>
      </Grid>
    </LoginStyles.GridContainer>
  );
};
