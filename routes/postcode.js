import { Router } from "express";
import data from "../exampleResponse.json";

const routes = Router();

routes.get("/:postcode", (req, res) => {
  const postcode = req.params.postcode;
  const formattedPostcode = postcode.toUpperCase();

  if (data.success) {
    // Currently this if statement will always be successful
    // because I am using the example data
    const result = {
      results: []
    };
    const clinics = [];

    data.result.map(clinic => {
      if (clinic.postcode === formattedPostcode) {
        clinics.push(clinic);
      }
    });

    clinics.map(clinic => {
      const clinicDetails = {
        organisation_id: clinic.organisation_id,
        name: clinic.name
      };
      result.results.push(clinicDetails);
    });

    res.send(result);
  } else {
    res.send("Request not successful");
  }
});

export default routes;
