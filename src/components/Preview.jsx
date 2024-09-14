import React, { useEffect, useRef } from 'react';

const Preview = ({ files, images }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    let htmlContent = files['index.html'];
    Object.keys(images).forEach((imageName) => {
      const imagePath = `images/${imageName}`;
      htmlContent = htmlContent.replace(imagePath, images[imageName]);
    });

    const fullContent = `
      <html>
        <head>
          <style>${files['style.css']}</style>
        </head>
        <body>
          ${htmlContent}
          <script>${files['script.js']}</script>
        </body>
      </html>
    `;

    iframeDoc.open();
    iframeDoc.write(fullContent);
    iframeDoc.close();
  }, [files, images]);

  return (
    <iframe
      ref={iframeRef}
      width="100%"
      height="100%"
    />
  );
};

export default Preview;
