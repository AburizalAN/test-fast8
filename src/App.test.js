import { render, screen } from '@testing-library/react';
import ContentHeader from 'components/ContentHeader';

test('renders Content Header Component', () => {
  render(
    <ContentHeader />
  );
  const HeaderText = screen.getByText(/PERSONNEL LIST/i);
  expect(HeaderText).toBeInTheDocument();
})
