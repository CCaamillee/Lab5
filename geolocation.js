let x=document.getElementById("geolocation");
function getGeolocation() {
    // Check if Geolocation API is supported
    if (navigator.geolocation) {
        // If supported, get the current position
        navigator.geolocation.getCurrentPosition(showGeolocation, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Function to display the geolocation data (latitude and longitude)
function showGeolocation(position) {
    console.log(position.coords.longtitude);
    x.innerHTML = "Latitude: "+position.coords.latitude+"<br>Longtitude: "+position.coords.longitude;
}
function showError(error) {
    const output = document.getElementById('geolocation');
    switch (error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            output.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            output.innerHTML = "An unknown error occurred.";
            break;
    }
}