(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header *ngIf=\"router.url !== '/login' && router.url !== '/register'\"></app-header>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brand-recommendation/brand-recommendation.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brand-recommendation/brand-recommendation.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"brand_recommendation_background\">\n    <div class=\"container\" *ngIf=persistService.brandRecommendation>\n        <div class=\"card-columns mt-5\">\n            <div class=\"card\" *ngFor=\"let each of persistService.brandRecommendation | paginate:{itemsPerPage: 13, currentPage:p};\">\n                <div class=\"card-content\">\n                    <h5 *ngIf=each.description>{{each.description |titlecase}}</h5>\n                    <!-- <p *ngIf=each.additionalDescription>{{each.additionalDescription}}</p> -->\n                    <p *ngIf=each.brandOwner>{{each.brandOwner}}</p>\n                    <!-- <p *ngIf=each.dataType>{{each.dataType}}</p>\n                    <p *ngIf=each.publishedDate>{{each.publishedDate}}</p> -->\n                    <div class=\"card-footer\">\n                        <a (click)=\"fetchNutrients(each.fdcId)\" class=\"btn btn-link\">Details</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"my-pagination m-4\"> \n            <pagination-controls (pageChange)=\"p=$event\"></pagination-controls>\n        </div>\n    </div>\n</div>\n\n\n<!-- <div class=\"container-fluid\">\n<div *ngIf=persistService.brandRecommendation>\n    <div class=\"row m-5\">\n        <div class=\"col\"> -->\n        <!-- <mat-grid-list cols=\"5\"> -->\n            <!-- <div *ngFor=\"let each of this.persistService.brandRecommendation | paginate:{itemsPerPage: 8, currentPage:p};\">        \n            <div  class=\"card-deck\">\n            <div class=\"card col-sm-12 col-md-4 col-lg-3\">\n                <div class=\"card-body\">\n                    <h5 *ngIf=each.description>{{each.description |titlecase}}</h5>\n                    <p *ngIf=each.additionalDescription>{{each.additionalDescription}}</p>\n                    <p *ngIf=each.brandOwner>{{each.brandOwner}}</p>\n                    <p *ngIf=each.dataType>{{each.dataType}}</p>\n                    <p *ngIf=each.publishedDate>{{each.publishedDate}}</p>\n                    <a (click)=\"fetchNutrients(each.fdcId)\" class=\"btn btn-primary\">Details</a>\n                </div>\n            </div>\n        </div>\n        </div>\n        </div> -->\n    <!-- </mat-grid-list> -->\n  <!-- </div>\n        <div class=\"m-3\"> \n            <pagination-controls style=\"text-align:right;\" (pageChange)=\"p=$event\"></pagination-controls>\n        </div>\n    </div> -->\n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- </div> -->\n        <!-- <h3>{{each.description}}</h3>\n        <button (click)=\"fetchNutrients(each.fdcId)\">Details</button>\n        <h6>{{each.additionalDescription}}</h6>\n        <h5>Publised Date: {{each.publishedDate}}</h5>\n        <h5>Brand Owner: {{each.brandOwner}}</h5>\n        <h5>Data Type: {{each.dataType}}</h5>\n    </div> -->\n    <!-- <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div> -->\n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-dialog-opener/details-dialog-opener.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-dialog-opener/details-dialog-opener.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dialog_opener_background\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-view-dialog/details-view-dialog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-view-dialog/details-view-dialog.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"close_btn\"> \n        <button mat-button (click)=\"dialogRef.close()\">\n            <mat-icon>highlight_off</mat-icon>\n        </button>\n    </div>\n<div *ngIf=persistService.selectedFood>\n    <strong>{{persistService.selectedFood.description}}</strong>\n    <div *ngIf=persistService.selectedFood.brandedFoodCategory>Food Category: {{persistService.selectedFood.brandedFoodCategory}}</div>\n    <div *ngIf=persistService.selectedFood.brandOwner>Brand: {{persistService.selectedFood.brandOwner}}</div>\n    <div *ngIf=persistService.selectedFood.dataType>Type: {{persistService.selectedFood.dataType}}</div>\n    <!-- <div *ngIf=persistService.selectedFood.ingredients>Ingredients: {{persistService.selectedFood.ingredients}}</div> -->\n    <div *ngIf=persistService.selectedFood.scientificName>Scientific Name: {{persistService.selectedFood.scientificName</div>\n    <div *ngIf=persistService.selectedFood.foodNutrients>\n        <div class=\"table-responsive text-nonwrap\">\n        <table class=\"table table-sm\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Name</th>\n                    <th scope=\"col\">Amount</th>\n                    <th scope=\"col\">Unit</th>\n                    <th scope=\"col\">Deriv By.</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let each of persistService.selectedFood.foodNutrients\">\n                    <td scope=\"row\">{{each.name}}</td>\n                    <td scope=\"row\">{{each.amount}}</td>\n                    <td scope=\"row\">{{each.unitName}}</td>\n                    <td scope=\"row\">{{each.description}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"display_background container-fluid\">\n    <!-- <div class=\"container-fluid m-1\" *ngIf=foodDetails> -->\n        <!-- <div class=\"col-sm-12 col-md-12 \"> -->\n    <div class=\"row m-4\">\n        <div class=\"col-sm-12 col-md-6 col-lg-3\" *ngIf=foodDetails.description>\n            <strong>DESCRIPTION: </strong>{{foodDetails.description | titlecase}}\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-3\" *ngIf=foodDetails.brandOwner>\n            <strong>BRAND: </strong>{{foodDetails.brandOwner | titlecase}}\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-3\" *ngIf=foodDetails.dataType>\n            <strong>DATA TYPE: </strong>{{foodDetails.dataType | titlecase}}\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-3\" *ngIf=foodDetails.brandedFoodCategory>\n            <strong>BRANDED FOOD CATEGORY: </strong>{{foodDetails.brandedFoodCategory | titlecase}}\n        </div> \n        <div class=\"col-sm-12 col-md-6 col-lg-3\" *ngIf=foodDetails.scientificName>\n            <strong>SCIENTIFIC NAME: </strong>{{foodDetails.scientificName | titlecase}} \n        </div>\n    </div>\n        <!-- </div> -->\n    <!-- </div> -->\n    <hr>\n    <!-- <div class=\"container-fluid\"> -->\n\n    <div class=\"row my-5 mx-2 justify-content-end\" *ngIf=foodDetails>\n        <button mat-raised-button class=\"m-2 btn btn-light\" [disabled]='favoriteClicked' (click)=saveFavorite()>Add To Favorite </button>\n        <button mat-raised-button class=\"m-2 btn btn-light\" [disabled]='mealClicked' (click)=saveMeal()>Add To Meal</button>\n        <div *ngIf=foodDetails.ingredients>\n            <button class=\"m-2 \" mat-raised-button type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\" data-toggle=\"collapse\" data-target=\"#ingredients\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n            Ingredients\n            </button>\n            <div class=\"collapse\" id=\"ingredients\" *ngIf=foodDetails.ingredients [ngbCollapse]=\"navbarCollapsed\">\n                <div class=\"card card-body\">\n                    {{foodDetails.ingredients}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row my-5 mx-1 justify-content-end\">\n        <!-- <div class=\"col-sm-12 col-md-12 col-lg-9\"> -->\n            <div class=\"table table-responsive-md\">\n                <table mat-table [dataSource] = \"datasource\" class=\"mat-elevation-z8\">\n                    <ng-container  matColumnDef=\"Name\">\n                        <th  mat-header-cell *matHeaderCellDef> NAME </th>\n                        <td  mat-cell *matCellDef=\"let element\">{{element.name}} </td>\n                    </ng-container>\n                \n                    <ng-container matColumnDef=\"Amount\">\n                        <th mat-header-cell *matHeaderCellDef> AMOUNT </th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.amount}} </td>\n                    </ng-container>\n                \n                    <ng-container matColumnDef=\"Unit\">\n                        <th mat-header-cell *matHeaderCellDef> UNIT </th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.unitName}} </td>\n                    </ng-container>\n                \n                    <ng-container matColumnDef=\"Dervied By.\">\n                        <th mat-header-cell *matHeaderCellDef> DERIVED BY. </th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.description}} </td>\n                    </ng-container>\n                    \n                    <tr mat-header-row *matHeaderRowDef=\"this.displayedColumns; sticky: true;\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: this.displayedColumns;\"></tr>\n                </table>  \n            </div>\n        <!-- </div> -->\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"favorite_background container-fluid\">\n    <div *ngIf=\"empty; else notEmpty\">\n        No Favorites selected\n    </div>\n    <ng-template #notEmpty>\n    <!-- <div class=\"container-fluid\"> -->\n        <div class=\"row toggle_row justify-content-start mt-5 ml-5 \">\n            <mat-slide-toggle (change)=byCategory()>\n                BRAND WISE\n            </mat-slide-toggle>\n        </div>\n    <!-- </div> -->\n    \n    <div *ngIf=\"categorise; else elseBlock\">\n    <div class=\"category_view \">\n        <div *ngFor=\"let brand of categories\">\n            <div class=\"m-5\"><strong>{{brand[0].brandOwner}}</strong></div>\n            <div class=\"card-columns m-4\">\n                <div class=\"card\" *ngFor=\"let each of brand\">\n                    <div class=\"card-body\">\n                        <div class=\"card-title\" *ngIf=each.description><strong>{{each.description}}</strong></div>\n                        <!-- <div *ngIf=each.brandOwner>Brand Owner: {{each.brandOwner}}</div> -->\n                        <div *ngIf=each.dataType>Data Type: {{each.dataType}}</div>\n                        <div *ngIf=each.brandedFoodCategory>Branded Food Category: {{each.brandedFoodCategory}}</div>\n                        <div *ngIf=each.scientificName>Scientific Name: {{each.scientificName}}</div>\n                        <!-- <div class=\"card-footer\"> -->\n                            <button class=\"btn btn-link\" (click)='viewDetails(each.fdcId)'>Details</button>\n                            <!-- <button class=\"btn btn-link\" (click)='deleteFavorite(each.fdcId)'>Delete</button> -->\n                        <!-- </div> -->\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"pagination\"> \n                <pagination-controls id=\"brand-pagination\" class=\"my-pagination\" style=\"text-align:right;\" (pageChange)=\"p=$event\"></pagination-controls>\n            </div> -->\n            <hr>\n\n        </div>\n    </div>\n</div>\n<ng-template #elseBlock>\n    <div *ngIf=persistService.favoriteFood>\n        <!-- <div class=\"container-fluid\"> -->\n        <div class=\"card-deck m-4 general_view\">\n            <div class=\"card col-lg-3\" *ngFor=\"let foodDetails of persistService.favoriteFood | paginate:{itemsPerPage: 5, currentPage:p};\">\n                <div class=\"card-body\">\n                    <div class=\"card-title\" *ngIf=foodDetails.description><strong>{{foodDetails.description}}</strong></div> \n                    <div *ngIf=foodDetails.brandOwner>{{foodDetails.brandOwner}}</div>\n                    <div *ngIf=foodDetails.dataType>Data Type: {{foodDetails.dataType}}</div>\n                    <div *ngIf=brandedFoodCategory>Branded Food Category: {{foodDetails.brandedFoodCategory}}</div>\n                    <div *ngIf=scientificName>Scientific Name: {{foodDetails.scientificName}}</div>\n                </div>\n                <!-- <div class=\"card-footer\"> -->\n                    <button class=\"btn btn-link\" (click)='viewDetails(foodDetails.fdcId)'>Details</button>\n                    <button class=\"btn btn-link\" (click)='deleteFavorite(foodDetails.fdcId)'>Delete</button>\n                <!-- </div> -->\n            </div>\n        </div>\n        <!-- </div> -->\n        <div class=\"pagination\"> \n            <pagination-controls class=\"my-pagination\" style=\"text-align:right;\" (pageChange)=\"p=$event\"></pagination-controls>\n        </div>\n    </div>\n</ng-template>\n</ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n  <div class=\"footer-wrapper\">\n      <section class=\"contact-container\">\n        <h2 id=\"contact\" class=\"contact-title\">    <small>&copy; Copyright 2020 Shuffle Team.All Rights Reserved</small>\n        </h2>\n        <div class=\"social-container\">\n          <ul class=\"social-icons\">\n              <li><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n              </a></li>\n              <li><a id=\"profile-link\" href=\"https://github.com\" target=\"_blank\"><i class=\"fa fa-github\"></i></a></li>\n              <li><a href=\"https://www.instagram.com\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a></li>\n              <li><a href=\"https://www.facebook.com\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>\n          </ul>\n          \n      </div>\n      </section>\n      \n      </div>\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand navbar-light bg-light flex-column flex-md-row pipe-navbar justify-md-content-between\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\"> NUTRITIONIST </a>\n    <div class=\"navbar-nav-scroll ml-md-auto\">\n      <ul class=\"navbar-nav pipe-navbar-nav\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n          </li>      \n        <li class=\"nav-item\" *ngIf=authService.isUserLoggedIn()>\n          <a class=\"nav-link\" [routerLink]=\"['/meal']\">Your Meal</a>\n        </li>       \n        <li class=\"nav-item\" *ngIf=authService.isUserLoggedIn()>\n          <a class=\"nav-link\" [routerLink]=\"['/recommendation']\">Your Brands</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=authService.isUserLoggedIn()>\n          <a class=\"nav-link\" [routerLink]=\"['/favorite']\">Favorites</a>\n        </li> \n        <li class=\"nav-item\" *ngIf=!authService.isUserLoggedIn()>\n          <a class=\"nav-link \" [routerLink]=\"['/register']\">Sign Up</a>\n        </li>\n      </ul>\n    </div>\n    <div>\n        <ul class=\"navbar-nav pipe-navbar-nav\" *ngIf=authService.isUserLoggedIn()>\n          <li  class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n          </li>\n      </ul>\n      <ul class=\"navbar-nav pipe-navbar-nav\" *ngIf=!authService.isUserLoggedIn()>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n        </li>  \n      </ul>\n    </div>\n </nav>\n\n\n\n\n\n\n\n\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container login_background\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-8 col-md-8 col-lg-4 mt-5\">\n            <mat-card class=\"login_container card\">\n                <mat-card-header class=\"card-title\">\n                    <mat-card-title>LOGIN</mat-card-title>\n                </mat-card-header>\n                <mat-card-content class=\"card-body\">\n                    <form [formGroup]='loginForm' #formDirective='ngForm' (ngSubmit)='loginSubmit(formDirective)' >\n                        <div class=\"form-group\">\n                            <mat-form-field class=\"col-auto\" appearance='outline'>\n                                <mat-label>Enter Username</mat-label>\n                                <input matInput type='text' [formControl]='username' >\n                            </mat-form-field>\n\n                            <mat-form-field class=\"col-auto\" appearance='outline'>\n                                <mat-label>Enter Password</mat-label>\n                                <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" [formControl]='password'>\n                                <button mat-icon-button matSuffix (click)=\"hide = !hide\">\n                                    <mat-icon>{{hide?visibility_off:visibility}}</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <button mat-button type=\"submit\" [disabled]='!loginForm.valid'>Sign in</button>\n                            <div style=\"text-align: center;\">\n                                <a [routerLink]=\"['/register']\">Not yet Registered? </a>  \n                            </div>\n                        </div>\n                    </form>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n</div>\n\n<!-- <div class=\"login_background\">\n<div >\n    <mat-card class=login_container>\n        <mat-card-title>LOGIN</mat-card-title>\n        <mat-card-content>\n        <form [formGroup]='loginForm' (ngSubmit)='loginSubmit()'>\n            <mat-form-field>\n                <input matInput placeholder=\"Placeholder\" [formControl]='username'>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Username:</mat-label>\n                <input matInput placeholder=\"Placeholder\" [formControl]='username'>\n              </mat-form-field>\n            <label> Username: <input class=\"username\" matInput type=\"text\" [formControl]='username'></label>\n            <small *ngIf='username.invalid && (username.touched || username.dirty)'>\n                <small *ngIf='username.errors.required' class=\"error-message\">\n                    *Enter a username\n                </small>\n            </small>\n        </div>\n        <div>\n            <label> Password: <input class=\"password\" matInput type=\"password\" [formControl]='password'></label>\n            <small *ngIf='password.invalid && (password.touched || password.dirty)'>\n                <small *ngIf='password.errors.required' class=\"error-message\">\n                    *Enter a password\n                </small>\n            </small>\n        </div>\n        <div><button type=\"submit\" class=\"submit\" mat-button [disabled]='!loginForm.valid'>Log In</button></div>      \n    </form>\n\n    <a [routerLink]=\"['/register']\">Not yet Registered? </a>  \n    </mat-card-content>\n    </mat-card>\n  </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meal/meal.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meal/meal.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"meal_background \">\n<div class=\"container-fluid\">\n    <div class=\"row m-4\">\n        <div class=\"col-sm-12 col-md-12 col-lg-4\" *ngIf=persistService.mealFood>\n            <div class=\"card table table-responsive-sm\">\n                <table>\n                    <thead>\n                        <tr>\n                            <td colspan=2>\n                                ITEMS IN YOUR MEAL\n                            </td>\n                        </tr>\n                    </thead>\n                    <tr *ngFor=\"let foodDetails of persistService.mealFood\">\n                        <td><a (click)=deleteMeal(foodDetails.fdcId)><mat-icon>delete</mat-icon></a></td>\n                        <td>{{foodDetails.description | titlecase}}</td>\n                        <td><a (click)=viewDetails(foodDetails.fdcId)><mat-icon>open_in_new</mat-icon></a></td>\n                    </tr>\n                </table>\n            </div>\n            <div>\n                <button mat-raised-button class=\"my-3\" (click)=showNutrients()>Click to find total nutrients</button>\n            </div>\n        </div>\n        <div class=\"col-sm-12 col-md-12 col-lg-8 table_container\" *ngIf=refresh>\n            <div class=conatiner-fluid>\n            <div class=\"table table-responsive \" *ngIf=filter>\n                <table mat-table [dataSource] = \"filter\" class=\"mat-elevation-z8\">\n                    <ng-container  matColumnDef=\"Name\">\n                        <th  mat-header-cell *matHeaderCellDef> NAME </th>\n                        <td  mat-cell *matCellDef=\"let element\">{{element.name}} </td>\n                    </ng-container>\n                \n                    <ng-container matColumnDef=\"Total Amount\">\n                        <th mat-header-cell *matHeaderCellDef> TOTAL AMOUNT </th>\n                        <td class=\"align-right\" mat-cell *matCellDef=\"let element\">{{element.amount}} </td>\n                    </ng-container>\n                \n                    <ng-container matColumnDef=\"Unit\">\n                        <th mat-header-cell *matHeaderCellDef> UNIT </th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.unitName}} </td>\n                    </ng-container>\n                \n                    <ng-container matColumnDef=\"Dervied By.\">\n                        <th mat-header-cell *matHeaderCellDef> DERIVED BY. </th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.description}} </td>\n                    </ng-container>\n                    \n                    <tr mat-header-row *matHeaderRowDef=\"this.displayedColumns;\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: this.displayedColumns;\"></tr>\n                </table>\n            </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n        \n        <!-- <div *ngFor=\"let each of filter\">\n            Nutrient Name: {{each.name}}\n            Amount: {{each.amount}}\n            Unit: {{each.unitName}};\n        </div> -->\n    <!-- </div> -->\n        <!-- Description: {{foodDetails.description}} <br>\n        Brand Owner: {{foodDetails.brandOwner}} <br>\n        Data Type: {{foodDetails.dataType}} <br>\n        Branded Food Category: {{foodDetails.brandedFoodCategory}} <br>\n        Scientific Name: {{foodDetails.scientificName}} <br> -->\n        <!-- <button (click)='viewDetails(foodDetails.fdcId)'>Details</button> -->\n        <!-- <button (click)='deleteFavorite(foodDetails.fdcId)'>Delete</button> -->\n    <!-- </div> -->\n<!-- </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommendation/recommendation.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recommendation/recommendation.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"recommendation_background\">\n<div class=\"container\">\n    <div class=\"row my-5 mx-0\" *ngIf=persistService.brands>\n        YOUR FAVORITE BRANDS \n    </div>\n    <div class=\"row m-3\" *ngFor=\"let each of persistService.brands\">\n        <a [routerLink]=\"['/brandRecommendation', each]\">{{each | titlecase}}</a>\n    </div>\n</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register_background container\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-8 col-md-8 col-lg-5 mt-lg-5 ml-lg-5\">\n            <mat-card class=\"register_container card\">\n                <mat-card-header class=\"card-title\">\n                    <mat-card-title>REGISTER</mat-card-title>\n                </mat-card-header>\n                <mat-card-content class=\"card-body\">\n                    <form [formGroup]='registerForm' #formDirective='ngForm' (ngSubmit)='registerSubmit(formDirective)'>\n                        <div class=\"form-group\">\n                            <mat-form-field class=\"col-auto\" appearance='outline'>\n                                <mat-label>Name</mat-label>\n                                <input matInput type='text' [formControl]='new_name'>\n                                <mat-error *ngIf=\"new_name.invalid && (new_name.touched || new_name.dirty)\">\n                                    *Mandatory\n                                </mat-error>\n                            </mat-form-field>\n                            <mat-form-field class=\"col-auto\" appearance='outline'>\n                                <mat-label>Email</mat-label>\n                                <input matInput type='text' [formControl]='new_email'>\n                                <mat-error *ngIf=\"new_email.invalid\">\n                                    *Check email format\n                                </mat-error>\n                            </mat-form-field>\n                            <mat-form-field class=\"col-auto\" appearance='outline'>\n                                <mat-label>Username</mat-label>\n                                <input matInput type='text' [formControl]='new_username'>\n                                <mat-error *ngIf=\"new_username.invalid && (new_username.touched || new_username.dirty)\">\n                                    *Mandatory\n                                </mat-error>\n                            </mat-form-field>\n                            <mat-form-field class=\"col-auto\" appearance='outline'>\n                                <mat-label>Password</mat-label>\n                                <input matInput type='password' [formControl]='new_password'>\n                                <mat-error *ngIf=\"new_password.hasError('minlength')\">\n                                    *Minimun length of 8 characters\n                                </mat-error>\n                                <mat-error *ngIf=\"new_password.hasError('required')\">\n                                    *Mandatory\n                                </mat-error>\n                            </mat-form-field>\n                            <mat-form-field class=\"col-auto\" appearance='outline'>\n                                <mat-label>Confirm Password</mat-label>\n                                <input matInput type='password' [formControl]='confirm_password'>\n                                <mat-error *ngIf=\"confirm_password.hasError('minlength')\">\n                                    *Minimun length of 8 characters\n                                </mat-error>\n                                <mat-error *ngIf=\"confirm_password.hasError('required')\">\n                                    *Mandatory\n                                </mat-error>\n                            </mat-form-field>\n                            <button mat-button type=\"submit\" [disabled]='!registerForm.valid'>Register</button>\n                        </div>\n                    </form>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n</div>\n\n\n<!-- <div class=register_form_div>\n    \n        <div>\n            <label> Name: <input class=\"name\" matInput type=\"text\" [formControl]='new_name'></label>\n            <small *ngIf='new_name.invalid && (new_name.touched || new_name.dirty)'>\n                <small *ngIf='new_name.errors.required' class=\"error-message\">\n                    *Enter a name\n                </small>\n            </small>\n        </div>\n        <div>\n            <label> Email: <input class=\"email\" matInput type=\"text\" [formControl]='new_email'></label>\n            <small *ngIf='new_email.invalid && (new_email.touched || new_email.dirty)'>\n                <small *ngIf='new_email.errors.required' class=\"error-message\">\n                    *Enter an email \n                </small>\n            </small>\n        </div>\n        <div>\n            <label> New Username: <input class=\"username\" matInput type=\"text\" [formControl]='new_username'></label>\n            <small *ngIf='new_username.invalid && (new_username.touched || new_username.dirty)'>\n                <small *ngIf='new_username.errors.required' class=\"error-message\">\n                    *Enter a username\n                </small>\n            </small>\n        </div>\n        <div>\n            <label> New Password: <input class=\"password\" matInput type=\"password\" [formControl]='new_password'></label>\n            <small *ngIf='new_password.invalid && (new_password.touched || new_password.dirty)'>\n                <small *ngIf='new_password.errors.required' class=\"error-message\">\n                    *Enter a password\n                </small>\n            </small>\n        </div>\n        <div>\n            <label> Confirm New Password: <input class=\"password\" matInput type=\"password\" [formControl]='confirm_password'></label>\n            <small *ngIf='confirm_password.invalid && (confirm_password.touched || confirm_password.dirty)'>\n                <small *ngIf='confirm_password.errors.required' class=\"error-message\">\n                    *Confirm password\n                </small>\n            </small>\n        </div>\n        <div><button type=\"submit\" class=\"submit\" mat-button [disabled]='!registerForm.valid'>Register</button></div>      \n    </form>\n  </div>\n     -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid search_result_background\">\n    <div *ngIf=persistService.searchResult>\n        <div class=\"row mt-5\">\n            <div class=\"col-sm-12 col-md-12 col-lg-3\">\n                <form [formGroup]='filterForm'>\n                    <div class=\"col\">\n                        <div>SEARCH: </div>\n                        <div><input class=\"form-control\" matInput type=\"text\" [formControl]=\"generalSearch\" placeholder=\"Type here\"></div>\n                        <div>INGREDIENTS: </div>\n                        <div><input class=\"form-control\" matInput type=text [formControl]=\"ingredients\" placeholder=\"Type here\"></div>\n                        <div>BRAND: </div>\n                        <div><input class=\"form-control\" matInput type=text [formControl]=\"brandOwner\" placeholder=\"Type here\"></div>\n                        <div class=\"mt-2\">Require all Fields: <input type=\"checkbox\" custom-control-input value=true [formControl]=\"required\" [checked]=\"this.required_val\"></div>\n                        <button class=\"btn btn-light px-4 m-2\" (click)=\"filterSearch()\">Filter</button>\n                        <button class=\"btn btn-light px-4 m-2\" (click)=\"resetSearch()\">Reset</button>\n                        <br><br>\n                        <div>SORT CRITERIA: </div>\n                        <select class=\"custom-select my-3\"[formControl]=\"sortField\" (click)=\"sort()\">\n                            <option value=\"\" disabled selected>Select criteria</option>\n                            <option value=\"publishedDate\">Published Date</option>\n                            <option value=\"lowercaseDescription.keyword\">Description</option>\n                            <option value=\"dataType.keyword\">Data Type</option>\n                        </select>\n                        <div *ngIf=sortSelected>\n                            SORT DIRECTION:\n                            <button mat-button (click)=sortDirec() class=\"mb-2\" >\n                                <mat-icon>sort_by_alpha</mat-icon>\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-sm-12 col-md-12 col-lg-9\">\n                <div class=\"table_container\" *ngIf=\"this.persistService.searchResult; else elseBlock\">\n                    <div class=\"card\">\n                    <table class=\"table table-responsive-md\">\n                        <thead>\n                            <tr>\n                                <th>Description</th>\n                                <th>Type</th>\n                                <th>Brand</th>\n                                <th>Published Date</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let each of persistService.searchResult | paginate:{itemsPerPage: 15, currentPage:p};\">\n                                <td>\n                                    <a (click)=fetchNutrients(each.fdcId)>\n                                        <button class=\"btn btn-link\">{{each.description}}</button>\n                                    </a>\n                                </td>\n                                <td>{{each.dataType}}</td>\n                                <td>{{each.brandOwner}}</td>\n                                <td>{{each.publishedDate}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    </div>\n                    <div class=\"m-3\"> \n                        <pagination-controls class=\"my-pagination\" (pageChange)=\"p=$event\"></pagination-controls>\n                    </div>\n                </div>\n                <div *ngIf=empty style=\"text-align:right\">\n                    <h3>No result found</h3>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n    \n<!-- \n\n<div *ngIf=this.persistService.searchResult>\n    <div></div>\n    <div>\n        <form [formGroup]='filterForm'>\n            Search: <input type=\"text\" [formControl]=\"generalSearch\">\n            Ingredients: <input type=text [formControl]=\"ingredients\">\n            Brand Owner: <input type=text [formControl]=\"brandOwner\">\n\n            <div>\n                Required All words: <input type=\"checkbox\" value=true [formControl]=\"required\" [checked]=\"this.required_val\">\n            </div>\n            <button (click)=\"filterSearch()\">Filter</button>\n            <button (click)=\"resetSearch()\">Reset</button>\n        </form>\n    </div>\n    <br><br>\n    Sort Criteria:\n    <select [formControl]=\"sortField\" (click)=\"sort()\">\n        <option value=\"\" disabled selected>Select criteria</option>\n        <option value=\"publishedDate\">Published Date</option>\n        <option value=\"lowercaseDescription.keyword\">Description</option>\n        <option value=\"dataType.keyword\">Data Type</option>\n    </select>\n    <div *ngIf=sortSelected>\n        Sort Direction:\n        <button mat-button (click)=sortDirec() >\n            <mat-icon>sort_by_alpha</mat-icon>\n        </button>\n    </div> -->\n    \n    <!-- Sort direction:\n    <mat-button-toggle-group name=\"sortDirection\">\n        <mat-button-toggle value=\"asc\">Ascending</mat-button-toggle>\n        <mat-button-toggle value=\"desc\">Descending</mat-button-toggle>\n    </mat-button-toggle-group> -->\n    \n    <!-- <br><br>\n    <div *ngFor=\"let each of this.persistService.searchResult | paginate:{itemsPerPage: 10, currentPage:p};\" >\n        <h3>{{each.description}}</h3>\n        <button (click)=\"fetchNutrients(each.fdcId)\">Details</button>\n        <h6>{{each.additionalDescription}}</h6>\n        <h5>Publised Date: {{each.publishedDate}}</h5>\n        <h5>Brand Owner: {{each.brandOwner}}</h5>\n        <h5>Data Type: {{each.dataType}}</h5>\n    </div>\n    \n    <div> \n        <pagination-controls style=\"text-align:right;\" (pageChange)=\"p=$event\"></pagination-controls>\n    </div>\n</div> -->\n\n\n<!-- <app-display [fdcId]=\"fdcId\"></app-display> -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container search_background\">\n    <input type=\"text\" [(ngModel)]=\"generalSearch\"/>\n    <button (click)=fetch()>Search</button>\n</div> -->\n\n<div class=\"container search_background\">\n    <div class=\"search_container\">\n        <form (submit)=fetch()>\n            <input class=\"search_input\" type=\"text\" placeholder=\"Search Food\" [(ngModel)]=\"generalSearch\" name=\"generalSearch\">\n        </form>\n    </div>\n    <!-- <div class=\"jumbotron\">\n        <div class=\"container\">\n            <h2>{{quote}}</h2>\n        </div>\n    </div> -->\n    \n</div>\n\n<!-- <app-search-result [list]=\"FoodList\"></app-search-result> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        // route.events.forEach(event => {
        //   if(event instanceof NavigationStart) {
        //     if(event['url'] == '/register') 
        //       this.showHead = false;
        this.router = router;
        // showHead: boolean  = false;
        this.title = 'Nutritionist';
        //   }
        //   else
        //     this.showHead = true;
        // })
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/search-result/search-result.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");
/* harmony import */ var _meal_meal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./meal/meal.component */ "./src/app/meal/meal.component.ts");
/* harmony import */ var _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recommendation/recommendation.component */ "./src/app/recommendation/recommendation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _services_food_data_central_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/food-data-central.service */ "./src/app/services/food-data-central.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _services_persistance_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/persistance.service */ "./src/app/services/persistance.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _details_dialog_opener_details_dialog_opener_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./details-dialog-opener/details-dialog-opener.component */ "./src/app/details-dialog-opener/details-dialog-opener.component.ts");
/* harmony import */ var _details_view_dialog_details_view_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./details-view-dialog/details-view-dialog.component */ "./src/app/details-view-dialog/details-view-dialog.component.ts");
/* harmony import */ var _brand_recommendation_brand_recommendation_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./brand-recommendation/brand-recommendation.component */ "./src/app/brand-recommendation/brand-recommendation.component.ts");
/* harmony import */ var _token_iterceptor__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./token-iterceptor */ "./src/app/token-iterceptor.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _can_activate_guard__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./can-activate.guard */ "./src/app/can-activate.guard.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");














































