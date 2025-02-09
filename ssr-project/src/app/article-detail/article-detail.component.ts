import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private meta = inject(Meta);
  private titleService = inject(Title);

  article: any = null;

  ngOnInit() {
    // Get the article ID from the URL
    const articleId = this.route.snapshot.paramMap.get('id');

    if (articleId) {
      this.fetchArticle(articleId);
    }
  }

  fetchArticle(id: string) {
    this.http.get<any>(`http://localhost:3000/articles/${id}`).subscribe({
      next: (data) => {
        this.article = data;
        this.updateMetaTags(data);
      },
      error: (err) => console.error('Error fetching article:', err),
    });
  }

  updateMetaTags(article: any) {
    this.titleService.setTitle(article.title);
    this.meta.updateTag({ name: 'description', content: article.description });

    // Open Graph meta tags
    this.meta.updateTag({ property: 'og:title', content: article.title });
    this.meta.updateTag({ property: 'og:description', content: article.description });
    this.meta.updateTag({ property: 'og:image', content: article.imageUrl || 'default-image.jpg' });
    this.meta.updateTag({ property: 'og:url', content: window.location.href });
  }
}