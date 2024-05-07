const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('text', 'hello');
encodedParams.set('to_lang', 'ar');
encodedParams.set('from_lang', 'en');

const options = {
  method: 'POST',
  url: 'https://google-translate105.p.rapidapi.com/v1/rapid/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '0ad462e3b2msh364cbd177c3ab58p1a3acfjsn8483f438a66f',
    'X-RapidAPI-Host': 'google-translate105.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}