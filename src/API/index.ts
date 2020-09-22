export const API_URL = "https://api.nasa.gov/planetary/earth/assets";
export interface API_OPTIONS {
  lon?: number;
  lat?: number;
  date?: string;
  dim?: number;
  cloud_score?: string;
  dataset?: string;
  address?: string;
}
//   date: {
//     day: number;
//     month: number;
//     year: number;
//   };

export interface API_RESPONSE {
  date: string;
  id: string;
  resource: { dataset: string; planet: string };
  service_version: string;
  url: string;
}
// https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=DEMO_KEY

// Allowed request fields for earth/imagery method are
// 'lat', 'lon', 'address', 'dataset', 'date', 'cloud_score', 'dim'";

export const getImage = async ({
  date = "2014-02-01",
  dim = 0.15,
  lat = 1.5,
  lon = 100.75,
}: API_OPTIONS) => {
  console.info("API getImage", date, dim, lat, lon);
  try {
    const result = await fetch(
      // https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=DEMO_KEY

      `${API_URL}?api_key=${
        process.env.REACT_APP_API_KEY || "DEMO_KEY"
      }&date=${date}&dim=${dim}&lat=${lat}&lon=${lon}`
    );
    return await result.json();
  } catch (error) {
    return error;
  }
};
