import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';

import PythonIcon from '../components/PythonIcon';
import EmmetIcon from '../components/EmmetIcon';

import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiFirebase, SiMysql, SiGnubash, SiMongodb, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si'
import { BsList, BsXLg } from 'react-icons/bs'

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const mainLinks = document.querySelectorAll(".group");
    const mainTitle = document.getElementById("main-title");
    const headerBrief = document.getElementById("header-text");
    const mainBrief = document.getElementById("main-brief");

    const mainObserver = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          mainLinks.forEach((link) => {
            link.style.transform = 'unset';
            link.style.opacity = 1;
          });

          setTimeout(() => {
            headerBrief.style.opacity = 1;

            setTimeout(() => {
              mainTitle.style.opacity = 1;
              mainTitle.style.transform = 'unset';

              setTimeout(() => {
                mainBrief.style.opacity = 1;
                mainBrief.style.transform = 'unset';
              }, 100);
            }, 100);
          }, 600);

        }
      });

    }, {
      threshold: .5
    });

    mainObserver.observe(document.getElementById("main"));

    const opacityObserver = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });

    }, { threshold: .5 });

    const observerElements = document.querySelectorAll("#about > *, #skills > * > *, #projects > * > *");
    observerElements.forEach((el) => {
      el.style.opacity = 0;
      el.style.transition = '200ms ease';
      el.style.transitionProperty = 'opacity';

      opacityObserver.observe(el);
    });

  }, [])

  return (
    <div className="bg-[#2e353d] min-h-[700px] w-[100%] overflow-x-hidden flex flex-col gap-48 items-start justify-start selection:bg-[#454f5a]" id="container">
      <Head>
        <title>Chill31</title>
        <meta name="description" content="Portfolio page for Chill31. check out profiles, projects and everything else." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main id="main" className='w-[100%] h-[700px] relative pt-[10rem] pl-16 flex flex-col gap-16 max-skw:pl-8 max-skw:gap-12'>

        <div className='flex gap-10 absolute top-6 right-10 max-skw:hidden'>
          <Link className='group text-xl font-mono cursor-pointer opacity-0 translate-y-[-10rem] transition-all duration-200' href="#about">
            <span className='text-cyan-400 group-hover:text-cyan-300'>01. </span>
            <span className='text-white group-hover:text-cyan-300'>About</span>
          </Link>
          <Link className='group text-xl font-mono cursor-pointer opacity-0 translate-y-[-10rem] delay-200 transition-all duration-200' href="#skills">
            <span className='text-cyan-400 group-hover:text-cyan-300'>02. </span>
            <span className='text-white group-hover:text-cyan-300'>Skills</span>
          </Link>
          <Link className='group text-xl font-mono cursor-pointer opacity-0 translate-y-[-10rem] delay-[400ms] transition-all duration-200' href="#projects">
            <span className='text-cyan-400 group-hover:text-cyan-300'>03. </span>
            <span className='text-white group-hover:text-cyan-300'>Projects</span>
          </Link>
        </div>

        <div className='hidden items-center justify-center absolute top-6 right-10 max-skw:flex'>
          <BsList className='text-4xl text-white cursor-pointer' onClick={() => setMenuOpen(true)} />
        </div>

        <p className='text-2xl font-mono text-cyan-400 opacity-0 transition-opacity max-mb:text-xl' id="header-text">Hi, my name is</p>
        <div className='flex flex-col gap-4'>
          <h1 className='text-9xl font-serif text-white opacity-0 translate-y-[5rem] duration-300 transition-all max-skw:text-8xl max-mb:text-7xl' id="main-title">Chill31</h1>
          <p className='text-3xl font-mono text-gray-400 max-w-[45ch] opacity-0 translate-y-[5rem] transition-all max-skw:text-xl max-skw:max-w-[95vw]' id="main-brief">I am a web developer. I look forward to building projects to improve my understanding of programs and code.</p>
        </div>

      </main>

      <section className='w-[100%] h-[700px] relative pl-16 flex flex-col gap-16 max-skw:pl-8' id="about">

        <div className='gap-4 flex items-center justify-start'>
          <span className='bg-cyan-400 w-[5rem] h-[2px] max-skw:w-[2rem]' />
          <span className='text-cyan-400 text-xl font-mono min-w-max'>01. About</span>
          <span className='bg-cyan-400 w-[20rem] h-[2px] max-skw:w-[10rem] max-mb:w-[5rem]' />
        </div>

        <p className='text-slate-300 max-w-[45ch] text-1.5xl font-mono mt-32 max-mb:mt-16 max-mb:text-[1.1rem] max-mb:max-w-[90vw]'>I am a 14 year old boy who started programming at the age of 11. Currently I am only focusing on web development but I am looking forward to start building desktop apps. I am learning Python side-by-side<br /><br />My daily life hobbies are playing football and cricket, while sometimes I do play table tennis. Obviously my favourite hobby is coding, if you didn&apos;t understand by now.</p>

      </section>

      <section className='w-[100%] min-h-[700px] pl-16 relative flex flex-col gap-16 max-skw:pl-8' id="skills">

        <div className='gap-4 flex items-center justify-start'>
          <span className='bg-cyan-400 w-[5rem] h-[2px] max-skw:w-[2rem]' />
          <span className='text-cyan-400 text-xl font-mono min-w-max'>02. Skills</span>
          <span className='bg-cyan-400 w-[20rem] h-[2px] max-skw:w-[10rem] max-mb:w-[5rem]' />
        </div>

        <div className='grid grid-cols-2 gap-16 w-[100%] pl-8 pr-8 relative -left-8 max-skw:grid-cols-1 max-skw:!pr-0'>

          <div className='bg-gray-900/50 flex flex-col gap-5 p-16 rounded-xl items-center justify-start'>
            <span className='text-cyan-400 font-mono text-4xl'>Frontend</span>
            <div className='grid grid-cols-3 mt-8 gap-4 place-items-center'>

              <FaHtml5 className='text-orange-400 text-5xl cursor-pointer' onClick={() => { open('https://w3.org/html') }} />
              <FaCss3 className='text-blue-800 text-5xl cursor-pointer' onClick={() => { open('https://www.w3.org/Style/CSS/') }} />
              <FaJs className='text-amber-300 text-5xl cursor-pointer' onClick={() => { open('https://www.w3.org/standards/webdesign/script') }} />
              <FaReact className='text-cyan-400 text-5xl cursor-pointer' onClick={() => { open('https://reactjs.org') }} />
              <SiNextdotjs className='text-white text-5xl cursor-pointer' onClick={() => { open('https://nextjs.org') }} />

            </div>
          </div>
          <div className='bg-gray-900/50 flex flex-col gap-5 p-16 rounded-xl items-center justify-start'>
            <span className='text-cyan-400 font-mono text-4xl'>Backend</span>
            <div className='grid grid-cols-3 mt-8 gap-4 place-items-center'>

              <FaNodeJs className='text-green-500 text-5xl cursor-pointer' onClick={() => { open('https://nodejs.org') }} />
              <SiExpress className='text-white text-5xl cursor-pointer' onClick={() => { open('https://expressjs.com') }} />
              <SiMongodb className='text-green-300 text-5xl cursor-pointer' onClick={() => { open('https://www.mongodb.com/') }} />
              <SiFirebase className='text-orange-300 text-5xl cursor-pointer' onClick={() => { open('https://firebase.google.com/') }} />

            </div>
          </div>
          <div className='bg-gray-900/50 flex flex-col gap-5 p-16 rounded-xl items-center justify-start'>
            <span className='text-cyan-400 font-mono text-4xl'>Languages</span>
            <div className='grid grid-cols-3 mt-8 gap-4 place-items-center'>

              <PythonIcon />
              <SiMysql className='text-white text-5xl cursor-pointer' onClick={() => { open('https://www.mysql.com/') }} />
              <FaJs className='text-amber-300 text-5xl cursor-pointer' onClick={() => { open('https://www.w3.org/standards/webdesign/script') }} />
              <SiGnubash className='text-slate-200 text-5xl cursor-pointer' onClick={() => { open('https://www.gnu.org/software/bash/') }} />

            </div>
          </div>
          <div className='bg-gray-900/50 flex flex-col gap-5 p-16 rounded-xl items-center justify-start'>
            <span className='text-cyan-400 font-mono text-4xl'>Tools</span>
            <div className='grid grid-cols-3 mt-8 gap-4 place-items-center'>

              <FaGithub className='text-white text-5xl cursor-pointer' onClick={() => { open('https://github.com') }} />
              <SiTailwindcss className='text-cyan-500 text-5xl cursor-pointer' onClick={() => { open('https://tailwindcss.com') }} />
              <SiVisualstudiocode className='text-blue-400 text-5xl cursor-pointer' onClick={() => { open('https://code.visualstudio.com/') }} />
              <EmmetIcon />

            </div>
          </div>

        </div>

      </section>

      <section className='w-[100%] min-h-[700px] relative pl-16 flex flex-col gap-16 max-skw:pl-8' id="projects">

        <div className='gap-4 flex items-center justify-start'>
          <span className='bg-cyan-400 w-[5rem] h-[2px] max-skw:w-[2rem]' />
          <span className='text-cyan-400 text-xl font-mono min-w-max'>03. Projects</span>
          <span className='bg-cyan-400 w-[20rem] h-[2px] max-skw:w-[10rem] max-mb:w-[5rem]' />
        </div>

        <div className='flex flex-wrap items-center justify-start relative -l-16 gap-10 pb-10'>

          <div onClick={() => { open("https://utility-text.vercel.app") }} className="group rounded-lg cursor-pointer p-10 bg-gray-900/50 flex flex-col gap-8 max-w-[calc(95vw-2.5rem)] w-[25rem] hover:!-translate-y-6 focus:!-translate-y-6 !transition-all outline-none" tabIndex="0">
            <span className='group-hover:text-cyan-400 group-focus:text-cyan-400 font-mono text-5xl text-white transition-colors max-mb:text-4xl'>utility-text</span>
            <span className='font-mono text-xl text-cyan-400'>https://utility-text.vercel.app</span>
            <p className='text-slate-400 text-2xl max-mb:text-xl font-mono'>an npm package designed to help with strings and numbers providing many utility functions</p>
          </div>

          <div onClick={() => { open('https://chill31-todo.vercel.app') }} className="group rounded-lg cursor-pointer p-10 bg-gray-900/50 flex flex-col gap-8 max-w-[calc(95vw-2.5rem)] w-[25rem] hover:!-translate-y-6 focus:!-translate-y-6 !transition-all outline-none" tabIndex="0">
            <span className='group-hover:text-cyan-400 group-focus:text-cyan-400 font-mono text-5xl text-white transition-colors max-mb:text-4xl'>TO-DO</span>
            <span className='font-mono text-xl text-cyan-400'>https://chill31-todo.vercel.app</span>
            <p className='text-slate-400 text-2xl max-mb:text-xl font-mono'>an advanced todo with editing and groups features to help organise your tasks</p>
          </div>

          <div onClick={() => { open('https://speed-readr.vercel.app') }} className="group rounded-lg cursor-pointer p-10 bg-gray-900/50 flex flex-col gap-8 max-w-[calc(95vw-2.5rem)] w-[25rem] hover:!-translate-y-6 focus:!-translate-y-6 !transition-all outline-none" tabIndex="0">
            <span className='group-hover:text-cyan-400 group-focus:text-cyan-400 font-mono text-5xl text-white transition-colors max-mb:text-4xl'>Speed Readr</span>
            <span className='font-mono text-xl text-cyan-400'>https://speed-readr.vercel.app</span>
            <p className='text-slate-400 text-2xl max-mb:text-xl font-mono'>a website to help you read faster. There are default tests like 100 words per minute, but you can also create your own customised tests.</p>
          </div>

        </div>

      </section>

      <div className={`mobileMenu ${menuOpen ? 'show' : ''} w-[100%] h-[100%] fixed top-0 left-0 z-20 bg-slate-900/95 p-10 flex flex-col justify-center items-start gap-10 text-white`}>

        <BsXLg className='text-white text-3xl absolute top-6 right-10 cursor-pointer' onClick={() => setMenuOpen(false)} />

        <Link href="#about" className='max-mb:text-2xl text-cyan-400 text-3xl font-mono underline' onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="#skills" className='max-mb:text-2xl text-cyan-400 text-3xl font-mono underline' onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link href="#projects" className='max-mb:text-2xl text-cyan-400 text-3xl font-mono underline' onClick={() => setMenuOpen(false)}>Projects</Link>
        <span className='bg-gray-300 h-[1px] w-[30rem] max-w-[95%]'></span>
        <Link href="https://github.com/chill31" className='max-mb:text-2xl text-cyan-400 text-3xl font-mono underline' onClick={() => setMenuOpen(false)}>Github</Link>
        <Link href="https://chill31.github.io" className='max-mb:text-2xl text-cyan-400 text-3xl font-mono underline' onClick={() => setMenuOpen(false)}>1st Portfolio</Link>

      </div>
    </div>
  )
}
