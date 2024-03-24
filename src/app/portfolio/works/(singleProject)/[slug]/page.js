"use client";
import React, { useEffect, useState } from "react";
import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import LoadingScreen from "@/components/Common/loader";
import ContactUs from "@/components/portfolio/contact/ContactUs";
import Nav from "@/components/portfolio/blogs/nav";
import ProjectView from "@/components/portfolio/works/single-project/project-view";
import Footer from "@/components/portfolio/home/footer";
import Lines from "@/components/Common/Lines";
import { useData } from "@/context/PortfolioContext";
import { redirect } from "next/navigation";

function SingleProject({ params }) {
  const [singleProject, setSingleProject] = useState(null);

  const { data, loading, fetchData } = useData();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const [filteredProject] = data.projects.filter(
        (project) => project._id == params.slug
      );

      if (!filteredProject) {
        redirect("/portfolio");
      }

      setSingleProject(filteredProject);
    }
  }, [data]);

  if (loading) {
    return (
      <>
        <Cursor />
        <ProgressScroll />
        <LoadingScreen />
      </>
    );
  }

  return (
    <div>
      <Cursor />
      <ContactUs />
      <Lines />
      <LoadingScreen />
      <ProgressScroll />
      <Nav />
      <main className="container">
        {singleProject && <ProjectView singleProject={singleProject} />}
      </main>
      <Footer />
      <script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />
      <script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default SingleProject;
