import React    from 'react';
import {SectionsContainer, Section} from 'components';
import { AuthContainer } from 'containers';

export default class ScrollTemplate extends React.Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '0px',
      sectionPaddingBottom: '0px',
      arrowNavigation:      true
    };

    return (
      <div>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">
            <AuthContainer/>
          </Section>
          <Section verticalAlign="true" color="#A7DBD8"></Section>
          <Section verticalAlign="true" color="#E0E4CC"></Section>
          <Section color="#E3E45C">Page 4</Section>
        </SectionsContainer>
      </div>
    );
  }

};


