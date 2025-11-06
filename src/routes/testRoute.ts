import { Router } from "express";
import { getTest } from "../controllers/testController";

const router = Router();

/**
 * @openapi
 * /test:
 *   get:
 *     summary: Test route
 *     description: Returns a simple "Hello World" message
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello World from Service!
 */
router.get("/test", getTest);

export default router;
