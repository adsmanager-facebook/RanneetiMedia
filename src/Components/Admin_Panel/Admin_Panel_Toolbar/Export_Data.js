import React from "react";
import Data_Excel from '../../../Assets/data.xlsx'

const Export_Data = () => {

  return (
    <div className="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli x1iyjqo2">
      <a
          href={Data_Excel}
          download="Vipin-Negi-Campaigns-Dec-1-2023-Dec-12-2023"
          target="_blank"
          rel="noreferrer"
        >
          <button>Export</button>
          </a>
    </div>
  );
};

export default Export_Data;
