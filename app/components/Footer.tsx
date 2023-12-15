import React from "react";

const Footer = () => {
  return (
    <footer className=" mx-auto max-w-5xl px-6">
      <div className="border-t dark:border-purple-900 py-6 text-center">
        Developed by{" "}
        <a
          className="text-purple-500 "
          href="https://www.linkedin.com/in/aguspranyoto/"
        >
          Agus Pranyoto
        </a>{" "}
        <br />
        Special thanks to{" "}
        <a
          className="text-purple-500 "
          href="https://www.youtube.com/@codewalkempire"
        >
          Codewalk Empire{" "}
        </a>
        for guidance and mentorship in crafting this website
      </div>
    </footer>
  );
};

export default Footer;
