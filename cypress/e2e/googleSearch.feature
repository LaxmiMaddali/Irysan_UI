Feature: Simple Google Test

    Scenario: Validate Google search for dogs
      Given I navigate to Google
      When I search for 'dogs'
      Then I expect to see results for dogs