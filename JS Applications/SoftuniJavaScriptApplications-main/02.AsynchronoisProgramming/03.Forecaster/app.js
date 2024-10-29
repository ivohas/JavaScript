function attachEvents() {
    const submitBtn = document.getElementById('submit');
    const locationLabel = document.getElementById('location');
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const location = locationLabel.value;

    submitBtn.addEventListener('click', getWeather);

    async function getWeather(){
        const response = await fetch(url);
        const body = await response.json();
        const foundLocation = '';
        Object.entries(body).forEach(text => {
            const content = text[1]
            if(location == text.name){
                foundLocation = text.name;
            }
            debugger;
        });
        console.log(foundLocation);
    }
}

attachEvents();