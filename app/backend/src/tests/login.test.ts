import { expect } from "chai";
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from "sinon";
import { app } from "../app";
import * as chai from 'chai';

chai.use(chaiHttp)

describe('Login test', () => {
  afterEach(function () {
    Sinon.restore()
  })

  it('Retorna o token', async function () {
    // Sinon.stub(Team, 'findAll').resolves(mock)
    const response = await chai.request(app).post('/login').send({
      email: "admin@admin.com",
      password: "secret_admin"
    }).end();
    expect(response.status).to.be.equal(200);
  })

  it('Em caso de login incorreto, retorna um erro', async function () {
    // Sinon.stub(Team, 'findAll').resolves(mock)
    const response = await chai.request(app).post('/login').send({
      email: "admin@admin.com",
      password: "secre_admin"
    }).end();
    expect(response.status).to.be.equal(401);
  })

  it('Retorna o role do User', async function () {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY3NzY3MTcwN30.YFR2666uqpbUKx-3pH77dSa4vpHN7IIWYTFWPy2GS3k'
    // Sinon.stub(Team, 'findAll').resolves(mock)
    const response = await chai.request(app).get('/login/role').send({
      email: "admin@admin.com",
      password: "secret_admin"
    }).set('authorization', token);
    expect(response.status).to.be.equal(200);
  })
});
