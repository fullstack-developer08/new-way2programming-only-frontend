import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ContactService } from "../services/contact.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  message: string = '';
  constructor(private formBuilder: FormBuilder, private contactService : ContactService, private spinner: NgxSpinnerService, private titleService: Title) {
    titleService.setTitle('way2programming | contact');
  }

  ngOnInit() {
    this.contactForm = this.createContactForm();
  }

  createContactForm() {
    return this.formBuilder.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.contactForm.valid) {
      this.contactService.postContactQuery(this.contactForm.value).subscribe(a => {
        this.spinner.hide();
        this.message = 'Thanks for contact us, we will reaching out to you based on your query.'
      });
    }
  }
}
