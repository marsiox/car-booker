import { Request, Response, Router } from 'express'
import LinkedList from '../lib/booking'

const router = Router()

router.get('/', (_req: Request, res: Response) => {
  res.send({
    info: 'Coding challenge for SMOOVE',
    version: '0.0.1'
  })
})

router.post('/', (req: Request, res: Response) => {
  const list = new LinkedList()
  const bookings = req.body

  for (const b in bookings) {
    list.insert(bookings[b])
  }

  res.send(list.toArray())
})

export default router
