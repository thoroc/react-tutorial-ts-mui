import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/pages/Page', () => ({
  Page: () => <mock-page data-testid="page" />,
}));

test('If App is passed the open prop App is rendered', () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId('page')).toBe(true);
});
