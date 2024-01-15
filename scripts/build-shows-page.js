import BandSiteApi from "../scripts/band-site-api.js";

const myData = new BandSiteApi("433d7a0f-1374-49dc-b187-d6b68f9d743f");

// Step 1: Create an array with default shows
// const showsArray = [
//     { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA" },
//     { date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco, CA" },
//     { date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA" },
//     { date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA" },
//     { date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA" },
//     { date: "Wed Dec 15 2021", venue: "Press Club", location: "San Francisco, CA" }
// ];

// Step 2: Define container outside of any functions
// const showsContainer = document.querySelector(".shows__list");

// Step 3: Function to display shows on the page
function displayShows(show) { //Anonymous function syntax: const displayShows = (show) => {}

    // Create ALIGNMENT element
    const showsList = document.querySelector(".shows__test")
    const showElement = document.createElement("div");
    showElement.classList.add("shows__upcoming");

    // Create DATE container
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("shows__list");
    dateContainer.classList.add("shows__text2--bold");

    const dateHeading = document.createElement("h3");
    dateHeading.classList.add("shows__text-mobile");
    dateContainer.classList.add("shows__text2--bold");
    dateHeading.textContent = "DATE";

    const dateParagraph = document.createElement("p");
    dateParagraph.classList.add("shows__text2");
    dateContainer.classList.add("shows__text2--bold");
    dateParagraph.textContent = formatTimestamp(show.date)

    // Function to format the timestamp
    function formatTimestamp(date) {
        const date2 = new Date(date);
        const options = {
            weekday: "short",
            month: "short",
            day: "2-digit",
            year: "numeric"
        };
        return date2.toLocaleDateString('en-US', options);
    }

    dateContainer.appendChild(dateHeading);
    dateContainer.appendChild(dateParagraph);

    // Create VENUE container
    const venueContainer = document.createElement("div");
    venueContainer.classList.add("shows__list");

    const venueHeading = document.createElement("h3");
    venueHeading.classList.add("shows__text-mobile");
    venueHeading.textContent = "VENUE";

    const venueParagraph = document.createElement("p");
    venueParagraph.classList.add("shows__text2");
    venueParagraph.textContent = show.place;

    venueContainer.appendChild(venueHeading);
    venueContainer.appendChild(venueParagraph);

    // Create LOCATION container
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("shows__list");

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

    // Append all show elements to container element
    showsList.appendChild(showElement);

    //Show Highlight on Click
    showElement.addEventListener('click', () => {
        const activeShowElement = document.querySelectorAll('.shows__highlighted');

        activeShowElement.forEach((show) => {
            show.classList.remove('shows__highlighted');
        })
    
        showElement.classList.add('shows__highlighted')
      })
}

const renderShows = async () => {
    try {
        const showsArray = await myData.getShows()
        showsArray.forEach((show) => {
            const showElement = displayShows(show);
            });
            console.log (showsArray);
    } catch (error) {
        console.error("Not Working", error);
    }
}

renderShows()

