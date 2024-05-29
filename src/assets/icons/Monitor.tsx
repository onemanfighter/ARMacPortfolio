import * as React from 'react';

const MonitorIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21 16H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h7v2H8v2h8v-2h-2v-2h7a2 2 0 002-2V4a2 2 0 00-2-2z" />
    </svg>
  );
};

export { MonitorIcon };
