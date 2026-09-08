import Link from "next/link";
import { ArrowRight, Code, Github, Linkedin, Mail, Twitter, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ContactForm } from "@/components/contact-form";
import { AnimatedText } from "@/components/animated-text";
import { ParticleBackground } from "@/components/particle-background";
import { FaGraduationCap, FaCertificate, FaBriefcase, FaLightbulb, FaUserAlt, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdLocationCity } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ParticleBackground />
      <main className="flex-1">
        <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-6">
          <div className="container px-4 md:px-6 my-auto">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
                <div className="space-y-3">
                  <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Hi, I'm <span className="text-primary">Mohammed Shoaib</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl font-medium">
                    I'm{" "}
                    <AnimatedText
                      texts={["Pursuing MCA", "a Web Developer", "an Android Developer"]}
                      className="text-primary font-semibold"
                    />
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-lg">
                    Creating innovative digital experiences that make a difference.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden"
                  >
                    <Button className="w-full py-3 px-5 rounded-full">
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary/80 to-primary group-hover:w-full transition-all duration-500 ease-out"></span>
                      <span className="relative flex items-center justify-center text-white">
                        My Resume
                      </span>
                    </Button>
                  </a>

                  <Link href="#contact">
                    <Button className="group relative overflow-hidden">
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary/80 to-primary group-hover:w-full transition-all duration-500 ease-out"></span>
                      <span className="relative flex items-center">
                        Contact Me
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>

                  <Link href="#projects">
                    <Button
                      variant="outline"
                      className="group border-primary/20 hover:border-primary/50 transition-all duration-300"
                    >
                      <span className="bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat bg-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
                        View My Work
                      </span>
                    </Button>
                  </Link>
                </div>

                <div className="flex gap-3 pt-2">
                  <Link href="https://github.com/Shoaib232002" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/mohammed-shoaib-37633530a/" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://x.com/MdShoaib2302" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-purple-600 to-amber-500 opacity-70 blur-md group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88 rounded-full overflow-hidden border-4 border-background shadow-2xl bg-muted">
                    <img
                      src="/image-mine.png"
                      alt="Mohammed Shoaib Profile"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-transparent opacity-50 mix-blend-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-teal-600/20 px-4 py-1 text-sm text-teal-400 font-semibold tracking-wider shadow-md">
                <FaUserAlt className="inline mr-2" /> About Me
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
                My Journey 🚀
              </h2>
              <p className="max-w-4xl text-base md:text-lg text-gray-300 mt-4 mx-auto leading-relaxed">
                I'm currently pursuing my MCA. Enthusiastic Full Stack Developer with internship experience in web development and a strong foundation in AI/ML. Skilled in building responsive web and mobile applications with hands-on experience in modern technologies. Quick learner, team player, and passionate about solving real-world problems through code.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <FaGraduationCap className="text-emerald-400" /> Education
                  </h3>
                  <ul className="mt-4 text-gray-200 space-y-3 text-sm pl-2">
                    <li>
                      <strong>Master of Computer Application (Ongoing)</strong><br />
                      <span className="text-teal-300">AIMS Institutes, Bangalore (2023–2025 Expected)</span>
                    </li>
                    <li>
                      <strong>Bachelor of Computer Application <span className="text-yellow-300">80%</span></strong><br />
                      <span className="text-teal-300">PES College Of Science, Arts and Commerce, Mandya (2020–2023)</span>
                    </li>
                    <li>
                      <strong>Pre University - <span className="text-yellow-300">74.84%</span></strong><br />
                      <span className="text-teal-300">Santhome PU College, Kyatamgere, Mandya (2020)</span>
                    </li>
                    <li>
                      <strong>SSLC - <span className="text-yellow-300">79.83%</span></strong><br />
                      <span className="text-teal-300">St Ann's School, Maddur (2018)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <FaCertificate className="text-pink-400" /> Certifications
                  </h3>
                  <ul className="mt-4 text-gray-200 space-y-3 text-sm pl-2">
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1TX-YktarogIQlKAnwQS5u_tgakcymQmt/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500 transition-colors"
                      >
                        <strong>Advanced Excel and Power BI</strong>
                      </a>{" "}
                      – <span className="text-teal-300">AIMS Institutes (2025)</span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1V9EcXpQnIT1QX5ksjolvabzCY3GQ2JSP/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500 transition-colors"
                      >
                        <strong>Prompt Engineering for everyone</strong>
                      </a>{" "}
                      – <span className="text-teal-300">Cognitive IBM Skills (2025)</span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1_FMN_e75twDJWJKObm1Iosv6CkcjFq2C/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500 transition-colors"
                      >
                        <strong>Block Chain Workshop</strong>
                      </a>{" "}
                      – <span className="text-teal-300">AICST (2025)</span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1vdqm1zYBpcMfMTAQ-usxI4ViuU4VIreU/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500 transition-colors"
                      >
                        <strong>Postman API Fundamentals</strong>
                      </a>{" "}
                      – <span className="text-teal-300">Let's Upgrade (2025)</span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1n3UZeoWm8gaYiDtQhtQs6l9Wtj-v23FJ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500 transition-colors"
                      >
                        <strong>Connecting to a MongoDB Database</strong>
                      </a>{" "}
                      – <span className="text-teal-300">MongoDB University (2025)</span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/12kJBQVJSfKZDVIYIbuCMYIfA7ErRdpod/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500 transition-colors"
                      >
                        <strong>Full Stack Development</strong>
                      </a>{" "}
                      – <span className="text-teal-300">Tech Mindsparc (10/2024)</span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1h-z_5uqBJINvLlxR1DWI3FiNH8tTUkfB/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500 transition-colors"
                      >
                        <strong>Android App Development</strong>
                      </a>{" "}
                      – <span className="text-teal-300">Internshala (2023)</span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1PKR-lT9xWyAGEJhgbSIsr3AKoSbVFFln/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500 transition-colors"
                      >
                        <strong>Job and Internship Training</strong>
                      </a>{" "}
                      – <span className="text-teal-300">Internshala (2023)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-10">
                <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700 transition hover:scale-[1.01] duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-teal-400 text-center">Personal Info 🧾</h3>
                  <div className="space-y-3 text-sm md:text-base">
                    <div className="flex items-center gap-2"><MdEmail className="text-lg text-teal-400" /> <strong>Email:</strong> <span className="ml-auto">shoaib232002@gmail.com</span></div>
                    <div className="flex items-center gap-2"><MdPhone className="text-lg text-teal-400" /> <strong>Phone:</strong> <span className="ml-auto">+91 7892666933</span></div>
                    <div className="flex items-center gap-2"><MdLocationOn className="text-lg text-teal-400" /> <strong>Country:</strong> <span className="ml-auto">India</span></div>
                    <div className="flex items-center gap-2"><MdLocationCity className="text-lg text-teal-400" /> <strong>State:</strong> <span className="ml-auto">Karnataka</span></div>
                    <div className="flex items-center gap-2"><MdLocationCity className="text-lg text-teal-400" /> <strong>City:</strong> <span className="ml-auto">Bangalore</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <FaBriefcase className="text-indigo-400" /> Experience
                  </h3>
                  <ul className="mt-4 text-gray-200 space-y-3 text-sm pl-2">
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1Ykjcg81mD_rXP8FGrkXvugu-xw68B31F/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500 transition-colors"
                      >
                        <strong>Intern</strong> | Microsoft Internship by Edunet Foundation
                      </a>
                      <br />
                      <span className="text-yellow-300">April-May 2025</span><br />
                      <span className="text-teal-300">ML, Computer Vision, NLP, Azure AI</span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1iWKUUKpCzoZrkmdMjIztkbu4SPTJgYR4/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500 transition-colors"
                      >
                        <strong>Full Stack Web Development (Intern)</strong> | TECH MINDSPARC
                      </a>
                      <br />
                      <span className="text-yellow-300">Jul–Oct 2024</span><br />
                      <span className="text-teal-300">Frontend and backend development</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <FaLightbulb className="text-pink-400" /> Interests
                  </h3>
                  <p className="text-gray-300 mt-2 text-sm md:text-base">
                    • Badminton 🎾 • Exploring Tech 💡 • Creative Coding 💻
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Portfolio</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent work and projects I've been involved with.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Fake-Job-Postings-Detection"
                description="This system is a Real-Time Fake Job Posting Detector that uses Machine Learning (ML) to classify job postings as real or fake."
                tags={["Machine Learning", "Flask", "HTML-CSS"]}
                image="/projects-images/Fake-Jobs.png?height=300&width=400"
                link="https://github.com/Shoaib232002/Fake-Job-Postings-Detection.git"
              />

              <ProjectCard
                title="Resume Genie"
                description="Integrated an AI-powered chatbot in a Resume Builder web app to enhance user interaction and provide real-time resume-building assistance."
                tags={["React", "Node.js", "MongoDb", "Gemini API"]}
                image="/projects-images/Resume-Genie.png?height=300&width=400"
                link="https://github.com/Shoaib232002/Resume-Genie.git"
              />

              <ProjectCard
                title="E-Commerce-Dashboard"
                description="A Power BI dashboard for E-Commerce, offering real-time insights into sales, staff, billing, and resources to drive informed decisions."
                tags={["PowerBi", "Real-time Data"]}
                image="/projects-images/Power BI.png?height=300&width=400"
                link="https://github.com/Shoaib232002/E-Commerce-Dashboard.git"
              />

              <ProjectCard
                title="Delicious-Recipe"
                description="Built a full-stack Food Recipe App features user authentication, categorized recipes (Veg, Non-Veg, Snacks), and a responsive UI."
                tags={["Node.js", "HTML&CSS", "JavaScript", "MySql"]}
                image="/projects-images/Delicious-Recipe.png?height=300&width=400"
                link="https://github.com/Shoaib232002/Delicious-Recipe.git"
              />

              <ProjectCard
                title="FoodRunner"
                description="Built a user-side demo Android application focused on food ordering functionality with an intuitive and interactive UI."
                tags={["Kotlin", "XML", "MySql", "Android Studio"]}
                image="/projects-images/FoodRunner.png?height=300&width=400"
                link="https://github.com/Shoaib232002/FoodRunner.git"
              />

              <ProjectCard
                title="BookHub"
                description="A simple Book reading Android application for peronalized book keeping experience which was built during my Internshala Course."
                tags={["Kotlin", "XML", "MySql", "Android Studio"]}
                image="/projects-images/BookHub.png?height=300&width=400"
                link="https://github.com/Shoaib232002/BookHub.git"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-20 lg:py-24 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Expertise</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Technologies and tools I work with to bring ideas to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              <Card className="overflow-hidden border-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div>
                      <h3 className="text-xl font-bold">Frontend Development</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <SkillBadge name="HTML5" icon={<Code className="h-3 w-3" />} />
                        <SkillBadge name="CSS3" icon={<Code className="h-3 w-3" />} />
                        <SkillBadge name="JavaScript" icon={<Code className="h-3 w-3" />} />
                        <SkillBadge name="Bootstrap" icon={<Code className="h-3 w-3" />} />
                        <SkillBadge name="React JS" icon={<Code className="h-3 w-3" />} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Backend Development</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <SkillBadge name="Node.js" icon={<Code className="h-3 w-3" />} />
                        <SkillBadge name="Express" icon={<Code className="h-3 w-3" />} />
                        <SkillBadge name="Python" icon={<Code className="h-3 w-3" />} />
                        <SkillBadge name="REST APIs" icon={<Code className="h-3 w-3" />} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Database</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <SkillBadge name="MongoDB" icon={<Code className="h-3 w-3" />} />
                        <SkillBadge name="Mysql" icon={<Code className="h-3 w-3" />} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Tools & Others</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <SkillBadge name="Git" icon={<Code className="h-3 w-3" />} />
                        <SkillBadge name="GitHub" icon={<Code className="h-3 w-3" />} />
                        <SkillBadge name="Canva" icon={<Code className="h-3 w-3" />} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get in Touch</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to collaborate? Feel free to reach out!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm text-muted-foreground">shoaib232002@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">https://www.linkedin.com/in/mohammed-shoaib-37633530a/</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
                  <Github className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">GitHub</h3>
                    <p className="text-sm text-muted-foreground">https://github.com/Shoaib232002</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
                  <Twitter className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Twitter</h3>
                    <p className="text-sm text-muted-foreground">MdShoaib2302</p>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#0b0b0b] text-white px-8 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I thrive on experimenting with the latest frameworks, libraries, and tech stacks.
            </p>
            <p className="text-sm font-medium underline underline-offset-4 text-gray-300 mb-2">
              Social Links
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="https://github.com/Shoaib232002" target="_blank">
                <div className="bg-gray-800 p-3 rounded-full hover:bg-[#6e40c9] transition">
                  <Github className="w-5 h-5" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/mohammed-shoaib-37633530a/" target="_blank">
                <div className="bg-gray-800 p-3 rounded-full hover:bg-[#0a66c2] transition">
                  <Linkedin className="w-5 h-5" />
                </div>
              </Link>
              <Link href="https://www.instagram.com/mohammed_shoaib23/" target="_blank">
                <div className="bg-gray-800 p-3 rounded-full hover:bg-[#e1306c] transition">
                  <FaInstagram className="w-5 h-5" />
                </div>
              </Link>
              <Link href="https://x.com/MdShoaib2302" target="_blank">
                <div className="bg-gray-800 p-3 rounded-full hover:bg-[#1DA1F2] transition">
                  <Twitter className="w-5 h-5 text-white" />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center gap-2 hover:text-teal-400 transition">
                <ArrowRight size={16} /> <a href="#">Home</a>
              </li>
              <li className="flex items-center gap-2 hover:text-teal-400 transition">
                <ArrowRight size={16} /> <a href="#about">About</a>
              </li>
              <li className="flex items-center gap-2 hover:text-teal-400 transition">
                <ArrowRight size={16} /> <a href="/Resume.pdf" target="_blank">Resume</a>
              </li>
              <li className="flex items-center gap-2 hover:text-teal-400 transition">
                <ArrowRight size={16} /> <a href="#projects">Projects</a>
              </li>
              <li className="flex items-center gap-2 hover:text-teal-400 transition">
                <ArrowRight size={16} /> <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Have a Question?</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <a href="tel:+917892666933" className="flex items-center gap-3 no-underline text-inherit hover:opacity-80 transition">
                <Phone size={16} className="text-teal-500" />
                <span>+91 7892666933</span>
              </a>

              <a href="mailto:shoaib232002@gmail.com" className="flex items-center gap-3 no-underline text-inherit hover:opacity-80 transition">
                <Mail size={16} className="text-pink-400" />
                <span>shoaib232002@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="text-center space-y-1">
          <p className="text-sm font-medium text-white">Mohammed Shoaib</p>
          <p className="text-xs text-gray-500">© 2025 — Crafted with 💖 & Creativity</p>
        </div>
      </footer>
    </div>
  );
}
