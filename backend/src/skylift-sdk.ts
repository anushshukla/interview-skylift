import axios from "axios";

export default class Skylift {
    private _baseUrl = 'http://localhost:3002';
    constructor() {}

    private _getEndpoint(path: string) {
        return `${this._baseUrl}/${path}`;
    }
     
    public async addLogs(event: string) {
        const response = await axios.post(this._getEndpoint('logs'), { event });
        return response;
    }

    public async getLogs() {
        const response = await axios.get(this._getEndpoint('logs'));
        return response;
    }
}