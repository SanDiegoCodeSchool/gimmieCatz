describe('A simple functional test', function() {
    it('Visits the Gimmie Catz website', function() {
      cy.visit('/');
    });
    
    it('Should allow typing in the comment box', function() {
      cy.visit('/');
      cy.get('h1').should('contain', 'RAWRR!!');
    });

    it('Should allow typing in the comment box', function() {
      cy.visit('/');
      cy.get('#comment-2').type('wow thats an awesome cat').should('have.value', 'wow thats an awesome cat');
    });

    it('Clicks on the button to add a comment', function() {
      cy.visit('/');
      cy.get('#comment-0').type('You just made my day!!🥰');
      cy.get('#add-comment-0').click();

    });

    it('Clicks on the like button', function() {
      cy.visit('/');
      cy.get('#show-1').click();
    });
})