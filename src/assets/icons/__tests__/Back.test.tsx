import { render } from '@testing-library/react';
import { BackIcon } from '../Back';

describe('BackIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<BackIcon />);

    expect(container).toMatchSnapshot();
  });
});
