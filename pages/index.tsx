import MediaQuery from 'react-responsive';
import DesktopHome from '../components/DesktopHome';
import MobileHome from '../components/MobileHome';
import ApplicationContextProvider from '../src/context/ApplicationContext';

const Home = () => {
  return (
    <ApplicationContextProvider>
      <MediaQuery minWidth={500}>
        <DesktopHome /> 
      </MediaQuery>
      <MediaQuery maxWidth={500}>
        <MobileHome />
      </MediaQuery>
    </ApplicationContextProvider>
  )
}

export default Home;
