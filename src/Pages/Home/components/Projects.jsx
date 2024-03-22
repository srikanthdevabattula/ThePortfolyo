import React, { useState } from 'react';

const Projects = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

 
  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };


  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='p-[30px] sm:p-[20px]' id='Projects'>
      <h1 className='text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px]  font-bold text-center font-poppins mb-4'>Projects</h1>
      <div className='flex  flex-wrap gap-[30px] sm:gap-[15px] justify-center font-poppins'>
        {data.projects.map((project, index) => (
          <div key={index} className='w-[350px] lg:w-[330px] md:w-[280px] sm:w-[175px] h-[400px] lg:h-[360px] md:h-[300px] sm:h-[220px]  flex flex-col gap-2  items-center p-2 border-[1px] shadow-lg rounded-[14px]'>
            <img src={project.image.url} alt="" className='w-[300px] h-[280px] lg:h-[230px] lg:w-[260px] md:h-[200px] md:w-[220px] sm:h-[130px] sm:w-[150px]'/>
            <h1 className='text-[20px] md:text-[16px] sm:text-[12px] font-bold'>{project.title}</h1>
            <button onClick={() => openModal(project)} className='w-[150px] sm:w-[100px] text-[16px] md:text-[14px] sm:text-[12px] p-2 md:p-1 text-[white] font-semibold bg-[#4a9de5] rounded-[20px] shadow-md hover:shadow-2xl'>View Details</button>
          </div>
        ))}
      </div>
      {/* modal */}
      {showModal && selectedProject && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center font-poppins">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

              <div className="bg-white w-[600px] h-[auto] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left space-y-3">
                    <img src={selectedProject.image.url} alt="" className='w-[100%]' />
                    <h3 className="text-lg font-semibold  text-gray-900" id="modal-title">
                      {selectedProject.title}
                    </h3>

                    <div className="mt-2 text-left space-y-3">
                      
                      <p className="text-[15px]">
                      Description: {selectedProject.description} </p>

                      <p className="text-[15px] ">
                      TechStack Used: <span className='text-[#6f6fd6]'>{selectedProject.techStack}</span> 
                      </p>
                      <p className="text-[15px] ">
                      Github Url: <span className='text-[#6f6fd6]'>{selectedProject.githuburl}</span> 
                      </p>
                      <p className="text-[15px]">
                      Live Url: <span className='text-[#6f6fd6]'>{selectedProject.liveurl}</span> 
                      </p>

                    </div>
                  </div>
                </div>
              </div>
             
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={closeModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#4aaae5] text-base font-medium text-white hover:bg-[#3182ce] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
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
