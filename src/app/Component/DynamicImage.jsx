const DynamicImage = ({ imageName }) => {
  const imageUrl = require(`../public/images/${imageName}`).default; // Dynamically import image
  return <img src={imageUrl} alt={`Image: ${imageName}`} />;
};

export default DynamicImage;