document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the input from the textarea
    const pointsText = document.getElementById('points').value.trim();

    // Split the points by line and filter out empty points
    const points = pointsText.split('\n').map(point => point.trim()).filter(point => point);

    // Generate the LinkedIn post content
    const postContent = generateLinkedInPost(points);

    // Display the generated post
    document.getElementById('postOutput').innerText = postContent;
});

function generateLinkedInPost(points) {
    if (points.length === 0) {
        return 'Please enter at least one key point.';
    }

    let post = '🌟 Exciting News! 🌟\n\n';
    post += 'I\'m thrilled to share some key highlights and insights:\n\n';

    points.forEach((point, index) => {
        post += `${index + 1}. ${point}\n`;
    });

    post += '\nFeel free to connect or reach out if you have any thoughts or questions! #LinkedIn #Networking #ProfessionalGrowth';

    return post;
}
