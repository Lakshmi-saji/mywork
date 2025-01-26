// Function to get the query string value from the URL
function getQueryStringValue(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

// Function to generate travel recommendations based on the answers
function generateTravelRecommendation(answers) {
    let destination = "Unknown";
    let activities = [];
    let accommodation = "";
    let budget = "";
    let destinationImg = "";
    
    // Analyze answers and suggest a travel destination
    if (answers[0].includes("beach")) {
        destination = "Maldives";
        activities = ["Snorkeling", "Beach parties", "Luxury resorts"];
        accommodation = "Luxury resorts and beachfront villas";
        budget = "$3000 - $5000";
        destinationImg = "maldives.jpg";  // Example image
    } else if (answers[1].includes("adventure")) {
        destination = "New Zealand";
        activities = ["Bungee jumping", "Skydiving", "Hiking"];
        accommodation = "Adventure hostels and campsites";
        budget = "$2000 - $4000";
        destinationImg = "newzealand.jpg";  // Example image
    } else {
        destination = "Switzerland";
        activities = ["Scenic train rides", "Mountain hiking", "Cultural tours"];
        accommodation = "Mountain resorts and chalets";
        budget = "$4000 - $6000";
        destinationImg = "switzerland.jpg";  // Example image
    }

    // Return the recommendation object
    return {
        destination: destination,
        activities: activities,
        accommodation: accommodation,
        budget: budget,
        destinationImg: destinationImg
    };
}

// Fetch answers from URL
const answers = JSON.parse(decodeURIComponent(getQueryStringValue("answers")));

// Generate the recommendation
const recommendation = generateTravelRecommendation(answers);

// Display the results on the page
const outputContainer = document.getElementById("output-container");

outputContainer.innerHTML = `
    <h2>Your Best Travel Destination: ${recommendation.destination}</h2>
    <img src="images/${recommendation.destinationImg}" alt="${recommendation.destination}" class="destination-img">
    <p><strong>Suggested Activities:</strong></p>
    <ul>
        ${recommendation.activities.map(activity => `<li>${activity}</li>`).join('')}
    </ul>
    <p><strong>Accommodation:</strong> ${recommendation.accommodation}</p>
    <p><strong>Estimated Budget:</strong> ${recommendation.budget}</p>

    <div class="activities-container">
        ${recommendation.activities.map(activity => `
            <div class="activity-box">
                <img src="images/${activity.toLowerCase().replace(" ", "_")}.jpg" alt="${activity}">
                <p>${activity}</p>
            </div>
        `).join('')}
    </div>
`;
