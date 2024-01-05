// Step 1: Create an array with default comments
const commentsArray = [
    { name: 'Connor Walton', timestamp: new Date(), text: `This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.` },
    { name: 'Emilie Beach', timestamp: new Date(), text: `I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.` },
    { name: 'Miles Acosta', timestamp: new Date(), text: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.` }
];

// Step 2: Function to display a comment on the page
function displayComment(comment) {
    const container = document.querySelector('.comment');

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment__output-item';

    const commentProfile = document.createElement('img');
    commentProfile.className = 'comment__user-profile';
    commentProfile.alt = 'Profile Picture';

    // Check if there is a src for the profile image TODO
    if (comment.src) {
        commentProfile.src = comment.src;
    } else {
        commentProfile.style.background = '#808080'; // Grey background color
    }

    const commentDetails = document.createElement('div');
    commentDetails.className = 'comment__details';

    const commentData = document.createElement('div');
    commentData.className = 'comment__data';

    const commentName = document.createElement('p');
    commentName.className = 'comment__name';
    commentName.textContent = comment.name;

    const commentDate = document.createElement('p');
    commentDate.className = 'comment__date';
    commentDate.textContent = formatDate(comment.timestamp);

    const commentText = document.createElement('p');
    commentText.className = 'comment__text';
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

    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment'); 
    // TODO

    // Get input values
    const name = nameInput.value;
    const commentText = commentInput.value;

    // Validate input
    if (!name || !commentText) {
        alert('Please fill in both name and comment fields.');
        return;
    }

    // Create a new comment object
    const newComment = {
        name: name,
        timestamp: new Date(),
        text: commentText
    };

    // Add the new comment to the array
    commentsArray.push(newComment);

    // Display the new comment
    displayComment(newComment);

    // Clear input fields
    nameInput.value = '';
    commentInput.value = '';
}

// Step 5: Add event listener to the form
document.getElementById('comment__form').addEventListener('submit', submitComment);

// Step 6: Initial rendering of comments
commentsArray.forEach(comment => {
    displayComment(comment);
});
