import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="h-[95vh] w-screen flex items-center justify-center bg-[#160226]">
        <div className="left w-2/3 flex flex-col items-center">
          <div className="w-4/5">
            <h1 className="text-7xl font-semibold leading-relaxed text-white">EMPOWERING VOICES</h1>
            <h3 className="text-xl font-medium text-white leading-relaxed">EVERY ELECTION, <span className="text-violet-600 ml-2">EVERY VOTE</span></h3>
            <p className="text-[#534757] mt-12 text-sm w-10/12 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, saepe recusandae possimus at dolorum harum similique veniam deserunt facere Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            <div className="leading-relaxed mt-12">
              <Link to="/voter">
                <button className="bg-violet-600 text-[#2c0b42] py-2.5 mr-4 px-3 rounded-xl text-sm font-medium">VOTE NOW </button>
              </Link>
              <Link to="/election">
                <button className="border-2 border-violet-600 text-violet-600 py-2 px-3 rounded-xl text-sm font-medium">CREATE ELECTION</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="right w-1/3">
          right
        </div>
      </div>
    </>
  )
}

export default Home;
