import React, { useState } from 'react';
import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ProductList from '../components/ProductList';
import axios from 'axios';

function Settings() {


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
                        heading="Manage your inventory transfers"
                        action={{
                            content: 'Select Products',
                            onAction: () => setModal({ open: true })
                        }}
                        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                    >
                        <p>Select Products</p>
                    </EmptyState>
                </Layout>
                :
                <ProductList />
            }
        </Page>
    )

}

export default Settings;
