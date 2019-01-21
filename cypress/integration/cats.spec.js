describe('A simple functional test', function() {
    it('Visits the Gimmie Catz website', function() {
      cy.visit('/');
    });
    
    it('Should have the correct title on the page', function() {
      cy.visit('/');
      cy.get('h1').should('contain', 'More Catz, Yazzz!');
    });

    it('Should allow typing in the comment box', function() {
      cy.visit('/');
      cy.get('#comment-0').type('Amazing.').should('have.value', 'Amazing.');
    });

    it('Should add a comment when text filled and add button clicked', function() {
      cy.visit('/');
      cy.get('#comment-0').type('So purrrty');
      cy.get('#add-comment-0').click();
    });

    it('Should be able to comment on multiple pictures', function() {
      cy.visit('/');
      cy.get('#comment-1').type('You just made my day!!').should('have.value', 'You just made my day!!');
      cy.get('#add-comment-1').click();
      cy.get('#comment-2').type('Wow thats an awesome cat.').should('have.value', 'Wow thats an awesome cat.');
      cy.get('#add-comment-2').click();
    });

    it('Should have a heart when like button is clicked', function() {
      // write your test here
    });

    it('Should unlike a photo when unlike button is clicked', function() {
      // write your test here
    });
})