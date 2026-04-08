import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AboutUsService } from '../../services/about-us.service';

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