import { Request, Response } from 'express';

export async function getAddressByCEP(req: Request, res: Response) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${req.params.cep}/json/`);
        const body = await response.text();

        res
            .status(response.status)
            .type(response.headers.get("content-type") ?? "application/json")
            .send(body);
    }
    catch (error: unknown) {
        res.status(502).json({ result: error });
    }
}
