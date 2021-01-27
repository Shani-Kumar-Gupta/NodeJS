import * as express from 'express';
import * as mongoose from 'mongoose';
import { getEnvironmentVariable } from './environments/env';
import UserRouter from './routers/UserRouter';

export class Server {
    public app: express.Application = express();
    constructor() {
        this.setConfigurations();
        this.setRoutes();
    }

    setConfigurations() {
        this.connectMongodb();
        this.setRoutes();
    }

    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: connect mongodb to server ::::::::::::::::::::::::::::::::::::::::::::::::::::::
    connectMongodb() {
        mongoose.connect(getEnvironmentVariable().db_url, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('mongodb is connected');
            })
    }

    setRoutes() {
        this.app.use('/api/user', UserRouter);
    }

}

// Single Responsibility Principle: Each function responsible for one particular action