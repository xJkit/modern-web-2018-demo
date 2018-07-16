import React from 'react';

import IssueText from './components/IssueText';
import InlineEditing from './components/InlineEditing/ContainerComponent';
import Table from './components/Table';
import personalData from './personal_data.json';

class CompoundComponentPattern extends React.Component {
  state = {
    data: personalData
  };

  handleChangeAddressAtIndex = newIdx => newAddress => {
    this.setState(state => ({
      data: state.data.map((oldRow, oldIdx) => {
        if (oldIdx === newIdx) {
          return { ...oldRow, address: newAddress };
        }
        return oldRow;
      })
    }));
  };

  render() {
    return (
      <div>
        <h3>Welcome to find me from the social media!</h3>
        <Table
          data={this.state.data}
          columns={[
            {
              title: 'Social Media',
              dataIndex: 'media',
              width: 80
            },
            {
              title: 'Address',
              dataIndex: 'address',
              cellStyle: { padding: 0 },
              width: 220,
              render: (value, data, rowIndex) => {
                return (
                  <InlineEditing
                    value={value}
                    onSave={this.handleChangeAddressAtIndex(rowIndex)}
                  />
                );
              }
            }
          ]}
          style={{ width: 400, margin: '0 auto' }}
        />
        <IssueText
          title={`How to customize <button />? <input />?`}
          desc="It takes redundant props to be passed to presentationl components inside container component"
        />
      </div>
    );
  }
}

export default CompoundComponentPattern;
