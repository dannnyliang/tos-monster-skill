import React from "react";
import classnames from "classnames/bind";
import { Badge } from "reactstrap";
import styles from "./tagBadge.module.scss";

const cx = classnames.bind(styles);

function TagBadge(props) {
  const { tagName, handleClick, handleCancelSelect, removeListTag } = props;
  return (
    <div className="d-inline-block mr-2 mb-2">
      <input type="checkbox" id={tagName} className={cx("badge-checkbox")} />
      <label htmlFor={tagName}>
        <Badge
          className={cx("d-flex", "p-2", "badge")}
          pill
          color={null}
          onClick={() => handleClick(tagName)}
        >
          <h6 className={cx("m-0", "mr-4", "name")}>{tagName}</h6>
          <h6
            className={cx("m-0", "remove-btn")}
            onClick={e => {
              e.stopPropagation();
              handleCancelSelect(tagName);
              removeListTag(tagName);
            }}
          >
            ✘
          </h6>
        </Badge>
      </label>
    </div>
  );
}

export default TagBadge;
