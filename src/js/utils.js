export const parser = Range.prototype.createContextualFragment.bind(
  document.createRange(),
);

export function randomID() {
  const digits = String(Math.random()).split('.')[1].substr(0, 10);
  return `ID${digits}`;
}

// weather

let weather = {
  apiKey: 'c20d664fe15511ff6b176f9e20df512f',
  fetchweather: function () {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q= ' +
        city +
        '&units=metric&appid=' +
        this.appKey,
    )
      .then((response) => response.json())
      .then((data) => this.displayweather(data));
  },
  displayweather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);

    document.querySelector('.city').innerText = 'Weather in ' + name;
    document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/"+ icon +" 01n@.png';
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = temp + '°C';
    document.querySelector('.humidity').innerText =
      'Humidity: ' + humidity + '%  ';
    document.querySelector('.wind').innerText =
      'Wind speed ' + speed + ' km/h  ';
    // document.querySelector('.weather').classList.remove('Loading');
    // document.body.style.backgroundImage =
    //   "url('https://source.unsplash.com/1600x900/?" + name + " ')";
  },
  //   search: function () {
  //     this.fetchweather(document.querySelector('.search-bar').value);
  //   },
};

// document.querySelector('.search button').addEventListener('click', function () {
//   weather.search();
// });

// document
//   .querySelector('.search-bar')
//   .addEventListener('keyup ', function (event) {
//     if (event.key == 'Enter ') {
//       weather.search();
//     }
//   });

// weather.fetchweather();
