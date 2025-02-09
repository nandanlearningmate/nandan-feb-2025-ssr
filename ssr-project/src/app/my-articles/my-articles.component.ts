
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compose-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {  // ✅ Ensure this is exported
  private http = inject(HttpClient);
  private router = inject(Router);
  articles: any[] = [];

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/articles').subscribe({
      next: (data) => {
        this.articles = data;
      },
      error: (err) => console.error('Error fetching articles:', err),
    });
  }
  // ✅ Navigate to the article-detail page
  goToArticle(id: number) {
    this.router.navigate(['/article', id]);
  }
}