import * as childProc from "node:child_process";

export const runFile = (path) => {
  const proc = childProc.spawn("start", [`"" "${path}"`], {
    shell: true,
  });

  proc.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  proc.stderr.on("data", (data) => {
    console.error("Error: " + data);
  });
  proc.on("close", (code) => {
    console.log("Process exit code: " + code);
  });
};
