import {Component, OnInit} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { AuthfakeauthenticationService } from 'src/app/core/services/authfake.service';
import { login } from 'src/app/store/Authentication/authentication.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  errorLogin = '';
  a: any = 10;
  b: any = 20;
  toast!: false;

  year: number = new Date().getFullYear();
  constructor(private formBuilder: UntypedFormBuilder,
              private authService:AuthenticationService,
              private router: Router,


) { }

  ngOnInit(): void {
   
    let currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if(currentUser['realm_access']?.roles.includes('admin')){
      this.router.navigate(['/real-estate/grid']);
    } else if(currentUser['realm_access']?.roles.includes('user')){
     
      this.router.navigate(['/User/real-estate/grid']);
    }
    else if (currentUser['realm_access']?.roles.includes('owner')){
      this.router.navigate(['/Owner/real-estate/list']);
    }

    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit(): void {
    this.errorLogin = '';
    console.log("test");
    
    this.authService.login(this.f['email'].value, this.f['password'].value).subscribe(
      (response) => {
        console.log("msg",response);
        
        
         
          console.log(response.access_Token);
          if(this.authService.currentUser()['realm_access']?.roles.includes('admin')){
            this.router.navigate(['/real-estate/grid']);
          } else if(this.authService.currentUser()['realm_access']?.roles.includes('user')){
           
            this.router.navigate(['/User/real-estate/grid']);
          }
          else if (this.authService.currentUser()['realm_access']?.roles.includes('owner')){
            this.router.navigate(['/Owner/real-estate/list']);
          }
    
      },
      (error) => {
        if (error.error === 'Invalid username or password') {
          this.errorLogin = 'Invalid username or password';
        }else if (error.error.username) {
          this.errorLogin = 'inavalid mail format';
        }else if (error.error === 'User account is locked') {
      this.errorLogin = 'User account is locked';
    }
      }
    );
  }
  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


 /* signInWithGoogle(): void {
    if (this.socialAuthService) {
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    } else {
      console.error('SocialAuthService is not initialized');
    }
  }
*/
}
