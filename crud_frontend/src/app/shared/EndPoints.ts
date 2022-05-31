import {environment} from '../../environments/environment';

export class EndPoints {
    private baseUrl = environment.base_url;
    public readonly create = this.baseUrl + 'api/employee/create';
    public readonly update = this.baseUrl + 'api/employee/update';
    public readonly delete = this.baseUrl + 'api/employee/delete';
    public readonly get = this.baseUrl + 'api/employee/get/all';
    public readonly getById = this.baseUrl + 'api/employee/get/';

    public readonly login = this.baseUrl + 'authentication/authenticate';
    public readonly facilitators = this.baseUrl + 'facilitators';
    public readonly create_club = this.baseUrl + 'clubs';

    public readonly createCat = this.baseUrl + 'api/productline/create';
    public readonly getAllCat = this.baseUrl + 'api/category/get/all';
    public readonly getSpecificCat = this.baseUrl + 'api/productline/get/';
    public readonly updateCat = this.baseUrl + 'api/productline/update/';
    public readonly deleteCat = this.baseUrl + 'api/productline/delete/';


    public readonly getAllPL = this.baseUrl + 'api/productline/get/all';

    public readonly createProduct = this.baseUrl + 'api/product/create';
    public readonly getProducts = this.baseUrl + 'api/product/get/all';
    public readonly getProductById = this.baseUrl + 'api/product/get-by-id';
    public readonly updateProduct = this.baseUrl + 'api/product/update';
    public readonly getAllCatForProduct = this.baseUrl + 'api/product/get/all/cat';
    public readonly deleteProduct = this.baseUrl + 'api/product/delete';

    public readonly createOrder = this.baseUrl + 'api/order/all';
    public readonly getOrders = this.baseUrl + 'api/order/get/all';
    public readonly getUserOrder = this.baseUrl + 'api/order/get/all-by-user';

    public readonly addToCart = this.baseUrl + 'api/cart/add';
    public readonly getCart = this.baseUrl + 'api/cart/get';
    public readonly deleteItem = this.baseUrl + 'api/cart/delete/';

    public readonly getProductCustomer = this.baseUrl + 'api/customer/product/get/all';
    public readonly getCategoryCustomer = this.baseUrl + 'api/customer/category/get/all';
    public readonly getProductByCategory = this.baseUrl + 'api/customer/get-by-cat/';
}
