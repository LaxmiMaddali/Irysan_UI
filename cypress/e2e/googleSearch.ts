/// <reference types="cypress" />

import { searchHomePage }  from '../support/pageObjects/searchHomePage';

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

 Given('I navigate to Google', () => {
    cy.visit('/');
    searchHomePage.acceptAllCookies();
 })

 When('I search for {string}', (searchKeyword) => {
   searchHomePage.enterTextInSearchBar(searchKeyword);
 })

 Then('I expect to see results for dogs',() => {
   searchHomePage.validateSearchresult();
 })