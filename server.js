import Fastify from "fastify";
import * as ffStatic from "@fastify/static";
import * as ffView from "@fastify/view";
import * as path from "node:path";
import * as os from "node:os";

import { fileURLToPath } from "url";
import { runFile } from "./utils/runFile.js";
import { getFromSystem, getFolders } from "./utils/folders.js";

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
  rep.send({ data: data });
});

FF.get("/folder/get/:folder", (req, rep) => {
  const [type, path] = [...req.query.path.split("@")];

  if (type === "folder") {
    const data = getFolders(path);
    rep.send({ data: data });
  } else if (type === "file") {
    runFile(path)
    rep.send({ data: "run" });
  }
});

FF.listen({ port: 3000, host: "0.0.0.0" }, (err, addr) => {
  if (err) {
    FF.log.error(err);
    process.exit(1);
  }
  console.log("Server run on :", addr);
});
