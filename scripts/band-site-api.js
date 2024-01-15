const apiKey = "433d7a0f-1374-49dc-b187-d6b68f9d743f";

class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = "https://project-1-api.herokuapp.com";
    };

    async postComment(myObject) {
        try {
            const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, myObject) //This is the method  
            return response.data;
        } catch (error) {
            console.error("Post Comment Not Working", error);
        }   
    }   

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`)
            return response.data;  
        } catch (error) {
            console.error("Get Comment Not Working", error);
        }
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`)
            return response.data;  
        } catch (error) {
            console.error("Get Shows Not Working", error);
        }
    }
}

export default BandSiteApi;