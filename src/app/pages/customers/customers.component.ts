import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'companyName', 'contactName', 'contactTitle', 'address', 'city', 'region', 'postalCode', 'country', 'phone', 'fax'];
  customers = [];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getCustomers(1, 10).subscribe((res: any) => {
      this.customers = res.results;
    })
  }

  changePage(page) {
    let limit = page.pageSize;
    let pagenum = page.pageIndex;

    this.apiService.getCustomers(pagenum, limit).subscribe((res: any) => {
      this.customers = res.results;
    })
  }

}
