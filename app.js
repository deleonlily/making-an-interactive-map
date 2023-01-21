// get my location 
async function getCoords() {
    const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    
 return [position.coords.latitude, position.coords.longtitude]   
}

