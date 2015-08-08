import React from 'react';
import Page from '../components/Page';
import Bio from '../components/Bio';
import BioSlider from '../components/BioSlider';
import PageContent from '../components/PageContent';
import PageSection from '../components/PageSection';

export default class AboutPage extends React.Component {
  render() {
    return (
      <Page title="About Us">
        <PageContent className="u-trumpetBackground">
          <PageSection title="Background">
            The various Palmdale Playhouse ensemble programs have inspired a love for the musical arts and have benefitted our community since 1997. Under the dedicated leadership of many accomplished contributors, the program has continued to advance to new levels of excellence and maturity. In 2013, these programs were assembled into a more cohesive community, non-profit platform called West Coast Classical so that our musicians could grow in numbers, in their experiences & abilities, and for our expanded platform to reach deeper into the community and beyond.
          </PageSection>
          <PageSection title="Mission Statement">
            To inspire a passion for the musical arts and foster the advancement of musicians from all backgrounds who seek to achieve excellence on a pre-professional platform and beyond.
          </PageSection>
          <PageSection title="Value Proposition">
            Access to musical arts for the community and its musicians from all backgrounds and skill who seek to achieve excellence in orchestral, ensemble and classroom experiences.
          </PageSection>
        </PageContent>
        <BioSlider navClassName="u-fluteBackground">
          <Bio name="Patricia Graham" photo="/img/portrait_pgraham.jpg">
            has been an active professional musician in Southern California for 25 years. She has conducted West Coast Classical formerly known as Palmdale Symphonic Orchestras for 17 years. She studied violin performance with Robert Lipsett at age 14 and continued with him at CSUN. She has a studio of 71 private students. Patricia has played with Antelope Valley Symphony Orchestra, Bakersfield Symphony Orchestra and Santa Maria Philharmonic Orchestra. She has played in pit orchestras for over 20 shows, also has her own quartet that plays for private venues. She has been music director for over 50 musical stage productions since 2001. She has worked for DOT, PRT, Cedar Street Theater and Santa Clarita Regional Theater Company.
          </Bio>
        </BioSlider>
      </Page>
    );
  }
};
