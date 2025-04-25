import React from "react";
import ReactMarkdown from "react-markdown";

const markdownText = `
# Hello World
This is a **bold** text.
- Item 1
- Item 2
`;

const ReadMeComponent = () => {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
};

export default ReadMeComponent;