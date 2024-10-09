Feature: Show/Hide Event Details
  Scenario: An event element is collapsed by default
    Given the user is on the events page
    When the page loads
    Then each event's details should be collapsed by default

  Scenario: User can expand an event to see details
    Given the event details are collapsed
    When the user clicks on the "Show Details" button for an event
    Then the event details should expand to show additional information

  Scenario: User can collapse an event to hide details
    Given the event details are expanded
    When the user clicks on the "Hide Details" button for an event
    Then the event details should collapse to hide the information