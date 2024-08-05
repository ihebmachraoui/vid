import Link from 'next/link';

const centerButtonStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // This ensures the buttons take up the full height of the viewport
};

const HomePage = () => {
  return (
    <>
    <div style={centerButtonStyle} className="page-content">
      {/* <h1>Welcome to the Home Page</h1> */}
      <a href="/add-student-to-cohort" className='text-sm lg:text-3xl font-black'>Authentication (Signup & Login) Will be here.</a>
      
    </div>
    </>
  );
};

export default HomePage;
