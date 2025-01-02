import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sample = () => {
  return (
    <div className="container">
      {/* The container class is a fixed-width container that adds responsive padding */}
      <div className="row">
        {/* The row class creates a horizontal group of columns */}
        
        <div className="col-md-4">
          {/* The col-md-4 class means this column will take up 4/12 of the row's width on medium screens and larger */}
          <div className="border p-3">
            <h3>Column 1</h3>
            <p>This is the first column. It takes up 4 parts of the row on medium-sized screens (md) and above.</p>
          </div>
        </div>

        <div className="col-md-4">
          {/* The col-md-4 class means this column will also take up 4/12 of the row's width on medium screens */}
          <div className="border p-3">
            <h3>Column 2</h3>
            <p>This is the second column. It takes up 4 parts of the row on medium-sized screens (md) and above.</p>
          </div>
        </div>

        <div className="col-md-4">
          {/* The col-md-4 class means this column will take up 4/12 of the row's width on medium screens */}
          <div className="border p-3">
            <h3>Column 3</h3>
            <p>This is the third column. It also takes up 4 parts of the row on medium-sized screens (md) and above.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sample;
