import React from 'react';

// Display the raw 4icons.svg file from public/.
// Using an <img> lets the browser render it exactly as exported,
// which is convenient for reviewing the source artwork on the start page.

export default function FourIcons() {
  return (
    <img
      src="/4icons.svg"
      width={254}
      height={128}
      alt="Original 4icons"
      style={{ display: 'block' }}
    />
  );
}
