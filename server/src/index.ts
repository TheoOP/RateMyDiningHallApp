import express , {Request, Response} from "express";
const app = express();
const PORT = 5200;

app.get( '/', (req: Request, res: Response) => {
    res.send('Hello World!')
})


app.get( "/test", (req: Request, res: Response) => {
    res.send('Test World!')
})
app.listen(PORT);
