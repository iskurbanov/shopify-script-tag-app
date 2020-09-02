import React, { useState } from 'react';
import { EmptyState, Layout, Page } from '@shopify/polaris';
import { MediaCard } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ProductList from '../components/ProductList';
import axios from 'axios';

function Index() {

    const [modal, setModal] = useState({ open: false })
    const emptyState = !store.get('ids');

    function handleSelection(resources) {
        const idsFromResources = resources.selection.map((product) => product.id);
        setModal({ open: false });
        store.set('ids', idsFromResources)

        const selectedProducts = resources.selection;

        deleteApiData();

        selectedProducts.map(product => makeApiCall(product));
    }

    function deleteApiData() {
        const url = '/api/products';

        axios.delete(url);
    }

    async function makeApiCall(products) {
        const url = '/api/products';

        axios.post(url, products)
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }


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
            {emptyState ?
                <Layout>
                    <EmptyState
                        heading="We are Zuffu"
                        // action={{
                        //     content: 'Select Products',
                        //     onAction: () => setModal({ open: true })
                        // }}
                        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                    >
                        <p>We help you dynamically change prices based on where your visitor is from.</p>
                        {/* <MediaCard
                            title="Turn your side-project into a business"
                            primaryAction={{
                                content: 'Learn more',
                                onAction: () => {},
                            }}
                            description={`In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business.`}
                            popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
                        >
                        <VideoThumbnail
                            videoLength={80}
                            thumbnailUrl="https://burst.shopifycdn.com/photos/smiling-businesswoman-in-office.jpg?width=1850"
                        />
                        </MediaCard> */}
                    </EmptyState>
                </Layout>
                :
                <ProductList />
            }
        </Page>
    )

}

export default Index;
