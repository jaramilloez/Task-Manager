export const tasks = [
  {
    _id: "618c3432eddf61c496096578",
    title: "Stay Hydrated",
    description: "Drink da dew",
    type: "DayToDay",
    severity: { _id: 2, name: "Very Important" },
    complete: false,
  },
  {
    _id: "618c3459eddf61c49609657a",
    title: "Dishes",
    description: "Do the dishes",
    type: "Home",
    severity: { _id: 0, name: "Normal" },
    complete: false,
  },
  {
    _id: "618c345feddf61c49609657c",
    title: "Laundry",
    description: "Do Laundry",
    type: "Home",
    severity: { _id: 0, name: "Normal" },
    complete: false,
  },
  {
    _id: "618c3469eddf61c49609657e",
    title: "Report",
    description: "Make Employee Report",
    type: "Work",
    severity: { _id: 1, name: "Important" },
    complete: false,
  },
  {
    _id: "618c3474eddf61c496096580",
    title: "Brush Teeth",
    description: "Brush my Teeth",
    type: "Home",
    severity: { _id: 2, name: "Very Important" },
    complete: false,
  },
];

export function getTask(id) {
  return tasks.find((t) => t._id === id);
}

export function saveTask(task) {
  let taskInDb = tasks.find((t) => t._id === task._id) || {};
  taskInDb.title = task.title;
  taskInDb.description = task.description;
  taskInDb.type = task.type;
  taskInDb.severity = task.severity;
  taskInDb.complete = task.complete;

  if (!taskInDb._id) {
    taskInDb._id = Date.now();
    tasks.push(taskInDb);
  }
  console.log(taskInDb);
  return taskInDb;
}

export function deleteTask(id) {
  let taskInDb = tasks.find((t) => t._id === id);
  tasks.splice(tasks.indexOf(taskInDb), 1);
  return taskInDb;
}
