import { config } from './src/config/config';


async function init() {
    const app = await config();
    const port = process.env.PORT ?? 3001;

    app.listen(port);
}

init()
