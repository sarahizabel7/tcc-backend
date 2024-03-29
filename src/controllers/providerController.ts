import models from '../models/index'
import { Request, Response } from 'express'

export default class ProviderController {

	public searchServices = async (req: Request, res: Response): Promise<any> => {
		try {
            const search = req.params.search
            let users : any = [];
            if (search) {
                var regex = new RegExp(["^", search, "$"].join(""), "i")
                users = await models.User.find({
                    "$and": [
                        {
                            "provider": { "$exists": true }
                        },
                        {
                            "$or": [
                                { "name": {"$regex": regex} },
                                { "lastname": {"$regex": regex} },
                                { "email": {"$regex": regex} },
                                { "provider.description": {"$regex": regex} },
                                { "provider.provided_services": {
                                    "$elemMatch":
                                        {
                                            "service.name": new RegExp(search, 'i')
                                        },
                                    } 
                                },
                                { "provider.provided_services": {
                                    "$elemMatch":
                                        {
                                            "service.description": new RegExp(search, 'i')
                                        },
                                    } 
                                }
                            ]
                        }
                    ]
                })
            } else {
                users = await models.User.find({
                    "provider": { "$exists": true }                  
                })
            }
            if (users.length === 0) {
                return res.status(404).send({
                    status: 'error',
                    data: { error: 'Users not found.' }
                })
            }
            for (let i = 0; i < users.length; i++) {
                let grade = 0;
                for (let j = 0; j < users[i].provider.rating.length; j++) {
                    grade = grade + users[i].provider.rating[j].grade;
                }
                users[i].provider.rating = grade / users[i].provider.rating.length;
            }
			return res.status(200).send({
				status: 'ok',
				data: users
			})
		} catch (err) {
			console.log(err.toString())
			return res.status(500).send({
				status: 'error',
				data: { error: err.toString() }
			})
		}
	}
}