const route = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"] },
    { path: 'searchResult', component: _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_11__["SearchResultComponent"] },
    { path: 'display', component: _display_display_component__WEBPACK_IMPORTED_MODULE_12__["DisplayComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'favorite', component: _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_13__["FavoriteComponent"] },
    { path: 'meal', component: _meal_meal_component__WEBPACK_IMPORTED_MODULE_14__["MealComponent"] },
    { path: 'detailsDialog', component: _details_dialog_opener_details_dialog_opener_component__WEBPACK_IMPORTED_MODULE_34__["DetailsDialogOpenerComponent"] },
    { path: 'recommendation', component: _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_15__["RecommendationComponent"], children: [] },
    { path: 'brandRecommendation/:brand', component: _brand_recommendation_brand_recommendation_component__WEBPACK_IMPORTED_MODULE_36__["BrandRecommendationComponent"] },
    { path: "**", redirectTo: "home" }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
            _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_11__["SearchResultComponent"],
            _display_display_component__WEBPACK_IMPORTED_MODULE_12__["DisplayComponent"],
            _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_13__["FavoriteComponent"],
            _meal_meal_component__WEBPACK_IMPORTED_MODULE_14__["MealComponent"],
            _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_15__["RecommendationComponent"],
            _details_dialog_opener_details_dialog_opener_component__WEBPACK_IMPORTED_MODULE_34__["DetailsDialogOpenerComponent"],
            _details_view_dialog_details_view_dialog_component__WEBPACK_IMPORTED_MODULE_35__["DetailsViewDialogComponent"],
            _brand_recommendation_brand_recommendation_component__WEBPACK_IMPORTED_MODULE_36__["BrandRecommendationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"].forRoot(route),
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__["MatButtonToggleModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_39__["MatGridListModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__["MatProgressSpinnerModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_45__["MatSlideToggleModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"]],
        providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"], _services_food_data_central_service__WEBPACK_IMPORTED_MODULE_20__["FoodDataCentralService"], _can_activate_guard__WEBPACK_IMPORTED_MODULE_44__["CanActivateGuard"], _services_route_service__WEBPACK_IMPORTED_MODULE_22__["RouteService"], _services_persistance_service__WEBPACK_IMPORTED_MODULE_23__["PersistanceService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"], useClass: _token_iterceptor__WEBPACK_IMPORTED_MODULE_37__["TokenIterceptor"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [_details_view_dialog_details_view_dialog_component__WEBPACK_IMPORTED_MODULE_35__["DetailsViewDialogComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/brand-recommendation/brand-recommendation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/brand-recommendation/brand-recommendation.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".brand_recommendation_background {\n    overflow-y: hidden;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('6.jpg');\n    width: 100%;\n    height: auto;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n    background-size: cover;\n}\n\n.card {\n\topacity: 0.8;\n\twidth: 300px;\n\tdisplay: inline-block;\n\tmargin: 1rem;\n\tborder-radius: 4px;\n\tbox-shadow: 0 -1px 1px 0 rgba(0,0,0,.05), 0 1px 2px 0 rgba(0,0,0,.2);\n\ttransition: all .2s ease;\n\t/* background: #fff; */\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.card:hover, .hover {\n\t\ttransform: translateY(-4px);\n\t\tbox-shadow: 0 4px 25px 0 rgba(0,0,0,.3), 0 0 1px 0 rgba(0,0,0,.25);\n}\n\n.card.card-content {\n\tbox-shadow: inset 0 3px 0 0 #ccb65e;\n\tborder-color: #ccb65e;\n}\n\n.card-content {\n\twidth: 100%;\n\tmin-height: 104px;\n\tbackground-color: #fff;\n\tborder-top: 1px solid #E9E9EB;\n\tborder-bottom-right-radius: 4px;\n\tborder-bottom-left-radius: 4px;\n\tpadding: 1rem 2rem;\n\ttransition: all .2s ease;\n}\n\n.card-content a {\n\ttext-decoration: none;\n\tcolor: #202927;\n}\n\n.card-content h2, a h2 {\n\tfont-size: 1rem;\n\tfont-weight: 500;\n}\n\n.card-content p, a p {\n\tfont-size: .8rem;\n\tfont-weight: 400;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tcolor: rgba(32, 41, 28, .8);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhbmQtcmVjb21tZW5kYXRpb24vYnJhbmQtcmVjb21tZW5kYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhCQUErQztJQUMvQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLG9FQUFvRTtDQUNwRSx3QkFBd0I7Q0FDeEIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isa0VBQWtFO0FBQ3BFOztBQUNBO0NBQ0MsbUNBQW1DO0NBQ25DLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsc0JBQXNCO0NBQ3RCLDZCQUE2QjtDQUM3QiwrQkFBK0I7Q0FDL0IsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsY0FBYztBQUNmOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsMkJBQTJCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvYnJhbmQtcmVjb21tZW5kYXRpb24vYnJhbmQtcmVjb21tZW5kYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZF9yZWNvbW1lbmRhdGlvbl9iYWNrZ3JvdW5kIHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy82LmpwZ1wiKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmQge1xuXHRvcGFjaXR5OiAwLjg7XG5cdHdpZHRoOiAzMDBweDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW46IDFyZW07XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Ym94LXNoYWRvdzogMCAtMXB4IDFweCAwIHJnYmEoMCwwLDAsLjA1KSwgMCAxcHggMnB4IDAgcmdiYSgwLDAsMCwuMik7XG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcblx0LyogYmFja2dyb3VuZDogI2ZmZjsgKi9cblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVx0XG4uY2FyZDpob3ZlciwgLmhvdmVyIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG5cdFx0Ym94LXNoYWRvdzogMCA0cHggMjVweCAwIHJnYmEoMCwwLDAsLjMpLCAwIDAgMXB4IDAgcmdiYSgwLDAsMCwuMjUpO1xufVx0XHRcbi5jYXJkLmNhcmQtY29udGVudCB7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDAgMCAjY2NiNjVlO1xuXHRib3JkZXItY29sb3I6ICNjY2I2NWU7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuXHR3aWR0aDogMTAwJTtcblx0bWluLWhlaWdodDogMTA0cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTlFOUVCO1xuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG5cdHBhZGRpbmc6IDFyZW0gMnJlbTtcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xufVx0XG5cbi5jYXJkLWNvbnRlbnQgYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6ICMyMDI5Mjc7XG59XG5cbi5jYXJkLWNvbnRlbnQgaDIsIGEgaDIge1xuXHRmb250LXNpemU6IDFyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkLWNvbnRlbnQgcCwgYSBwIHtcblx0Zm9udC1zaXplOiAuOHJlbTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdGNvbG9yOiByZ2JhKDMyLCA0MSwgMjgsIC44KTtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/brand-recommendation/brand-recommendation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/brand-recommendation/brand-recommendation.component.ts ***!
  \************************************************************************/
/*! exports provided: BrandRecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandRecommendationComponent", function() { return BrandRecommendationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_persistance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/persistance.service */ "./src/app/services/persistance.service.ts");
/* harmony import */ var _classes_matchFood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/matchFood */ "./src/app/classes/matchFood.ts");
/* harmony import */ var _services_food_data_central_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/food-data-central.service */ "./src/app/services/food-data-central.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _classes_food__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classes/food */ "./src/app/classes/food.ts");








let BrandRecommendationComponent = class BrandRecommendationComponent {
    constructor(activatedRoute, persistService, fetchService, routerService) {
        this.activatedRoute = activatedRoute;
        this.persistService = persistService;
        this.fetchService = fetchService;
        this.routerService = routerService;
        this.food = new _classes_food__WEBPACK_IMPORTED_MODULE_7__["Food"]();
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.selectedBrand = params['brand'];
        });
        // this.persistService.generalSearch = this.generalSearch;
        this.persistService.brandRecommendation = [];
        this.fetchService.fetchTotalMatch("", this.selectedBrand, "", false, "", "").subscribe(data => {
            this.totalPages = data.totalPages;
            if (this.totalPages > 2)
                this.totalPages = 2;
            for (var i = 1; i <= this.totalPages; i++) {
                this.fetchService.fetchMatchFoodPageWise("", this.selectedBrand, "", i, false, "", "").subscribe(data => {
                    data.foods.forEach(element => {
                        this.EachFood = new _classes_matchFood__WEBPACK_IMPORTED_MODULE_4__["MatchFood"];
                        this.EachFood.fdcId = element.fdcId;
                        this.EachFood.description = element.description;
                        this.EachFood.additionalDescription = element.additionalDescription;
                        this.EachFood.dataType = element.dataType;
                        this.EachFood.publishedDate = element.publishedDate;
                        this.EachFood.allHighlightFields = element.allHighlightFields;
                        this.EachFood.brandOwner = element.brandOwner;
                        this.EachFood.ingredients = element.ingredients;
                        this.persistService.brandRecommendation.push(this.EachFood);
                    });
                    // console.log(this.persistService.brandRecommendation);
                    //  = this.FoodList;
                }, err => {
                    console.log(err.message);
                });
            }
        }, err => { });
    }
    fetchNutrients(fdcId) {
        this.fetchService.fetchFood(fdcId).subscribe(data => {
            // console.log(data.foo)
            this.food.fdcId = data.fdcId;
            this.food.description = data.description;
            this.food.dataType = data.dataType;
            this.food.brandOwner = data.brandOwner;
            this.food.brandedFoodCategory = data.brandedFoodCategory;
            this.food.ingredients = data.ingredients;
            this.food.publicationDate = data.publicationDate;
            this.food.scientificName = data.scientificName;
            this.food.foodNutrients = [];
            data.foodNutrients.forEach(element => {
                // console.log
                this.nutrients = new _classes_food__WEBPACK_IMPORTED_MODULE_7__["Nutrients"]();
                this.nutrients.id = element.nutrient.id;
                this.nutrients.name = element.nutrient.name;
                this.nutrients.unitName = element.nutrient.unitName;
                this.nutrients.amount = element.amount;
                if (element.foodNutrientDerivation)
                    this.nutrients.description = element.foodNutrientDerivation.description;
                else
                    this.nutrients.description = "";
                this.food.foodNutrients.push(this.nutrients);
            });
            // this.food.foodNutrients = this.nutrientList;
            this.persistService.selectedFood = this.food;
            console.log(this.food);
            this.routerService.routeToDisplay();
        }, err => {
            console.log(err);
        });
    }
};
BrandRecommendationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_persistance_service__WEBPACK_IMPORTED_MODULE_3__["PersistanceService"] },
    { type: _services_food_data_central_service__WEBPACK_IMPORTED_MODULE_5__["FoodDataCentralService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"] }
];
BrandRecommendationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brand-recommendation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./brand-recommendation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brand-recommendation/brand-recommendation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./brand-recommendation.component.css */ "./src/app/brand-recommendation/brand-recommendation.component.css")).default]
    })
], BrandRecommendationComponent);



