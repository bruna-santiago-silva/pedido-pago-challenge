import MediaQuery from "react-responsive";
import RoleDesktop from "../../components/RoleDesktop";
import RoleMobile from "../../components/RoleMobile";

const Role = () => {
  return (
    <>
      <MediaQuery minWidth={500}>
        <RoleDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={500}>
        <RoleMobile />
      </MediaQuery>
    </>
  )
}

export default Role;
