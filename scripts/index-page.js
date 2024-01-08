// Step 1: Create an array with default comments
const commentsArray = [
    { name: 'Connor Walton', timestamp: new Date('02/17/2021'), text: `This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.` },
    { name: 'Emilie Beach', timestamp: new Date('01/09/2021'), text: `I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.` },
    { name: 'Miles Acosta', timestamp: new Date('12/20/2020'), text: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.` }
];

// Step 2: Function to display a comment on the page
function displayComment(comment) {
    const container = document.querySelector('.comment');

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment__output-item';

    const commentProfile = document.createElement('img');
    commentProfile.className = 'comment__user-profile';
    commentProfile.alt = 'Profile Picture';

    // Step 3: Function to format timestamp dynamically
function formatTimestamp(timestamp) {
    const now = new Date();
    const diffInMilliseconds = now - timestamp;
    const seconds = Math.floor(diffInMilliseconds / 1000);
    
    if (seconds < 60) {
        return `${seconds} sec ago`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} min ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} hr ago`;
    }

    const days = Math.floor(hours / 24);
    if (days < 7) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }

    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
        return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    }

    const months = Math.floor(days / 30.44); // Average number of days in a month
    if (months < 12) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
    }

    // If over 11 months, display the date
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(timestamp).toLocaleDateString('en-US', options);
}

    // Check if there is a src for the profile image TODO
    if (comment.src) {
        commentProfile.src = comment.src;
    } else {
        commentProfile.src = '../assets/images/empty-profile.png'
        commentProfile.style.background = '#E1E1E1'; // Grey background color
    }

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

    const commentText = document.createElement('p');
    commentText.classList.add('comment__text');
    commentText.textContent = comment.text;

    commentData.appendChild(commentName);
    commentData.appendChild(commentDate);

    commentDetails.appendChild(commentData);
    commentDetails.appendChild(commentText);

    commentDiv.appendChild(commentProfile);
    commentDiv.appendChild(commentDetails);

    container.appendChild(commentDiv);
}

// Step 3: Function to format date as MM/DD/YYYY
function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
}

// Step 4: Function to handle form submission
function submitComment(event) {
    event.preventDefault();

    const nameInput = document.getElementById('comment-name');
    const commentInput = document.getElementById('comment-comment'); 

    // Get input values

    const name = event.target.name.value
    const commentText = event.target.comment.value

    console.log(name, commentText)

    // Create a new comment object
    const newComment = {
        name: name,
        timestamp: new Date(),
        text: commentText
    };

    // Add the new comment to the beginning of the array
    commentsArray.unshift(newComment);

    commentsArray.forEach(comment => {
        displayComment(comment);
    });

    // Clear input fields
    event.target.reset();
}

// Step 5: Add event listener to the form
document.getElementById('comment__form').addEventListener('submit', submitComment);

// Step 6: Initial rendering of comments
commentsArray.forEach(comment => {
    displayComment(comment);
});
