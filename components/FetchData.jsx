import { Movies } from "../MovieData";


const fetchData = async () => {
  try {
    return Movies;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchData;