/***/ }),

/***/ "./src/app/can-activate.guard.ts":
/*!***************************************!*\
  !*** ./src/app/can-activate.guard.ts ***!
  \***************************************/
/*! exports provided: CanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuard", function() { return CanActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/route.service */ "./src/app/services/route.service.ts");




let CanActivateGuard = class CanActivateGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.authService.isUserAuthenticated()
            .then(data => {
            if (!data)
                this.router.routeToLogin();
            return data;
        });
    }
};
CanActivateGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"] }
];
CanActivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CanActivateGuard);



/***/ }),

/***/ "./src/app/classes/food.ts":
/*!*********************************!*\
  !*** ./src/app/classes/food.ts ***!
  \*********************************/
/*! exports provided: Food, Nutrients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Food", function() { return Food; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nutrients", function() { return Nutrients; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Food {
}
class Nutrients {
}


/***/ }),

/***/ "./src/app/classes/matchFood.ts":
/*!**************************************!*\
  !*** ./src/app/classes/matchFood.ts ***!
  \**************************************/
/*! exports provided: MatchFood */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchFood", function() { return MatchFood; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MatchFood {
}


/***/ }),

/***/ "./src/app/classes/user.ts":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/details-dialog-opener/details-dialog-opener.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/details-dialog-opener/details-dialog-opener.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dialog_opener_background {\n    overflow-y: hidden;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('bottom_oat_yellow.jpg');\n    width: 100%;\n    height: auto;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy1kaWFsb2ctb3BlbmVyL2RldGFpbHMtZGlhbG9nLW9wZW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOENBQStEO0lBQy9ELFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtZGlhbG9nLW9wZW5lci9kZXRhaWxzLWRpYWxvZy1vcGVuZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2dfb3BlbmVyX2JhY2tncm91bmQge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JvdHRvbV9vYXRfeWVsbG93LmpwZ1wiKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/details-dialog-opener/details-dialog-opener.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/details-dialog-opener/details-dialog-opener.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailsDialogOpenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsDialogOpenerComponent", function() { return DetailsDialogOpenerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _details_view_dialog_details_view_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../details-view-dialog/details-view-dialog.component */ "./src/app/details-view-dialog/details-view-dialog.component.ts");
/* harmony import */ var _services_persistance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/persistance.service */ "./src/app/services/persistance.service.ts");






