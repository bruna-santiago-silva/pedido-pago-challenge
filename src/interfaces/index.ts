export interface IAgent {
  agent_id: number;
  branch: string;
  department: string;
  image: string;
  name: string;
  role: string;
  status: string;
}

export interface ITableHeadData {
  title: string;
  class: string;
}

export interface IAgentDetail {
  id: number;
  name: string;
  email: string;
  phone: {
    ddd: string;
    ddi: string;
    number: string;
  };
  document: {
    type: string;
    number: string;
  };
  birth_date: Date;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}

export interface IRole {
  name: string;
  departament: string;
  agents_quantity: number;
}

export interface IGroupRules {
  role: string;
  permissions: string[];
}

export interface IPermissions {
  name: string;
  department: string;
  grouprules: IGroupRules[]
}
