import React from 'react';

const Voter = () => {
  return (
    <div className="bg-[#160226] pt-12">
        <div className="flex items-center justify-center flex-col">
            <div className="flex w-[86.5%] flex-col">
                <h1 className="text-start text-white">THREE STEP VOTING</h1>
                <div className="bg-white w-full h-[0.3px] mt-3"></div>
                <div className="flex left h-[80vh] mt-2 w-1/5">
                    <div>
                        <ul className="text-white">
                            <li className="">ELECTION ID</li>
                            <li>VOTER ID</li>
                            <li>VOTE</li>
                        </ul>
                    </div>
                    <div className="text-end bg-white h-full w-[0.3px]"></div>
                </div>
                <div className="right w-4/5">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Voter;