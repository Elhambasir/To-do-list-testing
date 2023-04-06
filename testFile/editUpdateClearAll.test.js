const { editTitle, editStatus, removeAllCompleted } = require('../_mocks_/editUpdateClearAll.js');

describe('Edit title,status', () => {
  test('title should be edited', () => {
    expect(editTitle({
      title: 'title-1',
      index: 1,
      completed: false,
    }, 'new-title')).toStrictEqual(
      [
        {
          title: 'new-title',
          index: 1,
          completed: false,
        },
        {
          title: 'title-2',
          index: 2,
          completed: false,
        },
      ],
    );
  });

  test('status should be changed', () => {
    expect(editStatus({
      title: 'new-title',
      index: 1,
      completed: false,
    }, true)).toStrictEqual(
      [
        {
          title: 'new-title',
          index: 1,
          completed: true,
        },
        {
          title: 'title-2',
          index: 2,
          completed: false,
        },
      ],
    );
  });

  test('All completed should be removed', () => {
    expect(removeAllCompleted([
      {
        title: 'Do your homework',
        index: 1,
        completed: true,
      },
      {
        title: 'Go to gym',
        index: 2,
        completed: false,
      },
      {
        title: 'Complete your project',
        index: 3,
        completed: true,
      },
      {
        title: 'Take shower',
        index: 4,
        completed: false,
      },
    ])).toStrictEqual(
      [
        {
          title: 'Go to gym',
          index: 1,
          completed: false,
        },
        {
          title: 'Take shower',
          index: 2,
          completed: false,
        },
      ],
    );
  });
});