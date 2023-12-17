
import React from 'react';

function DotSvg({fill, width}) {
    return (
        // <svg fill={fill} stroke="#000000" stroke-width="1px" width={width} height={width} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"/></svg>
        <svg width={width} height={width} xmlns="http://www.w3.org/2000/svg">
          {/* <circle cx="6" cy="6" r="4.8" stroke="#000000" stroke-width="1" fill="none" /> */}
            <circle cx={(Number(width) / 2).toString() } cy={(Number(width) / 2).toString()} r={(Number(width) * 0.40).toString()} stroke="#000000" stroke-width="1" fill={fill} />
        </svg>
    );
}
export default DotSvg;
