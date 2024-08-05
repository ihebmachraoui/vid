import Link from 'next/link';

const MainPage = () => {
  return (
    <div>
      <div className='absolute flex justify-center items-center w-full h-full'>
      
      <Link href="/anotherPage">
        <div>Go to Another Page</div>
      </Link>
      </div>
    </div>
  );
};

export default MainPage;
