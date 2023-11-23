import useBreadcrumbContext from '@/hooks/useBreadcrumbContext';

interface BreadcrumbProps {
  path: string;
  eventId?: string;
}

const Breadcrumb = ({ path, eventId }: BreadcrumbProps) => {
  const { breadcrumb, setBreadcrumb } = useBreadcrumbContext();
  breadcrumb.push(path);

  const handlePushBreadcrumb = (newPath: string) => {
    setBreadcrumb((prevBreadcrumb) => {
      const newPathIndex = prevBreadcrumb.indexOf(newPath);
      if (newPathIndex !== -1) {
        // Remove the newPath if it exists to re-insert it later at the end
        prevBreadcrumb.splice(newPathIndex, 1);
      }

      if (newPath === '/' || newPath === '/events' || newPath === '/recruitment') {
        // Filter out '/', '/events', '/recruitment' if they exist
        prevBreadcrumb = prevBreadcrumb.filter(
          (item) => !(item === '/' || item === '/events' || item === '/recruitment'),
        );
      }

      if (
        newPath.startsWith('/event/') &&
        (newPath.includes('/forms') || newPath.includes('/submit'))
      ) {
        // Filter out 'event/:eventId/forms', 'event/:eventId/submit' if they exist
        prevBreadcrumb = prevBreadcrumb.filter(
          (item) =>
            !(item.startsWith('/event/') && (item.includes('/forms') || item.includes('/submit'))),
        );
      }

      // Check if the newPath is eligible for inclusion based on conditions
      if (
        (newPath === `/event/${eventId}` &&
          !(
            prevBreadcrumb.includes(`/event/${eventId}/forms`) ||
            prevBreadcrumb.includes(`/event/${eventId}/submit`)
          )) ||
        (newPath === `/event/${eventId}/forms` &&
          !prevBreadcrumb.includes(`/event/${eventId}/submit`)) ||
        !(
          newPath === '/' ||
          newPath === '/events' ||
          newPath === '/recruitment' ||
          newPath.startsWith('/event/') ||
          newPath.includes('/forms') ||
          newPath.includes('/submit')
        )
      ) {
        prevBreadcrumb.push(newPath);
      }

      return [...prevBreadcrumb];
    });
  };

  handlePushBreadcrumb(path);

  return (
    <>
      {breadcrumb.map((path, index) => (
        <div key={index}>{`${path} >`}</div>
      ))}
    </>
  );
};

export default Breadcrumb;
