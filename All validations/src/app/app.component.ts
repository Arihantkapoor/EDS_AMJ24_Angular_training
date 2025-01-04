import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  states = ["Uttar Pradesh", "Uttarakhand", "Haryana", "Rajasthan"];
  cities:{[key:string]:string[]} = {
    "Uttar Pradesh" : ["Lucknow", "Kanpur", "Agra", "Moradabad", "Noida"],
    "Uttarakhand" : ["Dehradun", "Haridwar", "Rishikesh","Nainital","Mussoorie","Almora","Kathgodam"],
    "Haryana" : ["Gurugram", "Faridabad", "Panipat"],
    "Rajasthan" : ["Jaipur", "Jodhpur", "Udaipur"]
  }
  currentCities:string[] = [];
 
  re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 
  constructor(private fb : FormBuilder) {}
 
  UserForm = this.fb.group({
    UserFullName : ['',[Validators.required, Validators.minLength(3)]],
    UserEmail : ['',[Validators.required, Validators.pattern(this.re)]],
    UserGender : ['',Validators.required],
    UserPassword : [''],
    Address : this.fb.group({
      UserCity : [{value: "", disabled: true},Validators.required],
      UserState : ['',Validators.required],
      UserCountry : ['']
    })
  });
 
  ngOnInit(): void {
    this.UserForm.get('Address.UserState')?.valueChanges.subscribe((value) => {
      const selectedState = this.UserForm.get('Address.UserState')?.value;
      const cityControl = this.UserForm.get('Address.UserCity');
      if(selectedState){  
        if(selectedState != ""){
          this.currentCities = this.cities[selectedState];
          cityControl?.enable();
        }
      }
      else{
        // this.currentCities = [];
        cityControl?.disable();
      }
    });
  }
 
  get userFullName() {
    return this.UserForm.get('UserFullName');
  }
  get userEmail() {
    return this.UserForm.get('UserEmail');
  }
  get userGender() {
    return this.UserForm.get('UserGender');
  }
  get userState() {
    // return this.UserForm.get('Address.UserState');
    return this.UserForm.get('Address')?.get('UserState');
  }
  get userCity() {
    return this.UserForm.get('Address.UserCity');
  }
 
  isError:boolean = false;
  myFunction(){
    if(this.userGender?.value==""){
      this.isError = true;
    }
    else{
      this.isError = false;
    }
  }

  showMessage():void{
    alert("Form Submitted Successfully");
  }

  hello(){
    console.log(this.UserForm);
  }
}
 