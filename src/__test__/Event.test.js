import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { render } from '@testing-library/react';
import mockData from "../mock-data";

const event = mockData[0]; // Use the first event from mock data

describe('<Event /> component', () => {
  let EventComponent; // Variable to hold rendered component

  beforeEach(() => {
    // Render the Event component before each test
    EventComponent = render(<Event event={event} />);
  });

  test('renders event title', () => {
    // Check if event title is rendered
    const eventTitle = EventComponent.queryByText(event.summary);
    expect(eventTitle).toBeInTheDocument();
  });

  test('renders event start time', () => {
    // Check if event start time is rendered
    const eventTime = EventComponent.queryByText(event.created);
    expect(eventTime).toBeInTheDocument();
  });

  test('renders event location', () => {
    // Check if event location is rendered
    const eventLocation = EventComponent.queryByText(event.location);
    expect(eventLocation).toBeInTheDocument();
  });

  // Show Details button
  test('renders event details button', () => {
    const detailButton = EventComponent.queryByText('Show Details');
    expect(detailButton).toBeInTheDocument();
  });

  test("event's details are hidden by default", () => {
    const eventDetails = EventComponent.container.querySelector('.eventDetails');
    expect(eventDetails).not.toBeInTheDocument();
  });

  test('shows details after user clicks on button "Show Details"', async () => {
    const user = userEvent.setup();

    const showDetailButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailButton);

    const eventDetailsDom = EventComponent.container.firstChild
    const eventDetails = eventDetailsDom.querySelector('.eventDetails');
    expect(eventDetails).toBeInTheDocument();
  });

  test('hides details after user clicks on button "Hide Details"', async () => {
    const user = userEvent.setup();

    const showDetailButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailButton);

    const hideDetailButton = EventComponent.queryByText('Hide Details');
    await user.click(hideDetailButton);

    const eventDetailsDom = EventComponent.container.firstChild;
    const eventDetails = eventDetailsDom.querySelector('.eventDetails');
    expect(eventDetails).not.toBeInTheDocument();
  });
});
