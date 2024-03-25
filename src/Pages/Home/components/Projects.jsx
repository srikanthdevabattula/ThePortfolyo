import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tech,setTech]=useState('')
  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const enabledProjects = data.projects.filter(project => project.enabled);

  const sortedProjects = enabledProjects.sort((a, b) => a.sequence - b.sequence);

  return (
    <div className='p-[30px] sm:p-[10px]' id='Projects'>
      <h1 className='text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px]  font-bold text-center font-poppins mb-4'>Projects</h1>
    
      <div className='flex  flex-wrap gap-[30px] sm:gap-[15px] justify-center font-poppins'>
      {sortedProjects.map((project, index) => (
    <div id='333' key={index} className={`relative  w-[450px] lg:w-[330px] md:w-[280px] sm:w-[165px] h-[300px] lg:h-[280px] md:h-[250px] sm:h-[170px] flex flex-col gap-2 items-center  shadow-lg hover:shadow-[#92b1b6b3] rounded-[14px]`} >
      <div className='h-[100%] w-[100%] flex flex-col items-center justify-center hover:bg-[#ffffffc7]'>
        <img src={project.image.url} alt="" className='h-[100%] w-[100%] rounded-[14px]'/>
    </div>
    
      <div className='absolute top-0 left-0 w-full h-full rounded-[14px] bg-[#00000094] bg-opacity-50 flex flex-col items-center space-y-3 justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
        <h1 className='text-white text-center text-[20px] md:text-[16px] sm:text-[12px] font-bold'>{project.title}</h1>
        <button onClick={() => openModal(project)} className='w-[150px] sm:w-[100px] text-[16px] hover:bg-[#512390] md:text-[14px] sm:text-[12px] p-2 md:p-1 text-[white] font-semibold bg-[#4a9de5] rounded-[20px] shadow-md hover:shadow-2xl'>View Details</button>
    </div>
    </div>
  ))}
      </div>
      {/* modal */}
      {showModal && selectedProject && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center font-poppins ">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gradient-to-r from-[#48235a] via-[#4d1e63] to-[#6c1197] w-[600px] sm:w-[100%] h-[auto] px-4 sm:px-2 pt-5 pb-4  sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left space-y-3">
                    <img src={selectedProject.image.url} alt="" className='w-[100%] rounded-[10px]' />
                    <h3 className="text-lg font-semibold  text-[#7d8b9a]" id="modal-title">
                      {selectedProject.title}
                    </h3>
                    <div className="mt-2 text-left space-y-3 text-[white]">
                      <p className="text-[15px] sm:text-[11px]">
                        Description: {selectedProject.description}
                      </p>
                      <p className="text-[15px] ">
                        TechStack Used: <span className='text-[#6f6fd6]'>{selectedProject.techStack}</span>
                      </p>
                      <p className="text-[15px] ">
                        Github Url: <span className='text-[#6f6fd6]'><Link to={selectedProject.githuburl}>Open GitHub</Link></span>
                      </p>
                      <p className="text-[15px]">
                        Live Url: <span className='text-[#6f6fd6]'><Link to={selectedProject.liveurl}>Open Live</Link></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#48235a] via-[#45125d] to-[#6c1197] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={closeModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#4aaae5] text-base font-medium text-white hover:bg-[#9b7219] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
