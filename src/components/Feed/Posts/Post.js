import React from "react";
import { Favorite, More, Work } from "@material-ui/icons";
import { Checkbox } from "@material-ui/core";
import "./Post.css";

const Post = () => {
  return (
    <div className="post__card">
      <div className="post_card__bar">
        <span className="date__posted">
          Sun Apr 04 2021 21:07:49 GMT+0300 (East Africa Time)
        </span>

        {/* <input type="checkbox" name="check" className="post__select" /> */}
        <Checkbox
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          className="post__select"
        />
      </div>
      <h4>Desktop Application developer</h4>

      <p className=".post__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus
        a aspernatur, qui ex dolore nostrum! Doloremque harum perspiciatis
        voluptatum quae, illum aliquid autem sit cumque voluptate perferendis
        fugit, est quam vero officia debitis earum praesentium impedit? Non ut
        quae repellat cum error . . . explicabo dolorum consequatur. Eaque,
        ipsum voluptatum? Eius!
      </p>

      <div className="post__requirements">
        <span>requirements:</span>
        <p>Html Css Js Php Postgre-Sql</p>
      </div>

      <div className="post__btns">
        <button className="btn__add_to_favourites">
          Favourites
          <Favorite />
        </button>

        <button className="btn__more">
          more
          <More />
        </button>

        <button className="btn__take_job">
          Take
          <Work />
        </button>
      </div>
    </div>
  );
};

export default Post;
