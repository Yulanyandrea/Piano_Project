"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";

export const GoogleAnalytic = () => {
  return (
    <>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId="G-WCZ1YYSNC6" // Optional, can be set in .env
        debugMode={false} // Enable for debugging
      />
    </>
  );
};
