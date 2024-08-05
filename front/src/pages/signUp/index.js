import { useRouter } from 'next/router';

const SignUp = () => {
  const router = useRouter();

  const handleSignUp = () => {
    // Implement your sign-up logic here
    // If sign-up is successful, redirect to the main page
    router.push('/mainPage');
  };

  return (
    <>
    <div className='absolute flex justify-center items-center w-full h-full'>
        <div className='text-center'>
          <h1>Sign Up</h1>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
