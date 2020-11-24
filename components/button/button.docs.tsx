import React from 'react';
import { Button } from './button';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { List } from '@teambit/documenter.ui.list';
import { Separator } from '@teambit/documenter.ui.separator';

export default function Overview() {
  return (
    <ThemeContext> 
      <>
        <Section>
          <LinkedHeading link="guidelines">Guidelines</LinkedHeading>
          <List spacing="lg">
            {[
              `Place buttons where expect to find them. Do not force users to "hunt for buttons".`,
              `Do not use generic for your buttons. Use verbs that clearly explain the button's function.`,
              `Size buttons in proportion to their importance.`,
            ]}
          </List>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
};

Overview.abstract = 'An imperfect button.';

Overview.labels = ['react', 'typescript', 'button'];

Overview.examples = [
  {
    scope: {
      Button,
    },
    title: 'Using the Button component',
    description: <div>example description with JSX</div>,
    jsx: <Button variant="primary">Click here</Button>,
  },
  {
    scope: {
      Button,
    },
    description: 'Use the Button component with any (native) HTML button attribute.',
    jsx: <Button disabled>Click here</Button>,
  },
];