import { Component, OnInit } from '@angular/core';
import { QueryForm } from '../app/queryForm';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'demo';

  ///queryForm:QueryForm;
  queryDetails:FormGroup;
  submitted=false;
  dbList=['jindgi','mera','gaana'];
  dbNameList=['mai','isika','diwana']
  dbTypeList=['I','am','a','disco','dancer'];
  
    constructor(private formBuilder: FormBuilder){
      
    }

    ngOnInit() {
     // this.queryForm=new QueryForm();
     this.queryDetails = this.formBuilder.group({
      testCaseName: ['', Validators.required],
      testCaseDesc: ['', Validators.required],
      testCaseType: ['', Validators.required],
      databaseType: ['', Validators.required],
      databaseName: ['', Validators.required],
      queryPreview: '',

      
  });
      
    
    }

    createForm() {
    //   this.queryDetails = this.formBuilder.group({
    //     testCaseName: ['', Validators.required],
    //     testCaseDesc: ['', Validators.required],
    //     testCaseType: ['', Validators.required],
    //     databaseType: ['', Validators.required],
    //     databaseName: ['', Validators.required],
    //     queryPreview: ['', Validators.required],

        
    // });

      // this.queryDetails.addControl('testCaseName', new FormControl('', Validators.required));
      // this.queryDetails.addControl('testCaseDesc', new FormControl('', Validators.required));
      
      // this.queryDetails.addControl('testCaseType', new FormControl('', Validators.required));
      // this.queryDetails.addControl('databaseType', new FormControl('', Validators.required));
      // this.queryDetails.addControl('databaseName', new FormControl('', Validators.required));
      // this.queryDetails.addControl('queryPreview', new FormControl('', Validators.required));
      
    }

    get f() { return this.queryDetails.controls; }

    
    onSubmit() {
      this.submitted = true;
      console.log("hi")

      // stop here if form is invalid
      if (this.queryDetails.valid) {
        console.log("errorrrrrrr")
          return;
      }
      console.log("wohoooooooo")
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.queryDetails.value))
  }


}