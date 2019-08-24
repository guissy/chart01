import React from 'react';

interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  pos: [number, number, number, number]
}

const Line: React.FC<Props> = ({ pos, ...props }) => {
  const ref = React.useRef(null);
  const requestRef = React.useRef(0);

  React.useEffect(() => {
    let direct = 1;
    if (ref.current) {
      const canvas = ref.current as unknown as HTMLCanvasElement;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = Math.random();
      ctx.beginPath();
      ctx.moveTo(226, 69);
      ctx.quadraticCurveTo(...pos);
      ctx.stroke();
      const animate = () => {
        if (ctx.lineWidth <= 0.07) {
          direct = 1;
          ctx.lineWidth = 0.07;
        }
        if (ctx.lineWidth >= 0.55) {
          direct = -1;
          ctx.lineWidth = 0.55;
        }
        ctx.lineWidth += 0.02 * Math.random() * direct;
        ctx.clearRect(0, 0, 280, 280);
        ctx.beginPath();
        ctx.moveTo(226, 69);
        ctx.quadraticCurveTo(...pos);
        ctx.stroke();
        requestRef.current = requestAnimationFrame(animate);
      }
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestRef.current)
  }, []);
  return (
    <canvas ref={ref} width="280" height="280" {...props} />
  );
};

export default React.memo(Line);