describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('specific pages can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.get('a[href*="/pokemon/weedle"]').click()
    cy.contains('weedle')
    cy.contains('shield dust')

    cy.visit('http://localhost:5000')
    cy.get('a[href*="/pokemon/voltorb"]').click()
    cy.contains('voltorb')
    cy.contains('soundproof')
  })
})
