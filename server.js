import Fastify from "fastify";
import * as ffStatic from "@fastify/static";
import * as ffView from "@fastify/view";
import * as path from "node:path";
import { fileURLToPath } from "url";

import { getFromSystem } from "./utils/folders.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FF = Fastify({ logger: false });
FF.register(ffStatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

FF.get("/", (req, rep) => {
  rep.sendFile("index.html");
});
FF.get("/folder/get", (req, rep) => {
    const data = getFromSystem();
    console.log(data)
  rep.send({ data: data });
});

FF.listen({ port: 3000, host: "0.0.0.0" }, (err, addr) => {
  if (err) {
    FF.log.error(err);
    process.exit(1);
  }
  console.log("Server run on :", addr);
});
