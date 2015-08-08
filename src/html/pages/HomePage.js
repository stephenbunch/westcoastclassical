import React from 'react';
import Page from '../components/Page';
import PageContent from '../components/PageContent';
import PageSection from '../components/PageSection';
import List from '../components/List';
import ListItem from '../components/ListItem';

export default class HomePage extends React.Component {
  render() {
    return (
      <Page title="Home">
        <PageContent className="u-trumpetBackground">
          <PageSection title="Welcome">
            West Coast Classical is a structured community platform designed to foster the advancement of musicians from all backgrounds through pre-professional & professional orchestral achievements, ensemble experiences, and educational programs.
          </PageSection>
          <PageSection title="We Offer">
            <List>
              <ListItem>Orchestral, ensemble, and educational programs for all ages & levels of musical maturity</ListItem>
              <ListItem>An established legacy within the Antelope Valley community with distinguished & experienced program leaders</ListItem>
              <ListItem>Diverse performance opportunities</ListItem>
            </List>
          </PageSection>
        </PageContent>
      </Page>
    );
  }
};
