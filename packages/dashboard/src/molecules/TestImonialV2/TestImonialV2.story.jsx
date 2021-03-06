import React from 'react';
import TestImonialV2 from './TestImonialV2';
import Story from '@lskjs/dev/Story';


const articles = [
  {
    avatar: 'https://picsum.photos/200',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione consequuntur ut placeat.',
    name: 'Jason Bourne',
    title: 'Senior PM',
    paint: 'info',
  },
];

export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/TestImonialV2', module)
    .add('default', () => (
      <Story>
        <TestImonialV2 {...articles[0]} />
      </Story>
    ))
);
