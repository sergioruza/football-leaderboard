import { expect } from "chai";
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from "sinon";
import { app } from "../app";
import * as chai from 'chai';
import Match from "../database/models/MatchModel";
import Team from "../database/models/TeamModel";

chai.use(chaiHttp)
const mockMatches = [
	{
		"id": 1,
		"homeTeamId": 16,
		"homeTeamGoals": 1,
		"awayTeamId": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Grêmio"
		},
		"homeTeam": {
			"teamName": "São Paulo"
		}
	},
	{
		"id": 2,
		"homeTeamId": 9,
		"homeTeamGoals": 1,
		"awayTeamId": 14,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Santos"
		},
		"homeTeam": {
			"teamName": "Internacional"
		}
	},
	{
		"id": 3,
		"homeTeamId": 4,
		"homeTeamGoals": 3,
		"awayTeamId": 11,
		"awayTeamGoals": 0,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Napoli-SC"
		},
		"homeTeam": {
			"teamName": "Corinthians"
		}
	},
	{
		"id": 4,
		"homeTeamId": 3,
		"homeTeamGoals": 0,
		"awayTeamId": 2,
		"awayTeamGoals": 0,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Bahia"
		},
		"homeTeam": {
			"teamName": "Botafogo"
		}
	},
	{
		"id": 5,
		"homeTeamId": 7,
		"homeTeamGoals": 1,
		"awayTeamId": 10,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Minas Brasília"
		},
		"homeTeam": {
			"teamName": "Flamengo"
		}
	},
	{
		"id": 6,
		"homeTeamId": 5,
		"homeTeamGoals": 1,
		"awayTeamId": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Real Brasília"
		},
		"homeTeam": {
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 7,
		"homeTeamId": 12,
		"homeTeamGoals": 2,
		"awayTeamId": 6,
		"awayTeamGoals": 2,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Ferroviária"
		},
		"homeTeam": {
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 8,
		"homeTeamId": 15,
		"homeTeamGoals": 0,
		"awayTeamId": 1,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Avaí/Kindermann"
		},
		"homeTeam": {
			"teamName": "São José-SP"
		}
	},
	{
		"id": 9,
		"homeTeamId": 1,
		"homeTeamGoals": 0,
		"awayTeamId": 12,
		"awayTeamGoals": 3,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Palmeiras"
		},
		"homeTeam": {
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 10,
		"homeTeamId": 2,
		"homeTeamGoals": 0,
		"awayTeamId": 9,
		"awayTeamGoals": 2,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Internacional"
		},
		"homeTeam": {
			"teamName": "Bahia"
		}
	},
	{
		"id": 11,
		"homeTeamId": 13,
		"homeTeamGoals": 1,
		"awayTeamId": 3,
		"awayTeamGoals": 0,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Botafogo"
		},
		"homeTeam": {
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 12,
		"homeTeamId": 6,
		"homeTeamGoals": 0,
		"awayTeamId": 4,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Corinthians"
		},
		"homeTeam": {
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 13,
		"homeTeamId": 8,
		"homeTeamGoals": 2,
		"awayTeamId": 5,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Cruzeiro"
		},
		"homeTeam": {
			"teamName": "Grêmio"
		}
	},
	{
		"id": 14,
		"homeTeamId": 14,
		"homeTeamGoals": 2,
		"awayTeamId": 16,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "São Paulo"
		},
		"homeTeam": {
			"teamName": "Santos"
		}
	},
	{
		"id": 15,
		"homeTeamId": 10,
		"homeTeamGoals": 0,
		"awayTeamId": 15,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "São José-SP"
		},
		"homeTeam": {
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 16,
		"homeTeamId": 11,
		"homeTeamGoals": 0,
		"awayTeamId": 7,
		"awayTeamGoals": 0,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Flamengo"
		},
		"homeTeam": {
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 17,
		"homeTeamId": 1,
		"homeTeamGoals": 2,
		"awayTeamId": 8,
		"awayTeamGoals": 3,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Grêmio"
		},
		"homeTeam": {
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 18,
		"homeTeamId": 12,
		"homeTeamGoals": 4,
		"awayTeamId": 5,
		"awayTeamGoals": 2,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Cruzeiro"
		},
		"homeTeam": {
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 19,
		"homeTeamId": 11,
		"homeTeamGoals": 2,
		"awayTeamId": 2,
		"awayTeamGoals": 2,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Bahia"
		},
		"homeTeam": {
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 20,
		"homeTeamId": 7,
		"homeTeamGoals": 0,
		"awayTeamId": 9,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Internacional"
		},
		"homeTeam": {
			"teamName": "Flamengo"
		}
	},
	{
		"id": 21,
		"homeTeamId": 6,
		"homeTeamGoals": 3,
		"awayTeamId": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Real Brasília"
		},
		"homeTeam": {
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 22,
		"homeTeamId": 4,
		"homeTeamGoals": 3,
		"awayTeamId": 3,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Botafogo"
		},
		"homeTeam": {
			"teamName": "Corinthians"
		}
	},
	{
		"id": 23,
		"homeTeamId": 15,
		"homeTeamGoals": 2,
		"awayTeamId": 16,
		"awayTeamGoals": 3,
		"inProgress": false,
		"awayTeam": {
			"teamName": "São Paulo"
		},
		"homeTeam": {
			"teamName": "São José-SP"
		}
	},
	{
		"id": 24,
		"homeTeamId": 10,
		"homeTeamGoals": 2,
		"awayTeamId": 14,
		"awayTeamGoals": 2,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Santos"
		},
		"homeTeam": {
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 25,
		"homeTeamId": 2,
		"homeTeamGoals": 0,
		"awayTeamId": 6,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Ferroviária"
		},
		"homeTeam": {
			"teamName": "Bahia"
		}
	},
	{
		"id": 26,
		"homeTeamId": 13,
		"homeTeamGoals": 1,
		"awayTeamId": 1,
		"awayTeamGoals": 0,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Avaí/Kindermann"
		},
		"homeTeam": {
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 27,
		"homeTeamId": 5,
		"homeTeamGoals": 1,
		"awayTeamId": 15,
		"awayTeamGoals": 2,
		"inProgress": false,
		"awayTeam": {
			"teamName": "São José-SP"
		},
		"homeTeam": {
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 28,
		"homeTeamId": 16,
		"homeTeamGoals": 3,
		"awayTeamId": 7,
		"awayTeamGoals": 0,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Flamengo"
		},
		"homeTeam": {
			"teamName": "São Paulo"
		}
	},
	{
		"id": 29,
		"homeTeamId": 9,
		"homeTeamGoals": 0,
		"awayTeamId": 4,
		"awayTeamGoals": 4,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Corinthians"
		},
		"homeTeam": {
			"teamName": "Internacional"
		}
	},
	{
		"id": 30,
		"homeTeamId": 3,
		"homeTeamGoals": 0,
		"awayTeamId": 12,
		"awayTeamGoals": 4,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Palmeiras"
		},
		"homeTeam": {
			"teamName": "Botafogo"
		}
	},
	{
		"id": 31,
		"homeTeamId": 8,
		"homeTeamGoals": 2,
		"awayTeamId": 10,
		"awayTeamGoals": 0,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Minas Brasília"
		},
		"homeTeam": {
			"teamName": "Grêmio"
		}
	},
	{
		"id": 32,
		"homeTeamId": 14,
		"homeTeamGoals": 5,
		"awayTeamId": 11,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Napoli-SC"
		},
		"homeTeam": {
			"teamName": "Santos"
		}
	},
	{
		"id": 33,
		"homeTeamId": 1,
		"homeTeamGoals": 1,
		"awayTeamId": 16,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "São Paulo"
		},
		"homeTeam": {
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 34,
		"homeTeamId": 9,
		"homeTeamGoals": 3,
		"awayTeamId": 6,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Ferroviária"
		},
		"homeTeam": {
			"teamName": "Internacional"
		}
	},
	{
		"id": 35,
		"homeTeamId": 10,
		"homeTeamGoals": 1,
		"awayTeamId": 5,
		"awayTeamGoals": 3,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Cruzeiro"
		},
		"homeTeam": {
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 36,
		"homeTeamId": 2,
		"homeTeamGoals": 0,
		"awayTeamId": 7,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Flamengo"
		},
		"homeTeam": {
			"teamName": "Bahia"
		}
	},
	{
		"id": 37,
		"homeTeamId": 15,
		"homeTeamGoals": 0,
		"awayTeamId": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Real Brasília"
		},
		"homeTeam": {
			"teamName": "São José-SP"
		}
	},
	{
		"id": 38,
		"homeTeamId": 14,
		"homeTeamGoals": 2,
		"awayTeamId": 4,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Corinthians"
		},
		"homeTeam": {
			"teamName": "Santos"
		}
	},
	{
		"id": 39,
		"homeTeamId": 3,
		"homeTeamGoals": 2,
		"awayTeamId": 11,
		"awayTeamGoals": 0,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Napoli-SC"
		},
		"homeTeam": {
			"teamName": "Botafogo"
		}
	},
	{
		"id": 40,
		"homeTeamId": 12,
		"homeTeamGoals": 4,
		"awayTeamId": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"awayTeam": {
			"teamName": "Grêmio"
		},
		"homeTeam": {
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 41,
		"homeTeamId": 16,
		"homeTeamGoals": 2,
		"awayTeamId": 9,
		"awayTeamGoals": 0,
		"inProgress": true,
		"awayTeam": {
			"teamName": "Internacional"
		},
		"homeTeam": {
			"teamName": "São Paulo"
		}
	},
	{
		"id": 42,
		"homeTeamId": 6,
		"homeTeamGoals": 1,
		"awayTeamId": 1,
		"awayTeamGoals": 0,
		"inProgress": true,
		"awayTeam": {
			"teamName": "Avaí/Kindermann"
		},
		"homeTeam": {
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 43,
		"homeTeamId": 11,
		"homeTeamGoals": 0,
		"awayTeamId": 10,
		"awayTeamGoals": 0,
		"inProgress": true,
		"awayTeam": {
			"teamName": "Minas Brasília"
		},
		"homeTeam": {
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 44,
		"homeTeamId": 7,
		"homeTeamGoals": 2,
		"awayTeamId": 15,
		"awayTeamGoals": 2,
		"inProgress": true,
		"awayTeam": {
			"teamName": "São José-SP"
		},
		"homeTeam": {
			"teamName": "Flamengo"
		}
	},
	{
		"id": 45,
		"homeTeamId": 5,
		"homeTeamGoals": 1,
		"awayTeamId": 3,
		"awayTeamGoals": 1,
		"inProgress": true,
		"awayTeam": {
			"teamName": "Botafogo"
		},
		"homeTeam": {
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 46,
		"homeTeamId": 4,
		"homeTeamGoals": 1,
		"awayTeamId": 12,
		"awayTeamGoals": 1,
		"inProgress": true,
		"awayTeam": {
			"teamName": "Palmeiras"
		},
		"homeTeam": {
			"teamName": "Corinthians"
		}
	},
	{
		"id": 47,
		"homeTeamId": 8,
		"homeTeamGoals": 1,
		"awayTeamId": 14,
		"awayTeamGoals": 2,
		"inProgress": true,
		"awayTeam": {
			"teamName": "Santos"
		},
		"homeTeam": {
			"teamName": "Grêmio"
		}
	},
	{
		"id": 48,
		"homeTeamId": 13,
		"homeTeamGoals": 1,
		"awayTeamId": 2,
		"awayTeamGoals": 1,
		"inProgress": true,
		"awayTeam": {
			"teamName": "Bahia"
		},
		"homeTeam": {
			"teamName": "Real Brasília"
		}
	}
]

const mockTeams = [
	{
		"id": 1,
		"teamName": "Avaí/Kindermann"
	},
	{
		"id": 2,
		"teamName": "Bahia"
	},
	{
		"id": 3,
		"teamName": "Botafogo"
	},
	{
		"id": 4,
		"teamName": "Corinthians"
	},
	{
		"id": 5,
		"teamName": "Cruzeiro"
	},
	{
		"id": 6,
		"teamName": "Ferroviária"
	},
	{
		"id": 7,
		"teamName": "Flamengo"
	},
	{
		"id": 8,
		"teamName": "Grêmio"
	},
	{
		"id": 9,
		"teamName": "Internacional"
	},
	{
		"id": 10,
		"teamName": "Minas Brasília"
	},
	{
		"id": 11,
		"teamName": "Napoli-SC"
	},
	{
		"id": 12,
		"teamName": "Palmeiras"
	},
	{
		"id": 13,
		"teamName": "Real Brasília"
	},
	{
		"id": 14,
		"teamName": "Santos"
	},
	{
		"id": 15,
		"teamName": "São José-SP"
	},
	{
		"id": 16,
		"teamName": "São Paulo"
	}
]

const mockLeaderboard = [
	{
		"name": "Avaí/Kindermann",
		"totalGames": 5,
		"totalPoints": 4,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 3,
		"goalsFavor": 4,
		"goalsOwn": 8,
		"goalsBalance": -4,
		"efficiency": 26.67
	},
	{
		"name": "Bahia",
		"totalGames": 5,
		"totalPoints": 2,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 3,
		"goalsFavor": 2,
		"goalsOwn": 6,
		"goalsBalance": -4,
		"efficiency": 13.33
	},
	{
		"name": "Botafogo",
		"totalGames": 5,
		"totalPoints": 4,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 3,
		"goalsFavor": 3,
		"goalsOwn": 8,
		"goalsBalance": -5,
		"efficiency": 26.67
	},
	{
		"name": "Corinthians",
		"totalGames": 5,
		"totalPoints": 12,
		"totalVictories": 4,
		"totalDraws": 0,
		"totalLosses": 1,
		"goalsFavor": 12,
		"goalsOwn": 3,
		"goalsBalance": 9,
		"efficiency": 80
	},
	{
		"name": "Cruzeiro",
		"totalGames": 5,
		"totalPoints": 4,
		"totalVictories": 1,
		"totalDraws": 1,
		"totalLosses": 3,
		"goalsFavor": 8,
		"goalsOwn": 10,
		"goalsBalance": -2,
		"efficiency": 26.67
	},
	{
		"name": "Ferroviária",
		"totalGames": 5,
		"totalPoints": 7,
		"totalVictories": 2,
		"totalDraws": 1,
		"totalLosses": 2,
		"goalsFavor": 7,
		"goalsOwn": 7,
		"goalsBalance": 0,
		"efficiency": 46.67
	},
	{
		"name": "Flamengo",
		"totalGames": 5,
		"totalPoints": 5,
		"totalVictories": 1,
		"totalDraws": 2,
		"totalLosses": 2,
		"goalsFavor": 2,
		"goalsOwn": 5,
		"goalsBalance": -3,
		"efficiency": 33.33
	},
	{
		"name": "Grêmio",
		"totalGames": 5,
		"totalPoints": 10,
		"totalVictories": 3,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 9,
		"goalsOwn": 8,
		"goalsBalance": 1,
		"efficiency": 66.67
	},
	{
		"name": "Internacional",
		"totalGames": 5,
		"totalPoints": 10,
		"totalVictories": 3,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 7,
		"goalsOwn": 6,
		"goalsBalance": 1,
		"efficiency": 66.67
	},
	{
		"name": "Minas Brasília",
		"totalGames": 5,
		"totalPoints": 2,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 3,
		"goalsFavor": 4,
		"goalsOwn": 9,
		"goalsBalance": -5,
		"efficiency": 13.33
	},
	{
		"name": "Napoli-SC",
		"totalGames": 5,
		"totalPoints": 2,
		"totalVictories": 0,
		"totalDraws": 2,
		"totalLosses": 3,
		"goalsFavor": 3,
		"goalsOwn": 12,
		"goalsBalance": -9,
		"efficiency": 13.33
	},
	{
		"name": "Palmeiras",
		"totalGames": 5,
		"totalPoints": 13,
		"totalVictories": 4,
		"totalDraws": 1,
		"totalLosses": 0,
		"goalsFavor": 17,
		"goalsOwn": 5,
		"goalsBalance": 12,
		"efficiency": 86.67
	},
	{
		"name": "Real Brasília",
		"totalGames": 5,
		"totalPoints": 10,
		"totalVictories": 3,
		"totalDraws": 1,
		"totalLosses": 1,
		"goalsFavor": 5,
		"goalsOwn": 4,
		"goalsBalance": 1,
		"efficiency": 66.67
	},
	{
		"name": "Santos",
		"totalGames": 5,
		"totalPoints": 11,
		"totalVictories": 3,
		"totalDraws": 2,
		"totalLosses": 0,
		"goalsFavor": 12,
		"goalsOwn": 6,
		"goalsBalance": 6,
		"efficiency": 73.33
	},
	{
		"name": "São José-SP",
		"totalGames": 5,
		"totalPoints": 6,
		"totalVictories": 2,
		"totalDraws": 0,
		"totalLosses": 3,
		"goalsFavor": 5,
		"goalsOwn": 6,
		"goalsBalance": -1,
		"efficiency": 40
	},
	{
		"name": "São Paulo",
		"totalGames": 5,
		"totalPoints": 8,
		"totalVictories": 2,
		"totalDraws": 2,
		"totalLosses": 1,
		"goalsFavor": 9,
		"goalsOwn": 6,
		"goalsBalance": 3,
		"efficiency": 53.33
	}
]

describe('leaderboard test', () => {
  afterEach(function () {
    Sinon.restore()
  })

  it('Retorna a tabela de classificação', async function () {
    Sinon.stub(Match, 'findAll').resolves(mockMatches as unknown as Match[])
    Sinon.stub(Team, 'findAll').resolves(mockTeams as unknown as Team[])
    // Sinon.stub(Team, 'findAll').resolves(mock)
    const response = await chai.request(app).get('/leaderboard/home')
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(mockLeaderboard)
  })

});
