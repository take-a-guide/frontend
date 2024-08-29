import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
import '@/configs/styles/globalStyles.css';
import { Header } from '@/presentation/components/Header/Header';
import { LayoutContainer } from '@/presentation/components/LayoutContainer/styles';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ToastContainer />
            <ThemeProvider>
              <Header />
              <LayoutContainer>{children}</LayoutContainer>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
