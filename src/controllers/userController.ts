import models from '../models/index'
import { Request, Response } from 'express'
import { IUserModel } from '../interfaces/Models'
import * as passport from 'passport'

export default class UserController {
	public login = async (
		req: Request,
		res: Response,
		next: any
	): Promise<any> => {
		const {
			body: { email, password }
		} = req
		if (!email) {
			return res.status(200).json({
				status: 'error',
				data: { error: 'Email is required.' }
			})
		}

		if (!password) {
			return res.status(200).json({
				status: 'error',
				data: { error: 'Password is required.' }
			})
		}

		return passport.authenticate(
			'local',
			{ session: false },
			(err, passportUser, info) => {
				if (err) {
					console.log(err)
					return next(err)
				}

				if (passportUser) {
					const user = passportUser
					user.token = user.generateJWT()
					return res.status(200).json({
						status: 'ok',
						data: user.toAuthJSON()
					})
				}

				return res.status(400).json({
					status: 'error',
					data: { error: info }
				})
			}
		)(req, res, next)
	}

	public logout = async (req: Request, res: Response): Promise<any> => {
		res.status(200).json({ status: 'ok' })
	}

	public registerUser = async (req: Request, res: Response) => {
		const user = req.body
		const finalUser: IUserModel = new models.User(user)
		finalUser.password = finalUser.setPassword(user.password)
		finalUser
			.save()
			.then(() =>
				res.status(201).json({
					status: 'ok',
					data: finalUser.toAuthJSON()
				})
			)
			.catch((err: any) => {
				console.log(err.toString())
				return res.status(500).json({
					status: 'error',
					data: { error: err.toString() }
				})
			})
	}

	public updateUser = async (req: Request, res: Response): Promise<any> => {
		try {
			console.log(req.body)
			const user = req.body
			const userFound = await models.User.findById(req.params.id)
			if (userFound) {
				if (user.password !== undefined) {
					user.password = await userFound.setPassword(user.password)
				}
				if (user.provider) {
					if (!user.cpf || !user.gender || !user.phone) {
						return res.status(400).send({
							status: 'error',
							data: { error: 'Required fields are missing. (cpf, gender or phone)' }
						})
					}
				}
				models.User.findOneAndUpdate(
					{ _id: req.params.id },
					{ ...user },
					{ new: true },
					(err, userUpdated) => {
						if (err || !userUpdated) {
							console.error(err)
							return res.status(404).send({
								status: 'error',
								data: { error: 'User not found.' }
							})
						}
						res.status(200).send({
							status: 'ok',
							data: userUpdated
						})
					}
				)
			} else {
				return res.status(404).send({
					status: 'error',
					data: { error: 'User not found.' }
				})
			}
		} catch (err) {
			console.error(err.toString())
			return res.status(500).send({
				status: 'error',
				data: { error: err.toString() }
			})
		}
	}

	public getUser = async (req: Request, res: Response): Promise<any> => {
		try {
			const user = await models.User.findById(req.params.id)
			if (!user) {
				return res.status(404).send({
					status: 'error',
					data: { error: 'User not found.' }
				})
			}
			return res.status(200).send({
				status: 'ok',
				data: user
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
