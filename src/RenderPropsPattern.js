import React from 'react';

import IssueText from './components/IssueText';
import InlineEditing from './components/InlineEditing/RenderProps';
import Table from './components/Table';

import { AppContext } from './App';

class RenderPropsPattern extends React.Component {
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
              render: (rowValue, data, rowIndex) => {
                return (
                  <InlineEditing
                    value={rowValue}
                    onSave={handleChangeAddressAtIndex(rowIndex)}
                    render={({
                      value,
                      handleChangeInput,
                      handleSave,
                      toggleEditing,
                      isEditing
                    }) => {
                      return isEditing ? (
                        <InlineEditing.Editor>
                          <InlineEditing.Input
                            value={value}
                            onChange={handleChangeInput}
                          />
                          <InlineEditing.Button onClick={handleSave} />
                        </InlineEditing.Editor>
                      ) : (
                        <InlineEditing.Display onClick={toggleEditing}>
                          {rowValue}
                        </InlineEditing.Display>
                      );
                    }}
                  />
                );
              }
            }
          ]}
          style={{ width: 400, margin: '0 auto' }}
        />
        <IssueText desc="You can combine props collection or props getter with render props" />
        <IssueText desc="Use props collection to pass style objects directly to your components" />
        <IssueText desc="exposed value and handle functions can be passed directly to your components" />
        <IssueText desc="render props can use children prop to look like normal jsx structure" />
      </div>
    );
  };
  render() {
    return <AppContext.Consumer>{this.renderContent}</AppContext.Consumer>;
  }
}

export default RenderPropsPattern;
