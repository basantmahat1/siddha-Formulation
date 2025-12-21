import React, { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = forwardRef(({ onValidChange }, ref) => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  if (!siteKey) return null;

  return (
    <div className="w-full flex justify-start py-2 overflow-visible">
      {/* A scale of 0.85 reduces the popup card to a compact size.
          transformOrigin: "left top" keeps the card from drifting.
      */}
      <div
        style={{
          transform: "scale(0.85)",
          transformOrigin: "left top",
          width: "max-content",
        }}
      >
        <ReCAPTCHA
          ref={ref}
          sitekey={siteKey}
          onChange={(token) => onValidChange(!!token)}
          onExpired={() => onValidChange(false)}
        />
      </div>
    </div>
  );
});

export default Captcha;
