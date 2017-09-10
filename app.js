import express from "express";
import { city, postcode } from "./routes";

const app = express();

const port = process.env.PORT || 3000;

app.use("/clinics/city", city);
app.use("/clinics/postcode", postcode);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(port, () => {
  console.log("Running on PORT: " + port);
});

export default app;
