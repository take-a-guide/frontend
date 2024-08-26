import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
import '@/configs/styles/globalStyles.css';

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
            <ThemeProvider>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
