import './App.css';

import github from './icons/github.png';
import linkedin from './icons/linkedin.png';
import igem from './images/igem.png';
import here from './images/here.png';
import freck from './images/freck.png';
import Project from './components/project';

function App() {
  return (
    <div className="App w-screen bg-white">
      <header className="sticky top-0">
        <div className="w-full flex flex-row py-4 px-4 sm:px-8 md:px-16 border-b border-b-gray-400 bg-white/70 backdrop-blur">
          <div className="w-full flex flex-row items-center justify-between max-w-screen-xl mx-auto">
            <div className='basis-1/3 flex justify-start text-md sm:text-lg font-medium'>
              Chris West
            </div>
            <div className='basis-1/3 text-lg sm:text-xl font-medium'>
              Portfolio
            </div>
            <div className='basis-1/3 flex justify-end'>
              <a href = "https://github.com/cwest144" target="_blank" rel="noreferrer" className='text-md sm:text-lg font-medium mr-4 md:mr-6'>
                Github
              </a>
              <a className='text-md sm:text-lg font-medium' href='http://cwest144.com' target='_blank' rel="noreferrer">
                Blog
              </a>
            </div>
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
              <div className='flex flex-col space-y-3 text-left text-base mx-4 md:mx-16 lg:mx-36'>
                <div>
                I am a full stack software engineer with primary experience in PHP, Laravel, React, and React Native.
                For the past year I've been in an entrepreneurial role at a <a href="https://highsidelabs.co" target="_blank" rel="noreferrer" className='text-blue-800'>small software consultancy </a>
                and have had a hand in all aspects of projects from start to finish.
                We pride ourselves on building organized and efficient applications; writing aesthetic and clean code; and creating effective and beautiful designs for our users.
                </div>
                <div>
                I also enjoy building mobile apps; I am currently working on an early-stage social media app for sharing and tracking movie, TV show, book, and article recommendations with friends.
                </div>
                <div>
                I received my undergraduate degree in Computer Science and Mathematics from Yale. I currently live in Brooklyn and enjoy running, mixing up inventive cocktails, and seeing live music.
                </div>
                <div className="pt-4 text-center">
                  Email: <a href = "mailto: chris@chriswest.dev">chris@chriswest.dev</a>
                </div>
                <div className="text-center">
                  Github: <a href = "https://github.com/cwest144" target="_blank" rel="noreferrer" className='text-blue-800'>/cwest144</a>
                </div>
              </div>
            </div>
            <div className="w-2/3 border-b border-b-gray-300"></div>
            <div className='flex flex-col space-y-6 md:space-y-12 align-content-center'>
              <div className='text-2xl'>
                Frontend Projects
              </div>
              <Project title="Freck - media sharing app" image={freck}>
                <div className="text-left">
                  Key Technologies: React Native, Javascript, PHP, Laravel, Postgres
                </div>
                <div className="text-left">
                  Freck is a full-fledged social media iOS app I built with a colleague. It's a platform for sharing movie, TV show, book,
                  article, and video recommendations with friends, as well as for keeping track of your own want-to-watch list.
                  The app is built in React Native and features avatar storage in Amazon S3, two-factor authentication for logging in users,
                  navigation with the react navigation package, integration with the iOS notification system, and styling with Native Base.
                  I single-handedly built and deployed the PHP / Laravel backend for the app, which is connected to a Postgres database and which handles all API requests to external resources.
                </div>
                {/* <div>
                  <a href="https://github.com/cwest144/subway-app" target="_blank" rel="noreferrer" className="text-blue-800"> View the github for the frontend here</a>
                </div> */}
              </Project>
              <Project title="Here - NYC subway train arrivals app" image={here} reverse={true}>
                <div className="text-left">
                  Key Technologies: React Native, Javascript, PHP, Laravel, Postgres
                </div>
                <div className="text-left">
                  "Here" is an iOS app I designed to quickly show the upcoming trains at nearby subway stations.
                  The app has a minimal design and displays up-to-date information immediately upon opening the app.
                  I designed, built, and deployed a backend for the app which encodes the subway system information in a
                  Postgres database and fetches data from the MTA API every 30 seconds, so that requests from the frontend can be responded to quickly.
                </div>
                <div>
                  <a href="https://apps.apple.com/us/app/here-nyc-subway-arrivals/id6446206683" target="_blank" rel="noreferrer" className="text-blue-800">View the app on the store here</a>
                </div>
              </Project>
              <Project title="LabDAO iGEM Team Website" image={igem}>
                <div className="text-left">
                  Key Technologies: React, Next.js, Javascript, Tailwind
                </div>
                <div className="text-left">
                  Each year the iGEM Foundation presents a worldwide competition to further the development of synthetic biology.
                  LabDAO, a decentralized organization focused on democratizing access to biotechnology (for researchers, consumers, and investors alike) created a team for the 2023 iGEM competition,
                  and this page serves to announce that team.
                </div>
                <div>
                  <a href="https://igem.labdao.xyz/" target="_blank" rel="noreferrer" className="text-blue-800">View the website here</a>
                </div>
              </Project>
              <div>
              </div>
            </div>
            <div className="w-2/3 border-b border-b-gray-300"></div>
            <div className='flex flex-col space-y-6 md:space-y-12 pb-12 md:pb-24 align-content-center'>
              <div className='text-2xl'>
                Backend Projects
              </div>
              <Project title="Amazon Buybox Tracking">
                <div>
                  Key Technologies: PHP, Laravel, Postgres
                </div>
                <div className="text-left">
                  I designed and built a bespoke application to track the ranking of each of an Amazon third-party seller's tens-of-thousands of
                  products relative to other listings for the same item. There were four primary components to this project. First, I designed and implemented a relational Postgres database schema
                  with nine models, some with over 40,000 active listings. Second, I set up a system using Laravel jobs and queues to retrieve and
                  process thousands of Amazon SQS notifications daily, which is how the application is notified of changes to a product's ranking.
                  Third, I wrote all of the business logic to process each of the four notification types and update the database accordingly.
                  Finally, I designed a REST API, which is how the client retrieves data from the application.
                  This application has enabled the client to keep track of, and quickly respond to changes in, the competitiveness of thousands
                  of their products, which is a feature that Amazon does not provide in an easily-accessible manner.
                </div>
                <div>
                  <a href="https://github.com/cwest144/laravel-project-code-sample" target="_blank" rel="noreferrer" className="text-blue-800">View a code sample on github</a>
                </div>
              </Project>
              <Project title="Walmart and Amazon Inventory Updates">
                <div>
                  Key Technologies: PHP, Laravel, Postgres
                </div>
                <div className="text-left">
                  With my colleague, I designed and coded a cross-marketplace inventory update application using PHP and Laravel. The application utilizes
                  the Amazon and Walmart APIs to automatically update a Postgres database when inventory counts change on the marketplace. I was responsible
                  for researching and integrating with the Walmart API. This application automated a tedious process for the client, providing time savings and
                  removing human error.
                </div>
              </Project>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="w-full flex flex-row py-4 md:py-8 px-4 md:px-16 bg-gray-800">
          <div className="w-full flex flex-row justify-center md:justify-start items-center space-x-6 max-w-screen-xl mx-auto">
            <a href="https://github.com/cwest144" target="_blank" rel="noreferrer">
              <img src={github} className="w-6" alt="guthub logo"/>
            </a>
            <a href="https://www.linkedin.com/in/chriswest144/" target="_blank" rel="noreferrer">
              <img src={linkedin} className="w-6" alt="linkedin logo"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
