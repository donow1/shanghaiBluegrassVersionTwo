import React, { useState } from "react";
import GModal from "./GModal";
import HModalForPdf from "./HModalForPdf"; // Updated import

export default function FContactUS() {
  const [openModal, setOpenModal] = useState(false);
  const [pdfModal, setPdfModal] = useState(false); // State to control the PDF modal

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenPdfModal = () => {
    setPdfModal(true);
  };

  const handleClosePdfModal = () => {
    setPdfModal(false);
  };

  return (
    <div>
      <div>
        <div className="bg-white py-12 sm:py-10 mb-20" id="contactUs">
          <div className="mx-auto max-w-7xl px-6">
            <div className="my-8 px-4 text-center">
              <h2
                className="text-[#5bb6ad] text-5xl text-center mt-1 mb-12 font-third"
                id="FContactUS"
              >
                Join us and Be Part of a Unique History!
              </h2>
            </div>

            <div className="mt-16 flex items-center flex-col md:flex-row">
              <div id="eventDescription" className="md:w-1/2 p-4">
                <h2 className="text-[#5bb6ad] text-5xl font-third tracking-tight sm:text-4xl">
                  We invite you to be a part of our community by:{" "}
                </h2>

                <p className="text-2xl sm:text-1xl mt-8">
                  <b>Spreading the Word:</b> Share our news and updates.
                </p>
                <p className="text-2xl sm:text-1xl mt-8">
                  <b>Contributing Ideas: </b>Help us brainstorm and develop new
                  projects.
                </p>
                <p className="text-2xl sm:text-1xl mt-8">
                  <b>Organizing Events: </b>Assist in planning and hosting
                  community shows and activities.
                </p>

                <p className="text-2xl sm:text-1xl mt-8">
                  <b>
                    <span
                      className="text-[#ffae34] font-style: italic md:hover:text-[#5bb6ad] cursor-pointer"
                      onClick={handleOpenModal}
                    >
                      Click here
                    </span>
                  </b>{" "}
                  to get involved and make an impact!
                </p>
              </div>

              <div id="communityImg" className="md:w-1/2 p-4">
                <iframe
                  src="/timelineNew.pdf"
                  frameborder="0"
                  className="w-full h-96"
                  onClick={handleOpenPdfModal} // Add onClick event to open PDF modal
                ></iframe>

                <p className="text-2xl sm:text-1xl mt-8">
                  ☝Explore the history of the community🏛️ 
                  <b>
                    <span
                      className="text-[#ffae34] font-style: italic md:hover:text-[#5bb6ad] cursor-pointer"
                      onClick={handleOpenPdfModal}
                    >
                      Click here
                    </span>
                  </b>{" "}
                  to enlarge the Pdf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HModalForPdf open={pdfModal} onClose={handleClosePdfModal} >
        <iframe
          src="/timelineNew.pdf"
          frameborder="0"
          style={{ width: '100%', height: '75vh' }} // Adjust the size as needed
        ></iframe>
      </HModalForPdf>

      <GModal open={openModal} onClose={handleCloseModal} />

      <footer className="bg-white dark:bg-gray-900" id="FContactMe">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-9">
          <div className="md:flex md:justify-between"></div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 Shanghai Bluegrass. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              {/* Social media links */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}






// import React, { useState } from "react";
// import GModal from "./GModal";
// import HModalPdf from "./HModalPdf";

// export default function FContactUS() {
//   const [openModal, setOpenModal] = useState(false);

//   const[openModalForPdf, setOpenModalForPdf ] = useState(false);


//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

  

//   const handleOpenModalForPdf = () => {
//     setOpenModalForPdf(true);
//   };

//   const handleCloseModalForPdf = () => {
//     setOpenModal(false);
//   };

//   return (
//     <div>
//       <div>
//         <div className="bg-white py-12 sm:py-10 mb-20" id="contactUs">
//           <div className="mx-auto max-w-7xl px-6">
//             <div className="my-8 px-4 text-center">
//               <h2
//                 className="text-[#5bb6ad] text-5xl text-center mt-1 mb-12 font-third"
//                 id="FContactUS"
//               >
//                 Join us and Be Part of a Unique History!
//               </h2>
//             </div>

//             <div className="mt-16 flex items-center flex-col md:flex-row">
//               <div id="eventDescription" className="md:w-1/2 p-4">
//                 <h2 className="text-[#5bb6ad] text-5xl font-third tracking-tight sm:text-4xl">
//                   We invite you to be a part of our community by:{" "}
//                 </h2>

//                 <p className="text-2xl sm:text-1xl mt-8">
//                   <b>Spreading the Word:</b> Share our news and updates.
//                 </p>
//                 <p className="text-2xl sm:text-1xl mt-8">
//                   <b>Contributing Ideas: </b>Help us brainstorm and develop new
//                   projects.
//                 </p>
//                 <p className="text-2xl sm:text-1xl mt-8">
//                   <b>Organizing Events: </b>Assist in planning and hosting
//                   community shows and activities.
//                 </p>

//                 <p className="text-2xl sm:text-1xl mt-8">
//                   <b>
//                     <span
//                       className="text-[#ffae34] font-style: italic md:hover:text-[#5bb6ad] cursor-pointer"
//                       onClick={handleOpenModal}
//                     >
//                       Click here
//                     </span>
//                   </b>{" "}
//                   to get involved and make an impact!
//                 </p>
//               </div>

//               <div id="communityImg" className="md:w-1/2 p-4">
//                 <iframe
//                   src="/timelineNew.pdf"
//                   frameborder="0"
//                   className="w-full h-96"
//                   onClick={handleOpenModalForPdf}
//                 ></iframe>

//                 <p className="text-2xl sm:text-1xl mt-8">
//                   ☝Explore the history of the community🏛️
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <HModalPdf open={openModalForPdf} onClose={handleCloseModalForPdf}  />

//       <GModal open={openModal} onClose={handleCloseModal} />

//       <footer className="bg-white dark:bg-gray-900" id="FContactMe">
//         <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-9">
//           <div className="md:flex md:justify-between"></div>
//           <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//           <div className="sm:flex sm:items-center sm:justify-between">
//             <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
//               © 2024 Shanghai Bluegrass. All Rights Reserved.
//             </span>
//             <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
//               <a
//                 href="https://www.linkedin.com/in/kirkkenney/"
//                 target="_blank"
//                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   x="0px"
//                   y="0px"
//                   width="48"
//                   height="48"
//                   viewBox="0 0 48 48"
//                 >
//                   {" "}
//                   <path
//                     fill="#0288D1"
//                     d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
//                   ></path>
//                   <path
//                     fill="#FFF"
//                     d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
//                   ></path>{" "}
//                 </svg>
//                 <span className="sr-only">LinkedIn</span>
//               </a>

//               <a
//                 href="https://www.facebook.com/share/JbbtN8sty6hAt29T/"
//                 target="_blank"
//                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   x="0px"
//                   y="0px"
//                   width="48"
//                   height="48"
//                   viewBox="0 0 48 48"
//                 >
//                   <linearGradient
//                     id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1"
//                     x1="6.228"
//                     x2="42.077"
//                     y1="4.896"
//                     y2="43.432"
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop offset="0" stop-color="#0d61a9"></stop>
//                     <stop offset="1" stop-color="#16528c"></stop>
//                   </linearGradient>
//                   <path
//                     fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)"
//                     d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"
//                   ></path>
//                   <path
//                     d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
//                     opacity=".05"
//                   ></path>
//                   <path
//                     d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
//                     opacity=".07"
//                   ></path>
//                   <path
//                     fill="#fff"
//                     d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"
//                   ></path>
//                 </svg>
//                 <span className="sr-only">Facebook</span>
//               </a>

//               <a
//                 href="https://www.youtube.com/@countrymusicinchina6207"
//                 target="_blank"
//                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   x="0px"
//                   y="0px"
//                   width="48"
//                   height="48"
//                   viewBox="0 0 48 48"
//                 >
//                   <path
//                     fill="#FF3D00"
//                     d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
//                   ></path>
//                   <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
//                 </svg>
//                 <span className="sr-only">Youtube</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import GModal from "./GModal";

// export default function FContactUS() {
//   const [openModal, setOpenModal] = useState(false);

//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };


//   return (
//     <div>
//       <div>
//         <div className="bg-white py-12 sm:py-10 mb-20" id="contactUs">
//           <div className="mx-auto max-w-7xl px-6">
//             <div className="my-8 px-4 text-center">
//               <h2
//                 className="text-[#5bb6ad] text-5xl text-center mt-1 mb-12 font-third"
//                 id="FContactUS"
//               >
//                 Join us and Be Part of a Unique History!
//               </h2>
//             </div>

//             <div className="mt-16 flex items-center flex-col md:flex-row">
//               <div id="eventDescription" className="md:w-1/2 p-4">
//                 <h2 className="text-[#5bb6ad] text-5xl font-third tracking-tight sm:text-4xl">
//                   We invite you to be a part of our community by:{" "}
//                 </h2>

//                 <p className="text-2xl sm:text-1xl mt-8">
//                   <b>Spreading the Word:</b> Share our news and updates.
//                 </p>
//                 <p className="text-2xl sm:text-1xl mt-8">
//                   <b>Contributing Ideas: </b>Help us brainstorm and develop new
//                   projects.
//                 </p>
//                 <p className="text-2xl sm:text-1xl mt-8">
//                   <b>Organizing Events: </b>Assist in planning and hosting
//                   community shows and activities.
//                 </p>

//                 <p className="text-2xl sm:text-1xl mt-8">
//                   <b>
//                     <span
//                       className="text-[#ffae34] font-style: italic md:hover:text-[#5bb6ad] cursor-pointer"
//                       onClick={handleOpenModal}
//                     >
//                       Click here
//                     </span>
//                   </b>{" "}
//                   to get involved and make an impact!
//                 </p>
//               </div>

//               <div id="communityImg" className="md:w-1/2 p-4">
//                 <iframe
//                   src="/timelineNew.pdf"
//                   frameborder="0"
//                   className="w-full h-96"
//                 ></iframe>

//                 <p className="text-2xl sm:text-1xl mt-8">
//                   ☝Explore the history of the community🏛️
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <GModal open={openModal} onClose={handleCloseModal} />

//       <footer className="bg-white dark:bg-gray-900" id="FContactMe">
//         <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-9">
//           <div className="md:flex md:justify-between"></div>
//           <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//           <div className="sm:flex sm:items-center sm:justify-between">
//             <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
//               © 2024 Shanghai Bluegrass. All Rights Reserved.
//             </span>
//             <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
//               <a
//                 href="https://www.linkedin.com/in/kirkkenney/"
//                 target="_blank"
//                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   x="0px"
//                   y="0px"
//                   width="48"
//                   height="48"
//                   viewBox="0 0 48 48"
//                 >
//                   {" "}
//                   <path
//                     fill="#0288D1"
//                     d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
//                   ></path>
//                   <path
//                     fill="#FFF"
//                     d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
//                   ></path>{" "}
//                 </svg>
//                 <span className="sr-only">LinkedIn</span>
//               </a>

//               <a
//                 href="https://www.facebook.com/share/JbbtN8sty6hAt29T/"
//                 target="_blank"
//                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   x="0px"
//                   y="0px"
//                   width="48"
//                   height="48"
//                   viewBox="0 0 48 48"
//                 >
//                   <linearGradient
//                     id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1"
//                     x1="6.228"
//                     x2="42.077"
//                     y1="4.896"
//                     y2="43.432"
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop offset="0" stop-color="#0d61a9"></stop>
//                     <stop offset="1" stop-color="#16528c"></stop>
//                   </linearGradient>
//                   <path
//                     fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)"
//                     d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"
//                   ></path>
//                   <path
//                     d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
//                     opacity=".05"
//                   ></path>
//                   <path
//                     d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
//                     opacity=".07"
//                   ></path>
//                   <path
//                     fill="#fff"
//                     d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"
//                   ></path>
//                 </svg>
//                 <span className="sr-only">Facebook</span>
//               </a>

//               <a
//                 href="https://www.youtube.com/@countrymusicinchina6207"
//                 target="_blank"
//                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   x="0px"
//                   y="0px"
//                   width="48"
//                   height="48"
//                   viewBox="0 0 48 48"
//                 >
//                   <path
//                     fill="#FF3D00"
//                     d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
//                   ></path>
//                   <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
//                 </svg>
//                 <span className="sr-only">Youtube</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
