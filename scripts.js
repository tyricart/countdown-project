let myWindow;

function openWindow() {
  myWindow = window.open("", "", "width=200, height=200");
}

function resizeWindow() {
  myWindow.resizeTo(600, 600);
  // function to resize the new window
}

function closeWindow() {
  myWindow.close();
}

function getHeight() {
  console.log(innerHeight);
  console.log("our width", window.innerWidth);
}

function getLocation() {
    const myLocation = window.navigator.geolocation
    let myLat, myLong

    myLocation.getCurrentPosition(function (location) {
    myLat = location.coords.latitude
    myLong = location.coords.longitude

    document.getElementById('heading').innerText = `my location is lat ${myLat} and long ${myLong}`
  });
}
