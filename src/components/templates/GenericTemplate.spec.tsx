import { render } from '@testing-library/react';
import GenericTemplate from './GenericTemplate';

describe('GenericTemplate component', () => {
  describe('When GenericTemplate is rendered', () => {
    it('Should contains a header', () => {
      const { queryByText } = render(
        <GenericTemplate>
          <div>foo</div>
        </GenericTemplate>,
      );

      expect(
        queryByText(
          'React Tic-Tac-Toe Tutorial (TypeScript and Material-UI ver.)',
        ),
      ).toBeInTheDocument();
      expect(queryByText('foo')).toBeInTheDocument();
    });
  });
});
