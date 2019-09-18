import React from 'react';

import { storiesOf } from '@storybook/react';
import CircleArc from '../bg/CircleArc';
import NiceLine from '../bg/NiceLine';
import DotLight from '../earth/DotLight';
import DotLightLow from '../earth/DotLightLow';
import DoubleLightButton from '../earth/DoubleLightButton';
import Earth from '../earth/Earth';
import Light from '../earth/Light';
import EarthSun from '../earth/EarthSun';
import Line from '../earth/Line';
import TripleLightButton from '../earth/TripleLightButton';
import { themes } from '@storybook/theming';

storiesOf('bg', module)
  .add('with CircleArc', () => <CircleArc/>)
  .add('with NiceLine', () => <NiceLine/>);

storiesOf('earth', module)
  .addParameters({
    options: {
      theme: themes.dark,
    },
  })
  .add('with DotLight', () => <DotLight style={{position: 'absolute', top: '50px', left: '50px'}}/>)
  .add('with DoteLightLow', () => <DotLightLow/>)
  .add('with DoubleLightButton', () => <DoubleLightButton text="ok" value="30p" style={{ transform: '' }}/>)
  .add('with Light', () => <Light/>)
  .add('with Line', () => <Line pos={[20, 20, 50, 50]}/>)
  .add('with TripleLightButton', () => <TripleLightButton text="ok" value="30p"/>)
  .add('with Earth', () => <Earth/>)
  .add('with EarthSun', () => <EarthSun/>)
