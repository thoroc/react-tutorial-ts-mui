import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/pages/Page', () => () => (
  <div data-testid="test-page" />
));

describe('App component', () => {
  describe('When app is rendered', () => {
    it('should contains a Page component', () => {
      // Arrange
      render(<App />);

      // Act
      const pageElement = screen.queryByTestId('test-page');

      // Assert
      expect(pageElement).toBeInTheDocument();
    });
  });
});
