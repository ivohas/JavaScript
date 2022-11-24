  async function getInfo() {
    const ul= document.getElementById("stopId").value
    console.log(ul)
     const url= `http://localhost:3030/jsonstore/bus/businfo/${ul}`
     let stopName= document.getElementById("stopName")
     const busList = document.getElementById('buses');

        busList.innerHTML = '';
          ul.value = '';
          try {
                    const response = await fetch(url);
                    const data = await response.json();
            
                    stopName.textContent = data.name;
                    Object.entries(data.buses).forEach(([bus, timeArrived]) => {
                        const li = document.createElement('li');
                        li.textContent = `Bus ${bus} arrives in ${timeArrived} minutes`
                        busList.appendChild(li);
                    });
                } catch (error) {
                    stopName.textContent = 'Error';
                }
}
