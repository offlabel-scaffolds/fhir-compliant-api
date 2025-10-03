import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Example route' })
})

router.post('/', (req: Request, res: Response) => {
  const data = req.body
  // Add your logic here
  res.json({ success: true, data })
})

export default router