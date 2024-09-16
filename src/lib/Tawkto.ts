"use client";
import { FC, useEffect } from 'react';

const Tawkto: FC = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/66e7d5d6ea492f34bc145240/1i7spmk5p';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append the script to the document
    const s0 = document.getElementsByTagName('script')[0];
    s0.parentNode?.insertBefore(script, s0);

    // Cleanup the effect (optional)
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // No UI rendered, it's just loading the script
};

export default Tawkto;
