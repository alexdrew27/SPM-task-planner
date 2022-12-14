import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  listId: string;
  users: any;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
      }
    )

    this.taskService.getUsers().subscribe(
      users => this.users = users
    );
  }

  createTask(title: string, description: string, priority: number, assignment: string) {
    this.taskService.createTask(title, description, priority, assignment, this.listId).subscribe((newTask: Task) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    })
  }

}
