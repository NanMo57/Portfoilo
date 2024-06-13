import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuTextCursor } from "react-icons/lu";

function Home() {
  const positions = ['Full Stack Developer', 'Frontend Developer - React JS', 'Backend Developer - PHP'];
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [positionIndex, setPositionIndex] = useState(0);

  useEffect(() => {
    const currentPosition = positions[positionIndex];
    const interval = setInterval(() => {
      if (charIndex < currentPosition.length) {
        setCurrentText(prev => prev + currentPosition[charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        if (currentText.length === currentPosition.length) {
          setTimeout(() => {
            setCurrentText(prev => prev.slice(0, -1));
          }, 1000);
        } else {
          setCurrentText(prev => prev.slice(0, -1));
        }
        if (currentText.length === 0) {
          setPositionIndex((prev) => (prev + 1) % positions.length);
          setCharIndex(0);
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, [charIndex, currentText, positionIndex, positions]);

  return (
    <div className='d-flex flex-column justify-content-center gap-5 ps-5' id='Home'>
      <div className='d-flex flex-column gap-3'>
        <h3 className='fs-5'>
          Hello, My name is <span className='text-yellow'>Nancy Al-Oqdeh</span>
        </h3>
        <h1>
          I'm a <span className='text-yellow'>{currentText}</span>
          <LuTextCursor className='fs-2' />
        </h1>
        <p className='w-50 fs-5'>
          I'm a web developer with experience in PHP, React.js, MySQL, and multiple other languages. I have completed many projects using these technologies.
        </p>
      </div>
      <Link to='/portfolio'>
        <button className='btn rounded-pill bg-light p-2 ps-5 pe-5 text-uppercase fw-bold'>My Works</button>
      </Link>
    </div>
  );
}

export default Home;
