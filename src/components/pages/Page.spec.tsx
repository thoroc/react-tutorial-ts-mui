import { render, screen } from '@testing-library/react';
import Page from './Page';

jest.mock('../templates/GenericTemplate', () => () => (
  <div data-testid="test-genericTemplate">
    <div data-testid="test-game" />
  </div>
));

describe('Page component', () => {
  describe('When page is rendered', () => {
    it('should contains a GenericTemplate component', () => {
      // Arrange
      render(<Page />);

      // Act
      const gameElement = screen.queryByTestId('test-game');

      // Assert
      expect(gameElement).toBeInTheDocument();
    });

    it('should contains a Game component', () => {
      // Arrange
      render(<Page />);

      // Act
      const genericTemplateElement = screen.queryByTestId(
        'test-genericTemplate',
      );

      // Assert
      expect(genericTemplateElement).toBeInTheDocument();
    });
  });
});
