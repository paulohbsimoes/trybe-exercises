import React, { Component } from 'react';

import './Resume.css';

class Resume extends Component {
  componentDidMount() {
    this.section.scrollIntoView();
  }

  render() { 
    const { values } = this.props;
    return (
      <section className="resume" ref={ (section) => this.section = section }>
        <h2 className="py-4 text-center">Resumo das informações aqui</h2>
        <dl className="container my-5">
          { Object.entries(values).map(([key, val], index) => (
              <React.Fragment key={ index }>
                <dt>{key}</dt>
                <dd>{val}</dd>
              </React.Fragment>
            )) }
        </dl>
      </section>
    );
  }
}
 
export default Resume;
