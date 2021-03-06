import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import store from './store';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';

import ContentHeader from 'components/ContentHeader';
import PersonnelList from 'components/PersonnelList';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import App from './App';

const server = setupServer(
  rest.get('https://randomuser.me/api/?page=1&results=4&seed=abc', (req, res, ctx) => {
    return res(ctx.json({results: [
      {
        "name": {
          "title": "Mr",
          "first": "Aburizal",
          "last": "Adi Nugroho"
        },
        "email": "aburizal853@gmail.com",
        "dob": {
          "date": "1998-05-08T11:50:25.558Z",
          "age": 24
        },
        "cell": "0812-9832-3639",
        "id": {
          "name": "INSEE",
          "value": "2NNaN01776236 16"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/88.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
        },
      },
    ]}))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Renders Content Header Component', () => {
  render(<ContentHeader />);
  const HeaderText = screen.getByText(/PERSONNEL LIST/i);
  const InputPlaceholder = screen.getByPlaceholderText(/Find Personnels/i);
  const ButtonText = screen.getByText(/Add Personnel/i);
  expect(HeaderText).toBeInTheDocument();
  expect(InputPlaceholder).toBeInTheDocument();
  expect(ButtonText).toBeInTheDocument();
})

test('Renders PersonnelList Component', async () => {
  const history = createMemoryHistory();

  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <PersonnelList />
      </Router>
    </Provider>
  );

  const name = await screen.findByText(/Aburizal Adi Nugroho/i);
  const birthday = await screen.findByText(/08 May/i);
  const email = await screen.findByText(/aburizal853@gmail.com/i);
  const phone = await screen.findByText(/0812-9832-3639/i);

  expect(name).toBeInTheDocument();
  expect(birthday).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(phone).toBeInTheDocument();
})

test('Renders Navbar Component', () => {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
  const NavbarText = screen.getByText(/Gadjian User/i);
  expect(NavbarText).toBeInTheDocument();
})

test('Render Sidebar Component', async () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <Sidebar />
      </Router>
    </Provider>
  );
  
  expect(screen.getByTitle('Beranda')).toBeInTheDocument();
  expect(screen.getByTitle('Personnel List')).toBeInTheDocument();
  expect(screen.getByTitle('Daily Attendance')).toBeInTheDocument();
})

test('Click Link Beranda', async () => {
  render(<App />)

  expect(screen.getByTitle('Beranda')).toBeInTheDocument();
  fireEvent.click(screen.getByTitle('Beranda'));

  await waitFor(() => screen.findByRole('heading'));

  expect(screen.getByRole('heading')).toHaveTextContent('Beranda')
})

test('Click Link Personnel List', async () => {
  render(<App />)

  expect(screen.getByTitle('Personnel List')).toBeInTheDocument();
  fireEvent.click(screen.getByTitle('Personnel List'));

  await waitFor(() => screen.findByRole('heading'));

  expect(screen.getByRole('heading')).toHaveTextContent(/Personnel List/i)
})

test('Click Link Daily Attendance', async () => {
  render(<App />)

  expect(screen.getByTitle('Daily Attendance')).toBeInTheDocument();
  fireEvent.click(screen.getByTitle('Daily Attendance'));

  await waitFor(() => screen.findByRole('heading'));

  expect(screen.getByRole('heading')).toHaveTextContent('Daily Attendance')
})