let DetailsDialogOpenerComponent = class DetailsDialogOpenerComponent {
    constructor(dialog, routerservice, persistService) {
        this.dialog = dialog;
        this.routerservice = routerservice;
        this.persistService = persistService;
        this.dialog.open(_details_view_dialog_details_view_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DetailsViewDialogComponent"], {
            data: {
                fdcId: this.persistService.selectedFdcId
            }
        }).afterClosed().subscribe(result => {
            this.routerservice.routeBack();
            // if (result === "selected")
            //   this.routerservice.routeToFavorite();
            // else
            console.log("closed");
            // this.routerservice.routeBack();
        });
    }
    ngOnInit() {
    }
};
DetailsDialogOpenerComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"] },
    { type: _services_persistance_service__WEBPACK_IMPORTED_MODULE_5__["PersistanceService"] }
];
DetailsDialogOpenerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-dialog-opener',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-dialog-opener.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-dialog-opener/details-dialog-opener.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-dialog-opener.component.css */ "./src/app/details-dialog-opener/details-dialog-opener.component.css")).default]
    })
], DetailsDialogOpenerComponent);



/***/ }),

/***/ "./src/app/details-view-dialog/details-view-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/details-view-dialog/details-view-dialog.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-responsive{\n        max-height: 300px;\n}\n\n.container {\n        opacity: 0.7;\n}\n\n.close_btn {\n        text-align: right;\n}\n\n.dialog_background {\n    overflow: visible;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('6.jpg');\n    width: 100%;\n    height: auto;\n    position: fixed;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy12aWV3LWRpYWxvZy9kZXRhaWxzLXZpZXctZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxpQkFBaUI7QUFDekI7O0FBRUE7UUFDUSxZQUFZO0FBQ3BCOztBQUVBO1FBQ1EsaUJBQWlCO0FBQ3pCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOEJBQStDO0lBQy9DLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy12aWV3LWRpYWxvZy9kZXRhaWxzLXZpZXctZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtcmVzcG9uc2l2ZXtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jbG9zZV9idG4ge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kaWFsb2dfYmFja2dyb3VuZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy82LmpwZ1wiKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/details-view-dialog/details-view-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/details-view-dialog/details-view-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: DetailsViewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsViewDialogComponent", function() { return DetailsViewDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_persistance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/persistance.service */ "./src/app/services/persistance.service.ts");
/* harmony import */ var _services_food_data_central_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/food-data-central.service */ "./src/app/services/food-data-central.service.ts");
/* harmony import */ var _classes_food__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/food */ "./src/app/classes/food.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let DetailsViewDialogComponent = class DetailsViewDialogComponent {
    constructor(persistService, fetchService, dialogRef, data) {
        this.persistService = persistService;
        this.fetchService = fetchService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.food = new _classes_food__WEBPACK_IMPORTED_MODULE_4__["Food"];
        this.nutrients = new _classes_food__WEBPACK_IMPORTED_MODULE_4__["Nutrients"];
    }
    ngOnInit() {
        this.fetchService.fetchFood(this.persistService.selectedFdcId).subscribe(data => {
            // console.log(data.foo)
            this.food.fdcId = data.fdcId;
            this.food.description = data.description;
            this.food.dataType = data.dataType;
            this.food.brandOwner = data.brandOwner;
            this.food.brandedFoodCategory = data.brandedFoodCategory;
            this.food.ingredients = data.ingredients;
            this.food.publicationDate = data.publicationDate;
            this.food.scientificName = data.scientificName;
            this.food.foodNutrients = [];
            data.foodNutrients.forEach(element => {
                // console.log
                this.nutrients = new _classes_food__WEBPACK_IMPORTED_MODULE_4__["Nutrients"]();
                this.nutrients.id = element.nutrient.id;
                this.nutrients.name = element.nutrient.name;
                this.nutrients.unitName = element.nutrient.unitName;
                this.nutrients.amount = element.amount;
                if (element.foodNutrientDerivation)
                    this.nutrients.description = element.foodNutrientDerivation.description;
                else
                    this.nutrients.description = "";
                this.food.foodNutrients.push(this.nutrients);
            });
            // this.food.foodNutrients = this.nutrientList;
            this.persistService.selectedFood = this.food;
            console.log(this.food);
            // this.routerService.routeToDisplay();
        }, err => {
            console.log(err);
        });
    }
};
DetailsViewDialogComponent.ctorParameters = () => [
    { type: _services_persistance_service__WEBPACK_IMPORTED_MODULE_2__["PersistanceService"] },
    { type: _services_food_data_central_service__WEBPACK_IMPORTED_MODULE_3__["FoodDataCentralService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
DetailsViewDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-view-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-view-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-view-dialog/details-view-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-view-dialog.component.css */ "./src/app/details-view-dialog/details-view-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], DetailsViewDialogComponent);



/***/ }),

/***/ "./src/app/display/display.component.css":
/*!***********************************************!*\
  !*** ./src/app/display/display.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table{\n   /* padding:2em;  */\n   width:100% ;\n   opacity: 0.8;\n   /* overflow-y: scroll; */\n}\n\n\n/* .table_container {\n    overflow-y: auto;\n    position: absolute;\n    height: 100%;\n} */\n\n\n.display_background{\n    /* position: fixed; */\n    overflow-y: hidden;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('bottom_yellow.jpg');\n    width: 100%;\n    height: auto;\n        \n    /* Set up positioning */\n    /* position: fixed; */\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n    background-size: cover;\n\n}\n\n\nth.mat-header-cell {\n    padding: 1em;\n}\n\n\n.card{\n    opacity:0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxrQkFBa0I7R0FDbEIsV0FBVztHQUNYLFlBQVk7R0FDWix3QkFBd0I7QUFDM0I7OztBQUdBOzs7O0dBSUc7OztBQUVIO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBDQUEyRDtJQUMzRCxXQUFXO0lBQ1gsWUFBWTs7SUFFWix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixzQkFBc0I7O0FBRTFCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcbiAgIC8qIHBhZGRpbmc6MmVtOyAgKi9cbiAgIHdpZHRoOjEwMCUgO1xuICAgb3BhY2l0eTogMC44O1xuICAgLyogb3ZlcmZsb3cteTogc2Nyb2xsOyAqL1xufVxuXG5cbi8qIC50YWJsZV9jb250YWluZXIge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbn0gKi9cblxuLmRpc3BsYXlfYmFja2dyb3VuZHtcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYm90dG9tX3llbGxvdy5qcGdcIik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBcbiAgICAvKiBTZXQgdXAgcG9zaXRpb25pbmcgKi9cbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxufSBcblxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi5jYXJke1xuICAgIG9wYWNpdHk6MC45O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/display/display.component.ts":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_persistance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/persistance.service */ "./src/app/services/persistance.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");





let DisplayComponent = class DisplayComponent {
    constructor(persistService, authService, routerService) {
        this.persistService = persistService;
        this.authService = authService;
        this.routerService = routerService;
        this.displayedColumns = ["Name", "Amount", "Unit", "Dervied By."];
        this.favoriteClicked = false;
        this.mealClicked = false;
        this.navbarCollapsed = true;
        this.foodDetails = null;
        this.favoriteClicked = false;
        this.mealClicked = false;
    }
    ngOnInit() {
        if (this.persistService.selectedFood == null)
            alert("No food selected");
        else {
            this.foodDetails = this.persistService.selectedFood;
            this.datasource = this.foodDetails.foodNutrients;
        }
    }
    saveFavorite() {
        // if(sessionStorage.getItem('username') != null) {
        //   console.log(sessionStorage.getItem('username'));
        //   console.log(fdcId);
        this.persistService.saveFavorite(this.foodDetails);
        this.favoriteClicked = true;
        // this.routerService.routeToSearch();
        // }
        // else  {
        // alert("not logged");
        //   this.routerService.routeToLogin();
        // }
    }
    saveMeal() {
        // if(sessionStorage.getItem('username') != null) {
        //   console.log(sessionStorage.getItem('username'));
        //   console.log(fdcId);
        this.persistService.saveMeal(this.foodDetails);
        this.mealClicked = true;
        // this.routerService.routeToSearch();
        // }
        // else  {
        // alert("not logged");
        //   this.routerService.routeToLogin();
        // }
    }
};
DisplayComponent.ctorParameters = () => [
    { type: _services_persistance_service__WEBPACK_IMPORTED_MODULE_2__["PersistanceService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] }
];
DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display.component.css */ "./src/app/display/display.component.css")).default]
    })
], DisplayComponent);



