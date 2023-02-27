import Sinon from "sinon"
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import {ITeam} from '../services/interfaces/ITeam'

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import { Model } from 'sequelize';
import TeamsService from '../services/TeamsService'

chai.use(chaiHttp);

const { expect } = chai;

describe('Service Teams test', () => {
  afterEach(function () {
    Sinon.restore()
  })

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
    sinon.stub(Model, 'findAll').resolves(mock)
    const service = new TeamsService();
    const result = service.getAll;
    expect(result).to.be.equal(mock)
  })
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});