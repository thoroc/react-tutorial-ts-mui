import { render, screen } from '@testing-library/react';
import GenericTemplate from './GenericTemplate';

describe('GenericTemplate component', () => {
  describe('When GenericTemplate is rendered', () => {
    it('Should contains a header', () => {
      render(
        <GenericTemplate>
          <div>foo</div>
        </GenericTemplate>,
      );

      expect(
        screen.queryByText(
          'React Tic-Tac-Toe Tutorial (TypeScript and Material-UI ver.)',
        ),
      ).toBeInTheDocument();
      expect(screen.queryByText('foo')).toBeInTheDocument();
    });
  });
});
