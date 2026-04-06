import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task/task';
import { Newtask } from "./newtask/newtask";
import { newtaskdata } from './task/task.model';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, Newtask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) { }


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {

  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
