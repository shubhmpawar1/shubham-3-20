import { Component } from '@angular/core';
import { ContactComponent } from "../../components/contact/contact.component";
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactPageService } from '../../services/contact-page.service';

@Component({
  selector: 'app-contact-page',
  imports: [ContactComponent, HeaderComponent, FooterComponent],
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {

  constructor(public cs: ContactPageService) { }
}
