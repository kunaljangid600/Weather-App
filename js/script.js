var weaterbox = document.querySelector('#weaterbox')
// console.log(weaterbox)
var inputboxvalue = document.querySelector('#inputboxvalue')
// console.log(inputboxvalue)
inputboxvalue.addEventListener(
    'keyup',
    async function (event) {
        console.log(event.key)
        if (event.key == "Enter") {
            console.log(event.target.value)
            const cityName = event.target.value;

            var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`)
            // console.log(response)
            var data = await response.json()
            console.log(data)

            if (data.cod == 404) {
                weaterbox.innerHTML = '<h1> city nat found... </h1>'
            }
            else {
                weaterbox.innerHTML = ` <div class="maincontainer">
        <div class="forimgbox">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
     <div class="maintextcontent">
        <div class="fortemp">${data.main.temp} &deg; C</div>
         <div class="foremptype">${data.weather[0].main}</div> 
        </div>
    </div>`
            }

        }
    }


)