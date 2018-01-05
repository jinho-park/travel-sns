import React from 'react';
import { Header, SectionsContainer, Section } from 'components';
import { AuthContainer } from 'containers';

export default class ScrollTemplate extends React.Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        true,
      sectionPaddingTop:    '0px',
      sectionPaddingBottom: '0px',
      arrowNavigation:      true
    };

    return (
      <div>
      

      
        
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" color="#69D2E7">
            <AuthContainer/>
          </Section>
          
          <Section color="#A7DBD8">
            page111
          </Section>
          
          <Section color="#E0E4CC">
          page222
          </Section>
          
          <Section color="#E3E45C">
          page333
          </Section>
        </SectionsContainer>
      </div>
    );
  }

};


