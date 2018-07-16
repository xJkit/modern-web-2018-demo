import React from 'react';

import Table from './components/Table';
import personalData from './personal_data.json';

class NoPattern extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h3>Welcome to find me from the social media!</h3>
        <Table
          data={personalData}
          columns={[
            {
              title: 'Social Media',
              dataIndex: 'media',
              width: 80
            },
            {
              title: 'Account',
              dataIndex: 'address',
              width: 220,
              cellStyle: { textAlign: 'left' }
            }
          ]}
          style={{ width: 400, margin: '0 auto' }}
        />
      </div>
    );
  }
}

export default NoPattern;
