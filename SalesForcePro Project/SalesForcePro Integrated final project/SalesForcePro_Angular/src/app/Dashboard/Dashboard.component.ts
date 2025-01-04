import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Service/Customer.service';
import * as Highcharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import { Title } from '@angular/platform-browser';
import { SalesService } from '../Service/Sales.service';
@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  FrequencyOfProduct:number[]=[];
  graph:any=[];
  customerList:any;
  ProductList:string[]=[];
  TotalLeads:any=0; 
  maximumdemand:any;
  salesData:any[] = [];
  salesRevenue: number = 0;
  constructor(private customerserv:CustomerService,private slsServ:SalesService) {
    this.customerserv.getAllCustomer().subscribe((data:any)=>{
      this.items=data
      console.log(data)
      this.TotalLeads=this.items.length;
      // this.ProductList=data.map((x:any)=>x.interest)
      // console.log(this.ProductList)
   

    })
    this.customerserv.GraphData().subscribe(data=>{
      console.log(data);
      this.graph=data;
      let mini=0;

      for (const [key, value] of Object.entries(data)) { 
        
        if(mini<value){
          mini=value;
          this.maximumdemand=key;
        }
      }
      
    })

    
   }
   
  ngOnInit() {
    console.log(this.ProductList);
    console.log(this.FrequencyOfProduct);
    this.GetAllSales();
  }
  

  items:any[]=[] // Your array of items to paginate
  currentPage = 1;
  itemsPerPage = 6;

  // Method to change the current page
  setPage(page: number) {
    this.currentPage = page;
  }

  // Computed property to return the items for the current page
  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.items.slice(startIndex, startIndex + this.itemsPerPage);
  }
  get totalPages() {
    return Array(Math.ceil(this.items.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }


  updatelead(item:any){
    if(item.contacted=='0'){
      item.contacted='1';
    }
    else{
      item.contacted='0';
    }
    this.customerserv.updatelead(item).subscribe(
      data=>{
        console.log(data);
      }
    )
  }
  GetAllSales(){
    this.slsServ.GetAllSales().subscribe(
      (data:any)=>{
        this.salesData = data;
        console.log(typeof this.salesData);
        console.log(this.salesData);
        console.log(this.salesData.length);
        this.GetRevenue();
      }
    )
  }
 
  GetRevenue(){
    for(var i in this.salesData){
      var value = Number(this.salesData[i].productPrice) * Number(this.salesData[i].sellquantity);
      this.salesRevenue += value;
    }
    console.log(this.salesRevenue);
  }
  Highcharts: typeof Highcharts = Highcharts;
  

  chartOptions: Highcharts.Options;

  renderCharts(){
    this.chartOptions= {
      title: {
        text: 'Monthly Average Temperature',
        style: {
          fontSize: '20px'
        }
      },
      chart: {
        type: 'pie'
      },
      subtitle: {
        text: 'Source: WorldClimate.com',
        style: {
          fontSize: '16px'
        }
      },
      xAxis: {
        // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        //   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        categories:this.ProductList
       
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      credits: {
        enabled: false // Disable Highcharts.com credits
      },
      series: [{
        type: 'line',
        name: 'Tokyo',
        // data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        data:this.FrequencyOfProduct
      }]
    };
  }
  
}