/***/ }),

/***/ "./src/app/favorite/favorite.component.css":
/*!*************************************************!*\
  !*** ./src/app/favorite/favorite.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favorite_background {\n    overflow-y: hidden;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('bottom_oat_yellow.jpg');\n    width: 100%;\n    /* height: auto; */\n\t/* position: fixed; */\n\tbackground-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n    background-size: cover;\n}\n\n.category_view {\n    overflow-y: auto;\n    height: 100%;\n    /* position: relative; */\n}\n\n.card {\n\topacity: 0.8;\n\tpadding: 1em;\n}\n\n.pagination {\n    text-align: left;\n}\n\n.card {\n\topacity: 0.8;\n    /* width: 300px; */\n    /* height: auto; */\n\tdisplay: inline-block;\n\tmargin: 1rem;\n\tborder-radius: 4px;\n\tbox-shadow: 0 -1px 1px 0 rgba(0,0,0,.05), 0 1px 2px 0 rgba(0,0,0,.2);\n\ttransition: all .2s ease;\n\t/* background: #fff; */\n\tposition: relative;\n\t/* overflow: hidden; */\n}\n\n.card:hover, .hover {\n\t\ttransform: translateY(-4px);\n\t\tbox-shadow: 0 4px 25px 0 rgba(0,0,0,.3), 0 0 1px 0 rgba(0,0,0,.25);\n}\n\n.card.card-content {\n\tbox-shadow: inset 0 3px 0 0 #ccb65e;\n\tborder-color: #ccb65e;\n}\n\n.card-content {\n\twidth: 100%;\n\tmin-height: 104px;\n\tbackground-color: #fff;\n\tborder-top: 1px solid #E9E9EB;\n\tborder-bottom-right-radius: 4px;\n\tborder-bottom-left-radius: 4px;\n\tpadding: 1rem 2rem;\n\ttransition: all .2s ease;\n}\n\n.card-content a {\n\ttext-decoration: none;\n\tcolor: #202927;\n}\n\n.card-content h2, a h2 {\n\tfont-size: 1rem;\n\tfont-weight: 500;\n}\n\n.card-content p, a p {\n\tfont-size: .8rem;\n\tfont-weight: 400;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tcolor: rgba(32, 41, 28, .8);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhDQUErRDtJQUMvRCxXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCLHFCQUFxQjtDQUNyQiw0QkFBNEI7SUFDekIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckIscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsb0VBQW9FO0NBQ3BFLHdCQUF3QjtDQUN4QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2Qjs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixrRUFBa0U7QUFDcEU7O0FBQ0E7Q0FDQyxtQ0FBbUM7Q0FDbkMscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLCtCQUErQjtDQUMvQiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLHdCQUF3QjtBQUN6Qjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QiwyQkFBMkI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdm9yaXRlX2JhY2tncm91bmQge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JvdHRvbV9vYXRfeWVsbG93LmpwZ1wiKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBoZWlnaHQ6IGF1dG87ICovXG5cdC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhdGVnb3J5X3ZpZXcge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbn1cbi5jYXJkIHtcblx0b3BhY2l0eTogMC44O1xuXHRwYWRkaW5nOiAxZW07XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2FyZCB7XG5cdG9wYWNpdHk6IDAuODtcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXG4gICAgLyogaGVpZ2h0OiBhdXRvOyAqL1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjogMXJlbTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3gtc2hhZG93OiAwIC0xcHggMXB4IDAgcmdiYSgwLDAsMCwuMDUpLCAwIDFweCAycHggMCByZ2JhKDAsMCwwLC4yKTtcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuXHQvKiBiYWNrZ3JvdW5kOiAjZmZmOyAqL1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG59XHRcbi5jYXJkOmhvdmVyLCAuaG92ZXIge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblx0XHRib3gtc2hhZG93OiAwIDRweCAyNXB4IDAgcmdiYSgwLDAsMCwuMyksIDAgMCAxcHggMCByZ2JhKDAsMCwwLC4yNSk7XG59XHRcdFxuLmNhcmQuY2FyZC1jb250ZW50IHtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAzcHggMCAwICNjY2I2NWU7XG5cdGJvcmRlci1jb2xvcjogI2NjYjY1ZTtcbn1cblxuLmNhcmQtY29udGVudCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRtaW4taGVpZ2h0OiAxMDRweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNFOUU5RUI7XG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogMXJlbSAycmVtO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG59XHRcbi5jYXJkLWNvbnRlbnQgYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6ICMyMDI5Mjc7XG59XG5cbi5jYXJkLWNvbnRlbnQgaDIsIGEgaDIge1xuXHRmb250LXNpemU6IDFyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkLWNvbnRlbnQgcCwgYSBwIHtcblx0Zm9udC1zaXplOiAuOHJlbTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdGNvbG9yOiByZ2JhKDMyLCA0MSwgMjgsIC44KTtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/favorite/favorite.component.ts":
/*!************************************************!*\
  !*** ./src/app/favorite/favorite.component.ts ***!
  \************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_persistance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/persistance.service */ "./src/app/services/persistance.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");




