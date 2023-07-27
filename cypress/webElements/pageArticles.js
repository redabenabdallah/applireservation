export class PageArticles {

    elmPrix;
    elmTitreArticle;
    elmPanier;
    elmTriSelect;
    elmVisuPanier;
    elmCheckoutBtn;

    constructor() {
        this.elmPrix='[class="inventory_item_price"]';
        this.elmTitreArticle='[class="inventory_item_name"]';
        this.elmPanier='[class="shopping_cart_badge"]';
        this.elmTriSelect='[class="product_sort_container"]';
        this.elmVisuPanier='[class="shopping_cart_link"]';
        this.elmCheckoutBtn='[data-test="checkout"]';
    }

}