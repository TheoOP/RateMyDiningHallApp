import express , {NextFunction, Request, Response} from "express";


const PORT = 5200; //localhost port number
const app = express();
const middleware = require("./auth-middleware");
const cors = require('cors');



app.use(cors());
app.use(express.static("public"));

// app.use(middleware.decodeToken);

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

var path = require('path');

// //basic routing for pages involved in the app
// //following functions listens to requests
// //simply change file path to reflect correct html file
// app.get( "/test", (req: Request, res: Response) => {
//     res.send('Test World!');
// });

app.get( "/account", (req: Request, res: Response) => {
    // res.sendFile('./pages/account.tsx', { root: __dirname });
	res.sendFile(path.join(__dirname + "../../../client/public/pages/Account.tsx"));
});

app.get( "/home", (req: Request, res: Response) => {
    // res.sendFile('Home.tsx', { root:'./pages'});
	res.sendFile(path.join(__dirname + "../../../client/public/static/home.html"));
});

app.get( '/h', (req: Request, res: Response) => {	//testing redirect
    res.redirect('/home');
});


app.get( "/TestHome", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + "../../../client/src/index.html"));
});
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



app.use((req, res) => {
	
	// res.sendFile(path.resolve('../pages/Error404.tsx'));
  	// res.status(404).sendFile('Error404.tsx',  { root:'./pages'});
	  res.status(404).sendFile(path.join(__dirname + "../../../client/public/pages/Error404.tsx"));
})