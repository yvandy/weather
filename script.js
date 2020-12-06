$(document).ready(function(){
    $("#searchInput").on("keyup", function(e){
        var cityname = e.target.value;
        const APIKey = "73ec3a3a4f91f777034549e7c2dfad07";

        $.ajax({

            url:`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`
            
        }).done(function(weatherdata){

            console.log(weatherdata);

            $("#profile").html(`
            <div class="container">
                <div class="row">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${weatherdata.weather[0].description}</h5>
                            <p class="card-text">The temprature at ${cityname} is = ${weatherdata.main.temp} &#8451; and it feels like it is${weatherdata.main.feels_like} $</p>
                            <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">learn more about this place</a>
                        </div>
                    </div>                
                </div>
            </div>`);
        });
    })
})