import express , {Request, Response} from "express";


const PORT = 5200; //localhost port number
const app = express();
const middleware = require("./auth-middleware");
const cors = require('cors');



app.use(cors());
app.use(middleware.decodeToken);

// app.use((req,res) => {
// 	const token = req.?headers.authorization.split(' ')[1];
// 		try {
// 			const decodeValue = await admin.auth().verifyIdToken(token);
// 			if (decodeValue) {
//                 console.log(decodeValue);
// 				return next();
// 			}
// 			return res.json({ message: 'Unauthorized' });
// 		} catch (e) {
// 			return res.json({ message: 'Internal Error' });
// 		}
// });

app.get('/',(req,res) => {
    res.send('Hello World');
});


app.get('/api/tasks', (req, res) => {

	return res.json({
		tasks: [
			{
				title: 'Task1',
			},
			{
				title: 'Task2',
			},
		],
	});
});


app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});



// //basic routing for pages involved in the app
// //following functions listens to requests
// //simply change file path to reflect correct html file
// app.get( "/test", (req: Request, res: Response) => {
//     res.send('Test World!');
// });

app.get( "/account", (req: Request, res: Response) => {
    res.sendFile('./pages/account.tsx', { root: __dirname });
});

app.get( "/home", (req: Request, res: Response) => {
    res.sendFile('./pages/home.tsx', { root: __dirname });
});

app.get( '/', (req: Request, res: Response) => {
    res.redirect('/home');
});


// app.get( "/review", (req: Request, res: Response) => {
//     res.sendFile('./pages/review.tsx', { root: __dirname });
// });

// app.get( "/reviewCumnock", (req: Request, res: Response) => {
//     res.sendFile('./pages/reviewCumnock.tsx', { root: __dirname });
// });

// app.get( "/reviewICC", (req: Request, res: Response) => {
//     res.sendFile('./pages/map.tsx', { root: __dirname });
// });

// app.get( "/reviewFox", (req: Request, res: Response) => {
//     res.sendFile('./pages/map.tsx', { root: __dirname });
// });

// app.get( "/repagesouth", (req: Request, res: Response) => {
//     res.sendFile('./pages/map.tsx', { root: __dirname });
// });
// app.use((req, res) => {
//   res.status(404).sendFile('./pages/Error404.tsx', { root: __dirname });
// })