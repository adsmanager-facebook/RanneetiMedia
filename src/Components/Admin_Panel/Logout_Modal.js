import React from "react";

const LogoutModal = ({ handleLogout }) => {
  const confirmLogout = () => {
    // Handle the logout action
    handleLogout();
  };

  const closeLogoutModal = () => {
    // Close the logout modal
    const modal = document.getElementById("logoutModal");
    modal.style.display = "none";
  };

  return (
    <div id="logoutModal" className="modal">
      <div className="modal-content">
        <p>Are you sure you want to logout?</p>
        <button id="confirmLogout" onClick={confirmLogout}>
          Yes
        </button>
        <button id="cancelLogout" onClick={closeLogoutModal}>
          No
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
