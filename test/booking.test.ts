import 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')
import app from '../index'

chai.use(chaiHttp)

describe('Booking API Request', () => {
  it('returns welcome response', () => {
    return chai.request(app).get('/')
      .then((res: any) => {
        chai.expect(res.statusCode).to.eql(200)
        chai.expect(res.type).to.eql('application/json')
      })
  })

  it('returns correnct booking order', async () => {
    const bookings = [
      { id: 1, start: 23, end: 42 },
      { id: 2, start: 77, end: 45},
      { id: 3, start: 42, end: 77 },
      { id: 4, start: 8, end: 23 },
    ]

    return chai.request(app).post('/')
      .send(bookings)
      .then((res: any) => {
        chai.expect(res.statusCode).to.eql(200)
        chai.expect(JSON.parse(res.text)).to.eql([4,1,3,2])
      })
  })
})
