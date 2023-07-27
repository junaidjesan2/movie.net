import { Movies } from "../MovieData";


const fetchData = async () => {
  // const url = "http://localhost:3000/api/movies";
  try {
    // const response = await fetch(url);
    // const data = await response.json();

    return Movies;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchData;
