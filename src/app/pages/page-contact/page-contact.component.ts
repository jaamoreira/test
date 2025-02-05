import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';
// import { ContactService } from './../services/contact-service/contact.service';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})

export class PageContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  captchaResult: String = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();

    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
       return false;
    }

    this.router.events.subscribe((evt) => {
       if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0);
        }
    });
  }

  ngOnInit() {
  }

  onSend(){
    // console.log("OLA TESTE");
    // console.log(this.contactName);
    // console.log(this.contactCompany);
    // console.log(this.contactEmail);

    // var email = {
    //   email : this.contactEmail
    // };

    // console.log(email);


    // this.contactService.sendContact(email).subscribe((reponse)=>{
    //   console.log(reponse + "OLA");
    //  }); 
  }


  get f() { return this.contactForm.controls; }

  resolvedCaptcha(captchaResponse: string) {
    if (captchaResponse) {
      this.captchaResult = captchaResponse;
    }
  }
  
  private createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      phone: [''],
      message: ['', Validators.requiredTrue]
    });
  }

  private onReset() {
    this.contactForm.reset();
  }

  
}
