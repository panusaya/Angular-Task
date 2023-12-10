import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  isSidePanelOPen: boolean = false;
  states: any[] = [];
  cities: any[] = [];
  customerList: any[] = [];
  filteredcustomerList: any[] = [];

  customerObject: any ={
    "customerName":"",
    "dob":"",
    "customerAddress":"",
    "photo":"",
    "customerId":0,
    "state": "",
    "city": "",
    "stateId":0,
    "cityId":0

  }
  search: string = '';
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.loadState();
    this.loadCity();
    this.loadCustomer();
    
  }

  onFilter(event: any) {
    this.filteredcustomerList = this.customerList.filter((param: any) => {
      let search = event;
      let values = Object.values(param);
      let flag = false;
      values.forEach((val: any) => {
        if (val.toString().toLowerCase().indexOf(search) > -1) {
          flag = true;
          return;
        }
      });
      if (flag) {
        return param;
      }
    });
  }

  loadState() {
    this.http.get("assets/state.json").subscribe((res: any) => {
      
      this.states = res.data;
    })
  }

  loadCity() {
    this.http.get("assets/city.json").subscribe((res: any) => {
      
      this.cities = res.data;
    })
  }

  loadCustomer(){
    this.http.get("assets/getCustomer.json").subscribe((res:any)=>{
      
     
      this.customerList = res.data;
      this.filteredcustomerList = this.customerList;
    })
  }

  onCreatCustomer(){
    debugger;
    this.http.get("assets/postCustomer.json").subscribe((res:any)=>{
      alert(res.message)
      this.loadCustomer();
    })
  }

  onEdit(item:any){
    debugger;
    this.customerObject = item;
    this.isSidePanelOPen = true;
  }

  

  onReset(){
    this.customerObject = {
      "customerName":"",
      "dob":"",
      "customerAddress":"",
      "photo":"",
      "customerId":0,
      "state": "",
      "city": "",
      "stateId":0,
      "cityId":0
    }
  }

  onDelet(item:any){
    this.http.get("assets/delet.json").subscribe((res:any)=>{
      alert(res.message)
      
    })
  }





  ShowSidePanel() {
    this.isSidePanelOPen = true;
  }

  closeSidePanel() {
    this.isSidePanelOPen = false;
  }
}
