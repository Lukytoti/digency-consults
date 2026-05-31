"use client";

import Script from "next/script";

/**
 * Analytics + Pixel placeholders.
 *
 * Set the IDs in `.env.local`:
 *   NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_FB_PIXEL_ID, NEXT_PUBLIC_VISITOR_TRACKING_ID
 *
 * Vercel Analytics and Speed Insights are loaded in the root layout.
 */
export function AnalyticsScripts() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const fb = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const tracker = process.env.NEXT_PUBLIC_VISITOR_TRACKING_ID;

  return (
    <>
      {ga && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga}');
            `}
          </Script>
        </>
      )}

      {fb && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fb}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {tracker && (
        <Script id="visitor-tracker" strategy="afterInteractive">
          {`
            // Visitor tracking placeholder (replace with your provider snippet).
            window.__visitorTrackerId = '${tracker}';
          `}
        </Script>
      )}
    </>
  );
}