let FavoriteComponent = class FavoriteComponent {
    constructor(persistService, routerService) {
        this.persistService = persistService;
        this.routerService = routerService;
        // foodList: Array<Food> = [];
        this.categorise = false;
        this.brandWise = [];
        this.categories = [];
        this.refresh = false;
    }
    ngOnInit() {
        if (this.persistService.getFavorite == null)
            this.empty = true;
        else {
            this.empty = false;
            this.persistService.getFavorite();
            if (this.categorise == true) {
                console.log("true");
                this.categorise = false;
                // this.pers
                this.byCategory();
            }
        }
    }
    viewDetails(fdcId) {
        this.persistService.selectedFdcId = fdcId;
        this.routerService.routeToDetailsDialog();
    }
    deleteFavorite(fdcId) {
        // if(sessionStorage.getItem('username') != null)
        this.persistService.deleteFavorite(fdcId);
        if (this.categorise == true) {
            this.categorise = false;
            this.categories = [];
            this.byCategory();
            // this.persistService.getFavorite();
            // this.ngOnInit();
            // location.reload();
            // this.categorise = true;
            // this.byCategory();
        }
    }
    byCategory() {
        if (this.categorise == false) {
            console.log("byCategory");
            this.categorise = true;
            this.categories = [];
            let n = this.persistService.favoriteFood.length;
            let visited = [];
            for (var i = 0; i < n; i++)
                visited[i] = false;
            // console.log("boolean array created");
            for (i = 0; i < n; i++) {
                if (visited[i] == false) {
                    this.brandWise = new Array();
                    this.brandWise.push(this.persistService.favoriteFood[i]);
                    visited[i] = true;
                    for (var j = i + 1; j < n; j++) {
                        if (this.persistService.favoriteFood[i].brandOwner == this.persistService.favoriteFood[j].brandOwner) {
                            this.brandWise.push(this.persistService.favoriteFood[j]);
                            visited[j] = true;
                        }
                    }
                    this.categories.push(this.brandWise);
                }
            }
        }
        else
            this.categorise = false;
        console.log(this.categories);
    }
};
FavoriteComponent.ctorParameters = () => [
    { type: _services_persistance_service__WEBPACK_IMPORTED_MODULE_2__["PersistanceService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"] }
];
FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorite.component.css */ "./src/app/favorite/favorite.component.css")).default]
    })
], FavoriteComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\n    height:300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgaGVpZ2h0OjMwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pipe-navbar .navbar-nav-scroll {\n    max-width: 100%;\n    height: 2.4rem;\n    overflow: hidden;\n  }\n\n@media (max-width: 991.98px) {\n\n\n  .pipe-navbar .navbar-nav-scroll .navbar-nav {\n    padding-bottom: 2rem;\n    overflow-x: auto;\n    white-space: nowrap;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n@media (min-width: 768px) {\n  @supports ((position: -webkit-sticky) or (position: sticky)) {\n    .pipe-navbar {\n      position: -webkit-sticky;\n      position: sticky;\n      top: 0;\n      z-index: 1071;\n\n    }\n  }\n}\n\n@media (max-width: 576px) {\n  .navbar-nav-scroll {\n    overflow-x: auto;\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 0.875rem;\n    -webkit-overflow-scrolling: touch;\n    -webkit-box-orient: horizontal;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0FBRUY7OztFQUdFO0lBQ0Usb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUNBQWlDO0VBQ25DO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFO01BQ0Usd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixNQUFNO01BQ04sYUFBYTs7SUFFZjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsOEJBQThCO0VBRWhDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGlwZS1uYXZiYXIgLm5hdmJhci1uYXYtc2Nyb2xsIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcblxuXG4gIC5waXBlLW5hdmJhciAubmF2YmFyLW5hdi1zY3JvbGwgLm5hdmJhci1uYXYge1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIEBzdXBwb3J0cyAoKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOnN0aWNreSkpIHtcbiAgICAucGlwZS1uYXZiYXIge1xuICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDEwNzE7XG5cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5uYXZiYXItbmF2LXNjcm9sbCB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(authService, routeService) {
        this.authService = authService;
        this.routeService = routeService;
    }
    ngOnInit() {
        this.isLoggedIn = this.authService.isUserLoggedIn();
    }
    logout() {
        this.authService.logOut();
        sessionStorage.removeItem("logged");
        this.routeService.routeToHome();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.login_background{\n    position: absolute;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('6.jpg');\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n    background-size: cover;\n\n} \n\n.login_container {\n    padding: 2.5em;\n    /* color: grey; */\n    opacity: 0.8;\n} \n\n.login_container:hover {\n    opacity: 1.0;\n} \n\n.mat-card-content, .mat-card-header {\n    display: flex;\n    justify-content: center;\n} \n\n.mat-form-field {\n    padding: 0 1em;\n    width: 100%;\n    min-width: 300px;\n    color: grey;\n} \n\nbutton {\n    width:100%;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw4QkFBK0M7SUFDL0MsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sb2dpbl9iYWNrZ3JvdW5ke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nLzYuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG59IFxuXG4ubG9naW5fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyLjVlbTtcbiAgICAvKiBjb2xvcjogZ3JleTsgKi9cbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5sb2dpbl9jb250YWluZXI6aG92ZXIge1xuICAgIG9wYWNpdHk6IDEuMDtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQsIC5tYXQtY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDoxMDAlO1xuICBcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, routerService) {
        this.authService = authService;
        this.routerService = routerService;
        this.hide = true;
    }
    ngOnInit() {
        if (sessionStorage.getItem("logged") == "true")
            this.routerService.routeToHome();
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: this.username,
            password: this.password,
        });
    }
    loginSubmit(formDirective) {
        console.log(this.loginForm.value);
        this.authService.authenticate(this.loginForm.value).subscribe(data => {
            console.log(data);
            // sessionStorage.setItem('username',this.loginForm.value.username);
            this.authService.setBearerToken(data["token"]);
            sessionStorage.setItem("logged", "true");
            this.routerService.routeToHome();
        }, err => {
            formDirective.resetForm();
            this.loginForm.reset();
            alert("Login Failure");
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/meal/meal.component.css":
/*!*****************************************!*\
  !*** ./src/app/meal/meal.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n    opacity: 0.8;\n}\n.meal_background{\n    overflow-y: hidden;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('bottom_oat.jpg');\n    width: 100%;\n    height: auto;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n    background-size: cover;\n}\n.table_container {\n    overflow-y: auto;\n    opacity: 0.8;\n    /* position: absolute; */\n    /* height: 100%; */\n}\n/* .table{\n    width:100%;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbC9tZWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1Q0FBd0Q7SUFDeEQsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7QUFFQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL21lYWwvbWVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cbi5tZWFsX2JhY2tncm91bmR7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYm90dG9tX29hdC5qcGdcIik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59IFxuXG4udGFibGVfY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xufVxuXG4vKiAudGFibGV7XG4gICAgd2lkdGg6MTAwJTtcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/meal/meal.component.ts":
/*!****************************************!*\
  !*** ./src/app/meal/meal.component.ts ***!
  \****************************************/
/*! exports provided: MealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealComponent", function() { return MealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_persistance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/persistance.service */ "./src/app/services/persistance.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _classes_food__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/food */ "./src/app/classes/food.ts");





let MealComponent = class MealComponent {
    constructor(persistService, routerService) {
        this.persistService = persistService;
        this.routerService = routerService;
        this.refresh = false;
        this.displayedColumns = ["Name", "Total Amount", "Unit", "Dervied By."];
    }
    ngOnInit() {
        // if(sessionStorage.getItem('username') != null)
        this.persistService.getMeal();
        // else {
        //   alert("not logged in");
        //   this.routerService.routeToLogin();
        // }
    }
    viewDetails(fdcId) {
        this.persistService.selectedFdcId = fdcId;
        this.routerService.routeToDetailsDialog();
    }
    deleteMeal(fdcId) {
        this.persistService.deleteMeal(fdcId);
        this.filter = [];
        this.refresh = false;
        // location.reload();
        // this.showNutrients();
    }
    showNutrients() {
        this.filter = [];
        this.refresh = true;
        console.log(this.persistService.mealNutrients);
        let n = this.persistService.mealNutrients.length; //contains the combined list of nutrients  i.e 73 elements
        let flag = "not visited";
        let visited = [];
        for (var i = 0; i < n; i++)
            visited[i] = false;
        let separateNutrients = this.persistService.mealNutrients; // used since persistService.mealNutrients was not accessebile inside the filter function
        let aggregateNutrients = new _classes_food__WEBPACK_IMPORTED_MODULE_4__["Nutrients"]();
        let filter = []; //final array containg the filtered nutrients
        let sumAmount = 0.0;
        this.persistService.mealNutrients.filter(function (each) {
            sumAmount = 0.0;
            flag = "not visited";
            if (each.name == "Energy") { //since two different units of energy are given, to sum it separately
                for (var i = 0; i < n; i++) {
                    if (each.name == separateNutrients[i].name && each.unitName == separateNutrients[i].unitName) {
                        if (visited[i] == false) {
                            sumAmount = sumAmount + parseFloat(separateNutrients[i].amount.toString());
                            visited[i] = true;
                        }
                        else {
                            flag = "visited";
                        }
                    }
                }
            }
            else {
                for (var i = 0; i < n; i++) {
                    if (each.name == separateNutrients[i].name) {
                        if (visited[i] == false) {
                            sumAmount = sumAmount + parseFloat(separateNutrients[i].amount.toString());
                            visited[i] = true;
                        }
                        else {
                            flag = "visited"; // to notify the nutrients value has been added before.
                        }
                    }
                }
            }
            if (flag != "visited") {
                aggregateNutrients = new _classes_food__WEBPACK_IMPORTED_MODULE_4__["Nutrients"]();
                aggregateNutrients.id = each.id;
                aggregateNutrients.name = each.name;
                aggregateNutrients.unitName = each.unitName;
                aggregateNutrients.amount = sumAmount.toFixed(3).toString();
                aggregateNutrients.description = each.description;
                filter.push(aggregateNutrients);
            }
        });
        this.filter = filter;
        // console.log(this.filter);
    }
};
MealComponent.ctorParameters = () => [
    { type: _services_persistance_service__WEBPACK_IMPORTED_MODULE_2__["PersistanceService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"] }
];
MealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meal/meal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meal.component.css */ "./src/app/meal/meal.component.css")).default]
    })
], MealComponent);



/***/ }),

/***/ "./src/app/recommendation/recommendation.component.css":
/*!*************************************************************!*\
  !*** ./src/app/recommendation/recommendation.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".recommendation_background{\n    overflow: visible;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('left_yellow.jpg');\n    width: 100%;\n    height: auto;\n    position: fixed;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n    background-size: cover;\n    \n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb21tZW5kYXRpb24vcmVjb21tZW5kYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdDQUF5RDtJQUN6RCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixzQkFBc0I7O0FBRTFCIiwiZmlsZSI6InNyYy9hcHAvcmVjb21tZW5kYXRpb24vcmVjb21tZW5kYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNvbW1lbmRhdGlvbl9iYWNrZ3JvdW5ke1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvbGVmdF95ZWxsb3cuanBnXCIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgXG59ICJdfQ== */");

/***/ }),

/***/ "./src/app/recommendation/recommendation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/recommendation/recommendation.component.ts ***!
  \************************************************************/
/*! exports provided: RecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationComponent", function() { return RecommendationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_persistance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/persistance.service */ "./src/app/services/persistance.service.ts");



