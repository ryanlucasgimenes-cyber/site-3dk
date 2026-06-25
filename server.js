/* -----------------------------------------------------------------------------
   3Dk Impressões — servidor local (opcional)

   O site é estático (pasta /public) e em produção é hospedado como site estático.
   Este arquivo serve apenas para visualizar localmente com `npm start`.
   ----------------------------------------------------------------------------- */
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`\n  3Dk Impressões em  http://localhost:${PORT}\n`);
});
