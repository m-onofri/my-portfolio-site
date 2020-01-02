import React from 'react';
import Layout from '../components/layout';
import ContactHeader from '../components/contact/contactHeader';
import ContactContent from '../components/contact/contactContent';

const ContactPage = () =>
    <Layout>
        <ContactHeader />
        <ContactContent />
    </Layout>

export default ContactPage;