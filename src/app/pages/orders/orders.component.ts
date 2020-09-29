import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'customerId', 'employeeId', 'orderDate', 'requiredDate', 'shippedDate', 'shipVia', 'freight', 'shipName', 'shipAddress', 'shipCity', 'shipRegion', 'shipPostalCode', 'shipCountry'];
  orders = [];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getOrders(0, 10).subscribe((res: any) => {
      this.orders = res.results;
    })
  }
  
  changePage(page) {
    let limit = page.pageSize;
    let pagenum = page.pageIndex;

    this.apiService.getOrders(pagenum, limit).subscribe((res: any) => {
      this.orders = res.results;
    })
  }

}
