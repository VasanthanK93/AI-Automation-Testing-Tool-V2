let history = [];

function storeFeedback(entry) {

  history.push({
    ...entry,
    timestamp: new Date().toISOString()
  });

  return true;
}

function getHistory() {
  return history;
}

function getRecent(limit = 10) {
  return history.slice(-limit);
}

module.exports = {
  storeFeedback,
  getHistory,
  getRecent
};