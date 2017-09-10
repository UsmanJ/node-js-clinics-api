import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

const should = chai.should();

chai.use(chaiHttp);

describe("City API", () => {
  it("should GET clinic data using city name", done => {
    chai
      .request(app)
      .get("/clinics/city/Croydon")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("should return a results object", done => {
    chai
      .request(app)
      .get("/clinics/city/Croydon")
      .end((err, res) => {
        res.body.should.have.property("results");
        res.body.results.should.be.a("object");
        done();
      });
  });

  it("should return number as value in the results object", done => {
    chai
      .request(app)
      .get("/clinics/city/Croydon")
      .end((err, res) => {
        res.body.results.CR9.should.be.a("number");
        done();
      });
  });
});
