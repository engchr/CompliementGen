const form = document.getElementById("complimentForm");
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userDetails = document.getElementById("details").value;
    const outputDiv = document.getElementById("complimentOutput");

    try {
        const response = await fetch('/api/generateCompliment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userDetails })
        });
        
        const data = await response.json();
        outputDiv.innerHTML = `<p>${data.compliment}</p>`;
    } catch (error) {
        outputDiv.innerHTML = `<p>Error generating compliment.</p>`;
        console.error("Error:", error);
    }
});
