import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ValueList, ValueItem, IValueItem} from '../helpers/value-list.helper';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FoodService {
    constructor(private http: Http) {}
    private baseUrl = 'http://localhost:5001/api'; 
    getFoodCategories() : Observable<any[]> {
        return this.http.get(this.baseUrl + '/foodGroup/get')
                     .do(result => console.log("RESULT: ", JSON.stringify(result)))
                     .map((res:Response) => res.json())
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }
    getFoodCategoriesAsValueList(): Observable<ValueList>{
        return this.http.get(this.baseUrl + '/foodGroup/get')
            .map(mapFoodGroups);
    }

    
}

function mapFoodGroups(response:Response): ValueList{
   // The response of the API has a results
   // property with the actual results
   var results = response.json();
   var valueItems = results.map(toValueItem);
   return new ValueList(valueItems);
}

function toValueItem(r:any): IValueItem { 
  let person : ValueItem = {
    ValueMember: r.foodGroupID,
    DisplayMember: r.name
  };
  console.log('Parsed person:', person);
  return person;
}