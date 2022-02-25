import ApplicationContextProvider from '../src/context/ApplicationContext';
import '../src/styles/index.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApplicationContextProvider>
      <Component {...pageProps} />
    </ApplicationContextProvider>
  )
}

export default MyApp;
