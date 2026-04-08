import { Component, Input, OnInit } from '@angular/core';
import { AboutUsService } from '../../services/about-us.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {

  @Input() color: string = 'sky';
  constructor(public aboutService: AboutUsService) { }

}