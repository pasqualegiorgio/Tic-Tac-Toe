window.onload = function(){
 getWeatherByCity("Andria");
}

$(function(){
 $("#request").submit(function(){
   getWeatherByCity( $("#city").val() );
   return false;
 });

 $("#state-icon").attr( "onerror", "$(this).hide()" );
});

function getWeatherByCity( request ){
 var key = "efa6f02761d89bccc4da7072252c5102";
 var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + getWeatherByCity( $("#city").val() ) + "&appid=" + key;

 jQuery.ajax(
   {
   dataType: "json",
   url: apiUrl,
   data: "",
   success: function(){ console.log("jsweather@> Request Completed") },
   statusCode: {
     400: function(){
       swal({
         title: "Ops..",
         text: "A quanto pare la tua richiesta non Ã¨ valida. Prova ad inserire un'altra cittÃ !",
         icon: "error"
       });
     },

     404: function(){
       swal({
         title: "Cosa?",
         text: "Non credo di conoscere quella cittÃ , sicuro di averla scritta bene?",
         icon: "warning"
       });
     }
   }
 }
);

 $.getJSON( apiUrl,  function( data ){
   assign(data);
 });
}

function assign( data ){
 $("#city-name").html( data.name );
 $("#country").html( data.sys.country );
 $("#city-id").html( data.sys.id );

 $("#state-icon").attr( "src", "icons/" + data.weather[0].icon + ".png" );
 $("#state-icon").attr( "title", data.weather[0].main );

 $("#state").html( data.weather[0].description );
 $("#temp").html( data.main.temp + "Â°C" );

 $("#temp-max").html( data.main.temp_max + "Â°C" );
 $("#temp-min").html( data.main.temp_min + "Â°C" );
 $("#humidity").html( data.main.humidity + "%" );
 $("#pressure").html( data.main.pressure + " hpa" );
 $("#visibility").html( data.visibility );

 $("#lat").html( data.coord.lat );
 $("#lon").html( data.coord.lon );

 var sunrise = new Date( data.sys.sunrise * 1000 ) ;
 var sunset = new Date( data.sys.sunset * 1000 );

 $("#sunrise").html( sunrise.getHours() + ":" + sunrise.getMinutes() + ":" + sunrise.getSeconds() );
 $("#sunset").html( sunset.getHours() + ":" + sunset.getMinutes() + ":" + sunrise.getSeconds() );

 $("#speed").html( data.wind.speed + " m/s" );
 $("#deg").html( data.wind.deg + "Â°" );
}
