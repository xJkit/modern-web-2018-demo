import React from 'react';

import IssueText from './components/IssueText';
import InlineEditing from './components/InlineEditing/ContainerComponent';
import Table from './components/Table';

import { AppContext } from './App';

class ContainerComponentPattern extends React.Component {
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
                    /** issue: passing redundant props to customize the presentational components */
                    okButtonStyle={{}}
                    inputStyle={{}}
                    editorStyle={{}}
                    displayStyle={{}}
                    buttonOrder={[]}
                  />
                );
              }
            }
          ]}
          style={{ width: 400, margin: '0 auto' }}
        />
        <IssueText
          title={`How to customize button and input styles? How to change the button order?`}
          desc="It takes redundant props to be passed to presentationl components inside container component"
        />
      </div>
    );
  };

  render() {
    return <AppContext.Consumer>{this.renderContent}</AppContext.Consumer>;
  }
}

export default ContainerComponentPattern;
