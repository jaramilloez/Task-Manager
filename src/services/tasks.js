export const tasks = [
  {
    _id: "1",
    title: "Stay Hydrated",
    description: "Drink da dew",
    type: "DayToDay",
    severity: { _id: 2, name: "Very Important" },
    complete: false,
  },
  {
    _id: "2",
    title: "Dishes",
    description: "Do the dishes",
    type: "Home",
    severity: { _id: 0, name: "Normal" },
    complete: false,
  },
  {
    _id: "3",
    title: "Laundry",
    description: "Do Laundry",
    type: "Home",
    severity: { _id: 0, name: "Normal" },
    complete: false,
  },
  {
    _id: "4",
    title: "Report",
    description: "Make Employee Report",
    type: "Work",
    severity: { _id: 1, name: "Important" },
    complete: false,
  },
  {
    _id: "5",
    title: "Brush Teeth",
    description: "Brush my Teeth",
    type: "Home",
    severity: { _id: 2, name: "Very Important" },
    complete: false,
  }, 
  {
    _id: "6",
    title: "Dust",
    description: "Dust everything indoors",
    type: "Home",
    severity: { _id: 0, name: "Normal" },
    complete: false,
  },
  {
    _id: "7",
    title: "Repair Chromebooks",
    description: "Repair 8~ Chromebooks",
    type: "Work",
    severity: { _id: 2, name: "Very Important" },
    complete: false,
  },
  {
    _id: "8",
    title: "Shave",
    description: "Shave face",
    type: "DayToDay",
    severity: { _id: 1, name: "Important" },
    complete: false,
  },
  {
    _id: "9",
    title: "Vacuum",
    description: "Vacuum rugs",
    type: "Home",
    severity: { _id: 0, name: "Normal" },
    complete: false,
  },
  {
    _id: "10",
    title: "Homework",
    description: "Work on homework",
    type: "DayToDay",
    severity: { _id: 1, name: "Important" },
    complete: false,
  },
  {
    _id: "11",
    title: "Clean Glass",
    description: "Clean windows & mirrors",
    type: "Home",
    severity: { _id: 0, name: "Normal" },
    complete: false,
  },
  {
    _id: "12",
    title: "Workout",
    description: "Go to the gym",
    type: "Work",
    severity: { _id: 0, name: "Normal" },
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
