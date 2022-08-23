import { useState } from "react"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import upvote_icon from "../../assets/img/upvote.svg";
import downvote_icon from "../../assets/img/downvote.svg";
import comments_icon from "../../assets/img/comments.svg";
import post_default from "../../assets/img/post_default.png";

import { NavLink } from "react-router-dom";

export function PostCard(props) {
  const thumbnail = props.thumbnail || post_default;
  const id = props.id;
  const title = props.title;
  const author = props.author;
  const [upvotes, setUpvotes] = useState(props.upvotes || 0);
  const commentsAmount = props.commentsAmount || 0;
  const upvote = () => {
    setUpvotes((prev) => prev + 1);
  }
  const downvote = () => {
    setUpvotes((prev) => prev - 1);
  }

  return (
    <div className="container" css={style.container}>
      <img src={thumbnail} alt="" />
      <div className="detail" css={style.detail}>
        <h1>{title}</h1>
        <p css={style.author}>{author}</p>
        <div className="interactions" css={style.interactions}>
          <div className="upvotes" css={style.upvotes}>
            <img src={upvote_icon} alt="" onClick={upvote} />
            <p>{upvotes}</p>
            <img src={downvote_icon} alt="" onClick={downvote} />
          </div>
          <NavLink to={`/post/${id}`}>
            <div className="comments" css={style.comments}>
              <img src={comments_icon} alt="" />
              <p>{0 || commentsAmount} Comments</p>
            </div>
          </NavLink>
        </div>
      </div>

    </div>
  )
}

const style = {
  container: css`
    width: 72.5rem;
    box-shadow: 2px 2px 10px #E6E6E6;
    border-radius: 5px;

    overflow: hidden;
    h1{
        font-size: 2.8rem;
        width: 100%;
    }
    & > img{
        width: 100%;
    }
    `,
  detail: css`
    width: 100%;
    margin: 1.6rem;
    & > p{
        margin-bottom: 1.6rem;
    }
    `,
  author: css`
    color: #4F87CE;
    margin-top: 0.8rem;
    `,
  interactions: css`
    display: flex;
    gap: 2.4rem;
    `,
  upvotes: css`
    display: flex;
    gap: 0.8rem;
    height: 2.8rem;
    align-items: center;
    img{
        height: 100%;
        cursor: pointer;
    }
    `,
  comments: css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    width: max-content;
    height: 2.8rem;
    img{
        height: 100%;
    }
  `
}