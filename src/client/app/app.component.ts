import { Component } from '@angular/core';

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//  ProductRow Component
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
// import { Product } from './codelab/model/product.model';
// import { ProductRow } from './codelab/product-row.component';

// @Component({
//   selector: 'a3-app',
//   template: `
//     <product-row [product]="sample"></product-row>
//   `,
//   directives: [ProductRow]
// })
// export class AppComponent {
// 	sample: Product;
// 	constructor() {
// 		this.sample = { stocked: true, name: 'test', price: 30 };
// 	}
// }


//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//  ProductCategoryRow Component
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
// import { Category } from './codelab/model/category.model';
// import { ProductCategoryRow } from './codelab/product-category-row.component';
// @Component({
//   selector: 'a3-app',
//   template: `
//     <product-category-row [category]="sample"></product-category-row>
//   `,
//   directives: [ProductCategoryRow]
// })
// export class AppComponent {
// 	sample: Category;
// 	constructor() {
// 		this.sample = { 
//       name: 'testCategory', 
//       products: [{stocked: true, name: 'test', price: 30}]
//     };
// 	}
// }


//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//  ProductTable Component
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
// import { Category } from './codelab/model/category.model';
// import { ProductTable } from './codelab/product-table.component';
// @Component({
//   selector: 'a3-app',
//   template: `
//     <table>
//       <thead>
//         <tr><th>Name</th><th>Price</th></tr>
//       </thead>
//       <tbody product-table [categories]="sample"></tbody>
//     </table>
//   `,
//   directives: [ProductTable]
// })
// export class AppComponent {
// 	sample: Category[];
// 	constructor() {
// 		this.sample = [
//             { 
//                 name: 'Electronics', 
//                 products: [
//                     {stocked: true, name: 'LG Nexus', price: 30},
//                     {stocked: false, name: 'iPhone 6', price: 20},
//                     {stocked: false, name: 'SamSong', price: 900},
//                 ]
//             },
//             { 
//                 name: 'Sporting Goods', 
//                 products: [
//                     {stocked: true, name: 'Cycling', price: 100},
//                     {stocked: true, name: 'Football', price: 30},
//                     {stocked: true, name: 'Swim', price: 20},
//                 ]
//             },
//         ];
// 	}
// }


//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//  SearchBar & FilterableProductTable Component
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
import { FilterableProductTable } from './codelab/filterable-product-table.component';
@Component({
  selector: 'a3-app',
  template: `
    <filterable-product-table></filterable-product-table>
  `,
  directives: [FilterableProductTable]
})
export class AppComponent {
	
	constructor() {}
}
