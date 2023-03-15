import './App.css';

function App() {
  return (
    <div className="App w-screen">
      <header >
        <div className="w-full flex flex-row py-4 px-12 justify-between border-b border-b-gray-400">
          <div className='text-lg'>
            Chris West
          </div>
          <div className='text-xl'>
            Portfolio
          </div>
          <a className='text-lg' href='http://cwest144.com' target='_blank'>
            Go to blog
          </a>
        </div>
      </header>
      <div className='flex flex-col content-start items-center space-y-10 mt-12'>
        <div className='flex flex-col space-y-3 align-content-center'>
          <div className='text-xl'>
            About
          </div>
          <div className='text-md mx-48'>
            I am a full stack software engineer with primary experience in PHP, Laravel, React, and React - Native.
            For the past year I've been in an entrepreneurial role at a <a href="https://highsidelabs.co" target="_blank" className='text-blue-800'>small software consultancy </a>
            and have had a hand in all aspects of projects from start to finish.
            We pride ourselves on building organized and efficient applications; writing aesthetic and clean code; and creating effective and beautiful designs for our users.
            I also enjoy building mobile apps; I am currently working on an early-stage social media app for sharing and tracking movie, tv, and book recommendations with friends.
            I received my undergraduate degree in Computer Science and Mathematics from Yale. I currently live in Brooklyn and enjoy running, mixing up inventive cocktails, and seeing live music.
          </div>
        </div>
        <div className="w-2/3 border-b border-b-gray-300"></div>
        <div className='flex flex-col space-y-4 align-content-center'>
          <div className='text-xl'>
            Frontend
          </div>
          <div>

          </div>
        </div>
        <div className="w-2/3 border-b border-b-gray-300"></div>
        <div className='flex flex-col space-y-4 align-content-center'>
          <div className='text-xl'>
            Backend
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
