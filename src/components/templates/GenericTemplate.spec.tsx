import { render, screen } from '@testing-library/react';
import GenericTemplate from './GenericTemplate';

describe('GenericTemplate component', () => {
  describe('When GenericTemplate is rendered', () => {
    it('Should contains a header', () => {
      // Arrange
      render(
        <GenericTemplate>
          <div>foo</div>
        </GenericTemplate>,
      );

      // Act
      const headingElement = screen.getByRole('heading', {
        name: 'React Tic-Tac-Toe Tutorial (TypeScript and Material-UI ver.)',
      });
      const childElement = screen.queryByText(/foo/i);

      // Assert
      expect(headingElement).toBeInTheDocument();
      expect(childElement).toBeInTheDocument();
    });
  });
});
