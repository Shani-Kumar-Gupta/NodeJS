import { Router } from "express";
import { UserController } from "../controllers/UserController";

class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    // getRoutes() {
    //     this.router.get('/login', (req: any, res, next) => {
    //         // res.send('Successfully login');
    //         req.message = 'successfully login';
    //         next();
    //     }, (req: any, res) => {
    //         res.send(req.message);
    //     })
    // }

    getRoutes(){
        this.router.get('/login', UserController.login);
    }

    postRoutes() {
        this.router.post('/signup', (req, res) => {
            res.status(200).send('Successfully signup');
        })
    }

    patchRoutes() {

    }

    deleteRoutes() {

    }
}

export default new UserRouter().router;

/************************************ Pre Middleware ***************************************** */
// app.use((req, res, next) => {
//     console.log('called middleware');
//     next();
// })

// app.use('/login', (res, req, next) => {
//     console.log('Login Middleware called');
//     next();
// })

/*
    Basic of Routing
        1) app.get('');
        2) app.post(path: '');
        3) app.patch(path: '');
        4) app.put(path: '');
        5) app.delete(path: '');
*/

// app.get('/user', (req: any, res, next) => {
//     const data = { firstName: "Shani", city: "Renukkot" }
//     req.user = data;
//     next();
// }, (req: any, res, next) => {
//     console.log("called another middleware");
//     res.send(req.user)
//     next()
// })

// app.get('/login', (req, res) => {
//     // want to send data in json which is not in json format
//     //res.status(200).send('successs');
//     // res.json({
//     //     firstName : "Shani",
//     //     lastName : "Gupta",
//     // })

//     // In case you are geeting data in json format
//     const data = { name: "Shani Kumar Gupta", college: "GLA University" }
//     res.send(data);
// })

// app.get('/test', (req, res) => {
//     res.send('this is test request');
// })

// /* login route */
// app.get('/api/user/login', (req, res) => {
//     console.log('Called login route::::::::::::');
//     res.status(200).send('Successfully login');
// })

// /* signup route */
// app.post('/api/user/signup', function (req, res) {
//     console.log('Called signup route::::::::::::');
//     res.send('Successfully Signup');
// })
