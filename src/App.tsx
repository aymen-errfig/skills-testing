import './App.css';
import { useEffect, useState } from 'react';
import { LoginForm } from '@/components/LoginForm';
import { SignUpForm } from '@/components/SignUpForm';

type AuthView = 'login' | 'signup';

function getViewFromHash(): AuthView {
  return window.location.hash === '#signup' ? 'signup' : 'login';
}

function App() {
  const [view, setView] = useState<AuthView>(getViewFromHash());

  useEffect(() => {
    const handleHashChange = () => setView(getViewFromHash());

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    view === 'signup' ? <SignUpForm /> : <LoginForm />
  );
}

export default App
