import { expect } from "chai";
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from "sinon";
import User from "../database/models/UserModel";
import { app } from "../app";
import * as chai from 'chai';
import Team from "../database/models/TeamModel";
import { Model } from "sequelize";
chai.use(chaiHttp)

describe('Login test', () => {
  afterEach(function () {
    Sinon.restore()
  })
  // const app = new App()

  it('Retorna o token', async function () {
    // Sinon.stub(Team, 'findAll').resolves(mock)
    const response = await chai.request(app).post('/login').send({
      email: "admin@adminnfgjnfgj.com",
      password: "stringfdfdfd"
    });
    expect(response.status).to.be.equal(200);
  })
});
