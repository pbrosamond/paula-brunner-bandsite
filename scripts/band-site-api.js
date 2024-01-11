const apiKey = "433d7a0f-1374-49dc-b187-d6b68f9d743f";

class BandSiteApi {
    constructor(apiKey, baseUrl) {
      this.apiKey = apiKey;
      this.baseUrl = "https://project-1-api.herokuapp.com";
    };

    async postComment(commentObject) {
        try {
            const response1 = await axios.post(`${this.baseUrl}/comments?api_key=${this.key}`, { //This is the method
                commentObject //this is the body
                }
            )
            this.getComments()          
        } catch (error) {
            console.error("Post Comment Not Working", error);
        }   
    }   

    async getComments() {
        try {
            const response2 = await axios.get(`${this.baseUrl}/comments?api_key=${this.key}`)
            return response2.data;  
        } catch (error) {
            console.error("Get Comment Not Working", error);
        }
    }

    async getShows() {
        try {
            const response3 = await axios.get(`${this.baseUrl}/showdates?api_key=${this.key}`)
            return response3.data;  
        } catch (error) {
            console.error("Get Shows Not Working", error);
        }
    }
}

export default BandSiteApi;

// const addToIndexDom = async () => {
//     const newComment = await myData.getComments();
//     commentsArray.forEach(comment => {
//         displayComment(newComment);
//     });
// }

// const addToShowsDom = async () => {
//     const newComment = await myData.getShows();
//     showsArray.forEach(show => {
//         const showElement = displayShows(show);
//     });
// }

// const myData = new BandSiteApi("433d7a0f-1374-49dc-b187-d6b68f9d743f");

// const addComment = (event) => {
//     event.preventDefault();
//     myData.postComment(commentObject(event.target.name.value, event.target.comment.value));
// }

// myData.postComment();
// myData.getComments();
// myData.getShows();

//myData is an instance


// myForm.addEventLIstener("submit", myData.postComment({name: event.target.name.value},{text: event.target.comment.value}))


//Instances only exist if there are methods in the class.