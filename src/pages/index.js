import React from "react";
import Layout from '../components/layout';
import IndexHeader from "../components/index/indexHeader";
import MainContentIndex from "../components/index/mainContentIndex";

const IndexPage = () => {

    return (
        <Layout>
            <IndexHeader />
            <MainContentIndex />
        </Layout>
    )
}

export default IndexPage;
