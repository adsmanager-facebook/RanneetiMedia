import React, { useState } from "react";
import Calendar_Modal from "./Calendar_Modal"; // Import your CalendarModal component

const Admin_Panel_Search_Calender = () => {
  const[showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const openCalendar = () => {
    setShowCalendar(true);
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Do something with the selected date, e.g., store it in state, send it to the server, etc.
    // For now, let's just log it.
    console.log("Selected Date:", date);
  };

  return (
    <div className="x1i64zmx x1emribx xwib8y2">
      <div className="_4u-c x78zum5">
        <div className="x78zum5 x1qughib xh8yej3">
          <div className="xgyuaek x1ed109x">
            <div
              className="x1gzqxud x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1kmqopl x5yr21d xh8yej3"
              data-auto-logging-component-type="GeoCard"
            >
              <div className="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                <div className="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                  <div className="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                    <div className="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1" />
                    <div className="x78zum5 x1nhvcw1 x6s0dn4 x1iyjqo2 x1ye3gou xc9qbxq">
                      <div className="x78zum5 x6s0dn4 x5yr21d">
                        <div className="x1kky2od x6s0dn4 x78zum5 x5yr21d">
                          <i
                            alt
                            data-visualcompletion="css-img"
                            className="img"
                            style={{
                              "background-image": "var(--sf-img-13)",
                              "background-position": "-234px -1586px",
                              "background-size": "auto",
                              width: "16px",
                              height: "16px",
                              "background-repeat": "no-repeat",
                              display: "inline-block",
                            }}
                          />
                        </div>
                        <div className="x1sliqq">
                          <div className="x6s0dn4 x78zum5">
                            <span className="x8t9es0 x1fvot60 xo1l8bm xxio538 x6lvj10 xq9mrsl x1h4wwuj xeuugli">
                              Search and filter
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5" />
                  </div>
                  <div className="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy" />
                  <div className="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xsgj6o6">
          <div>
            <span
              data-tracked="true"
              data-mouseenterable={1}
              data-mouseleaveable={1}
              data-clickable={1}
              data-auto-logging-id="f1f8f54920ed7"
            >
              <span className="_5ldw">
                <span>
                  <button
                    aria-haspopup="true"
                    type="button"
                    aria-disabled="false"
                    className="_271k _271m _1qjd _ai7j _ai7l _ai7m"
                    style={{
                      "max-width": "100%",
                      "letter-spacing": "normal",
                      color: "rgb(28,30,33)",
                      "font-size": "14px",
                      "font-weight": "normal",
                      "font-family": "Roboto,Arial,sans-serif",
                      "line-height": "36px",
                      "-webkit-text-align": "center",
                      "text-align": "center",
                      "background-color": "rgba(0,0,0,0.05)",
                      "border-color": "rgba(0,0,0,0.05)",
                      height: "36px",
                      "padding-left": "16px",
                      "padding-right": "16px",
                      "border-radius": "6px",
                      "border-width": "0px",
                    }}
                    data-auto-logging-id="f35a96556721464"
                  >
                    <div className="_43rl">
                      <div
                        data-hover="tooltip"
                        data-tooltip-display="overflow"
                        className="_43rm"
                      >
                        <div className="_1uz0">
                          <div>
                            This month: Dec 1, 2023 – Dec 15, 2023&nbsp;
                          </div>
                        </div>
                      </div>
                      <i
                        aria-hidden="true"
                        className="_271o img"
                        alt
                        data-visualcompletion="css-img"
                        style={{
                          "margin-left": "8px",
                          "margin-right": "-6px",
                          "background-image": "var(--sf-img-10)",
                          "background-position": "0px -2307px",
                          "background-size": "auto",
                          width: "16px",
                          height: "16px",
                          "background-repeat": "no-repeat",
                          display: "inline-block",
                        }}
                      />
                    </div>
                  </button>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Panel_Search_Calender;
