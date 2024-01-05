// JavaScript (Your existing script plus the new code)

// Define an array with show data
const showsData = [
    { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA" },
    { date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco, CA" },
    { date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA" },
    { date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA" },
    { date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA" },
    { date: "Wed Dec 15 2021", venue: "Press Club", location: "San Francisco, CA" }
    // Add more show data as needed
];

// Function to create a show element
function createShowElement(show) {
    const showElement = document.createElement("div");
    showElement.classList.add("shows__upcoming");

    const dateElement = document.createElement("p");
    dateElement.classList.add("shows__text2");
    dateElement.textContent = show.date;

    const venueElement = document.createElement("p");
    venueElement.classList.add("shows__text2");
    venueElement.textContent = show.venue;

    const locationElement = document.createElement("p");
    locationElement.classList.add("shows__text2");
    locationElement.textContent = show.location;

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("shows__button");
    buttonElement.type = "submit";
    buttonElement.textContent = "BUY TICKETS";

    showElement.appendChild(dateElement);
    showElement.appendChild(venueElement);
    showElement.appendChild(locationElement);
    showElement.appendChild(buttonElement);

    return showElement;
}

// Function to display shows
function displayShows() {
    const showsContainer = document.querySelector(".shows__container");

    // Loop through the showsData and display each show
    showsData.forEach((show) => {
        const showElement = createShowElement(show);
        showsContainer.appendChild(showElement);
    });
}

// Initial display
displayShows();

// Function to re-display shows
function reDisplayShows() {
    // Clear existing content
    const showsContainer = document.querySelector(".shows__container");
    showsContainer.innerHTML = "";

    // Display the shows
    displayShows();
}

// Example: Trigger re-display on button click
const reDisplayButton = document.getElementById("reDisplayButton");

if (reDisplayButton) {
    reDisplayButton.addEventListener("click", reDisplayShows);
}
