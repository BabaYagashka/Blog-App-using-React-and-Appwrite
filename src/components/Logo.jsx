import React from 'react'

function Logo({ width = "100px" }) {
    return (
      <span className="hidden lg:block text-xl font-bold text-white tracking-tight">
        BLOG<span className="text-blue-500">.</span>SPACE
      </span>
    );
}

export default Logo
