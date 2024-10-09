import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
    given('the user hasn’t specified the number of events', () => {       

    });

    when('the events page loads', () => {

    });

    then('32 events should be displayed by default', () => {     

    });
});

test('User can change the number of events displayed', ({ given, when, then }) => {
  given('the user is on the events page', () => {

  });

  when('the user selects a different number from the "Number of Events" dropdown', () => {

  });

  then('the page should update to display the chosen number of events', () => {

  });
});

});