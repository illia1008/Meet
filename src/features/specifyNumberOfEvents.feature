Feature: Specify Number of Events
  Scenario: When user hasn’t specified a number, 32 events are shown by default
    Given the user hasn’t specified the number of events
    When the events page loads
    Then 32 events should be displayed by default

  Scenario: User can change the number of events displayed
    Given the user is on the events page
    When the user selects a different number from the "Number of Events" dropdown
    Then the page should update to display the chosen number of events