import React from 'react';

const renderContent = (content) => {
    // Split the content by lines and filter out empty lines
    const lines = content.split('\n').filter(line => line.trim() !== '');

    return lines.map((line, index) => (
        <p key={index}>{line}</p>
    ));
};

const TestComponent = () => {
    const testString = "Test with pieni, pienemällä, and pieneksi.";
    return (
        <div>
          <p>Test with pieni, pienemällä, and pieneksi. suola </p>
        </div>
      );
};

export default TestComponent;
