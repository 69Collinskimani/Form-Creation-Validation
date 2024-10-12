// Define an asynchronous function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through the users and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user's name as the text content
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear the existing content and show an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
