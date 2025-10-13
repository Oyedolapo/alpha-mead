const PolicyCard = ({ image, title, link }) => {
  return (
    <div className="relative h-48 rounded-lg overflow-hidden border border-gray-300">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white p-4">
        <p className="text-center font-medium mb-4">{title}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
        >
          Read
        </a>
      </div>
    </div>
  );
};

export default PolicyCard;