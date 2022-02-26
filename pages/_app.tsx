import ApplicationContextProvider from '../src/context/ApplicationContextProvider';
import ThemeContextProvider from '../src/context/ThemeContextProvider';
import '../src/styles/index.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <ApplicationContextProvider>
        <Component {...pageProps} />
      </ApplicationContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp;
