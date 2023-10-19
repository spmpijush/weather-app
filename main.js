const apiKey = '677145e5db2564198ec453cf311a9802';
const searchButton = document.getElementById('searchButton');


searchButton.addEventListener('click', () => {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {

            const locationElement = document.getElementById('location');
            const descriptionElement = document.getElementById('description');
            const temperatureElement = document.getElementById('temperature');
            if (data.name) {
                locationElement.textContent = data.name;
                descriptionElement.textContent = data.weather[0].description;
                temperatureElement.textContent = data.main.temp;
                document.getElementById("error_message").innerText = "";
            } else {
                document.getElementById("error_message").innerText = "Not Found";
                document.getElementById('location').innerText = " ";
                document.getElementById('description').innerText = " ";
                document.getElementById('temperature').innerText = " ";
            }

        })
        .catch(error => {
            console.log(error);
        });
});

