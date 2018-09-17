var position = document.getElementById("location")

if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(function(myPosition)
{
    var lat = myPosition.coords.latitude
    var lon = myPosition.coords.longitude
    var alt = myPosition.coords.altitude
    var speed = myPosition.coords.speed

    var positionString = "Lattitue:" +lat +"</br>"
    positionString = "Longitude:" +lon
    position.innerHTML = positionString
})
}
