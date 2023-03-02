import * as fs from "node:fs";

const DISK_NAME = ["A", "B", "C", "D", "E", "F", "G", "I", "K", "L", "M"];

export const getFromSystem = () => {
  const allFoldersFromSystem = {};
  DISK_NAME.forEach((disk) => {
    const folders = getFolders(`${disk}:\\`);
    if (folders) {
      allFoldersFromSystem[disk]= folders;
    }
  });
  return allFoldersFromSystem;
};

export const getFolders = (path) => {
  try {
    const dirs = fs.readdirSync(path, {
      encoding: "utf-8",
      withFileTypes: true,
    });
    const listdir = dirs.map((dir) => {
      if (dir.isDirectory()) {
        return dir.name;
      }
    });

    return listdir;
  } catch (err) {}
  return null;
};
