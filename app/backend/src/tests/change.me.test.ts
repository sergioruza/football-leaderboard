// import Sinon from "sinon"
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');
// import {ITeam} from '../api/services/interfaces/ITeam'

// import { App, app } from '../app';
// import Example from '../database/models/ExampleModel';

// import { Response } from 'superagent';
// import { Model, ModelStatic } from 'sequelize';
// import TeamsService from '../api/services/TeamsService'
// import Team from "../database/models/TeamModel";

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('Service Teams test', () => {
//   afterEach(function () {
//     Sinon.restore()
//   })
//   const app = new App()

//   it('Retorna com sucesso todos os times corretamente', async function () {
//     const mock:
//     ITeam[] = [
//       {
//         id: 1,
//         teamName: "Avaí/Kindermann"
//       },
//       {
//         id: 2,
//         teamName: "Bahia"
//       },
//       {
//         id: 3,
//         teamName: "Botafogo"
//       },
//     ]
//     Sinon.stub(Team, 'findAll').resolves(mock)
//     const service = new TeamsService();
//     const result = service.getAll;
//     expect(result).to.be.equal(mock)
//   })

//   it('Teams controller', async function () {
//     const response = await chai.request(app.app).post('/teams')
//   })
//   /**
//    * Exemplo do uso de stubs com tipos
//    */

//   // let chaiHttpResponse: Response;

//   // before(async () => {
//   //   sinon
//   //     .stub(Example, "findOne")
//   //     .resolves({
//   //       ...<Seu mock>
//   //     } as Example);
//   // });

//   // after(()=>{
//   //   (Example.findOne as sinon.SinonStub).restore();
//   // })

//   // it('...', async () => {
//   //   chaiHttpResponse = await chai
//   //      .request(app)
//   //      ...

//   //   expect(...)
//   // });

//   it('Seu sub-teste', () => {
//     expect(false).to.be.eq(true);
//   });
// });