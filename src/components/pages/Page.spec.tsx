import { render } from '@testing-library/react';
import Page from './Page';

jest.mock('../templates/GenericTemplate', () => () => (
  <div data-testid="test-genericTemplate">
    <div data-testid="test-game" />
  </div>
));

describe('Page component', () => {
  describe('When page is rendered', () => {
    it('should contains a GenericTemplate component', () => {
      const { queryByTestId } = render(<Page />);
      expect(queryByTestId('test-game')).toBeInTheDocument();
    });
    it('should contains a Game component', () => {
      const { queryByTestId } = render(<Page />);
      expect(queryByTestId('test-genericTemplate')).toBeInTheDocument();
    });
  });
});
