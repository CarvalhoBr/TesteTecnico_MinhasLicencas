import {Request, Response} from 'express'
import db from '../database/connection'

export async function getCars(req: Request, res: Response){
    const cars = await db.select('*').from('carros')
    return res.json(cars);
} 

export async function findCars(req: Request, res: Response){
    let { search } = req.query

    console.log(search)
    // Verificando se a busca é por ano
    if(Number(search)){
        const carros = await db.select().from('carros').where('ano', '=', Number(search))
        return res.json(carros)
    }

    const carros = await db
        .select()
        .from('carros')
        .where('marca', '~*', String(search))
        .orWhere('veiculo', '~*', String(search))

    return res.json(carros)

} 

export async function getCarById(req: Request, res: Response){
    const { id } = req.params

    const carro = await db.select().from('carros').where('id', '=', id)
    return res.json(carro)
} 

export async function addCar(req: Request, res: Response){
    
    const carro = req.body

    try {
        await db('carros').insert(carro)
        return res.send("Carro cadastrado com sucesso!")
    } catch (error) {
        return res.status(500).json({ERRO: "Ocorreu um erro ao inserir o dado"})
    }

export function getCarById(req: Request, res: Response){
    return res.json({ok: true})
} 

export function addCar(req: Request, res: Response){
    return res.json({ok: true})
} 

export function updateAllInfo(req: Request, res: Response){
    return res.json({ok: true})
} 

export function update(req: Request, res: Response){
    return res.json({ok: true})
} 

export function destroy(req: Request, res: Response){
    return res.json({ok: true})
} 