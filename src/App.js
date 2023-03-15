import './App.css';

import github from './icons/github.png';
import linkedin from './icons/linkedin.png';

function App() {
  return (
    <div className="App w-screen">
      <header className="sticky top-0">
        <div className="w-full flex flex-row py-4 px-4 md:px-16 border-b border-b-gray-400 bg-white">
          <div className="w-full flex flex-row items-center justify-between max-w-screen-xl mx-auto">
            <div className='text-md sm:text-lg'>
              Chris West
            </div>
            <div className='text-lg sm:text-xl'>
              Portfolio
            </div>
            <a className='text-md sm:text-lg' href='http://cwest144.com' target='_blank' rel="noreferrer">
              Go to blog
            </a>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-screen-xl mx-auto min-h-screen">
          <div className='flex flex-col w-full content-start items-center space-y-10 mt-4 md:mt-12 px-4 md:px-16'>
            <div className='flex flex-col space-y-3 align-content-center'>
              <div className='text-xl'>
                About
              </div>
              <div className='text-sm sm:text-base mx-4 md:mx-16 lg:mx-36'>
                I am a full stack software engineer with primary experience in PHP, Laravel, React, and React - Native.
                For the past year I've been in an entrepreneurial role at a <a href="https://highsidelabs.co" target="_blank" rel="noreferrer" className='text-blue-800'>small software consultancy </a>
                and have had a hand in all aspects of projects from start to finish.
                We pride ourselves on building organized and efficient applications; writing aesthetic and clean code; and creating effective and beautiful designs for our users.
                I also enjoy building mobile apps; I am currently working on an early-stage social media app for sharing and tracking movie, tv, and book recommendations with friends.
                I received my undergraduate degree in Computer Science and Mathematics from Yale. I currently live in Brooklyn and enjoy running, mixing up inventive cocktails, and seeing live music.
              </div>
              <div>
                Email: <a href = "mailto: chris@chriswest.dev">chris@chriswest.dev</a>
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
      </main>
      <footer>
      <div className="w-full flex flex-row py-4 md:py-8 px-4 md:px-16 bg-gray-800">
          <div className="w-full flex flex-row justify-center md:justify-start items-center space-x-6 max-w-screen-xl mx-auto">
            <a href="https://github.com/cwest144" target="_blank" rel="noreferrer">
              <img src={github} className="w-6" />
            </a>
            <a href="https://www.linkedin.com/in/chriswest144/" target="_blank" rel="noreferrer">
              <img src={linkedin} className="w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
