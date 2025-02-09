import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compose-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compose-article.component.html',
  styleUrls: ['./compose-article.component.css']
})
export class ComposeArticleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  id!: number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
  }
}