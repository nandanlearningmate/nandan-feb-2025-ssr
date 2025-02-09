import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { ComposeArticleComponent } from './compose-article/compose-article.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, MyArticlesComponent, ComposeArticleComponent ]
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      this.users = response.data; // API returns { data: [...] }
    });
  }
}