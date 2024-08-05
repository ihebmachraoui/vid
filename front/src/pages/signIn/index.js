import { useRouter } from 'next/router';
import Link from 'next/link';

const SignIn = () => {
  const router = useRouter();

  const handleSignIn = () => {
    // Implement your sign-in logic here
    // If sign-in is successful, redirect to the main page
    router.push('/mainPage');
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign In</button>
      <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
