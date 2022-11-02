import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  taskId: string;
  listId: string;
  users: any;
  task: any;


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.taskId = params.taskId;
        this.listId = params.listId;
        this.taskService.getUsers().subscribe(
          users => {
            this.users = users;
            this.taskService.getTask(this.listId, this.taskId).subscribe(
              task => this.task = task
            );
          }
        );
      }
    )
  }

  updateTask(title: string, description: string, status: string, priority: number, assignment: string) {
    this.taskService.updateTask(this.listId, this.taskId, status, priority, assignment, title, description).subscribe(() => {
      this.router.navigate(['/lists', this.listId]);
    })
  }

}
