import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user is on the events page', () => {

    });

    when('the page loads', () => {

    });

    then('each event\'s details should be collapsed by default', () => {

    });
  });

  test('User can expand an event to see details', ({ given, when, then }) => {
    given('the event details are collapsed', () => {

    });

    when('the user clicks on the "Show Details" button for an event', () => {

    });

    then('the event details should expand to show additional information', () => {

    });
  });

  test('User can collapse an event to hide details', ({ given, when, then }) => {
    given('the event details are expanded', () => {

    });

    when('the user clicks on the "Hide Details" button for an event', () => {

    });

    then('the event details should collapse to hide the information', () => {

    });
  });

});