import { Request, Response } from 'express'
import { BaseHandler } from '../interfaces'


class Homepage extends BaseHandler {

    /* GET home page. */
    static getHomeRoute(req: Request, res: Response) {

        res.status(200).send(
            {
                "slackUsername": 'Jossy',
                "backend": true,
                "age": 27,
                "bio": 'Software Engineer with a passion for delivering usable, enjoyable, and impactful solutions.'
            }
        )

    }

}

export default Homepage