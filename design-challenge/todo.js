// # OO Design Challenge

// ## Directions
// You are to design and implement an object oriented To-Do List. A to-do list is significantly less complex than a social network like Instagram or a game like Blackjack. Thus, this should be less intensive than the activities we've done as a group.

// Thus, I expect for a complete, working model. Test your classes by instantiating new objects and calling methods to ensure that data flows through your model as you would expect it to.

// If you want some inspiration, play around with [this simple to-do list app](https://htmlpreview.github.io/?https://github.com/themaxsandelin/todo/blob/master/index.html) and use it as a model for your classes.
/*
TO DO LIST
___________
//PROPERTIES
- list name
- unfinished task list5
- finished task list 

//METHODS
- addTask
- deleteTask
- completeTask
*/

class TodoList {
    constructor (listName){
    this.listName = listName;
    
    this.unfinishedTasks = [];
    this.finishedTasks = [];
    }
    
    addTask(task) {
        this.unfinishedTasks.push(task);
    }
    
    deleteTask(task) {
        if(!this.unfinishedTasks.includes(task)) {
            return `${task} is not in ${this.listName}`
        } else {
             this.unfinishedTasks.splice(task, 1);
             return `${task} deleted from ${this.listName}`
        }
    }
    
    completeTask(task) {
        this.unfinishedTasks.splice(task, 1);
        this.finishedTasks.push(task);
        return `${task} has been completed`
    }
}

class importantList extends TodoList {
    
}