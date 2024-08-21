async function getCovidData() {
    const country = document.getElementById('country-input').value.trim(); // Get user input and trim any extra spaces

    if (country === '') {
        alert('Please enter a country name.');
        return;
    }

    const url = `https://disease.sh/v3/covid-19/countries/${country}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            document.getElementById('country').textContent = data.country;
            document.getElementById('cases').textContent = `Cases: ${data.cases}`;
            document.getElementById('deaths').textContent = `Deaths: ${data.deaths}`;

            document.querySelector('.covid-container').style.display = 'block';
        } else {
            alert('Country not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching the COVID-19 data', error);
        alert('Failed to fetch COVID-19 data. Please try again.');
    }
}
