const AnnouncementsSection = () => {
    const announcements = [
      {
        title: "New Feature Launch",
        date: "September 15, 2024",
        description: "We have launched a new feature to enhance your experience. Check it out now!"
      },
      {
        title: "Maintenance Downtime",
        date: "September 20, 2024",
        description: "Scheduled maintenance will take place on the platform this weekend."
      },
      {
        title: "New Subscription Plans",
        date: "October 1, 2024",
        description: "Exciting new subscription plans are now available! Visit the plans page to learn more."
      },
    ];
  
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="p-4 font-semibold text-xl">Announcements</h2>
        <div className="p-4">
          {announcements.map((announcement, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
              <h3 className="font-semibold text-secondary-dark">{announcement.title}</h3>
              <p className="text-xs text-secondary-light">{announcement.date}</p>
              <p className="mt-3 text-sm text-secondary">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AnnouncementsSection;
  