import express from "express";

/**
 *
 * @param {*} app -express app
 */
const configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs"); // bao cho express biet c/ta se dung html thong qua 1 view engine co ten la ejs. Ejs la thu vien
  app.set("views", "./src/views"); //tat ca file view luu tru trong thu muc tren. Neu co tim thi tim tren thu muc tren. Cong nghe ejs de viet html
};

export default configViewEngine; // tham chieu chu khong phai ham nen khong co () sau ten const
