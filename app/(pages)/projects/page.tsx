import ProjectsWrapper from '../../components/PageWrappers/Projects';

export default function Projects() {
  if (typeof window === 'undefined') {
    return;
  }
  return <ProjectsWrapper />;
}
