import './App.css';

import github from './icons/github.png';
import linkedin from './icons/linkedin.png';
import me from './images/me.jpg';
// import igem from './images/igem.png';
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
              <a href = "https://github.com/cwest144" target="_blank" rel="noreferrer" className='text-md sm:text-lg font-medium mr-4 md:mr-6 lg:mr-8'>
                Github
              </a>
              <a href = "https://www.linkedin.com/in/cwest144" target="_blank" rel="noreferrer" className='text-md sm:text-lg font-medium md:mr-6 lg:mr-8'>
                LinkedIn
              </a>
              <a className='text-md sm:text-lg font-medium hidden md:block' href='http://cwest144.com' target='_blank' rel="noreferrer">
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
              
              <div className='text-2xl font-medium'>
                About
              </div>
              <div className='flex flex-col-reverse md:flex-row space-x-0 md:space-x-8 items-center lg:mx-16'>
                <div className="flex basis-1/3 xl:basis-1/4 max-w-[300px] mt-8 md:mt-0">
                    <img src={me} className="object-contain rounded-lg" alt="me"/>
                </div>
                <div className='flex flex-col basis-2/3 xl:basis-3/4 space-y-3 text-left text-base'>
                  <div>
                  I am a fullstack software engineer with primary experience in Javascript, PHP, Python, and Swift.
                  I'm passionate about working in climate or public transportation, or anything to make the world a bit better. At <a href="https://www.pandium.com" target="_blank" rel="noreferrer" className='text-blue-800'>Pandium</a>, an industry-leading integrations platform,
                  I was a primary developer on an integration between a top-five social media app and a fulfillment platform which synced over 100,000 orders daily.  
                  Before that I had an entrepreneurial role at <a href="https://highsidelabs.co" target="_blank" rel="noreferrer" className='text-blue-800'>Highside Labs</a>, a small software consultancy I founded with a friend.
                  We specialized in writing bespoke e-commerce integrations, primarily for Amazon 3rd party sellers.
                  </div>
                  <div>
                  I also enjoy building mobile apps; I am currently working on adding features to my popular NYC subway app.
                  </div>
                  <div>
                  I received my undergraduate degree in Computer Science and Mathematics from Yale. I live in Brooklyn and enjoy running, biking, and finding my next favorite coffee shop.
                  </div>
                  <div className="pt-4 text-center">
                    Email: <a href = "mailto: chris@chriswest.dev" className='text-blue-800'>chris@chriswest.dev</a>
                  </div>
                  <div className="text-center">
                    Github: <a href = "https://github.com/cwest144" target="_blank" rel="noreferrer" className='text-blue-800'>/cwest144</a>
                  </div>
                </div>
              </div>

            </div>
            <div className="w-2/3 border-b border-b-gray-300"></div>
            <div className='flex flex-col space-y-6 md:space-y-12 align-content-center'>
              <div className='text-2xl font-medium'>
                Fullstack Projects
              </div>
              <Project title="Freck &mdash; Media Sharing App" image={freck}>
                <div className="text-left">
                  Key Technologies: Javascript, PHP, PostgreSQL
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
              <Project title="Here &mdash; NYC Subway App" image={here} reverse={true}>
                <div className="text-left">
                  Key Technologies: Swift, PHP, PostgreSQL
                </div>
                <div className="text-left">
                  "Here" is an iOS app I designed to quickly show the upcoming trains at nearby subway stations. When I released it in 2023 it quickly gained popularity and received praise, and briefly
                  sat at spot #98 in most popular transportation apps on the app store. I was encouraged by the reception and have been consistently adding features and making performance improvements since then.
                  Most notably, I redesigned the app in Swift (it was originally in React Native) and added Widget and Watch support. The backend, which I built in PHP/Laravel, handles the GTFS feed parsing and
                  maintains the subway system information in a Postgres database.
                </div>
                <div>
                  <a href="https://apps.apple.com/us/app/here-nyc-subway-arrivals/id6446206683" target="_blank" rel="noreferrer" className="text-blue-800">View on the Apple app store</a>
                </div>
                <div>
                  <a href="https://github.com/cwest144/mta-subway" target="_blank" rel="noreferrer" className="text-blue-800">View code excerpt on Github</a>
                </div>
              </Project>
              {/* <Project title="LabDAO iGEM Team Website" image={igem}>
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
              </Project> */}
              <div>
              </div>
            </div>
            <div className="w-2/3 border-b border-b-gray-300"></div>
            <div className='flex flex-col space-y-6 md:space-y-12 pb-12 md:pb-24 align-content-center'>
              <div className='text-2xl font-medium'>
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
                  <a href="https://github.com/cwest144/laravel-project-code-sample" target="_blank" rel="noreferrer" className="text-blue-800">View code sample on Github</a>
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
            <a href="https://www.linkedin.com/in/cwest144/" target="_blank" rel="noreferrer">
              <img src={linkedin} className="w-6" alt="linkedin logo"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
