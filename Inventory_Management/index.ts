import express, { type Express, type Request, type Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import http from "http";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import routes from "./app/routes";
import { initPassport } from "./app/commom/services/passport-jwt.service";
import passport from "passport";
import { setupSwagger } from "./app/commom/config/swagger.config";
dotenv.config();
// Initialize Passport
initPassport();

const port = Number(process.env.PORT) ?? 5000;

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(passport.initialize());

const initApp = async (): Promise<void> => {
  // set base path to /api
  app.use("/api", routes);

  app.get("/", (req: Request, res: Response) => {
    res.send({ status: "ok" });
  });

  setupSwagger(app)
  // error handler
  // app.use(errorHandler);
  http.createServer(app).listen(port, () => {
    console.log("Server is runnuing on port", port);
  });
};

void initApp();