import React from "react";
import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";

import ContactUs from "@/components/portfolio/contact/ContactUs";
import Nav from "@/components/portfolio/blogs/nav";
import ProjectView from "@/components/portfolio/works/single-project/project-view";
import Footer from "@/components/portfolio/home/footer";
import Lines from "@/components/Common/Lines";

import { fetchPortfolioData } from "@/lib/data";

const data = await fetchPortfolioData();

export async function generateMetadata({ params }) {
  const [project] = data.projects.filter(
    (project) => project._id == params.slug
  );
  return {
    title: project.title,
    description: project.description,
  };
}

function SingleProject({ params }) {
  const [project] = data.projects.filter(
    (project) => project._id == params.slug
  );

  if (!project) {
    throw new Error("Something went wrong");
  }
  return (
    <div>
      <Cursor />
      <ContactUs />
      <Lines />

      <ProgressScroll />
      <Nav />
      <main className="container">
        {project && <ProjectView singleProject={project} />}
      </main>
      <Footer />
    </div>
  );
}

export default SingleProject;
