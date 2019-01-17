describe('A simple logic test.', function() {
    it('Does true equal true?', function() {
      expect(false).to.equal(true)
    })
})

describe('A simple functional test', function() {
    it('Visits the Gimmie Catz website', function() {
      cy.visit('/');
    })
})