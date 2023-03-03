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
    const listdir = dirs.reduce((map,item) => {
      if (item.isDirectory()) {
        map.dirs.push(item);
      }else{
        map.files.push(item);
      }
      return map;
    },{dirs:[],files:[]});

    return listdir;
  } catch (err) {}
  return null;
};
