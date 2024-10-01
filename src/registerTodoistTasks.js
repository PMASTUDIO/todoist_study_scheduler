const { format } = require("date-fns");

const { TodoistApi } = require("@doist/todoist-api-typescript");

// #TODO: Should authenticate officially
const api = new TodoistApi("045fa77c5bbdebca01fe2c0e9df17763370f2b30");

// Generate calendar CSV function
async function RegisterTodoistTasks(dates, title, content, difficulty) {
  console.log("=== Dates: ", dates);

  const requests = dates.map((dateInfo, index) => {
    const taskName = `${title} - Section ${index + 1}`;
    const dateStr = format(dateInfo, "yyyy-MM-dd");
    const priority = Math.min(Math.max(difficulty, 1), 4);

    return api.addTask({
      content: taskName,
      description: content,
      dueDate: dateStr,
      priority,
    });
  });

  await Promise.all(requests);
}

module.exports = RegisterTodoistTasks;
