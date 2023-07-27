

const fetchData = async () => {
  const url = "http://localhost:3000/api/movies";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     'X-RapidAPI-Key': '89fb8c9e73msh0adc997e2f26eedp1014dfjsn03d040e65fca',
  //     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  //   }
  // };
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchData;
