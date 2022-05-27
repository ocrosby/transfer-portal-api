var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require("body-parser");
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

var indexRouter = require('./routes/index');
var playersRouter = require('./routes/players');
var schoolsRouter = require('./routes/schools');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/players', playersRouter);
app.use('/schools', schoolsRouter);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Transfer Portal Express API with Swagger",
            version: "0.1.0",
            description: "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "TDS Transfer Portal Tracker",
                url: "https://www.topdrawersoccer.com/college-soccer-articles/2022-womens-di-transfer-tracker_aid50187",
                email: "omar.crosby@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000/players",
            },
            {
                url: "http://localhost:3000/schools"
            }
        ],
    },
    apis: ["./routes/players.js", "./routes/schools.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        explorer: true
    })
);


module.exports = app;