import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "@phosphor-icons/react";
import { TProject } from "../@types/project";
import Badge from "./Badge";
import IconButton from "./IconButton";

type Props = {
  project: TProject;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {project.thumbnail && (
        <img src={project.thumbnail} alt="" className="aspect-video  rounded" />
      )}
      {!project.thumbnail && (
        <div className="aspect-video h-full w-full bg-neutral-200" />
      )}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl">{project.title}</h4>
          <div className="flex items-center gap-4">
            <IconButton
              component="a"
              href={project.source || ""}
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiGithub />
            </IconButton>
            <IconButton
              component="a"
              href={project.demo || ""}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Link size={24} weight="bold" />
            </IconButton>
          </div>
        </div>
        <p className="grow">{project.description}</p>
        <div className="flex flex-wrap items-center gap-2 text-sm text-sky-700">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
