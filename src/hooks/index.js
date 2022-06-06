import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  
  return (
    <Layout title={siteConfig.title} description="Documentation for Repli: the free, collaborative, in-browser IDE">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        
      </div>
    </Layout>
  );
}