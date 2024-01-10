const apiKey = "433d7a0f-1374-49dc-b187-d6b68f9d743f";
const baseUrl = "https://project-1-api.herokuapp.com";

class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
    //   this.baseUrl = "https://project-1-api.herokuapp.com"; // Instruction say not to make this a parameter but have it as a instance.
    };

    async postComments(newComment) {
        try {
            const response = await axios.post(`${this.baseUrl}/comments?api_key=${apiKey}`);
            console.log(response.data);
        } catch(error) {
            console.error(error.message); // use .error for errors
        }
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${apiKey}`);
            console.log(response.data);
        } catch(error) {
            console.error(error.message); // use .error for errors
        }
        // commentsArray.sort(a,b) => (b.yearDate - a.yearDate);
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseUrl}/shows?api_key=${apiKey}`);
            console.log(response.data);
        } catch(error) {
            console.error(error.message); // use .error for errors
        }
    }

    }

const myData = new BandSiteApi(apiKey);


    