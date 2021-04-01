
const userLocation = (callback) => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      document.querySelector("#nearest-btn").href = `/?lon=${lon}&lat=${lat}`;
    });
  }
}

export { userLocation };
