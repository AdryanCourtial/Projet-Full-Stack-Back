import { Request, Response } from "express";
import { getTestMessage } from "../services/testService";

/**
 * Controller pour la route /test
 */
export const getTest = (req: Request, res: Response) => {
    try {
        const message = getTestMessage();
        res.json({ message });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
