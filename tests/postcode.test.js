import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

const should = chai.should();

chai.use(chaiHttp);

describe("Postcode API", () => {
  it("should return status 200", done => {
    chai
      .request(app)
      .get("/clinics/postcode/cr0 6SD")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("should return a results array", done => {
    chai
      .request(app)
      .get("/clinics/postcode/cr0 6SD")
      .end((err, res) => {
        res.body.should.have.property("results");
        res.body.results.should.be.a("array");
        done();
      });
  });

  it("should return results array containing objects", done => {
    chai
      .request(app)
      .get("/clinics/postcode/cr0 6SD")
      .end((err, res) => {
        res.body.results[0].should.be.a("object");
        done();
      });
  });

  it("should return results containing the clinic's organisation_id", done => {
    chai
      .request(app)
      .get("/clinics/postcode/cr0 6SD")
      .end((err, res) => {
        res.body.results[0].should.have.property("organisation_id");
        done();
      });
  });

  it("should return results containing the clinic's name", done => {
    chai
      .request(app)
      .get("/clinics/postcode/cr0 6SD")
      .end((err, res) => {
        res.body.results[0].should.have.property("name");
        done();
      });
  });
});
