describe("Is 'Carribbean Twist flower added to cart?'", function test () {
    it ("Checking initial purchase functionality", function cart () {
        cy.viewport(1920, 1080);
        cy.visit("https://www.monamie.am");
        cy.get('.navigation__item').eq(0).click();
        cy.scrollTo(0,500);
        cy.get('.shop-item__footer__right').eq(4).click();
        cy.get('.shop-item__popup-container__popup__info__right__btn').click();
        cy.get('.icon-container').eq(0).click();
        cy.get('.mo-bag__inner__main').should('contain.text',"Carribbean Twist");

    })
})