import { useState } from "react";
function LikedBtn() {
  const [isLiked, useIsLiked] = useState(false);
  let ToggleLiked = () => {
    useIsLiked(!isLiked);
  };
  return (
    <div>
      <p onClick={ToggleLiked}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
export default LikedBtn;