let RecommendationComponent = class RecommendationComponent {
    constructor(persistService) {
        this.persistService = persistService;
        this.brands = [];
    }
    ngOnInit() {
        // if(sessionStorage.getItem('username') != null) {
        this.persistService.getBrands();
        // this.persistService.getDescription(sessionStorage.getItem('username'));
        // }
    }
};
RecommendationComponent.ctorParameters = () => [
    { type: _services_persistance_service__WEBPACK_IMPORTED_MODULE_2__["PersistanceService"] }
];
RecommendationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recommendation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recommendation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommendation/recommendation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recommendation.component.css */ "./src/app/recommendation/recommendation.component.css")).default]
    })
], RecommendationComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.register_background{\n    position: absolute;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('left_yellow.jpg');\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n    background-size: cover;\n\n} \n\n.register_container {\n    margin-top:2em;\n    margin-bottom: 2em;\n    padding: 2.5em;\n    opacity: 0.8;\n} \n\n.register_container:hover {\n    opacity: 1.0;\n} \n\n.mat-card-content, .mat-card-header {\n    display: flex;\n    justify-content: center;\n} \n\n.mat-form-field {\n    padding: 0 1em;\n    width: 100%;\n    min-width: 300px;\n    color: grey;\n} \n\nbutton {\n    width:100%;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3Q0FBeUQ7SUFDekQsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yZWdpc3Rlcl9iYWNrZ3JvdW5ke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2xlZnRfeWVsbG93LmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxufSBcblxuLnJlZ2lzdGVyX2NvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDoyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIHBhZGRpbmc6IDIuNWVtO1xuICAgIG9wYWNpdHk6IDAuODtcbn0gXG5cbi5yZWdpc3Rlcl9jb250YWluZXI6aG92ZXIge1xuICAgIG9wYWNpdHk6IDEuMDtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQsIC5tYXQtY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDoxMDAlOyAgXG59Il19 */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");






let RegisterComponent = class RegisterComponent {
    constructor(authService, routerService) {
        this.authService = authService;
        this.routerService = routerService;
        this.new_user = new _classes_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    ngOnInit() {
        if (sessionStorage.getItem("logged") == "true")
            this.routerService.routeToHome();
        this.new_username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.new_password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]);
        this.confirm_password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]);
        this.new_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.new_email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            new_username: this.new_username,
            new_password: this.new_password,
            confirm_password: this.confirm_password,
            new_name: this.new_name,
            new_email: this.new_email
        });
    }
    registerSubmit(formDirective) {
        console.log("entered");
        if (this.registerForm.value.new_password != this.registerForm.value.confirm_password) {
            this.new_password.reset();
            this.confirm_password.reset();
            alert("Passwords do not match");
        }
        else {
            console.log(this.registerForm.value);
            this.new_user.name = this.registerForm.value.new_name;
            this.new_user.username = this.registerForm.value.new_username;
            this.new_user.password = this.registerForm.value.new_password;
            this.new_user.email = this.registerForm.value.new_email;
            this.authService.register(this.new_user).subscribe(data => {
                alert("Registration Succesful!");
                this.routerService.routeToLogin();
            }, err => {
                formDirective.resetForm();
                this.registerForm.reset();
                if (err.status == 409)
                    alert("Username Already exists");
                else
                    alert("Registration failed");
            });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_5__["RouteService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/search-result/search-result.component.css":
/*!***********************************************************!*\
  !*** ./src/app/search-result/search-result.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search_result_background {\n    overflow-y: hidden;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('right_yellow.jpg');\n    width: 100%;\n    height: auto;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n    background-size: cover;\n}\n/* .table_container {\n  overflow-y: auto;\n    position: absolute;\n    height: 100%;\n} */\n.card {\n  opacity:0.8;\n}\n.form_control {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5Q0FBMEQ7SUFDMUQsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCO0FBQ0E7Ozs7R0FJRztBQUNIO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hfcmVzdWx0X2JhY2tncm91bmQge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL3JpZ2h0X3llbGxvdy5qcGdcIik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4vKiAudGFibGVfY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSAqL1xuLmNhcmQge1xuICBvcGFjaXR5OjAuODtcbn1cblxuLmZvcm1fY29udHJvbCB7XG4gIG9wYWNpdHk6IDAuODtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/search-result/search-result.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-result/search-result.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _classes_matchFood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/matchFood */ "./src/app/classes/matchFood.ts");
/* harmony import */ var _services_food_data_central_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/food-data-central.service */ "./src/app/services/food-data-central.service.ts");
/* harmony import */ var _classes_food__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/food */ "./src/app/classes/food.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _services_persistance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/persistance.service */ "./src/app/services/persistance.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let SearchResultComponent = class SearchResultComponent {
    constructor(fetchService, routerService, persistService) {
        this.fetchService = fetchService;
        this.routerService = routerService;
        this.persistService = persistService;
        this.sortSelected = false;
        this.sortDirection = "desc";
        this.dispayedColumns = ["Description", "Type", "Brand", "Published Date"];
        // dataSource: Array<MatchFood>;
        this.showSpinner = false;
        this.food = new _classes_food__WEBPACK_IMPORTED_MODULE_4__["Food"]();
        this.generalSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('');
        this.ingredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('');
        this.brandOwner = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('');
        this.required = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('');
        this.sortField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('');
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            generalSearch: this.generalSearch,
            ingredients: this.ingredients,
            brandOwner: this.brandOwner,
            required: this.required,
            sortField: this.sortField
        });
    }
    ngOnInit() {
        this.generalSearch.setValue(this.persistService.generalSearch);
        this.brandOwner.setValue(this.persistService.brandOwner);
        this.ingredients.setValue(this.persistService.ingredients);
        this.required_val = this.persistService.required;
        this.sortField_val = this.persistService.sortField;
        // console.log(this.persistService.searchResult);
    }
    fetchNutrients(fdcId) {
        this.fetchService.fetchFood(fdcId).subscribe(data => {
            this.food.fdcId = data.fdcId;
            this.food.description = data.description;
            this.food.dataType = data.dataType;
            this.food.brandOwner = data.brandOwner;
            this.food.brandedFoodCategory = data.brandedFoodCategory;
            this.food.ingredients = data.ingredients;
            this.food.publicationDate = data.publicationDate;
            this.food.scientificName = data.scientificName;
            this.food.foodNutrients = [];
            data.foodNutrients.forEach(element => {
                if (element.amount > 0) {
                    // console.log(element.nutrient.name);
                    this.nutrients = new _classes_food__WEBPACK_IMPORTED_MODULE_4__["Nutrients"]();
                    this.nutrients.id = element.nutrient.id;
                    this.nutrients.name = element.nutrient.name;
                    this.nutrients.unitName = element.nutrient.unitName;
                    if (element.foodNutrientDerivation)
                        this.nutrients.description = element.foodNutrientDerivation.description;
                    else
                        this.nutrients.description = "";
                    this.nutrients.amount = element.amount;
                    this.food.foodNutrients.push(this.nutrients);
                }
                else if (element.amount == 0) {
                    if (element.foodNutrientDerivation) {
                        this.nutrients = new _classes_food__WEBPACK_IMPORTED_MODULE_4__["Nutrients"]();
                        this.nutrients.id = element.nutrient.id;
                        this.nutrients.name = element.nutrient.name;
                        this.nutrients.unitName = element.nutrient.unitName;
                        this.nutrients.description = element.foodNutrientDerivation.description;
                        this.nutrients.amount = element.amount;
                        this.food.foodNutrients.push(this.nutrients);
                    }
                }
            });
            // this.food.foodNutrients = this.nutrientList;
            this.persistService.selectedFood = this.food;
            console.log(this.food);
            this.routerService.routeToDisplay();
        }, err => {
            console.log(err);
        });
    }
    filterSearch() {
        this.showSpinner = true;
        this.empty = false;
        console.log(this.filterForm.value);
        this.persistService.generalSearch = this.filterForm.value.generalSearch;
        this.persistService.brandOwner = this.filterForm.value.brandOwner;
        this.persistService.ingredients = this.filterForm.value.ingredients;
        this.persistService.sortField = this.filterForm.value.sortField;
        if (this.filterForm.value.required)
            this.persistService.required = true;
        // console.log(this.persistService.generalSearch);
        this.generalSearch_val = this.persistService.generalSearch;
        this.brandOwner_val = this.filterForm.value.brandOwner;
        this.ingredients_val = this.filterForm.value.ingredients;
        this.required_val = this.persistService.required;
        this.sortField_val = this.persistService.sortField;
        this.persistService.searchResult = [];
        this.fetchService.fetchTotalMatch(this.generalSearch_val, this.brandOwner_val, this.ingredients_val, this.required_val, this.sortField_val, this.sortDirection).subscribe(data => {
            this.totalPages = data.totalPages;
            if (this.totalPages == 0)
                this.empty = true;
            console.log(data.totalHits);
            if (this.totalPages > 2)
                this.totalPages = 2;
            for (var i = 1; i <= this.totalPages; i++) {
                this.fetchService.fetchMatchFoodPageWise(this.generalSearch_val, this.brandOwner_val, this.ingredients_val, i, this.required_val, this.sortField_val, this.sortDirection).subscribe(data => {
                    data.foods.forEach(element => {
                        this.EachFood = new _classes_matchFood__WEBPACK_IMPORTED_MODULE_2__["MatchFood"];
                        this.EachFood.fdcId = element.fdcId;
                        this.EachFood.description = element.description;
                        this.EachFood.additionalDescription = element.additionalDescription;
                        this.EachFood.dataType = element.dataType;
                        this.EachFood.publishedDate = element.publishedDate;
                        this.EachFood.allHighlightFields = element.allHighlightFields;
                        this.EachFood.brandOwner = element.brandOwner;
                        this.EachFood.ingredients = element.ingredients;
                        this.persistService.searchResult.push(this.EachFood);
                    });
                    // this.ngOnInit();
                    // console.log(this.FoodList.length);
                }, err => {
                    console.log(err.message);
                });
            }
        }, err => { });
        this.showSpinner = false;
    }
    sort() {
        this.sortSelected = true;
        this.filterSearch();
    }
    sortDirec() {
        if (this.sortDirection.includes("asc"))
            this.sortDirection = "desc";
        else
            this.sortDirection = "asc";
        this.filterSearch();
    }
    resetSearch() {
        this.generalSearch.setValue("");
        this.ingredients.setValue("");
        this.brandOwner.setValue("");
        this.required_val = false;
        this.sortField.setValue("");
        this.sortSelected = false;
        this.sortDirection = "asc";
        this.persistService.generalSearch = "";
        this.persistService.brandOwner = "";
        this.persistService.ingredients = "";
        this.persistService.required = false;
        this.persistService.sortField = "";
        this.persistService.searchResult = new Array();
    }
};
SearchResultComponent.ctorParameters = () => [
    { type: _services_food_data_central_service__WEBPACK_IMPORTED_MODULE_3__["FoodDataCentralService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_5__["RouteService"] },
    { type: _services_persistance_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchResultComponent.prototype, "list", void 0);
SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-result.component.css */ "./src/app/search-result/search-result.component.css")).default]
    })
], SearchResultComponent);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url('https://fonts.googleapis.com/css?family=Raleway:400,700,900');\n/* @use postcss-color-function;\n@use postcss-nested; */\n.search_background {\n    overflow: visible;\n    min-width: 100%;\n    min-height: 100%;\n    background-image: url('baguette-bread-dry-fruits-fruits-white-background_23-2147907010.jpg');\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n    background-size: cover;\n}\n/* Base styling */\nbody {\n    width: 430px;\n    margin: 0 auto;\n    /* background-color: #F7CAC9; */\n    font-family: 'Raleway', sans-serif;\n}\n.search_container {\n    padding-top: 64px;\n    text-align: center;\n    color: white;\n}\n.search_title {\n    font-size: 22px;\n    font-weight: 900;\n    color:yellow;\n}\n.search_input {\n    width:50%;\n    padding: 12px 24px;\n\n    background-color: white !important;\n    transition: transform 250ms ease-in-out;\n    font-size: 14px;\n    line-height: 18px;\n    \n    color: #575756;\n    background-color: transparent;\n/* } */\n/*         background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg); */\n \n      /* background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat; */\n        background-size: 18px 18px;\n        background-position: 95% center;\n        border-radius: 50px;\n        border: 1px solid #575756;\n        transition: all 250ms ease-in-out;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        transform-style: preserve-3d;\n}\n.search_input::-webkit-input-placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n}\n.search_input::-moz-placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n}\n.search_input::-ms-input-placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n}\n.search_input::placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n}\n.search_input:hover, .search_input:focus {\n    padding: 12px 0;\n    outline: 0;\n    border: 1px solid transparent;\n    border-bottom: 1px solid #575756;\n    border-radius: 0;\n    background-position: 100% center;\n    background-color: transparent !important;\n}\n.jumbotron {\n    margin:20rem;\n    /* margin-left:auto; */\n    justify-content: center;\n    opacity: 0.8;\n    font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSwwRUFBMEU7QUFGMUU7c0JBQ3NCO0FBRXRCO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEZBQTZHO0lBQzdHLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjtBQUNBLGlCQUFpQjtBQUVqQjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0QztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7O0lBRWxCLGtDQUFrQztJQUNsQyx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGlCQUFpQjs7SUFFakIsY0FBYztJQUNkLDZCQUE2QjtBQUNqQyxNQUFNO0FBQ04seUdBQXlHOztNQUVuRzt1Q0FDaUM7UUFDL0IsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLGlDQUFpQztRQUNqQyxtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtRQUMzQiw0QkFBNEI7QUFDcEM7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCO0FBSkE7SUFDSSw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUpBO0lBQ0ksNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7QUFKQTtJQUNJLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAdXNlIHBvc3Rjc3MtY29sb3ItZnVuY3Rpb247XG5AdXNlIHBvc3Rjc3MtbmVzdGVkOyAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjQwMCw3MDAsOTAwJyk7XG4uc2VhcmNoX2JhY2tncm91bmQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmFndWV0dGUtYnJlYWQtZHJ5LWZydWl0cy1mcnVpdHMtd2hpdGUtYmFja2dyb3VuZF8yMy0yMTQ3OTA3MDEwLmpwZ1wiKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLyogQmFzZSBzdHlsaW5nICovXG5cbmJvZHkge1xuICAgIHdpZHRoOiA0MzBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdDQUM5OyAqL1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG5cbi5zZWFyY2hfY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuICAgIFxuLnNlYXJjaF90aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6eWVsbG93O1xufVxuXG4uc2VhcmNoX2lucHV0IHtcbiAgICB3aWR0aDo1MCU7XG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIFxuICAgIGNvbG9yOiAjNTc1NzU2O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLyogfSAqL1xuLyogICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL21paGFlbHRvbWljLmNvbS9jb2RlcGVuL2lucHV0LXNlYXJjaC9pY19zZWFyY2hfYmxhY2tfMjRweC5zdmcpOyAqL1xuIFxuICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCclM0UlM0NwYXRoIGQ9J00xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eicvJTNFJTNDcGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAqL1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE4cHggMThweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU3NTc1NjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG4gICAgICAgIFxuLnNlYXJjaF9pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBjb2xvcigjNTc1NzU2IGEoMC44KSk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG59XG4gICAgICAgIFxuLnNlYXJjaF9pbnB1dDpob3ZlciwgLnNlYXJjaF9pbnB1dDpmb2N1cyB7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NzU3NTY7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uanVtYm90cm9uIHtcbiAgICBtYXJnaW46MjByZW07XG4gICAgLyogbWFyZ2luLWxlZnQ6YXV0bzsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _classes_matchFood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/matchFood */ "./src/app/classes/matchFood.ts");
/* harmony import */ var _services_food_data_central_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/food-data-central.service */ "./src/app/services/food-data-central.service.ts");
/* harmony import */ var _services_persistance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/persistance.service */ "./src/app/services/persistance.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");






