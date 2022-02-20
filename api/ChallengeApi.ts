import { Api } from './index';

class ChallengeApi extends Api {
    async getAgents() {
        const response = await this.axios.get(`/agents`)
        return response.data;
    }
}

export const challengeApi = new ChallengeApi();
