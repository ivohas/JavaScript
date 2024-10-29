async function getInfo() {
    const stopInfoElement = document.getElementById('stopId');
    const stopId = stopInfoElement.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const stopNameElement = document.getElementById('stopName');
    const busList = document.getElementById('buses');

    busList.innerHTML = '';
    stopInfoElement.value = '';

    try {
        const response = await fetch(url);
        const data = await response.json();

        stopNameElement.textContent = data.name;
        Object.entries(data.buses).forEach(([busNumber, arrivalTime]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${busNumber} arrives in ${arrivalTime} minutes`;
            busList.appendChild(li);
        })
    } catch(error){
        stopNameElement.textContent = 'Error';
    }
}