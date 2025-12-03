import express, {Express, Request, Response} from "express";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";


const app: Express = express();

// this is the health check interface for response

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}



app.get("/", (req: Request, res: Response ) => {
    res.send("hello world");
});

// adding endpoint
// http://localhost:3000/api/v1/health
app.get("/api/v1/health", (req: Request, res: Response) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    };

    res.json(healthData)
});


export default app;

app.get("/api/v1/portfolio/performance", (req: Request, res: Response) => {
    
    
});