import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-300">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary border-pink-500"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-300">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary border-pink-500"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
