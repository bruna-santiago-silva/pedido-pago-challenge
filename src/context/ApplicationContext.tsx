import { createContext, useEffect, useState } from "react";
import { challengeApi } from "../../api/ChallengeApi";
import { IAgent, IRole } from "../interfaces";

interface IContext {
  agents: IAgent[];
  filteredAgents: IAgent[];
  setFilteredAgents: any;
  roles: IRole[];
  filteredRoles: IRole[];
  setFilteredRoles: any;
}

export const ApplicationContext = createContext<IContext>({
  agents: [],
  filteredAgents: [],
  setFilteredAgents: '',
  roles: [],
  filteredRoles: [],
  setFilteredRoles: '',
})

const ApplicationContextProvider: React.FC = ({ children }) => {

  const [agents, setAgents] = useState<IAgent[]>([])
  const [filteredAgents, setFilteredAgents] = useState<IAgent[]>([])
  const [roles, setRoles] = useState<IRole[]>([])
  const [filteredRoles, setFilteredRoles] = useState<IRole[]>([])

  const fetchAgents = async () => {
    await challengeApi
      .getAgents()
      .then(response => {
        setAgents(response.items)
        setFilteredAgents(response.items)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => { fetchAgents() }, [])

  const fetchRoles = async () => {
    await challengeApi
      .getRoles()
      .then(response => {
        setRoles(response.roles)
        setFilteredRoles(response.roles)
      })
      .catch(error => console.log(error))
  }
  useEffect(() => { fetchRoles() }, [])
  return (
    <ApplicationContext.Provider
      value={{
        agents,
        filteredAgents,
        setFilteredAgents,
        roles,
        filteredRoles,
        setFilteredRoles
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationContextProvider;

