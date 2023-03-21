import express , {Request, Response} from "express";
const app = express();
const PORT = 5200; //localhost port number


//basic routing for pages involved in the app
//following functions listens to requests
//simply change file path to reflect correct html file
app.get( "/test", (req: Request, res: Response) => {
    res.send('Test World!');
});

app.get( "/account", (req: Request, res: Response) => {
    res.sendFile('./views/account.html', { root: __dirname });
});

app.get( "/home", (req: Request, res: Response) => {
    res.sendFile('./views/home.html', { root: __dirname });
});

app.get( '/', (req: Request, res: Response) => {
    res.redirect('/home');
});


app.get( "/review", (req: Request, res: Response) => {
    res.sendFile('./views/review.html', { root: __dirname });
});

app.get( "/reviewCumnock", (req: Request, res: Response) => {
    res.sendFile('./views/reviewCumnock.html', { root: __dirname });
});

app.get( "/reviewICC", (req: Request, res: Response) => {
    res.sendFile('./views/map.html', { root: __dirname });
});

app.get( "/reviewFox", (req: Request, res: Response) => {
    res.sendFile('./views/map.html', { root: __dirname });
});

app.get( "/reviewSouth", (req: Request, res: Response) => {
    res.sendFile('./views/map.html', { root: __dirname });
});


app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})

app.listen(PORT);
