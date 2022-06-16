import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export default function HttpRequestCodeExample ({ request, response, withIndent }) {
  return (
    <div style={{ marginLeft: withIndent ? '30px' : '0' }}>
      <Tabs>
        <TabItem value="request" label="Request">
          <CodeBlock language="shell">

            {request.trim()}

          </CodeBlock>
        </TabItem>
        <TabItem value="response" label="Response">
          <CodeBlock language="json">

            {response.trim()}

          </CodeBlock>
        </TabItem>
      </Tabs>
    </div>
  );
};
