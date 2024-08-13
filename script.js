document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch and display the content of the text file
    function loadTextFile(filePath) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('fileContent').textContent = data;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                document.getElementById('fileContent').textContent = 'Failed to load content.';
            });
    }

    // Load the text file
    loadTextFile('data.txt');
});
