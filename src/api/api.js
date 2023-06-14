const fetchData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,flags,population,cca3,borders,currencies,languages,tld');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  
  export default fetchData;
  