import gifImage from "../../assets/tired.gif";

const GIFCard = () => {
  return (
    <div className="relative w-full h-full border border-white/25 rounded-lg">
      <img
        src={gifImage}
        alt="8-bit City Background"
        className="w-full h-full object-cover rounded-lg "
      />
    </div>
  );
};

export default GIFCard;
