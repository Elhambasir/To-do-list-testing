const taskList = [];
function addTask(item) {
  taskList.push(item);
  return taskList;
}

function removeTask(data) {
  const filteredData = taskList.filter((item) => item.index !== data.index);
  for (let i = 0; i < filteredData.length; i += 1) {
    filteredData[i].index = i + 1;
  }
  return filteredData;
}

exports.addTask = addTask;
exports.removeTask = removeTask;
// test