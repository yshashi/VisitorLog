import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormBuilder ,FormControl,Validators} from '@angular/forms';


@Component({
  
  templateUrl: './VisitorApp.VisitorlogComponent.html',
  styleUrls: ['./VisitorApp.VisitorlogComponent.css']
})
export class VisitorComponent implements OnInit {
  title = 'VisitorApplication';
  //  VisitorModel : Visitor = new Visitor;
  //  VisitorModels : Array<Visitor> = new Array<Visitor>();

   public VisitorValidate : FormGroup = null;  // step 1 
   public loading:boolean = false;
   constructor(public formBuilder : FormBuilder, public http : HttpClient){  //Step 2
    //this/.GetfromServer()
   }
   ngOnInit() {                                                             // For Validation step 3 wrtie all the labels whose validation required
    this.VisitorValidate = this.formBuilder.group({
      Name:['',  Validators.required],
      Email:['', Validators.email],
      Typeofvisit:[''],
      Persontovisit:['',],
      Date:[''],
      Timeofentry:[''],
      Timeofexit:[''],

    })
    
    
    
  }
  columnDefs = [
    {headerName: 'Name',  field: 'Name', sortable: true, filter: true,editable : true,cellStyle: {color: 'black', 'background-color': 'beige'}},
    {headerName: 'Email', field: 'Email', sortable: true, filter: true,cellStyle: {color: 'black', 'background-color': 'beige'}},
    {headerName: 'Type of visit', field: 'Typeofvisit', sortable: true, filter: true,cellStyle: {color: 'black', 'background-color': 'beige'}},
    {headerName: 'Person to Visit', field: 'Persontovisit', sortable: true, filter: true,cellStyle: {color: 'black', 'background-color': 'beige'}},
    {headerName: 'Date', field: 'Date', sortable: true, filter: true,cellStyle: {color: 'black', 'background-color': 'beige'}},
    {headerName: 'Time of Entry', field: 'Timeofentry', sortable: true, filter: true,cellStyle: {color: 'black', 'background-color': 'beige'}},
    {headerName: 'Time of Exit ', field: 'Timeofexit', sortable: true, filter: true, cellStyle: {color: 'black', 'background-color': 'beige'}}
    
];
rowData: any;


  

  Submit() {                                                               // Foor Validation step 5 logic for submit button
    
  
    if(this.VisitorValidate.valid){
      this.http.post("https://localhost:3000/Customers", this.VisitorValidate.value).subscribe(res=>alert("Record sent"),res=> console.debug(res.json()));
    
    this.VisitorValidate.reset()
    }
    else{
      alert("Name is required");
    }
    
  }
  


  GetfromServer(){
    this.loading = true;
  this.http.get("https://localhost:3000/Customers").subscribe(res =>{this.rowData = res;this.loading = false;});
  
    
  }

}
