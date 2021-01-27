import { Server } from "./server";

let server = new Server().app;
let port = 5000;
// called express constructor
server.listen(port, () => {
    console.log('Server is running on port 5000');
})