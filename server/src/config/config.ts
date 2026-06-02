import express, { Application } from 'express';
import dotenv from "dotenv";
import cors from "cors";
import { connect } from "mongoose";
import { VitrineRoutes } from '../routes/vitrine-routes';
import { CreateMockup } from '../models/mock';

dotenv.config();

export async function config() {
    const app: Application = express();

    app.use(express.json());
    app.use(cors());

    const databaseUrl = process.env.DATABASE_URL ?? "mongodb://127.0.0.1:27017/vitrine";
    const databaseName = process.env.DATABASE_NAME ?? "vitrine";

    await connect(databaseUrl, { dbName: databaseName });

    await CreateMockup();

    VitrineRoutes(app);

    return app;
}
