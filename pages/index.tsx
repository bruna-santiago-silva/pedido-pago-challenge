import MediaQuery from 'react-responsive';
import DesktopHome from '../components/DesktopHome';
import MobileHome from '../components/MobileHome';

const Home = () => {
  return (
    <>
      <MediaQuery minWidth={500}>
        <DesktopHome /> 
      </MediaQuery>
      <MediaQuery maxWidth={500}>
        <MobileHome />
      </MediaQuery>
    </>
  )
}

export default Home;
