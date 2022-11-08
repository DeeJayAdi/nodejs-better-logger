require("colors");

function getDateTime() {
  const d = new Date();
  const date = d.toLocaleDateString();
  const time = d.toLocaleTimeString();

  return `<[${time} ${date}]> `.cyan;
}
function log(...content) {
  process.stdout.write(getDateTime() + content.join(" ") + "\n");
}
function logError(...content) {
  process.stdout.write(getDateTime() + content.join(" ").red + "\n");
}
function logWarn(...content) {
  process.stdout.write(getDateTime() + content.join(" ").yellow + "\n");
}
function logSucess(...content) {
  process.stdout.write(getDateTime() + content.join(" ").green + "\n");
}
function config() {
  console.log = log;
  console.error = logError;
  console.warn = logWarn;
  console.sucess = logSucess;
}

module.exports = {
  log,
  logError,
  logWarn,
  config,
};