let SearchComponent = class SearchComponent {
    constructor(fetchService, persistService, routerService) {
        this.fetchService = fetchService;
        this.persistService = persistService;
        this.routerService = routerService;
        this.generalSearch = "";
        this.quotes = ["There is no PERFECT diet for everyone", "Be Smart Eat Smart", "You don't have it eat LESS, You just have to eat RIGHT",
            "A healthy Outside starts from the Inside", "Skip The Diet, Just Eat Healthy", "Eat right, Bite by Bite!"];
    }
    ngOnInit() {
        this.quote = this.quotes[Math.floor(Math.random() * 6) + 0];
        console.log(this.quote);
    }
    fetch() {
        console.log(this.generalSearch);
        this.persistService.generalSearch = this.generalSearch;
        this.persistService.searchResult = [];
        this.fetchService.fetchTotalMatch(this.generalSearch, "", "", false, "", "").subscribe(data => {
            this.totalPages = data.totalPages;
            if (this.totalPages > 2)
                this.totalPages = 2;
            for (var i = 1; i <= this.totalPages; i++) {
                this.fetchService.fetchMatchFoodPageWise(this.generalSearch, "", "", i, false, "", "").subscribe(data => {
                    data.foods.forEach(element => {
                        this.EachFood = new _classes_matchFood__WEBPACK_IMPORTED_MODULE_2__["MatchFood"];
                        this.EachFood.fdcId = element.fdcId;
                        this.EachFood.description = element.description;
                        this.EachFood.additionalDescription = element.additionalDescription;
                        this.EachFood.dataType = element.dataType;
                        this.EachFood.publishedDate = element.publishedDate;
                        this.EachFood.allHighlightFields = element.allHighlightFields;
                        this.EachFood.brandOwner = element.brandOwner;
                        this.EachFood.ingredients = element.ingredients;
                        this.persistService.searchResult.push(this.EachFood);
                    });
                    //  = this.FoodList;
                    this.routerService.routeToSearch();
                }, err => {
                    console.log(err.message);
                });
            }
        }, err => { });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _services_food_data_central_service__WEBPACK_IMPORTED_MODULE_3__["FoodDataCentralService"] },
    { type: _services_persistance_service__WEBPACK_IMPORTED_MODULE_4__["PersistanceService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_5__["RouteService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AuthenticationService = class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.isLoggedIn = false;
        this.serverURL = "http://localhost:8002/user";
    }
    register(user) {
        return this.httpClient.post(this.serverURL + "/register", user, { responseType: "text" });
    }
    authenticate(formdata) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Access-Control-Allow-Origin": "*" });
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('username', formdata.username)
            .set('password', formdata.password);
        return this.httpClient.post(this.serverURL + "/login", null, ({ params: params, headers: headers }));
        // this.httpClient.get()
    }
    logOut() {
        return this.setBearerToken("");
    }
    setBearerToken(token) {
        sessionStorage.setItem('authToken', token);
    }
    getBearerToken() {
        return sessionStorage.getItem('authToken');
    }
    isUserLoggedIn() {
        if (sessionStorage.getItem("logged") == null)
            return false;
        else
            return true;
    }
    isUserAuthenticated() {
        // console.log(this.getBearerToken());
        return this.httpClient.get('http://localhost:8001/api/v1/food/isAuthenticated')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response["isAuthenticated"])).toPromise();
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/food-data-central.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/food-data-central.service.ts ***!
  \*******************************************************/
/*! exports provided: FoodDataCentralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDataCentralService", function() { return FoodDataCentralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const api_key = "gyDAwOoheDsjw0c3eaoUuqn7uZafkg8RxgP7gbHj";
let FoodDataCentralService = class FoodDataCentralService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    fetchTotalMatch(generalSearch, brandOwner, ingredients, required, sortField, sortDirection) {
        // console.log(sortDirection);
        return this.httpClient.get(`https://api.nal.usda.gov/fdc/v1/search?api_key=${api_key}&generalSearchInput=${generalSearch}&brandOwner=${brandOwner}&ingredients=${ingredients}&requireAllWords=${required}&sortField=${sortField}&sortDirection=${sortDirection}`);
    }
    fetchMatchFoodPageWise(generalSearch, brandOwner, ingredients, pageNumber, required, sortField, sortDirection) {
        // console.log(sortDirection);
        return this.httpClient.get(`https://api.nal.usda.gov/fdc/v1/search?api_key=${api_key}&generalSearchInput=${generalSearch}&pageNumber=${pageNumber}&brandOwner=${brandOwner}&ingredients=${ingredients}&requireAllWords=${required}&sortField=${sortField}&sortDirection=${sortDirection}`);
    }
    fetchFood(fdcId) {
        return this.httpClient.get(`https://api.nal.usda.gov/fdc/v1/${fdcId}?api_key=${api_key}`);
    }
};
FoodDataCentralService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FoodDataCentralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FoodDataCentralService);



/***/ }),

/***/ "./src/app/services/persistance.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/persistance.service.ts ***!
  \*************************************************/
/*! exports provided: PersistanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistanceService", function() { return PersistanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");





let PersistanceService = class PersistanceService {
    constructor(httpClient, routerService, authService) {
        this.httpClient = httpClient;
        this.routerService = routerService;
        this.authService = authService;
        this.favoriteFood = [];
        this.mealFood = [];
        this.mealNutrients = [];
        this.generalSearch = "";
        this.brandOwner = "";
        this.ingredients = "";
        this.required = false;
        this.sortField = "";
        this.brandRecommendation = [];
        this.brands = [];
        this.description = [];
        this.baseUrl = "http://localhost:8001/api/v1/food";
    }
    saveFavorite(food) {
        // let params = new HttpParams()
        //   .set('username',username);
        this.httpClient.post(this.baseUrl + "/saveFavorite", food).subscribe(data => {
            // console.log(data);
            // alert("Added to favorite");
        }, err => {
            // alert("Not Logged In");
            this.routerService.routeToLogin();
        });
    }
    saveMeal(food) {
        // let params = new HttpParams()
        //   .set('username',username);
        this.httpClient.post(this.baseUrl + "/saveMeal", food).subscribe(data => {
            // console.log(data);
            // alert("Added to meal");
        }, err => {
            // alert("Not Logged In");
            this.routerService.routeToLogin();
            // console.log(err);
        });
    }
    getFavorite() {
        // this.authService.isUserAuthenticated();
        // let p =  new HttpParams()
        // .set('username',username);
        return this.httpClient.post(this.baseUrl + "/getFavorite", null).subscribe(data => {
            this.favoriteFood = data;
            // console.log(data);
        }, err => {
            // alert("Not Logged In");
            this.routerService.routeToLogin();
        });
    }
    getMeal() {
        // let p =  new HttpParams()
        // .set('username',username);
        return this.httpClient.post(this.baseUrl + "/getMeal", null).subscribe(data => {
            this.mealFood = data;
            this.getNutrients();
            // console.log(data);
        }, err => {
            // alert("Not Logged In");
            this.routerService.routeToLogin();
        });
    }
    deleteFavorite(fdcId) {
        let p = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            // .set('username',username)
            .set('fdcId', fdcId);
        return this.httpClient.post(this.baseUrl + "/deleteFavorite", null, { params: p }).subscribe(data => {
            this.favoriteFood = data;
        }, err => {
            // alert("Not Logged In");
            this.routerService.routeToLogin();
        });
    }
    deleteMeal(fdcId) {
        let p = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            // .set('username',username)
            .set('fdcId', fdcId);
        return this.httpClient.post(this.baseUrl + "/deleteMeal", null, { params: p }).subscribe(data => {
            this.mealFood = data;
            this.getNutrients();
        }, err => {
            // alert("Not Logged In");
            this.routerService.routeToLogin();
        });
    }
    getBrands() {
        this.brands = [];
        // let p =  new HttpParams()
        // .set('username',username);
        this.httpClient.post(this.baseUrl + "/getFavorite", null).subscribe(data => {
            this.favoriteFood = data;
            let n = this.favoriteFood.length;
            let visited = [];
            for (var i = 0; i < n; i++) {
                visited[i] = false;
            }
            for (i = 0; i < n; i++) {
                if (visited[i] == false) {
                    if (this.favoriteFood[i].brandOwner != null)
                        this.brands.push(this.favoriteFood[i].brandOwner);
                    else
                        this.brands.push("");
                    for (var j = i + 1; j < n; j++) {
                        if (this.favoriteFood[i].brandOwner == this.favoriteFood[j].brandOwner) {
                            visited[j] = true;
                        }
                    }
                }
            }
            console.log(this.brands);
        }, err => {
            this.routerService.routeToLogin();
        });
    }
    getDescription(username) {
        this.description = [];
        // let p =  new HttpParams()
        // .set('username',username);
        this.httpClient.post(this.baseUrl + "/getFavorite", null).subscribe(data => {
            this.favoriteFood = data;
            let n = this.favoriteFood.length;
            let visited = [];
            for (var i = 0; i < n; i++) {
                visited[i] = false;
            }
            for (i = 0; i < n; i++) {
                if (visited[i] == false) {
                    this.description.push(this.favoriteFood[i].description);
                    for (var j = i + 1; j < n; j++) {
                        if (this.favoriteFood[i].description == this.favoriteFood[j].description) {
                            visited[j] = true;
                        }
                    }
                }
            }
            console.log(this.description);
        }, err => {
            // alert("Not Logged In");
            this.routerService.routeToLogin();
        });
    }
    getNutrients() {
        this.mealNutrients = [];
        for (var i = 0; i < this.mealFood.length; i++) {
            console.log(this.mealFood[i].foodNutrients.length);
            for (var j = 0; j < this.mealFood[i].foodNutrients.length; j++) {
                this.mealNutrients.push(this.mealFood[i].foodNutrients[j]);
            }
        }
        // console.log(this.mealNutrients);
    }
};
PersistanceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
PersistanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PersistanceService);



/***/ }),

/***/ "./src/app/services/route.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/route.service.ts ***!
  \*******************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let RouteService = class RouteService {
    constructor(router, location) {
        this.router = router;
        this.location = location;
    }
    routeToDisplay() {
        this.router.navigate(['/display']);
    }
    routeToLogin() {
        this.router.navigate(['/login']);
    }
    routeToHome() {
        this.router.navigate(['/home']);
    }
    routeToFavorite() {
        this.router.navigate(['/favorite']);
    }
    routeToSearch() {
        this.router.navigate(['/searchResult']);
    }
    routeToDetailsDialog() {
        this.router.navigate(['/detailsDialog']);
    }
    routeBack() {
        this.location.back();
    }
};
RouteService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
RouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RouteService);



/***/ }),

/***/ "./src/app/token-iterceptor.ts":
/*!*************************************!*\
  !*** ./src/app/token-iterceptor.ts ***!
  \*************************************/
/*! exports provided: TokenIterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenIterceptor", function() { return TokenIterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");



let TokenIterceptor = class TokenIterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        // console.log(request);
        // console.log("---------------");
        request = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + this.auth.getBearerToken()).set("Access-Control-Allow-Origin", "*")
        });
        // console.log(request);
        return next.handle(request);
    }
};
TokenIterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
TokenIterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenIterceptor);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ibm-wave10-asya/Desktop/Java/Nutritionist/FrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);