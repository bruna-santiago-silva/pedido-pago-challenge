import ApplicationContextProvider from "../src/context/ApplicationContext"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApplicationContextProvider>
      <Component {...pageProps} />
    </ApplicationContextProvider>
  )
}

export default MyApp;
