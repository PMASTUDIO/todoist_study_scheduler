const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("review", {
  submit: (e, classId, content, difficulty, date) =>
    ipcRenderer.invoke("submitReview", e, classId, content, difficulty, date),
});
