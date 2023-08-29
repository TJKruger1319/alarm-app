import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AlarmList and Clock component', () => {
  render(<App />);
  const AlarmList = screen.getByTestId("AlarmList");
  const Clock = screen.getByTestId("Clock");
  expect(AlarmList).toBeInTheDocument();
  expect(Clock).toBeInTheDocument();
});

it("matches snapshot", function() {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});