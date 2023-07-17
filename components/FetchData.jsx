
const fetchData = async () => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "a8f80d2ef4msh66df8c2833872fap1e3db5jsn4f4fa89d313c",
          "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        },
      };
    try {
      const response = await fetch(url,options);
      const data = await response.json();
  
      // Process and return the fetched data
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export default fetchData;
  