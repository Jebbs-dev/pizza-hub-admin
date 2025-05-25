import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AuthPage from './page';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';


// Mock next-auth and next/navigation
jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
  useSession: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const customRender = (ui: React.ReactElement) => {
  return render(
    <>
      <Toaster />
      {ui}
    </>
  );
};


describe('AuthPage', () => {
  const mockRouter = { push: jest.fn() };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (useSession as jest.Mock).mockReturnValue({ data: null, status: 'unauthenticated' });
    (signIn as jest.Mock).mockClear();
    mockRouter.push.mockClear();
  });

  it('renders the sign-in button', () => {
    render(<AuthPage />);
    expect(screen.getByText('Sign in with Google')).toBeInTheDocument();
  });

  it('calls signIn when the sign-in button is clicked', () => {
    render(<AuthPage />);
    fireEvent.click(screen.getByText('Sign in with Google'));
    expect(signIn).toHaveBeenCalledWith('google', { callbackUrl: '/' });
  });

  it('shows loading state when status is loading', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null, status: 'loading' });
    render(<AuthPage />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('redirects to home when user is authenticated', () => {
    (useSession as jest.Mock).mockReturnValue({ data: { user: {} }, status: 'authenticated' });
    render(<AuthPage />);
    expect(mockRouter.push).toHaveBeenCalledWith('/');
  });

it('shows error toast when sign-in fails', async () => {
  (signIn as jest.Mock).mockRejectedValue(new Error('Sign-in failed'));
  customRender(<AuthPage />);
  fireEvent.click(screen.getByText('Sign in with Google'));
  
  const toastTitle = await screen.findByText('Authentication Error');
  const toastDescription = await screen.findByText('Failed to sign in with Google. Please try again.');
  expect(toastTitle).toBeInTheDocument();
  expect(toastDescription).toBeInTheDocument();
});
}); 