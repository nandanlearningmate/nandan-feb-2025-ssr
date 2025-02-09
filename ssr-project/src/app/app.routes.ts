import { Routes } from '@angular/router';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { ComposeArticleComponent } from './compose-article/compose-article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

export const routes: Routes = [
  { path: 'my-articles', component: MyArticlesComponent },
  { path: 'compose-article', component: ComposeArticleComponent },
  { path: 'article/:id', component: ArticleDetailComponent }, // ✅ Route with ID
  { path: '', redirectTo: 'my-articles', pathMatch: 'full' }
];