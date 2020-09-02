import React, { useState } from 'react';
import { EmptyState, Layout, Page, MediaCard } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ProductList from '../components/ProductList';
import axios from 'axios';

function Settings() {


    return (
        // <div>
        //     <p>hello</p>
        // </div>
        <MediaCard
    title="Getting Started"
    primaryAction={{
      content: 'Learn about getting started',
      onAction: () => {},
    }}
    description="Discover how Shopify can power up your entrepreneurial journey."
    popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
  >
    <img
      alt=""
      width="100%"
      height="100%"
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
      }}
      src="https://burst.shopifycdn.com/photos/smiling-businesswoman-in-office.jpg?width=1850"
    />
  </MediaCard>
      );

}

export default Settings;
