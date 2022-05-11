// http://api.weatherapi.com/v1/current.json?key=4ba7a0c3e0514b7d963173930222204&q=London&aqi=no
const cityName = document.getElementById('cityname')
const btn = document.getElementById('btn')
const page = document.getElementById('page')
const spinner = document.getElementById('spinner')
spinner.style.opacity = '0%'


function getApi() {
    spinner.style.opacity = '100%'


    axios.get(`http://api.weatherapi.com/v1/current.json?key=4ba7a0c3e0514b7d963173930222204&q=${cityName.value}&aqi=no`).then((res) => {
        // if (status === 200) {
        //     console.log(res);
        //     const card = document.createElement('div')
        //     card.className = 'ms-5 mt-5 card text-center'
        //     card.style.width = '18rem'
        //     card.innerHTML = `<div class="card-body">
        //     <h5 class="card-title">${res.data.location.name}</h5>
        //     <h5 class="card-title"> Country ==> ${res.data.location.country}</h5>
        //     <p class="card-text">  Region ==> ${res.data.location.region}</p>
        //     <p class="card-text"> localtime ==> ${res.data.location.localtime} </p>
        //     <p class="card-text"> lat ==>${res.data.location.lat} |||| lon ==> ${res.data.location.lon} </p>
        //     <p class="card-text">  ${res.data.location.tz_id} </p>
        //     <p class="card-text"> Temperature ==> ${res.data.current.temp_c} </p>



        //   </div>
        // </div>`
        //     page.appendChild(card)

        // } else {
        //     const card = document.createElement('div')

        //     card.className = 'ms-5 mt-5 card text-center'
        //     card.style.width = '18rem'
        //     card.innerHTML=`<h5 class="card-title"> Error </h5>`

        // }
        spinner.style.opacity = '0%'

        console.log(res);
        const card = document.createElement('div')
        card.className = ' card text-center'
        card.style.width = '18rem'
        card.innerHTML = `<div class="card-body">
        <h5 class="card-title">${res.data.location.name}</h5>
        <h5 class="card-title"> Country ==> ${res.data.location.country}</h5>
        <p class="card-text">  Region ==> ${res.data.location.region}</p>
        <p class="card-text"> localtime ==> ${res.data.location.localtime} </p>
        <p class="card-text"> lat ==>${res.data.location.lat} |||| lon ==> ${res.data.location.lon} </p>
        <p class="card-text">  ${res.data.location.tz_id} </p>
        <p class="card-text"> Temperature(C) ==> ${res.data.current.temp_c} </p>
        <p class="card-text"> Temperature(F) ==> ${res.data.current.temp_f} </p>
        <p class="card-text"> Wind Speed(k/h) ==> ${res.data.current.wind_kph} </p>
        <p class="card-text"> Wind Speed(m/h) ==> ${res.data.current.wind_mph} </p>
      </div>
    </div>`
        page.appendChild(card)
    })
}
btn.addEventListener('click', (e) => {
    e.preventDefault()
    getApi()

})