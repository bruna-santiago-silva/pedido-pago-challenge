import MediaQuery from 'react-responsive';
import AgentDesktop from '../../components/AgentDesktop'
import AgentMobile from '../../components/AgentMobile';

const Details = () => {
  return (
    <>
      <MediaQuery minWidth={500}>
        <AgentDesktop /> 
      </MediaQuery>
      <MediaQuery maxWidth={500}>
        <AgentMobile />
      </MediaQuery>
    </>
  )
}

export default Details;
