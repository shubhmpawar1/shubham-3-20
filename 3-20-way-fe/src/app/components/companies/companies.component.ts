import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageService } from '../../services/landing-page.service';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './companies.component.html',
})
export class CompaniesComponent {

  @Input() color: any = 'sky';
  @Input() companies: any = {};

  constructor() { }
}