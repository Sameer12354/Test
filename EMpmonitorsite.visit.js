/// <reference types="cypress" />
it('should navigate to the empmonitor site', () =>{
    cy.visit('https://app.dev.empmonitor.com/')
    cy.get('#amember-login').type('empv3demo')
    cy.get('#amember-pass').type('empv3democls{enter}')
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false})
        cy.get(':nth-child(4) > .btn > span > .far').click()
cy.get('#collapsed-sidebar-toggle-button').click() 
   //cy.get("//a[@id='collapsed-sidebar-toggle-button']//i[@class='fas fa-bars']").click
cy.get(':nth-child(2) > [href="#"] > .menu-icon').click()
cy.get('.open > .sub-menu > :nth-child(1) > a').click()
cy.get('#add_btn').click()
cy.get('#fc_widget').click()
cy.get("input[@id='name']").click().type('Sameer{tab}')
cy.get("input[@id='f_name'").type('Barik{tab}')
cy.get("input[@id='emp_email'").type('sameer.b@gg.in{tab}')
cy.get("input[@id='passwd']").type('ABC123!@#{tab}')
cy.get("input[@id='c_passwd']").type('ABC123!@#{tab}')
cy.get("input[@name='empCode']").type('2213{tab}')
cy.get("select[@id='locations-addEmp']").type('2213{tab}')
cy.get("select[@id='EmpReg_departments']").type('2213{tab}')
cy.get("select[@id='timeZoneAppend']").type('2213{tab}')


})



//cy.get('#add_btn')

//cy.get('#collapsed-sidebar-toggle-button')
//cy.get('#collapsed-sidebar-toggle-button')
//cy.get('#collapsed-sidebar-toggle-button')
//cy.get('#collapsed-sidebar-toggle-button')