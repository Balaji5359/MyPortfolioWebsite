import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import myimage from '@/assets/my-image.jpg'
import { Arrow } from '@radix-ui/react-tooltip';
// import myfullimage from '@/assets/my-full-image.jpg'

const Hero = () => {
  // Removed skills and stats for About Me redesign

  return (
    <section className="min-h-screen px-6 py-52 md:py-32 flex items-center" id="home">
      <div className="container mx-auto">
        {/* Header with name and photo */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Hi, I'm Balaji
            </h1>
            <h2 className="text-xl md:text-4xl text-muted-foreground mb-4">
              Tech Enthusiastic
            </h2 >
            <h3 className="text-lg md:text-1xl text-muted-foreground mb-6">
              I love building Innovative solutions to solve real-world problems,<br></br> with Tech as my passion.
            </h3>

            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                See My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline">
                <ArrowRight className="ml-2 h-6 w-6" />
                Let's Connect
              </Button>
            </div>
          </div>
          <div className="flex justify-center mb-16">

        </div>
          <div className="flex-shrink-0">
            <div className="w-60 h-58 rounded-full overflow-hidden border-5 border-primary/20 shadow-lg">
            
              <img 
                src={myimage} 
                alt="R. Balaji"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Place full photo beside my photo */}
        

        {/* About Me Section as in image */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Left: About Me Text */}
          <div className="md:w-2/3 bg-white dark:bg-card rounded-lg p-8 shadow">
            <h3 className="text-2xl font-bold mb-6">About Me</h3>
            <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
              I'm a final-year B.Tech student and an aspiring entrepreneur, driven by a passion for creating impactful technology. 
              My journey is rooted in a strong command of AI/ML, Data Science, AWS Cloud, and Full Stack Development, with a special focus on Generative AI and DevOps. 
              I thrive on bridging the gap between innovative ideas and real-world applications.
              <br></br>
              My expertise is built on hands-on experience, having developed over 15 projects that span across multiple domains, 
              including AI Agents, Augmented Reality (AR), Full Stack Projects, and business intelligence with Power BI. 
              I'm an ardent believer in the power of the cloud, and my proficiency in AWS allows me to design and deploy scalable solutions seamlessly.
              <br></br>
              Beyond technical skills, I possess strong communication, Team Lead and interpersonal abilities that enable me to collaborate effectively 
              and translate complex ideas into clear, actionable plans. Whether I’m architecting a new system or solving a critical problem, 
              my focus is always on building innovative, efficient, and scalable solutions that make a tangible difference.
            </p><br></br>
            <div>
              <h3 className="text-2xl font-bold mb-6">Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700">
                  <span className="block text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">2+</span>
                  <span className="block text-base text-gray-700 dark:text-gray-200">Years of Programming Experience</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700">
                  <span className="block text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">1+</span>
                  <span className="block text-base text-gray-700 dark:text-gray-200">Year of AWS Cloud Experience</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700">
                  <span className="block text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">30+</span>
                  <span className="block text-base text-gray-700 dark:text-gray-200">AWS Services Hands-on Experience</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700">
                  <span className="block text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">15+</span>
                  <span className="block text-base text-gray-700 dark:text-gray-200">Projects Developed</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700">
                  <span className="block text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">20+</span>
                  <span className="block text-base text-gray-700 dark:text-gray-200">AI Tools Known</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700">
                  <span className="block text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">15+</span>
                  <span className="block text-base text-gray-700 dark:text-gray-200">Packages and Frameworks Known</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700">
                  <span className="block text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">300+</span>
                  <span className="block text-base text-gray-700 dark:text-gray-200">Problems solved on GFG and HackerRank</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700">
                  {/* down arrow */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-blue-700 dark:text-blue-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="block text-base text-gray-700 dark:text-gray-200">much more.... below about me</span>
                </div>
              </div>
            </div>

          </div>
          {/* Right: Education and Trainings Card */}
          <div className="md:w-1/3 bg-gray-50 dark:bg-card rounded-lg p-8 shadow flex flex-col gap-6">
            <div>
              <h4 className="text-lg font-bold mb-2">Education</h4>
              <p className="font-semibold">B.Tech in Computer Science and Technology</p>
              <p className="text-sm">MADANAPALLE INSTITUTE OF TECHNOLOGY & SCIENCE<br />2022-2026<br />GPA: 8.96/10</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Online Trainings Completed</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Python Programming</li>
                <li>Internship and Job Training</li>
                <li>Machine Learning Training</li>
                <li>Data Science Training</li>
                <li>Web Development Training</li>
                <li>Power BI Training</li>

              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">Online Conferences and Summit Attended</h4>
              <ul className="list-disc list-inside text-sm">
                <li>AWSome Day (AWS One Day online conference)</li>
                <li>AWS Summit 2025 - India (GenAI-Applications)</li>
                <li>AWS Summit 2025 – New York (Agentic AI Evolution)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">Offline Summit Attended</h4>
              <ul className="list-disc list-inside text-sm">
                <li>SU Summit 2025 - Banglore</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Cloud Online Trainings</h4>
              <ul className="list-disc list-inside text-sm">
                <li>AWS SkillBuilder and Educate Training</li>
                <li>AWS Educate 10+ Training on mutiple Services</li>
                <li>AWS Cloud Practitioner Essentials</li>
                <li>AWS Bedrock and Building GenAI Applications</li>
                <li>AWS Academy Cloud Foundations</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">Hackthons and Competative Exams</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Smart India Hackthon 2025 - Finalist (5-Teams MITS)</li>
                <li>Smart India Hackthon 2024 - Finalist (1-Team MITS)</li>
                <li>GATE-DA 2025 Qualifed - AIR 7217</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;