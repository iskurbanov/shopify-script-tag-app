import gql from 'graphql-tag';
import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Button, Card, Layout, Page, ResourceList, Stack } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';

const CREATE_SCRIPT_TAG = gql`
    mutation scriptTagCreate($input: ScriptTagInput!) {
        scriptTagCreate(input: $input) {
            scriptTag {
                id
            }
            userErrors {
                field
                message
            }
        }
    }
`;

const QUERY_SCRIPTTAGS = gql`
    query {
        scriptTags(first: 5) {
            edges {
                node {
                    id
                    src
                    displayScope
                }
            }
        }
    }
`;

const DELETE_SCRIPTTAG = gql`
    mutation scriptTagDelete($id: ID!) {
        scriptTagDelete(id: $id) {
            deletedScriptTagId
            userErrors {
                field
                message
            }
        }
    }
`;

function ScriptPage() {

  const [createScripts] = useMutation(CREATE_SCRIPT_TAG);
  const [deleteScripts] = useMutation(DELETE_SCRIPTTAG);
  const { loading, error, data } = useQuery(QUERY_SCRIPTTAGS);
  const [modal, setModal] = useState({ open: false })

  function handleSelection(resources) {
    const idsFromResources = resources.selection.map((product) => product.id);
    setModal({ open: false });
    store.set('ids', idsFromResources)

    const selectedProducts = resources.selection;

    deleteApiData();

    selectedProducts.map(product => makeApiCall(product));
}


  if (loading) return <div>Loading…</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Page>
       <TitleBar
                primaryAction={{
                    content: 'Select New Products',
                    onAction: () => setModal({ open: true })
                }}
            />
            <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={modal.open}
                onCancel={() => setModal({ open: false })}
                onSelection={(resources) => handleSelection(resources)}
            />
      <Layout>
        <Layout.Section>
          <Card title="These are the Script Tags:" sectioned>
            <p>
              Create or Delete a Script Tag
            </p>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card title="Delete Tag" sectioned>
            <Button
              primary
              size="slim"
              type="submit" onClick={() => {
                createScripts({
                  variables: {
                    input: {
                      src: "https://f334e47b4654.ngrok.io/test-script.js",
                      displayScope: "ALL"
                    }
                  },
                  refetchQueries: [{ query: QUERY_SCRIPTTAGS }]
                })
              }}
            >
              Create Script Tag
            </Button>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <ResourceList
              showHeader
              resourceName={{ singular: 'Script', plural: 'Scripts' }}
              items={data.scriptTags.edges}
              renderItem={item => {
                return (
                  <ResourceList.Item
                    id={item.id}
                  >
                    <Stack>
                      <Stack.Item>
                        <p>
                          {item.node.id}
                        </p>
                      </Stack.Item>
                      <Stack.Item>
                        <Button type='submit' onClick={() => {
                          deleteScripts({
                            variables: {
                              id: item.node.id
                            },
                            refetchQueries: [{ query: QUERY_SCRIPTTAGS }]
                          })
                        }}>
                          Delete Script Tag
                        </Button>
                      </Stack.Item>
                    </Stack>
                  </ResourceList.Item>
                )
              }}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default ScriptPage;
