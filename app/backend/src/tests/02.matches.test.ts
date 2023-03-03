import { expect } from "chai";
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from "sinon";
import { app } from "../app";
import * as chai from 'chai';
import Match from "../database/models/MatchModel";
import { Model } from "sequelize";

chai.use(chaiHttp)
const mockfindAll = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Grêmio"
    }
  },
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Internacional"
    }
  }
]

const mockFindFalse = [
  {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeamId": 9,
    "homeTeamGoals": 1,
    "awayTeamId": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  }
]
describe.only('matches test', () => {
  afterEach(function () {
    Sinon.restore()
  })

  it('Retorna com sucesso', async function () {
    Sinon.stub(Match, 'findAll').resolves(mockfindAll as unknown as Match[])
    // Sinon.stub(Team, 'findAll').resolves(mock)
    const response = await chai.request(app).get('/matches')
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(mockfindAll)
  })

  it('Retorna partidas encerradas', async function () {
    Sinon.stub(Model, 'findAll').resolves(mockFindFalse as unknown as Match[])

    const response = await chai.request(app).get('/matches?inProgress=false')
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(mockFindFalse)
  })

  // it('Retorna o role do User', async function () {
  //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY3NzY3MTcwN30.YFR2666uqpbUKx-3pH77dSa4vpHN7IIWYTFWPy2GS3k'
  //   // Sinon.stub(Team, 'findAll').resolves(mock)
  //   const response = await chai.request(app).get('/login/role').send({
  //     email: "admin@admin.com",
  //     password: "secret_admin"
  //   }).set('authorization', token);
  //   expect(response.status).to.be.equal(200);
  // })
});
