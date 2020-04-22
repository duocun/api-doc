import express from "express";
import Cors from "cors";
import bodyParser from "body-parser";

import favicon from "serve-favicon";
import path from "path";
import fs from "fs";

import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import YAML from "yamljs";

import account from "./account/router";


const cfg = JSON.parse(fs.readFileSync('../duocun.cfg.json','utf8'));
const DOC_SERVER = cfg.DOC_SERVER;

const app = express();

const swaggerDefinition = YAML.load(path.join(__dirname, "/swagger/info.yaml"));

const options = {
	swaggerDefinition,
	apis: [path.join(__dirname, "/swagger/**/*.yaml")],
};

const swaggerSpec = swaggerJsDoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/accounts/", account);
app.use(Cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.listen(DOC_SERVER.PORT, () => console.log(`Listening on port `  + DOC_SERVER.PORT));

module.exports = app;
