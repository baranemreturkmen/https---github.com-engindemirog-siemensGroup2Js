export class TaskService{
    constructor(task){
        this.task = task;
    }

    complete(){
        this.task.completed = true;
        console.log(`completed task : ${this.task.name}`);
    }

    setCompleteDate(){
        this.task.completeDate = new Date();
        console.log(`completed on : ${this.task.completeDate}`);
    }

    notifyCompletion(){
        console.log("Users notified");
    }

    save(){
        console.log("saved");
    }
}

export class Task{
    constructor(name, priority, project, user, completed){
        this.name = name;
        this.priority = priority;
        this.project = project;
        this.user = user;
        this.completed = completed;
    }
}


export class TaskServiceManager extends TaskService{
        constructor(task){
            super(task)
        }

        completeAndNotify(){
            this.complete();
            this.setCompleteDate();
            this.save();
            this.notifyCompletion();
        }
}

