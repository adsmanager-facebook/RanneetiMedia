// admin_panel_data.js
import React from "react";
import Fetch_Excel_Data from "../../Fetch_Excel_Data";

const Admin_Panel_Data = () => {
  const isFetchExcelDataAvailable =
    typeof Fetch_Excel_Data !== "undefined" && Fetch_Excel_Data !== null;

  return (
    <div className="_g1z">
      {isFetchExcelDataAvailable ? (
            <Fetch_Excel_Data />
          ) : (
            <>
              <i
                className="_3-96 img"
                alt
                data-visualcompletion="css-img"
                style={{
                  "background-image":
                    'url("https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/l_Lqct8jJcQ.png")',
                  "background-position": "-147px -1647px",
                  "background-size": "auto",
                  width: "48px",
                  height: "48px",
                  "background-repeat": "no-repeat",
                  display: "inline-block",
                }}
              />
              <div
                aria-level={3}
                className="x8t9es0 x1uxerd5 xrohxju x108nfp6 xq9mrsl x2b8uid x1h4wwuj x117nqv4 xeuugli x12nagc"
                role="heading"
              >
                Get set up to run ads
              </div>
              <div className="x8t9es0 x1fvot60 xo1l8bm xxio538 x6lvj10 xq9mrsl x2b8uid x1h4wwuj xeuugli">
                Confirm a few details in Account overview so that you can
                publish your first ad campaign.
              </div>
              <div className="x3nfvp2 x193iq5w xxymvpz x14vqqas" role="none">
                <div
                  aria-busy="false"
                  className="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                  role="button"
                  tabIndex={0}
                >
                  <span className="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                    <div className="x78zum5">
                      <div className="xeuugli x2lwn1j x6s0dn4 x78zum5 x1q0g3np x1iyjqo2 xozqiw3 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                        <div className="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                          Go to Account overview
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </>
          )}
    </div>
  );
};

export default Admin_Panel_Data;
