const { addTask, removeTask } = require('../_mocks_/addAndRemoveTask.js');

describe('Add and Remove To-do-list', () => {
  test('should add items', () => {
    const result = addTask(
      {
        title: 'fake description for testing',
        index: 1,
        completed: false,
      },
    );
    expect(result).toStrictEqual([
      {
        title: 'fake description for testing',
        index: 1,
        completed: false,
      },
    ]);
  });
  test('delete item', () => {
    expect(removeTask({
      title: 'fake description for testing',
      index: 1,
      completed: false,
    })).toStrictEqual([]);
  });
});
