"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const Turma_1 = __importDefault(require("./endpoints/Turma"));
const turma = new Turma_1.default();
app_1.app.post("/criar-turma", turma.criar);
//# sourceMappingURL=index.js.map