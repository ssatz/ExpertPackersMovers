import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../_services/index';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../_models';
import { SignIn } from '../_models/signin';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [LoginService]
})
export class SignupComponent implements OnInit {

  isSignUpActive = false;
  signupTO: any = new Signup();
  loading = false;
  constructor(private router: Router,
    private http: HttpClient,
    private title: Title,
    private meta: Meta,
    private activatedRoute: ActivatedRoute,
    public loginService: LoginService) {
    this.signupTO.login_type_id = 2 ;
  }

  signup;
  signinTO: any = new SignIn();
  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      if(url[0].path === 'signup') {
        /**SEO Start */
 this.title.setTitle('Singup - Professional packers and movers in Bangalore');
 this.meta.updateTag({
   name: 'description',
   content: 'Packers and Movers Bangalore - Hire best and trusted packers and movers' +
     'in Bangalore for local shifting, domestic relocation,logistics service and household service.' +
     '✔ Fast, Secure Office Moving, IT Equipment Moving and House Relocation Services.'
 });
 this.meta.updateTag({name: 'keywords' ,
 content: 'professional packers and movers,logistics services,' +
 'corporate shifting services bangalore,relocation services,movers and packers' +
 'household services, packers and movers bangalore, affordable packers and movers'});
 /**SEO Ends */
      } else {
         /**SEO Start */
 this.title.setTitle('Singin - Logistics & Household shifting services in  Bangalore');
 this.meta.updateTag({
   name: 'description',
   content: 'Packers and Movers Bangalore - Hire best and trusted packers and movers' +
     'in Bangalore for local shifting, domestic relocation,logistics service and household service.' +
     '✔ Fast, Secure Office Moving, IT Equipment Moving and House Relocation Services.'
 });
 this.meta.updateTag({name: 'keywords' ,
 content: 'professional packers and movers,logistics services,' +
 'corporate shifting services bangalore,relocation services,movers and packers' +
 'household services, packers and movers bangalore, affordable packers and movers'});
 /**SEO Ends */
      }
 });

  }
  toggleSignUp(condition) {
    if (condition === 'login') {
      this.isSignUpActive = false;
    } else {
      this.isSignUpActive = true;
    }
  }

  singin() {
    console.log(this.signinTO);
    this.loading = true;
    this.http.post(this.loginService.urls['signin'],
      {
        tableName: 'users', userName: this.signinTO['userName'],
        password: this.signinTO['password']
      }, {})
      .subscribe(
        data => {
          console.log(data);
          if (data === 0) {
            alert('Invalid Login. Please try again!');
          } else {
            this.loginService.setCookie('userName', this.signinTO['userName']);
            this.loginService.setCookie('userDetails', JSON.stringify(data[0]));
            this.loginService.setCookie('isAdmin', data[0].login_type_id === 1);
            this.router.navigateByUrl('/booking');
            if (data[0].login_type_id === 1) {
              this.router.navigateByUrl('/addTracking');
            } else {
              this.router.navigateByUrl('/booking');
            }
          }
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });
  }
  singup() {
    console.log(this.signupTO);
    this.loading = true;
    if (!this.signupTO.password) {
      alert("Please enter the password!");
      return;
    }
    if (!this.signupTO.userName) {
      alert("Please enter the userName!");
      return;
    }
    if (!this.signupTO.mobile) {
      alert("Please enter the Mobile No!");
      return;
    }
    if (!this.signupTO.email) {
      alert("Please enter the email address!");
      return;
    }
    if (this.signupTO.password !== this.signupTO.confirmPassword) {
      alert('Password and Confirm Password should be same!');
      return;
    }
    this.http.post(this.loginService.urls['signup'],
      {
        userName: this.signupTO.userName, login_type_id: '2',
        fields: JSON.stringify(this.signupTO),
        password: this.signupTO.password,
        email: this.signupTO.email
      }, {})
      .subscribe(
        (data: any) => {
          if (data && data.indexOf('Records inserted successfully') > -1) {
            alert('Account created successfully! Please login');
            this.toggleSignUp('login');
          } else if (data && data.indexOf('Record already exist') > -1) {
            alert('User name already exist!. Please try different name.');
          } else {
            alert('Please try again later!');
          }
        },
        error => {
          if (error && error.error && error.error.text && error.error.text.indexOf('Records inserted successfully') > -1) {
            alert('Account created successfully! Please login');
            this.toggleSignUp('login');
          } else if (error && error.error &&  error.error.text && error.error.text.indexOf('Record already exist') > -1) {
            alert('User name already exist!. Please try different name.');
          } else {
            alert('Please try again later!');
          }
        });
  }

}
