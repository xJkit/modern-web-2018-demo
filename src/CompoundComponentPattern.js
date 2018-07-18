import React from 'react';
import { AppContext } from './App';

import IssueText from './components/IssueText';
import InlineEditing from './components/InlineEditing/CompoundComponent';
import Table from './components/Table';

class CompoundComponentPattern extends React.Component {
  renderContent = ({ data, handleChangeAddressAtIndex }) => {
    return (
      <div>
        <h3>Welcome to find me via the social media!</h3>
        <Table
          data={data}
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
                    onSave={handleChangeAddressAtIndex(rowIndex)}
                  >
                    <InlineEditing.Editor>
                      <InlineEditing.Input />
                      <InlineEditing.Button />
                    </InlineEditing.Editor>
                    <InlineEditing.Display />
                  </InlineEditing>
                );
              }
            }
          ]}
          style={{ width: 400, margin: '0 auto' }}
        />
        <IssueText
          title="How to use my own Input and Button components?"
          desc="implicit states are cleaner but not very good for custom components "
        />
      </div>
    );
  };

  render() {
    return <AppContext.Consumer>{this.renderContent}</AppContext.Consumer>;
  }
}

export default CompoundComponentPattern;
