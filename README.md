# MEET APP

**_MEET_ is a progressive web app (PWA) designed for event discovery, allowing users to view upcoming events in specific cities. Built with a serverless backend and offline capabilities, MEET offers a seamless, responsive experience across devices. Developed using test-driven development (TDD), it ensures code quality and reliability. The app is hosted online for easy access and installation, leveraging serverless architecture and modern data visualization techniques to provide an efficient and engaging user experience. Ideal for professionals, recruiters can view the source code directly on GitHub.**



## Feature 1: Filter Events By City

As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

### Scenario 1
When user hasn’t searched for a specific city, show upcoming events from all cities.

**Given** user hasn’t searched for any city  
**When** the user opens the app  
**Then** the user should see a list of upcoming events
### Scenario 2
User should see a list of suggestions when they search for a city.

**Given** the main page is open  
**When** user starts typing in the city textbox  
**Then** the user should receive a list of cities (suggestions) that match what they’ve typed
### Scenario 3
User can select a city from the suggested list.

**Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing  
**When** the user selects a city (e.g., “Berlin, Germany”) from the list  
**Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city


## Feature 2: Show/Hide Event Details
As a user, I should be able to toggle event details on and off, so that I can quickly access or hide more information as needed without cluttering the screen.

### Scenario 1: User toggles event details on
**Given** I am on the events page  
**When** I click on the "Show Details" button for an event  
**Then** I should see the event details expanded for that event

### Scenario 2: User toggles event details off
**Given** I am viewing expanded event details for an event  
**When** I click on the "Hide Details" button for that event  
**Then** I should see the event details collapsed for that event


## Feature 3: Specify Number of Events
As a user, I should be able to specify the number of events I want to see, so that I can customize my event list to fit my needs or device screen size.

### Scenario: User specifies a number of events to display
**Given** I am on the events page  
**When** I select "5" from the "Number of Events" dropdown  
**Then** I should see only 5 events displayed on the page


## Feature 4: Use the App When Offline
As a user, I should be able to use the app while offline, so that I can access my event details even without an internet connection.

### Scenario: User accesses app while offline
**Given** I am offline  
**When** I open the events app  
**Then** I should see the events list I last viewed before going offline
And I should not see a "no internet connection" error


## Feature 5: Add an App Shortcut to the Home Screen
As a user, I should be able to add a shortcut to the app on my home screen, so that I can easily access the app without opening my browser or searching for it.

### Scenario: User adds app shortcut to home screen
**Given** I am using the app in a supported mobile browser  
**When** I click on the "Add to Home Screen" button  
**Then** I should see a confirmation that the app has been added to my home screen


## Feature 6: Display Charts Visualizing Event Details
As a user, I should be able to view charts that visualize event details, so that I can better understand trends and insights from the event data at a glance.

### Scenario: User views charts visualizing event details
**Given** I am viewing the event details page  
**When** I scroll to the "Charts" section  
Then I should see charts visualizing the event details, such as attendance and time trends
