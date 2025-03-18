const sanitizeCity = (c) => {
    if(!c.includes(' ')){
        return c;
    }
    let trimmedCity = c.trim();
    trimmedCity = trimmedCity.includes(' ') ? trimmedCity.replaceAll(' ', '+') : trimmedCity;
    while(trimmedCity.includes('++')){
        trimmedCity = trimmedCity.replaceAll('++', '+');
    }
    return trimmedCity;
}

const getData = async (c) => {
    const APIKEY = import.meta.env.VITE_WEATHER_KEY;
    const sCity = sanitizeCity(c);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${sCity}&appid=${APIKEY}&units=imperial`;
    try{
        const res = await fetch(url);
        if(!res.ok) {
          if(res.status === 404) {
            throw new Error(`Response status: ${res.status}. Assure the city input is valid.`)
          } 
          if(res.status === 401){
            throw new Error(`Response status: ${res.status}. Assure your api key is active or not timed out.`);
          }
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

export { getData }

