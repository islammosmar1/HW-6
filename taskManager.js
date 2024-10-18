class TaskManager {
    constructor() {
        this.tasks = [];
        this.counter = 1;
    }

    // إضافة مهمة جديدة
    addTask() {
        const description = prompt("Enter task description:");
        if (description) {
            const task = { id: this.counter, description, completed: false };
            this.tasks.push(task);
            this.counter++;
            console.log(`Task added: ID = ${task.id}, Description = ${task.description}, Status = Not Completed`);
        } else {
            alert("Please enter a valid task description.");
        }
    }

    // عرض جميع المهام
    viewTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
        } else {
            this.tasks.forEach(task => {
                const status = task.completed ? "Completed" : "Not Completed";
                console.log(`ID: ${task.id} | Description: ${task.description} | Status: ${status}`);
            });
        }
    }

    // تحديث وصف المهمة
    updateTask() {
        const taskId = parseInt(prompt("Enter task ID to update:"));
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            const newDescription = prompt("Enter new description:");
            if (newDescription) {
                task.description = newDescription;
                console.log(`Task ${taskId} updated to: ${task.description}`);
            } else {
                alert("Please enter a valid description.");
            }
        } else {
            alert(`Task with ID ${taskId} not found.`);
        }
    }

    // حذف مهمة
    deleteTask() {
        const taskId = parseInt(prompt("Enter task ID to delete:"));
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            console.log(`Task ${taskId} deleted.`);
        } else {
            alert(`Task with ID ${taskId} not found.`);
        }
    }

    // تغيير حالة إتمام المهمة
    toggleCompletion() {
        const taskId = parseInt(prompt("Enter task ID to toggle status:"));
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
            const status = task.completed ? "Completed" : "Not Completed";
            console.log(`Task ${taskId} status updated to: ${status}`);
        } else {
            alert(`Task with ID ${taskId} not found.`);
        }
    }

    // البحث عن المهام
    searchTasks() {
        const query = prompt("Enter task description to search:");
        const filteredTasks = this.tasks.filter(task =>
            task.description.toLowerCase().includes(query.toLowerCase())
        );
        if (filteredTasks.length === 0) {
            console.log(`No tasks found with description: ${query}`);
        } else {
            filteredTasks.forEach(task => {
                const status = task.completed ? "Completed" : "Not Completed";
                console.log(`ID: ${task.id} | Description: ${task.description} | Status: ${status}`);
            });
        }
    }

    // عرض القائمة الرئيسية
    showMenu() {
        while (true) {
            const option = prompt(`
1. Add Task
2. View Tasks
3. Update Task
4. Delete Task
5. Toggle Task Completion
6. Search Tasks
7. Exit
Choose an option (1-7):
            `);
            switch (option) {
                case '1':
                    this.addTask();
                    break;
                case '2':
                    this.viewTasks();
                    break;
                case '3':
                    this.updateTask();
                    break;
                case '4':
                    this.deleteTask();
                    break;
                case '5':
                    this.toggleCompletion();
                    break;
                case '6':
                    this.searchTasks();
                    break;
                case '7':
                    alert("Exiting the Task Manager.");
                    return;
                default:
                    alert("Invalid option, please choose between 1 and 7.");
            }
        }
    }
}

// إنشاء كائن TaskManager
const taskManager = new TaskManager();

// عرض القائمة عند التحميل
taskManager.showMenu();
