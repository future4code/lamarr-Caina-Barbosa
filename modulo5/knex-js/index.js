"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
exports.connection = (0, knex_1.default)({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
const getActorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
    `);
    return result[0][0];
});
getActorById("001")
    .then(result => {
    console.log(result);
})
    .catch(err => {
    console.log(err);
});
// Assim a chamada funciona fora dos endpoints com await
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield getActorById("001"));
}))();
app.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(yield getActorById(id));
        res.end();
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Unexpected error");
    }
})); // bata no http://localhost:3003/users/001 e veja o que acontece no terminal
