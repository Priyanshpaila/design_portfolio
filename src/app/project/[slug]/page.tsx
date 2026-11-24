import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import ProjectDetailView from "@/components/ProjectDetailView";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Graphic Design Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Graphic Design Portfolio`,
      description: project.summary,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = PROJECTS.find((p) => p.slug === project.nextSlug);
  const prevProject = PROJECTS.find((p) => p.slug === project.prevSlug);

  return (
    <ProjectDetailView
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
}
