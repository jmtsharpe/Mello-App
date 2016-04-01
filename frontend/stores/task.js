var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var TaskConstants = require('../constants/taskConstants.js');
var TaskStore = new Store(AppDispatcher);


module.exports = TaskStore;

var _tasks = {};

var resetTasks = function (tasks) {
  _tasks = {};
  tasks.forEach(function (task) {
    _tasks[task.id] = task;
  });
};

var resetTask = function (task) {
  _tasks[task.id] = task;
};

TaskStore.all = function () {
	debugger;
  var tasks = [];
  for (var id in _tasks) {
    if (_tasks.hasOwnProperty(id)) {
      tasks.push(_tasks[id]);
    }
  }

  tasks = Object.keys(_tasks).map(function (task_id) {
    return _tasks[task_id];
  });
  return tasks;
};

TaskStore.mine = function (cardId) {
	var myTasks = TaskStore.all().filter( function (task) {
		return task.card_id === cardId;
	});
	return myTasks;
};

TaskStore.findMine = function () {
  var tasks = [];
  for (var id in _tasks) {
    if (_tasks.hasOwnProperty(id)) {
      tasks.push(_tasks[id]);
    }
  }
};

TaskStore.find = function (id) {
  return _tasks[id];
};

TaskStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case TaskConstants.TASKS_RECEIVED:
      resetTasks(payload.tasks);
      TaskStore.__emitChange();
      break;
    case TaskConstants.TASK_RECEIVED:
      resetTask(payload.task);
      TaskStore.__emitChange();
      break;
  }
};

module.exports = TaskStore;
