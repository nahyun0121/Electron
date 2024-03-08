// application life 컨트롤 & native browser window 만드는 모듈
const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const url = require("url");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // 앱의 index.html 로드
  //   win.loadURL(
  //     isDev
  //       ? "http://localhost:3000"
  //       : `file://${path.join(__dirname, "build/index.html")}`
  //   );
  win.loadURL(`file://${path.join(__dirname, "build/index.html")}`);
  //win.loadURL("http://localhost:3000");

  // 앱이 켜질 때 chromium 브라우저 개발자 도구 킴
  win.webContents.openDevTools();
};

// app 모듈의 ready 이벤트가 발생한 후에만 브라우저 창을 생성할 수 있음. app.whenReady() API로 이벤트 기다리기
app.whenReady().then(() => {
  createWindow();

  // 아무 창도 열려 있지 않을 때 창 열기(macOS)
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 모든 창이 닫힐 때 앱 종료(Window & Linux)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
