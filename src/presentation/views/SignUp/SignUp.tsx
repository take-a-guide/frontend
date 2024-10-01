'use client';

import { CssBaseline, Paper, Box, Grid } from '@mui/material';
import Link from 'next/link';

import { Button } from '@/presentation/components/Button/Button';
import { SignUpStyles } from '@/presentation/views/SignUp/styles';
import tagLogoOrange from '@/presentation/assets/tag-logo-orange.png';
import { useSignUp } from './hooks/useSignUp';
import { Input } from '@/presentation/components/Input/Input';

export const SignUp: React.FC = () => {
  const { errors, handleInputChange, handleSubmit } = useSignUp();

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={false} sm={4} md={6} sx={SignUpStyles.LeftSide} />
      <CssBaseline />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6}>
        <Box sx={SignUpStyles.RightSide}>
          <SignUpStyles.LogoContainer>
            <SignUpStyles.TagLogo src={tagLogoOrange} alt="Take a Guide Icon" />

            <SignUpStyles.Title>
              Cadastre-se e comece a usar o Take a Guide
            </SignUpStyles.Title>
          </SignUpStyles.LogoContainer>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
            width="100%"
          >
            <>
              <SignUpStyles.InputContainer>
                <Input
                  placeholder="Nome completo"
                  onChange={handleInputChange}
                  name="name"
                  required
                />
                <Input
                  placeholder="Email"
                  onChange={handleInputChange}
                  name="email"
                  required
                  errorMessage={errors.email}
                />
                <Input
                  placeholder="CPF"
                  onChange={handleInputChange}
                  name="cpf"
                  required
                  errorMessage={errors.cpf}
                />
                <Input
                  placeholder="Telefone (xx) xxxxx-xxxx"
                  onChange={handleInputChange}
                  name="phone"
                  required
                  errorMessage={errors.phone}
                />
                <Input
                  placeholder="Senha"
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  required
                  errorMessage={errors.password}
                />
                <Input
                  placeholder="Confirmar Senha"
                  onChange={handleInputChange}
                  type="password"
                  name="confirmPassword"
                  required
                />
              </SignUpStyles.InputContainer>

              <Grid item xs={12} marginTop={2}>
                <Button.Primary $width="100%">Cadastrar</Button.Primary>
              </Grid>

              <Grid
                container
                sx={{ justifyContent: 'center', marginTop: '.5rem' }}
              >
                <Grid item>
                  Já possui uma conta?
                  <Link
                    href="/login"
                    style={{
                      textDecoration: 'underline',
                      marginLeft: '0.25rem',
                    }}
                  >
                    {'Login'}
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
