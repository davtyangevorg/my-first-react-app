import React, { useEffect, useState } from "react";
import style from "./gameInfo.module.css";
import { useSpring, animated } from "react-spring";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
const GameInfo = (props) => {
  const [editeMode, setEditMode] = useState(false);
  const playVideo = () => {
    !editeMode ? setEditMode(true) : setEditMode(false);
  };
  const productId = props.match.params.id;
  useEffect(() => {
    props.getProduct(productId);
  }, []);
  const productInfo =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, porro suscipit nesciunt voluptates voluptate placeat dicta! Molestiae corrupti, deleniti, quis libero at ut dignissimos repudiandae veniam aliquam cumque vitae sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus minima quam reprehenderit ratione porro dignissimos modi expedita. Temporibus aspernatur odit quisquam asperiores aliquam minus dolor a praesentium. Temporibus, corrupti aut!console.llorem;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maxime officiis architecto dignissimos temporibus soluta pariatur nemo neque odio suscipit, consectetur non voluptates. Ipsum illum tempora maiores accusamus consecteturlo Lorem ipsum dolor sit amet consectetur adipisicing elit. ";
  let inner;
  let product;
  if (props.product.length == 0) {
    inner = <div>No Product</div>;
  } else {
    product = props.product[0];
    let addOrRemoveCart = () => {
      product.tba
        ? props.removeInCart(product.id, "game")
        : props.addToCart(product, product.id, "game");
    };
    let addOrRemoveText = product.tba ? "Remove In Cart" : "Add To Cart";
    const mp4Url = product.clip.clips.full;
    inner = (
      <div className={style.product}>
        <div className={style.product__title}>{product.name}</div>
        <div className={style.product__inner}>
          <div className={style.product__video}>
            <img
              className={style.product__img}
              src={product.background_image}
            ></img>
            <i onClick={playVideo} class="fa fa-play-circle"></i>
          </div>
          <div className={style.product__box}>
            <div className={style.product__box__title__made}>
              Made By : Rockstar Games
            </div>
            <div className={style.product__box__title__price}>
              Price : ${product.metacritic}
            </div>
            <div className={style.product__box__title}>
              Some Info About Product :
            </div>
            <div className={style.product__box__title__text}>{productInfo}</div>
            <div>
              <Link to={"/videogames"}>
                <button className={style.product__box__btn__back}>
                  Back To Products
                </button>
              </Link>
              <button
                onClick={addOrRemoveCart}
                className={style.product__box__btn__add}
              >
                {addOrRemoveText}
              </button>
            </div>
          </div>
        </div>
        <Popup
          editeModeP={editeMode}
          playVideoF={playVideo}
          img={product.background_image}
          videoUrl={mp4Url}
        />
      </div>
    );
  }

  return <div>{inner}</div>;
};

const Popup = (props) => {
  const fade = useSpring({
    transform: props.editeModeP ? "scale(1)" : "scale(0)",
  });
  const fadeBtn = useSpring({
    display: props.editeModeP ? "block" : "none",
  });
  const popupInner = (
    <div>
      <ReactPlayer playing={props.editeModeP} controls url={props.videoUrl} />
    </div>
  );
  const popup = (
    <div>
      <animated.div style={fade} className={style.popup}>
        <button onClick={props.playVideoF}>&times;</button>
        {popupInner}
      </animated.div>
      <animated.div
        style={fadeBtn}
        onClick={props.playVideoF}
        className={style.overlay}
      ></animated.div>
    </div>
  );
  return <div>{popup}</div>;
};
export default GameInfo;
