import React from 'react';

const SmallTextAnimation = (props) => {
  const { text, textColor, fontSize } = props;
  const instanceId = React.useId().replace(/:/g, "");

  return (
    <div className={`small-text-anim-${instanceId}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
      <h1
        style={{
          position: 'relative',
          fontSize: fontSize || '70px',
          fontWeight: '800',
          fontFamily: "'Inter', sans-serif",
          color: 'transparent',
          margin: 0,
          padding: 0,
          lineHeight: '1.2',
          letterSpacing: '0.025em',
        }}
        data-text={text}
      >
        {text}
      </h1>
      <style dangerouslySetInnerHTML={{
        __html: `
          .small-text-anim-${instanceId} h1::before {
            content: attr(data-text);
            font-family: 'Inter', sans-serif;
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            overflow: hidden;
            font-weight: 800;
            font-size: ${fontSize || '70px'};
            background: ${textColor};
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            animation: smallTextAnim-${instanceId} 2s ease-out forwards;
            animation-delay: 0.5s;
            white-space: nowrap;
          }
          
          @keyframes smallTextAnim-${instanceId} {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
        `
      }} />
    </div>
  );
};

export default SmallTextAnimation;
