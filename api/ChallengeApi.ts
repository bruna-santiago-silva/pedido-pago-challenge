import { Api } from './index';

class ChallengeApi extends Api {
    async getAgents() {
        const response = await this.axios.get(`/agents`)
        return response.data;
    }

    async getAgent() {
        const response = await this.axios.get(`/agent/1`)
        return response.data;
    }

    async getRoles() {
        const response = await this.axios.get(`/roles`)
        return response.data;
    }
}

export const challengeApi = new ChallengeApi();
