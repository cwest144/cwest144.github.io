import './App.css';

import github from './icons/github.png';
import linkedin from './icons/linkedin.png';
import igem from './images/igem.png';
import Project from './components/project';

function App() {
  return (
    <div className="App w-screen">
      <header className="sticky top-0">
        <div className="w-full flex flex-row py-4 px-4 md:px-16 border-b border-b-gray-400 bg-white/70 backdrop-blur">
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
              <div className='flex flex-col space-y-3 text-left text-sm sm:text-base mx-4 md:mx-16 lg:mx-36'>
                <div>
                I am a full stack software engineer with primary experience in PHP, Laravel, React, and React - Native.
                For the past year I've been in an entrepreneurial role at a <a href="https://highsidelabs.co" target="_blank" rel="noreferrer" className='text-blue-800'>small software consultancy </a>
                and have had a hand in all aspects of projects from start to finish.
                We pride ourselves on building organized and efficient applications; writing aesthetic and clean code; and creating effective and beautiful designs for our users.
                </div>
                <div>
                I also enjoy building mobile apps; I am currently working on an early-stage social media app for sharing and tracking movie, tv, and book recommendations with friends.
                </div>
                <div>
                I received my undergraduate degree in Computer Science and Mathematics from Yale. I currently live in Brooklyn and enjoy running, mixing up inventive cocktails, and seeing live music.
                </div>
                <div className="pt-4 text-center">
                  Email: <a href = "mailto: chris@chriswest.dev">chris@chriswest.dev</a>
                </div>
              </div>
            </div>
            <div className="w-2/3 border-b border-b-gray-300"></div>
            <div className='flex flex-col space-y-4 align-content-center'>
              <div className='text-2xl'>
                Frontend
              </div>
              <Project title="NYC Subway Train Arrivals App">
                <div>
                  Languages: React Native, PHP
                </div>
                <div className="text-left">
                  "Here" is an iOS app I designed to quickly show the upcoming trains at nearby subway stations.
                  The app has a minimal design and displays up-to-date information immediately upon opening the app.
                  I designed, built, and deployed a backend for the app which encodes the subway system information in a
                  Postgres database and fetches data from the MTA API every 30 seconds, so that requests from the frontend can be responded to quickly.
                  The app is currently being beta tested and will be released on the app store soon.
                </div>
                <div>
                  <a href="https://github.com/cwest144/subway-app" target="_blank" rel="noreferrer" className="text-blue-800"> View the github for the frontend here</a>.
                </div>
              </Project>
              <Project title="LabDAO iGEM Team Website" image={igem} reverse={true}>
                <div>
                  Languages: React, Next.js, Tailwind
                </div>
                <div className="text-left">
                  Each year the iGEM Foundation presents a worldwide competition to further the development of synthetic biology.
                  LabDAO, a decentralized organization focused on democratizing access to biotechnology (for researchers, consumers, and investors alike) created a team for the 2023 iGEM competition,
                  and this page serves to announce that team.
                </div>
                <div>
                  <a href="https://igem.labdao.xyz/" target="_blank" rel="noreferrer" className="text-blue-800">View the website here</a>.
                </div>
              </Project>
              <div>
              </div>
            </div>
            <div className="w-2/3 border-b border-b-gray-300"></div>
            <div className='flex flex-col space-y-4 pb-8 align-content-center'>
              <div className='text-2xl'>
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
