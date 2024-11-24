
//In this file, we’ll use JavaScript to fetch data from your back-end API.
document.addEventListener("DOMContentLoaded",function(){
    const workedHoursSection=document.getElementById('workedHours');

    //Fetch data from backend API
    fetch('http://localhost:5000/api')
    .then(response=>response.json())
    .then(data=>{
        workedHoursSection.innerHTML=`<p>${data.message}</p>`
    })
    .catch(error=>{
        console.error('Error fetching data:',error);
        workedHoursSection.innerHTML="<p>Error loading data</p>"
    })
})