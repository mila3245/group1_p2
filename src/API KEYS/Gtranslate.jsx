 import axios from "axios";


export default {
  // search: function (query) {
  //   return axios.get(BASEURL + query + APIKEY);
  // },
  translate: async function(text, inputLang, outputLang){

  const encodedParams = new URLSearchParams();
  encodedParams.set('q', text);
  encodedParams.set('source', inputLang);
  encodedParams.set('target', outputLang);

  const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '748ef41770msh21877430af418f3p111863jsn8d168488458b',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
},
languages: async function(){

const options = {
  method: 'GET',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
  params: {target: 'en'},
  headers: {
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '748ef41770msh21877430af418f3p111863jsn8d168488458b',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data
} catch (error) {
	console.error(error);
}
} 
};