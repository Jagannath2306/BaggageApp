import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { ProductsRequestAction, ProductsSuccessAction } from "src/app/State Management/actions/products-action";
import { getProductsdata, getProductsLoaded, getProductsLoading, RootReducerState } from "src/app/State Management/reducers";
import { Product } from "../models/product";
import { ApiProductsService } from "../services/api-products-service";
import { ApiService } from "../services/api-service";

@Injectable()
export class ProductsRepository {
    constructor(
        private apiProductsService: ApiProductsService,
        private store: Store<RootReducerState>
    ) { }

    getProducts(force = false): Observable<any> {
        const loading$ = this.store.select(getProductsLoading);
        const loaded$ = this.store.select(getProductsLoaded);
        const getProductsData$ = this.store.select(getProductsdata);
        combineLatest([loading$, loaded$]).subscribe((data) => {
            if (!data[0] && !data[1] || force) {
                this.store.dispatch(new ProductsRequestAction());
                this.apiProductsService.getProducts().subscribe((res) => {
                    this.store.dispatch(new ProductsSuccessAction(res));
                });
            }
        });
        return getProductsData$;
    }
}