document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch and display user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
        const dataContainer = document.getElementById('api-data'); // Data container element

        try {
            // Fetch user data from API
            const response = await fetch(apiUrl);

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const users = await response.json(); // Parse JSON response

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a user list
            const userList = document.createElement('ul');
            users.forEach((user) => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set user's name as list item content
                userList.appendChild(listItem);
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle and display errors
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    // Call the fetchUserData function when the DOM is fully loaded
    fetchUserData();
});
