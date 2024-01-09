// Step 1: Create an array with default comments

const commentsArray = [
    { name: 'Connor Walton', timestamp: '02/17/2021', text: `This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.` },
    { name: 'Emilie Beach', timestamp: '01/09/2021', text: `I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.` },
    { name: 'Miles Acosta', timestamp: '12/20/2020', text: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.` }
];

// Step 2: Initial rendering of comments function

commentsArray.forEach(comment => {
    displayComment(comment);
});

const displayComment = (comment) => {
    
} 

// Step 3: Grab parent section ID

const commentsContainer = document.getElementById('allComments')

// Step 4: Add new comment to DOM Function

const addCommentToDom = (comment, container) => {
    const commentEl = document.createElement('div')
    commentEl.classList.add('comment__output-item')

    const commentProfile = document.createElement('img');
    commentProfile.className = 'comment__user-profile';
    commentProfile.alt = 'Profile Picture';

    // Step 5: Create DOM

        // Step 5a: Create elements

        const commentDetails = document.createElement('div');
        const commentData = document.createElement('div');
        const commentName = document.createElement('p');
        const commentDate = document.createElement('p');
        const commentText = document.createElement('p');

        // Step 5b: Attach classes

        commentDetails.classList.add('comment__details');
        commentData.classList.add('comment__data');
        commentName.textContent = comment.name;
        commentDate.classList.add('comment__date');
        commentText.classList.add('comment__text');

        // Step 5c: Attach text content

        commentName.textContent = comment.name;
        commentDate.textContent = formatTimestamp(comment.timestamp);
        commentText.textContent = comment.text;

        // Step 5d: Append children to parents

        commentData.appendChild(commentName);
        commentData.appendChild(commentDate);

        commentDetails.appendChild(commentData);
        commentDetails.appendChild(commentText);

        commentDiv.appendChild(commentProfile);
        commentDiv.appendChild(commentDetails);

        container.appendChild(commentDiv);

    // Step 6: Add event Listener to 'addCommentToDom' Function

    teamEl.addEventListener('click', () => {
        const activeTeamEls = document.querySelectorAll('.teams__team-row--active')
        activeTeamEls.forEach((team) => {
            team.classList.remove('teams__team-row--active')
        })
    
        teamEl.classList.add('teams__team-row--active')
        })
}

// Step 6: New comment creation Function

function createNewComment(event) {
    event.preventDefault();

    const nameInput = document.getElementById('comment-name');
    const commentInput = document.getElementById('comment-comment'); 

    // Step 6a: Get input values

    const name = event.target.name.value
    const commentText = event.target.comment.value

    // Step 6b: Create new comment
    
    const newComment = {
        name: name,
        timestamp: Date,
        text: commentText
    };

    // Clear input fields
    event.target.reset();

    // Add the new comment to the beginning of the array
    commentsArray.unshift(newComment);

    document.getElementById('comment__form').addEventListener('submit', submitComment);
}








