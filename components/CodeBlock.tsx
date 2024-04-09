'use client'
import React, { useEffect } from 'react';
import 'prismjs/themes/prism-okaidia.css';
import Prism from 'prismjs';


const CodeBlock: React.FC<{ language: string; children: string }> = ({ language, children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
};

export default CodeBlock;