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

    // Create DATE container
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("shows__container2");
    dateContainer.classList.add("shows__text2--bold");

    const dateHeading = document.createElement("h3");
    dateHeading.classList.add("shows__text-mobile");
    dateContainer.classList.add("shows__text2--bold");
    dateHeading.textContent = "DATE";

    const dateParagraph = document.createElement("p");
    dateParagraph.classList.add("shows__text2");
    dateContainer.classList.add("shows__text2--bold");
    dateParagraph.textContent = show.date;

    dateContainer.appendChild(dateHeading);
    dateContainer.appendChild(dateParagraph);

    // Create VENUE container
    const venueContainer = document.createElement("div");
    venueContainer.classList.add("shows__container2");

    const venueHeading = document.createElement("h3");
    venueHeading.classList.add("shows__text-mobile");
    venueHeading.textContent = "VENUE";

    const venueParagraph = document.createElement("p");
    venueParagraph.classList.add("shows__text2");
    venueParagraph.textContent = show.venue;

    venueContainer.appendChild(venueHeading);
    venueContainer.appendChild(venueParagraph);

    // Create LOCATION container
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("shows__container2");

    const locationHeading = document.createElement("h3");
    locationHeading.classList.add("shows__text-mobile");
    locationHeading.textContent = "LOCATION";

    const locationParagraph = document.createElement("p");
    locationParagraph.classList.add("shows__text2");
    locationParagraph.textContent = show.location;

    locationContainer.appendChild(locationHeading);
    locationContainer.appendChild(locationParagraph);

    // Create BUY TICKETS button
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("button");
    buttonElement.type = "submit";
    buttonElement.textContent = "BUY TICKETS";

    // Append all containers and button to the show element
    showElement.appendChild(dateContainer);
    showElement.appendChild(venueContainer);
    showElement.appendChild(locationContainer);
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
