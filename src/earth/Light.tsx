import React from 'react';
import DotLight from './DotLight';
import DotLightLow from './DotLightLow';
import Line from './Line';

interface Props {
}

const Light: React.FC<Props> = ({}) => {
  const pos = { position: 'absolute', transform: 'scale(0.1)' } as any;
  const pos2 = { position: 'absolute', top: '-70px', left: '-70px', transform: 'scale(0.5)' } as any;
  return (
      <div>
        <DotLightLow style={{...pos, top: '27px', left: '73px'}} delay={600}/>
        <Line style={pos2} pos={[205,45,184,36]} />
        <Line style={pos2} pos={[155,25,53,57]} />
        <Line style={pos2} pos={[145,25,43,128]} />
        <Line style={pos2} pos={[165,45,124,90]} />
        <Line style={pos2} pos={[165,65,74,197]} />
        <Line style={pos2} pos={[185,95,164,131]} />
        <Line style={pos2} pos={[210,110,210,121]} />
        <Line style={pos2} pos={[238,90,240,107]} />
        <Line style={pos2} pos={[230,68,245,77]} />
        <DotLightLow style={{...pos, top: '32px', left: '50px'}} delay={100}/>
        <DotLightLow style={{...pos, top: '12px', left: '30px'}} delay={300}/>
        <DotLightLow style={{...pos, top: '65px', left: '5px'}} delay={450}/>
        <DotLightLow style={{...pos, top: '-5px', left: '-5px'}} delay={380}/>
        <DotLightLow style={{...pos, top: '30px', left: '-10px'}} delay={500}/>
        <DotLightLow style={{...pos, top: '-15px', left: '60px'}} delay={250}/>
        <DotLightLow style={{...pos, top: '20px', left: '88px'}} delay={250}/>
        <DotLightLow style={{...pos, top: '5px', left: '90px'}} delay={250}/>
        <DotLight style={{position: 'absolute', top: '30px', left: '113px', transform: 'scale(0.15)'}}/>
      </div>
  );
};

export default Light;