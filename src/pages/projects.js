import React from 'react';
import Layout from '../components/layout';
import ProjectsHeader from '../components/projects/projectsHeader';
import ProjectsContent from '../components/projects/projectsContent';

const ProjectsPage = () => 
    <Layout>
        <ProjectsHeader />
        <ProjectsContent />
    </Layout>

export default ProjectsPage;