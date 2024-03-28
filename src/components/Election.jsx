import React, { useState } from 'react';

const Election = () => {
  const [email, setEmail] = useState('');
  const [tempEmails, setTempEmails] = useState([]);
  const [submittedEmails, setSubmittedEmails] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddEmail = () => {
    if (email.trim() !== '') {
      setTempEmails([...tempEmails, email.trim()]);
      setEmail('');
    }
  };

  const handleSubmitEmails = () => {
    setSubmittedEmails(tempEmails);
    setTempEmails([]);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#160226]">
      <div className="w-2/3 flex flex-col items-center">
        <div className="w-4/5">
          <h1 className="text-5xl font-semibold leading-relaxed text-white mb-4">
            Add Emails
          </h1>
          <div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email"
              className="px-4 py-2 rounded-lg bg-[#534757] text-white outline-none"
            />
            <button
              onClick={handleAddEmail}
              className="bg-violet-600 text-[#2c0b42] py-2 px-4 rounded-lg ml-4 font-medium"
            >
              Add Email
            </button>
          </div>
          {tempEmails.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-white mb-2">
                Temporary Emails:
              </h3>
              <ul>
                {tempEmails.map((email, index) => (
                  <li
                    key={index}
                    className="bg-[#534757] text-white px-4 py-2 rounded-lg mb-2"
                  >
                    {email}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {submittedEmails.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-white mb-2">
                Submitted Emails:
              </h3>
              <ul>
                {submittedEmails.map((email, index) => (
                  <li
                    key={index}
                    className="bg-[#534757] text-white px-4 py-2 rounded-lg mb-2"
                  >
                    {email}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {(tempEmails.length > 0 || submittedEmails.length > 0) && (
            <button
              onClick={handleSubmitEmails}
              className="bg-violet-600 text-[#2c0b42] py-2 px-4 rounded-lg mt-8 font-medium"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Election;