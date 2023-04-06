const localStorageMock = [
  {
    title: 'title-1',
    index: 1,
    completed: false,
  },
  {
    title: 'title-2',
    index: 2,
    completed: false,
  },
];
function editTitle(obj, newTitle) {
  const editedObj = localStorageMock.map((item) => {
    if (item.index === obj.index) {
      item.title = newTitle;
    }
    return item;
  });
  return editedObj;
}

function editStatus(obj, status) {
  const editedObj = localStorageMock.map((item) => {
    if (item.index === obj.index) {
      item.completed = status;
    }
    return item;
  });
  return editedObj;
}

function removeAllCompleted(obj) {
  const incompleted = obj.filter((item) => item.completed === false);
  for (let i = 0; i < incompleted.length; i += 1) {
    incompleted[i].index = i + 1;
  }
  return incompleted;
}

exports.editTitle = editTitle;
exports.editStatus = editStatus;
exports.removeAllCompleted = removeAllCompleted;