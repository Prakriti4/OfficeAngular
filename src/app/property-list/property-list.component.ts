import { Component, OnInit,Input } from '@angular/core';
import { HousingService } from '../services/housing.service';
import { IProperty } from '../property/IProperty.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  properties: Array<IProperty>;

  constructor(private route: ActivatedRoute,private housingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;//Means we are on rent-property URL else we are on a base URL
    }
      this.housingService.getAllProperties(this.SellRent).subscribe(
        data=>{ 
          this.properties =data; 
          console.log(data);
          console.log(this.route.snapshot.url.toString());
        }, error=>{ 
          console.log('http error: ');
          console.log(error);
        }

      );


    // this.http.get('data/properties.json').subscribe(
    //   data=>{
    //     this.properties = data;
    //     console.log(data)
    //   }
    // );
  }

}
