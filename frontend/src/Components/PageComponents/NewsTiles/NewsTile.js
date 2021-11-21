// import React from "react";
// // import "./NewsTiles.css";

// const NewsTile = () => {
//   return (
//     <div class="grid">
//       <div class="grid__item">
//         <div class="card">
//           <img
//             class="card__img"
//             src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"
//             alt="Snowy Mountains"
//           />
//           <div class="card__content">
//             <h1 class="card__header">A starry night</h1>
//             <p class="card__text">
//               Look up at the night sky, and find yourself{" "}
//               <strong>immersed</strong> in the amazing mountain range of Aspen.{" "}
//             </p>
//             <button class="card__btn">
//               Explore <span>&rarr;</span>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div class="grid__item">
//         <div class="card">
//           <img
//             class="card__img"
//             src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"
//             alt="Desert"
//           />
//           <div class="card__content">
//             <h1 class="card__header">Misty mornings</h1>
//             <p class="card__text">
//               Capture the stunning <strong>essence</strong> of the early morning
//               sunrise in the Californian wilderness.
//             </p>
//             <button class="card__btn">
//               Explore <span>&rarr;</span>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div class="grid__item">
//         <div class="card">
//           <img
//             class="card__img"
//             src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3300&amp;q=80"
//             alt="Canyons"
//           />
//           <div class="card__content">
//             <h1 class="card__header">Utah sunsets</h1>
//             <p class="card__text">
//               Sunsets over the <strong>stunning</strong> Utah Canyonlands, is
//               truly something much more than incredible.
//             </p>
//             <button class="card__btn">
//               Explore <span>&rarr;</span>
//             </button>
//           </div>
//         </div> */}
//       {/* </div>
//     </div>
//   );
// };

// export default NewsTile;

import React from "react";

const NewsTile = (props) => {
  let { title, description, newsUrl, imageUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsTile;
