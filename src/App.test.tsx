import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/pages/Page', () => () => (
  <div data-testid="test-page" />
));

describe('App component', () => {
  describe('When app is rendered', () => {
    it('should contains a Page component', () => {
      const { queryByTestId } = render(<App />);
      expect(queryByTestId('test-page')).toBe(true);
    });
  });
});
