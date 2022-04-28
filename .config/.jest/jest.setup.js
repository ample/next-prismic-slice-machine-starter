const mockedUseRouter = {
  asPath: '/',
  back: jest.fn(),
  events: {
    emit: jest.fn(),
    on: jest.fn(),
    off: jest.fn(),
  },
  pathname: '',
  prefetch: jest.fn(),
  push: jest.fn(),
  query: {},
  replace: jest.fn(),
};

jest.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => mockedUseRouter,
}));
