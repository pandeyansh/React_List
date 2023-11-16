const Arrayofimages = ({ image }) => {
  return (
    <div>
      <h5>List of images</h5>
      <ul>
        {image.map((item, index) => (
          <li key={index}>
            <img src={item.img} alt={`Image ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Arrayofimages;