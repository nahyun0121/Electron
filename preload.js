// Node.js 'process.versions' 객체에 접근하고, 기본 'replaceText' helper function 실행하여 HTML 문서에 버전 숫자 넣는 코드

const { contextBridge } = require("electron/renderer");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});
