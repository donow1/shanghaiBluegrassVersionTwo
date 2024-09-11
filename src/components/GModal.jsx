import React from "react";

const GModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center mt-10">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf8EMO2k3gVp4AZenbfCjzs3HMzSFE7KVCmG3ZXnBptyb3Z2w/viewform?embedded=true"
              width="100%"
              height="400px"
              title="Google Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GModal;

