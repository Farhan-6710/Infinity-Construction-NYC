import React from "react";

const MapComponent = () => {
  return (
    <div style={{ position : "relative" , width: "100%", height: "400px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12112.227689017303!2d-73.94673794401245!3d40.628626625328735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244aaa43c4da5%3A0x3b380d0d01b04789!2s1809%20Albany%20Ave%2C%20Brooklyn%2C%20NY%2011210%2C%20USA!5e0!3m2!1sen!2sin!4v1733175326249!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute inset-0 dark:bg-black dark:bg-opacity-30"></div>
    </div>
  );
};

export default MapComponent;
