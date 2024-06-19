export const tasks = [
  {
    _id: "0",
    title: "Stay Hydrated",
    description: "Drink da dew",
    type: { _id: '0', name: "DayToDay" },
    severity: { _id: '2', name: "Very Important" },
    complete: false,
  },
  {
    _id: "1",
    title: "Dishes",
    description: "Do the dishes",
    type: { _id: '1', name: "Home" },
    severity: { _id: 0, name: "Normal" },
    complete: false,
  },
  {
    _id: "2",
    title: "Laundry",
    description: "Do Laundry",
    type: { _id: '1', name: "Home" },
    severity: { _id: '0', name: "Normal" },
    complete: false,
  },
  {
    _id: "3",
    title: "Report",
    description: "Make Employee Report",
    type: { _id: '2', name: "Work" },
    severity: { _id: '1', name: "Important" },
    complete: false,
  },
  {
    _id: "4",
    title: "Brush Teeth",
    description: "Brush my Teeth",
    type: { _id: '1', name: "Home" },
    severity: { _id: '2', name: "Very Important" },
    complete: false,
  }, 
  {
    _id: "5",
    title: "Dust",
    description: "Dust everything indoors",
    type: { _id: '1', name: "Home" },
    severity: { _id: '0', name: "Normal" },
    complete: false,
  },
  {
    _id: "6",
    title: "Repair Chromebooks",
    description: "Repair 8~ Chromebooks",
    type: { _id: '2', name: "Work" },
    severity: { _id: '2', name: "Very Important" },
    complete: false,
  },
  {
    _id: "7",
    title: "Shave",
    description: "Shave face",
    type: { _id: '0', name: "DayToDay" },
    severity: { _id: '1', name: "Important" },
    complete: false,
  },
  {
    _id: "8",
    title: "Vacuum",
    description: "Vacuum rugs",
    type: { _id: '1', name: "Home" },
    severity: { _id: '0', name: "Normal" },
    complete: false,
  },
  {
    _id: "9",
    title: "Homework",
    description: "Work on homework",
    type: { _id: '0', name: "DayToDay" },
    severity: { _id: '1', name: "Important" },
    complete: false,
  },
  {
    _id: "10",
    title: "Clean Glass",
    description: "Clean windows & mirrors",
    type: { _id: '1', name: "Home" },
    severity: { _id: '0', name: "Normal" },
    complete: false,
  },
  {
    _id: "11",
    title: "Workout",
    description: "Go to the gym",
    type: { _id: '2', name: "Work" },
    severity: { _id: '0', name: "Normal" },
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
