// Fetch_Excel_Data.js

import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import "./Fetch_Excel_Data.css";

const Fetch_Excel_Data = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleFileUpload = () => {
    // Path to the data.xlsx file
    const filePath = require("./Assets/data.xlsx"); // Adjust the path if needed

    // Read the file using fetch
    fetch(filePath)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const data = new Uint8Array(buffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        setData(parsedData);
      })
      .catch((error) => {
        console.error("Error reading the file:", error);
      });
  };

  useEffect(() => {
    handleFileUpload(); // Load data on component mount
  }, []);

  const handleMasterCheckboxChange = () => {
    // Add your logic to handle master checkbox change here
    console.log("Master checkbox clicked");
  };

  const handleCheckboxChange = (rowIndex) => {
    // Add your logic to handle checkbox change here
    console.log(`Checkbox clicked for row ${rowIndex}`);
  };

  const handleButtonClick = (rowIndex) => {
    // Add your logic to handle button click here
    console.log(`Button clicked for row ${rowIndex}`);
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    const sortableData = [...data];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };

  const handleHeaderClick = (key) => {
    requestSort(key);
  };

  return (
    <div className="table-scroll-container">
      {data.length > 0 && (
        <div className="table-container">
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th className="header-cell">
                    <input
                      className="master-checkbox"
                      type="checkbox"
                      onChange={handleMasterCheckboxChange}
                    />
                  </th>
                  {Object.keys(data[0]).map((key) => (
                    <th
                      key={key}
                      className="header-cell"
                      onClick={() => handleHeaderClick(key)}
                    >
                      {key}
                      {sortConfig.key === key && (
                        <span>
                          {sortConfig.direction === "ascending" ? " ⬆️" : " ⬇️"}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedData().map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td className="cell">
                      <input
                        className="checkbox"
                        id={`checkbox_${rowIndex}`}
                        type="checkbox"
                        onChange={() => handleCheckboxChange(rowIndex)}
                      />
                    </td>
                    {Object.entries(row).map(([key, value], cellIndex) => (
                      <td key={cellIndex} className="cell">
                        {key === "Off / On" ? (
                          value === "On" ? (
                            <span className="pill-button on">On</span>
                          ) : value === "Off" ? (
                            <span className="pill-button off">Off</span>
                          ) : (
                            value
                          )
                        ) : key === "Campaign" ? (
                          <a
                            href={`YOUR_LINK_PREFIX/${value}`}
                            style={{ color: "#5E9EF5", textDecoration: "none" }}
                          >
                            {value !== "" && value !== null ? value : "-"}
                          </a>
                        ) : value !== "" && value !== null ? (
                          value
                        ) : (
                          "-"
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fetch_Excel_Data;
