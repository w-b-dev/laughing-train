import { API_OPTIONS } from "../types";

export const API_URL = "https://api.nasa.gov/planetary/earth/assets";
// TODO: update state
//   date: {
//     day: number;
//     month: number;
//     year: number;
//   };

// https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=DEMO_KEY

// Allowed request fields for earth/imagery method are
// 'lat', 'lon', 'address', 'dataset', 'date', 'cloud_score', 'dim'";

export const getImage = async ({
  date = "2020-06-27",
  dim = 0.6,
  lat = "44.64",
  lon = "-78.38",
}: API_OPTIONS) => {
  console.info("API getImage", date, dim, lat, lon);
  try {
    const result = await fetch(
      `${API_URL}?api_key=${
        process.env.REACT_APP_API_KEY || "DEMO_KEY"
      }&date=${date}&dim=${dim}&lat=${lat}&lon=${lon}`
    );
    return await result.json();
  } catch (error) {
    return error;
  }
};
