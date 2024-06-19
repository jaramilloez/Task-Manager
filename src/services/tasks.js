export const tasks = [
  {
    _id: "0",
    title: "Stay Hydrated",
    description: "Drink da dew",
<<<<<<< HEAD
    type: { _id: '0', name: "DayToDay" },
    severity: { _id: '2', name: "Very Important" },
=======
    type: { _id: 0, name: "DayToDay" },
    severity: { _id: 2, name: "Very Important" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  },
  {
    _id: "1",
    title: "Dishes",
    description: "Do the dishes",
<<<<<<< HEAD
    type: { _id: '1', name: "Home" },
    severity: { _id: 0, name: "Normal" },
=======
    type: { _id: 1, name: "Home" },
    severity: { _id: 2, name: "Normal" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  },
  {
    _id: "2",
    title: "Laundry",
    description: "Do Laundry",
<<<<<<< HEAD
    type: { _id: '1', name: "Home" },
    severity: { _id: '0', name: "Normal" },
=======
    type: { _id: 1, name: "Home" },
    severity: { _id: 2, name: "Normal" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  },
  {
    _id: "3",
    title: "Report",
    description: "Make Employee Report",
<<<<<<< HEAD
    type: { _id: '2', name: "Work" },
    severity: { _id: '1', name: "Important" },
=======
    type: { _id: 2, name: "Work" },
    severity: { _id: 1, name: "Important" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  },
  {
    _id: "4",
    title: "Brush Teeth",
    description: "Brush my Teeth",
<<<<<<< HEAD
    type: { _id: '1', name: "Home" },
    severity: { _id: '2', name: "Very Important" },
=======
    type: { _id: 1, name: "Home" },
    severity: { _id: 2, name: "Very Important" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  }, 
  {
    _id: "5",
    title: "Dust",
    description: "Dust everything indoors",
<<<<<<< HEAD
    type: { _id: '1', name: "Home" },
    severity: { _id: '0', name: "Normal" },
=======
    type: { _id: 1, name: "Home" },
    severity: { _id: 0, name: "Normal" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  },
  {
    _id: "6",
    title: "Repair Chromebooks",
    description: "Repair 8~ Chromebooks",
<<<<<<< HEAD
    type: { _id: '2', name: "Work" },
    severity: { _id: '2', name: "Very Important" },
=======
    type: { _id: 2, name: "Work" },
    severity: { _id: 2, name: "Very Important" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  },
  {
    _id: "7",
    title: "Shave",
    description: "Shave face",
<<<<<<< HEAD
    type: { _id: '0', name: "DayToDay" },
    severity: { _id: '1', name: "Important" },
=======
    type: { _id: 0, name: "DayToDay" },
    severity: { _id: 1, name: "Important" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  },
  {
    _id: "8",
    title: "Vacuum",
    description: "Vacuum rugs",
<<<<<<< HEAD
    type: { _id: '1', name: "Home" },
    severity: { _id: '0', name: "Normal" },
=======
    type: { _id: 1, name: "Home" },
    severity: { _id: 0, name: "Normal" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  },
  {
    _id: "9",
    title: "Homework",
    description: "Work on homework",
<<<<<<< HEAD
    type: { _id: '0', name: "DayToDay" },
    severity: { _id: '1', name: "Important" },
=======
    type: { _id: 0, name: "DayToDay" },
    severity: { _id: 1, name: "Important" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  },
  {
    _id: "10",
    title: "Clean Glass",
    description: "Clean windows & mirrors",
<<<<<<< HEAD
    type: { _id: '1', name: "Home" },
    severity: { _id: '0', name: "Normal" },
=======
    type: { _id: 1, name: "Home" },
    severity: { _id: 0, name: "Normal" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  },
  {
    _id: "11",
    title: "Workout",
    description: "Go to the gym",
<<<<<<< HEAD
    type: { _id: '2', name: "Work" },
    severity: { _id: '0', name: "Normal" },
=======
    type: { _id: 2, name: "Work" },
    severity: { _id: 0, name: "Normal" },
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
    complete: false,
  },
];

export const types = [
  {
    _id: '0',
    name: 'DayToDay'
  },
  {
    _id: '1',
    name: 'Home'
  },
  {
    _id: '2',
    name: 'Work'
  },
];

const severities = [
  {
    _id: '0',
    name: 'Normal'
  },
  {
    _id: '1',
    name: 'Important'
  },
  {
    _id: '2',
    name: 'Very Important'
  },
]

export function getTasks() { return tasks; }

export function getTypes() { return types; }

export function getSeverities() { return severities; }

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
    taskInDb._id = tasks.length + 1;
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
