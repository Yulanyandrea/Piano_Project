"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";

export const GoogleAnalytic = () => {
  return (
    <>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId="YOUR_GA_MEASUREMENT_ID" // Optional, can be set in .env
        debugMode={false} // Enable for debugging
      />
    </>
  );
};
