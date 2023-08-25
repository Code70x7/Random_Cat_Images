const fetchButton = document.getElementById("fetchButton");
const catContainer = document.getElementById("catContainer");
const catApiUrl = "https://api.thecatapi.com/v1/images/search";

// Function to fetch a random cat image using async/await
async function fetchCatImage() {
  try {
    const response = await fetch(catApiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data[0].url; // Extract the image URL from the first object in the array
  } catch (error) {
    console.error("Error fetching cat image:", error);
    throw error;
  }
}

// Function to display the fetched cat image in the container
function displayCatImage(imageUrl) {
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  imgElement.alt = "Random Cat";
  catContainer.innerHTML = ""; // Clear previous content
  catContainer.appendChild(imgElement);
}

// Event listener for the fetch button
fetchButton.addEventListener("click", async () => {
  try {
    const imageUrl = await fetchCatImage();
    displayCatImage(imageUrl);
  } catch (error) {
    console.error("Failed to fetch and display cat image:", error);
  }
});
