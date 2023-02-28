import { expect } from "chai";
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from "sinon";
import { ITeam } from "../api/services/interfaces/ITeam";
import { app } from "../app";
import * as chai from 'chai';
import Team from "../database/models/TeamModel";
chai.use(chaiHttp)

describe('Service Teams test', () => {
  afterEach(function () {
    Sinon.restore()
  })
  // const app = new App()

  it('Retorna com sucesso todos os times corretamente', async function () {
    const mock:
    ITeam[] = [
      {
        id: 1,
        teamName: "Avaí/Kindermann"
      },
      {
        id: 2,
        teamName: "Bahia"
      },
      {
        id: 3,
        teamName: "Botafogo"
      },
      ]
    const response = await chai.request(app).get('/teams').send(mock);
    expect(response.status).to.be.equal(200);
    // expect(response.body).to.be.equal(mock)
  })
});

// Auxílio de Arhur Debiasi