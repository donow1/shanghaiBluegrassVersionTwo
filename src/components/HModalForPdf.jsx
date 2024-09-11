
import React from "react";

const HModalPdf = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center sm:mt-0 sm:z-50"
      style={{ zIndex: 100 }} // Ensure the modal has a high z-index value
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-10/12 h-5/6 flex flex-col">
        <div className="px-4 py-5 sm:p-6 flex-grow flex flex-col">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="mt-3 text-center sm:mt-5 flex-grow">
            <iframe
              src="/timelineNew.pdf"
              frameBorder="0"
              className="w-full h-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HModalPdf;