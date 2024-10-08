import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TypeAnimation } from 'react-type-animation';


// Utility function to extract code language and code content from markdown
const parseCodeContent = (content) => {
  // Extract code language and code content from markdown code blocks
  const match = /```(\w+)?\n([\s\S]*?)```/.exec(content);
  return match ? { language: match[1] || 'text', code: match[2] } : { language: 'text', code: content };
};

const CodeMessageRenderer = ({ content }) => {
  const { language, code } = parseCodeContent(content);

  return (
    <div className="code-block-container position-relative p-3 my-3 border rounded bg-dark text-light">
      {/* Language Label */}
      <div className="language-label position-absolute top-0 start-0 p-2 bg-primary text-white">
        {language}
      </div>

      {/* Copy Icon */}
      <CopyToClipboard text={code}>
        <button className="copy-icon position-absolute top-0 end-0 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
            <path d="M10 1.5v1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h4v-1A1.5 1.5 0 0 1 7.5 0h1A1.5 1.5 0 0 1 10 1.5zm-1 0A.5.5 0 0 0 8.5 1h-1a.5.5 0 0 0-.5.5v1h2v-1a.5.5 0 0 0-.5-.5z"/>
            <path d="M3 3v10h10V3H3z"/>
          </svg>
        </button>
      </CopyToClipboard>

      {/* Code Block */}
      <SyntaxHighlighter language={language} style={lucario}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeMessageRenderer;
