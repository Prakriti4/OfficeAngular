import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormsModule, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as alertify from 'alertifyjs';
import { AlertifyService } from 'src/app/services/alertify.service';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user:User;
  userSubmitted:boolean = false;
  constructor( private fb:FormBuilder,private userService:UserServiceService,
    private alertify:AlertifyService
  ) { }

  ngOnInit() {
  //   this.registerationForm= new FormGroup({
  //     userName: new FormControl(null,Validators.required),
  //     email:new FormControl(null,[Validators.required,Validators.email]),
  //     password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  //     confirmPassword:new FormControl(null,[Validators.required]),
  //     mobile: new FormControl(null,[Validators.required,Validators.maxLength(10)])
  // },this.passwordMatchingValidator);
  // this.registerationForm.controls['userName'].setValue('Default Name');
 this.createRegisterationForm();
}
 
  createRegisterationForm()
  {
    this.registerationForm = this.fb.group({
      userName: new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8) /*Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')*/
    ]),
      confirmPassword:new FormControl(null,[Validators.required]),
      mobile: new FormControl(null,[Validators.required,Validators.maxLength(10)])
    },{validators:this.passwordMatchingValidator})
  this.registerationForm.controls['userName'].setValue('Default Name');

  }

  passwordMatchingValidator(fg: FormGroup): Validators
  {
    return fg.get('password').value ===fg.get('confirmPassword').value?null:
    {notmatched:true};
  }
 
  // Getter methos for all form controls 
  get email()
  { 
    return this.registerationForm.get('email') as FormControl; 
  }
  get userName()
  { 
    return this.registerationForm.get('userName') as FormControl;
  }

  get password(){ 
    return this.registerationForm.get('password') as FormControl;
  }
  get mobile(){ 
    return this.registerationForm.get('mobile') as FormControl;

  }
  get confirmPassword()
  { 
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  onSubmit(){ 
    console.log(this.registerationForm.value);
    this.userSubmitted = true;
    if(this.registerationForm.valid){
    // this.user = Object.assign(this.user,this.registerationForm.value);
    this.userService.addUser(this.userData());
    // this.addUser(this.user)
    this.registerationForm.reset();
    this.userSubmitted = false;
    this.alertify.success("Congrats, you are sucessfully registered  ");  
  }
  else{
    this.alertify.error('Kindly provide the required fields');
  }

}
//Here was the code for storing the local storage multiple data i.e. it can be entered multiple times.
  userData():User{ 
    return this.user ={ 
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value 

    }
  }

}
