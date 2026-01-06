
import { createApp } from "../server/app";

let app: any;

export default async function handler(req: any, res: any) {
    if (!app) {
        const setup = await createApp();
        app = setup.app;
    }
    app(req, res);
}
