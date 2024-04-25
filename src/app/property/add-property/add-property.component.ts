import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  //Will come from masters
  propertyTypes: Array<string> = ["House", "Apartment","Duplex"];
  furnishTypes: Array<string>=["Fully","Semi","Unfurnished"];

  propertyView: IPropertyBase={
    Id:null,
    Name:'',
    Price:null,
    SellRent:null,
    PType:null,
    FType:null,
    BHK:null,
    City:null,
    RTM:null,
    BuiltArea:0
  };

  
  constructor(private router:Router) { }

  ngOnInit() {
    // this.addPropertyForm.controls['Name'].setValue('Default Value')
    setTimeout(()=>{
      this.addPropertyForm.controls['Name'].setValue('Default Value');
    },1000);
  }
 onBack()
 { 
  this.router.navigate(['/'])
 }
 onSubmit(Form: NgForm)
 { 
  console.log('Conngrats,form Submitted ');
  console.log('SellRent='+this.addPropertyForm.value.BasicInfo.SellRent);
  console.log(this.addPropertyForm); 
 }

 selectTab(tabId: number)
 { 
  this.formTabs.tabs[tabId].active=true; 
 }
}
