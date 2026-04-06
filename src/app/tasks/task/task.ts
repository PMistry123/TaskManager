import { Component, Input } from '@angular/core';
import { TaskInterface } from './task.model';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskInterface;
  constructor(private tasksService: TasksService) { }


  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
