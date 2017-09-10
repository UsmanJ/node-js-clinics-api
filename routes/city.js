import { Router } from "express";
import data from "../exampleResponse.json";

const routes = Router();

routes.get("/:city", (req, res) => {
  const city = req.params.city;
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);

  if (data.success) {
    // Currently this if statement will always be successful
    // because I am using the example data
    const result = {
      results: {}
    };
    const clinics = [];

    data.result.map(clinic => {
      if (clinic.city === formattedCity) {
        clinics.push(clinic);
      }
    });

    clinics.map(clinic => {
      const postcode = clinic.partial_postcode;
      postcode in result.results
        ? (result.results[postcode] = result.results[postcode] + 1)
        : (result.results[postcode] = 1);
    });

    res.send(result);
  } else {
    res.send("Request not successful");
  }
});

export default routes;
