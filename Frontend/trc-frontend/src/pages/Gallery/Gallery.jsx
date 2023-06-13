import React from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import "./Gallery.css";

function ProductImage({ id, onExpand }) {
  return (
    <motion.img
      src={`https://picsum.photos/id/${id}/200/200`}
      alt=""
      onClick={() => onExpand(id)}
      className="related-product-image"
      layoutId={`product-${id}`}
    />
  );
}
const GalleryPage = () => {
  const [productIds, setProductIds] = useState([
    238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248,
  ]);
  const [primaryProduct, setPrimaryProduct] = useState(237);

  function setAsPrimary(id) {
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((x) => x !== id),
      currentProductId,
    ];

    setPrimaryProduct(id);
    setProductIds(newProductIds);
  }
  return (
    <div className="box__gallery">
      <motion.div
        className="container"
        variants={{
          hidden: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
            transition: {
              ease: [0.6, 0.01, 0.05, 0.98],
              duration: 1.6,
            },
          },
        }}
        initial="hidden"
        animate="animate"
      >
        <main className="primary-container">
          <AnimatePresence>
            <motion.img
              key={primaryProduct}
              className="primary-product-image"
              src={`https://picsum.photos/id/${primaryProduct}/1280/620`}
              alt=""
              layoutId={`product-${primaryProduct}`}
            />
          </AnimatePresence>
        </main>
        <aside className="product-gallery">
          <AnimatePresence>
            {productIds.map((id) => (
              <ProductImage id={id} key={id} onExpand={setAsPrimary} />
            ))}
          </AnimatePresence>
        </aside>
      </motion.div>
    </div>
  );
};

export default GalleryPage;
