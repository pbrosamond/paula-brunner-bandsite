import BandSiteApi from "../scripts/band-site-api.js";

const myData = new BandSiteApi("433d7a0f-1374-49dc-b187-d6b68f9d743f");


// Step 1: Create an array with default comments
// const commentsArray = [
//     { name: 'Connor Walton', date: '02/17/2021', text: `This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.` },
//     { name: 'Emilie Beach', date: '01/09/2021', text: `I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.` },
//     { name: 'Miles Acosta', date: '12/20/2020', text: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.` }
// ];

//Step 2: Define container outside of any functions
const container = document.querySelector('.comment__container');
const commentForm = document.querySelector('.comment__form');

// Step 3: Function to display a comment on the page
function displayComment(comment) { // arrow function syntax: const displayComment = (comment) => {}

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment__output-item';

    const commentProfile = document.createElement('img');
    commentProfile.className = 'comment__user-profile';

    const commentDetails = document.createElement('div');
    commentDetails.classList.add('comment__details');

    const commentData = document.createElement('div');
    commentData.classList.add('comment__data');

    const commentName = document.createElement('p');
    commentName.classList.add('comment__name');
    commentName.textContent = comment.name;

    const commentDate = document.createElement('p');
    commentDate.classList.add('comment__date');
    commentDate.textContent = formatTimestamp(comment.timestamp);

    // Function to format the timestamp
    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            // hour: 'numeric',
            // minute: 'numeric',
            // second: 'numeric',
            // timeZoneName: 'short'
        };
        return date.toLocaleDateString('en-US', options);
    }

    const commentText = document.createElement('p');
    commentText.classList.add('comment__text');
    commentText.textContent = comment.comment;

    commentData.appendChild(commentName);
    commentData.appendChild(commentDate);

    commentDetails.appendChild(commentData);
    commentDetails.appendChild(commentText);

    commentDiv.appendChild(commentProfile);
    commentDiv.appendChild(commentDetails);

    container.appendChild(commentDiv);
}

const renderComments = async () => {
    try {
        const commentsArray = await myData.getComments()

        const sortedComments = commentsArray.sort((a, b) => {
            return b.timestamp - a.timestamp;
        });

        sortedComments.forEach((comment) => {
            const showComment = displayComment(comment);
            });
            console.log (commentsArray);

    } catch (error) {
        console.error("Not Working", error);
    }
}

renderComments()

const postComment = async () => {
    try {
        commentForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const newComment = {
                name: event.target.name.value,
                comment: event.target.comment.value
            };

            // Call the asynchronous function to post the comment
            const commentForm = await myData.postComment(newComment);

            // Retrieve updated comments after posting
            const commentsArray = await myData.getComments();

            // Update the container with the updated comments
            container.textContent = "";

            renderComments();

            console.log(commentsArray);
        });
    } catch (error) {
        console.error("Not Working Event Listener", error);
    }
};

postComment();









// // Step 4 Use function to print comments on page load
// commentsArray.forEach(comment => {
//     displayComment(comment);
// });

// //Step 5 Add event listener to form (Makes function run on button click)

// commentForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     // Get input values and...
//     // Create a new comment object
//     const newComment = {
//         name: event.target.name.value,
//         date: new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}),
//         text: event.target.comment.value
//     };

//     // Add the new comment to the beginning of the array
//     commentsArray.unshift(newComment); // Replaced by post call.

//     // Clears pre-displayed comments
//     container.textContent = "";

//     // Redisplays each comment
//     commentsArray.forEach(comment => {
//         displayComment(comment);
//     });

// });















// // Step 2: Initial rendering of comments - Move to after the function.
// commentsArray.forEach(comment => {
//     displayComment(comment);

//     console.log(displayComment(comment))
// });

//     // Step 4: Function to format timestamp dynamically
//     function formatTimestamp(timestamp) {
//         const now = new Date();
//         const diffInMilliseconds = now - timestamp;
//         const seconds = Math.floor(diffInMilliseconds / 1000);
        
//         if (seconds < 60) {
//             return `${seconds} sec ago`;
//         }
    
//         const minutes = Math.floor(seconds / 60);
//         if (minutes < 60) {
//             return `${minutes} min ago`;
//         }
    
//         const hours = Math.floor(minutes / 60);
//         if (hours < 24) {
//             return `${hours} hr ago`;
//         }
    
//         const days = Math.floor(hours / 24);
//         if (days < 7) {
//             return `${days} day${days > 1 ? 's' : ''} ago`;
//         }
    
//         const weeks = Math.floor(days / 7);
//         if (weeks < 4) {
//             return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
//         }
    
//         const months = Math.floor(days / 30.44); // Average number of days in a month
//         if (months < 12) {
//             return `${months} month${months > 1 ? 's' : ''} ago`;
//         }
    
//         // If over 11 months, display the date
//         const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
//         return new Date(timestamp).toLocaleDateString('en-US', options);
//     }