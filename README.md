# MEET APP

**_MEET_ is a progressive web app (PWA) designed for event discovery, allowing users to view upcoming events in specific cities. Built with a serverless backend and offline capabilities, MEET offers a seamless, responsive experience across devices. Developed using test-driven development (TDD), it ensures code quality and reliability. The app is hosted online for easy access and installation, leveraging serverless architecture and modern data visualization techniques to provide an efficient and engaging user experience. Ideal for professionals, recruiters can view the source code directly on GitHub.**



## Feature 1: Filter Events By City

As a user, I should be able to filter events by city so that I can see a list of events taking place in that city.

### Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.

**Given** user hasn’t searched for any city  
**When** the user opens the app  
**Then** the user should see a list of upcoming events

### Scenario 2: User should see a list of suggestions when they search for a city.

**Given** the main page is open  
**When** user starts typing in the city textbox  
**Then** the user should receive a list of cities (suggestions) that match what they’ve typed

### Scenario 3: User can select a city from the suggested list.

**Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing  
**When** the user selects a city (e.g., “Berlin, Germany”) from the list  
**Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city


## Feature 2: Show/Hide Event Details
As a user, I should be able to toggle event details on and off so that I can view more or less information as needed.

### Scenario 1: An event element is collapsed by default
**Given** the user is on the events page
**When** the page loads
**Then** each event's details should be collapsed by default

### Scenario 2: User can expand an event to see details
**Given** the event details are collapsed
**When** the user clicks on the "Show Details" button for an event
**Then** the event details should expand to show additional information

### Scenario 3: User can collapse an event to hide details
**Given** the event details are expanded
**When** the user clicks on the "Hide Details" button for an event
**Then** the event details should collapse to hide the information


## Feature 3: Specify Number of Events
As a user, I should be able to control the number of events displayed so that I can customize my view.

### Scenario 1: When user hasn’t specified a number, 32 events are shown by default
**Given** the user hasn’t specified the number of events
**When** the events page loads
**Then** 32 events should be displayed by default

### Scenario 2: User can change the number of events displayed
**Given** the user is on the events page
**When** the user selects a different number from the "Number of Events" dropdown
**Then** the page should update to display the chosen number of events


## Feature 4: Use the App When Offline

As a user, I should be able to access previously viewed data while offline so that I can still use the app without an internet connection.

### Scenario 1: Show cached data when there’s no internet connection
**Given** the user is offline
**When** the user opens the app
**Then** the app should display the last available list of events from the cache

### Scenario 2: Show error when user changes search settings (city, number of events)
**Given** the user is offline
**When** the user tries to change search settings (e.g., city, number of events)
**Then** the app should display an error message indicating that there’s no internet connection


## Feature 5: Add an App Shortcut to the Home Screen
As a user, I should be able to add the app to my home screen for quicker access.

### Scenario 1: User can install the MEET app as a shortcut on their device home screen
**Given** the user is using a supported mobile browser
**When** the user clicks on the "Add to Home Screen" button
**Then** the app should be installed as a shortcut on their device’s home screen


## Feature 6: Display Charts Visualizing Event Details
As a user, I should be able to view charts that summarize event data for quick insights.

### Scenario 1: Show a chart with the number of upcoming events in each city
**Given** the user is viewing the event details page
**When** the user scrolls to the "Charts" section
**Then** a chart should display the number of upcoming events in each city

