import React from "react";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useAnimation,
} from "framer-motion";
import { useState } from "react";
import "./Gallery.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function ProductImage({ id, onExpand }) {
  return (
    <motion.img
      src={`https://picsum.photos/id/${id}/1280/620`}
      alt=""
      className="related-product-image"
    />
  );
}
const GalleryPage = () => {
  const [index, setIndex] = useState(0);

  // setTimeout(() => {
  //   if (index > -1) {
  //     // galleryControl.start("backward");
  //     if (index === images.length - 1) {
  //       setIndex(0);
  //     } else {
  //       setIndex((prev) => prev + 1);
  //     }
  //   }
  // }, 4000);

  const galleryVariants = {
    forward: {
      x: `-${index * 100}%`,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.98],
      },
    },
    backward: {
      x: `-${index * 100}%`,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.98],
      },
    },
  };
  const images = [
    {
      index: 0,
      src: "https://scontent.fpnq7-3.fna.fbcdn.net/v/t1.6435-9/71906748_2625295457513571_21388305773887488_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=-MahvvOqcg8AX9FcgCy&_nc_oc=AQn6T1K7LeuYf2lqGBJhNFcrbRPqgFMLNMKsZDJcNha3j5XBr6hSbXLYtRa4S37nHf4&_nc_ht=scontent.fpnq7-3.fna&oh=00_AfAgUQqGP_f4Xr9UYy7R3_kASntWaaON2QQpVoWDFrzWqQ&oe=64EDD485",
    },
    {
      index: 1,
      src: "https://scontent.fpnq7-2.fna.fbcdn.net/v/t1.6435-9/72291801_2625294550846995_3384780137324085248_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=sFQj7mdCSIAAX_ep8aW&_nc_ht=scontent.fpnq7-2.fna&oh=00_AfAMDH2AgFZz-gHWW1Wm-eblFnzXgwL2h3oiy2tGA-LDcA&oe=64EDE2D8",
    },
    {
      index: 2,
      src: "https://scontent.fpnq7-2.fna.fbcdn.net/v/t31.18172-8/24837275_1627823960594064_5997267279961946262_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Dxshq9YgtbEAX87mXj6&_nc_ht=scontent.fpnq7-2.fna&oh=00_AfD6c9VAVSAQj27buMT9RWzUFR8kN-CoklZ8lnvPHgNHjQ&oe=64EDCA08",
    },
    {
      index: 3,
      src: "https://scontent.fpnq7-4.fna.fbcdn.net/v/t31.18172-8/24837572_1627823957260731_7471569880000948276_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=foYrra6xPvEAX-Z4lcU&_nc_ht=scontent.fpnq7-4.fna&oh=00_AfD3TNOy58QKY0zcYls_hbUodf80k7J3-mbLb_4wfVRO8A&oe=64EDC8E8",
    },

    {
      index: 4,
      src: "https://scontent.fpnq7-4.fna.fbcdn.net/v/t31.18172-8/24883527_1627823670594093_2940163195263246807_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=9ZRsb20dLZsAX9YGftF&_nc_ht=scontent.fpnq7-4.fna&oh=00_AfDA1cMCFQ8lztMfCJ5mCc5l2FvZxhk6dwrrRYXpciCDJg&oe=64EDBC91",
    },
    {
      index: 5,
      src: "https://scontent.fpnq7-2.fna.fbcdn.net/v/t31.18172-8/24837596_1627823623927431_2277158335437036902_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=X4Spa8KRJ0IAX-BiIK5&_nc_ht=scontent.fpnq7-2.fna&oh=00_AfC8K3YnzkCw4bxYd8Zv_IoK7C85ruL5BZFkFRtTWYz4jA&oe=64EDE0D2",
    },
    {
      index: 6,
      src: "https://scontent.fpnq7-3.fna.fbcdn.net/v/t31.18172-8/25073509_1627821027261024_3031482116588479458_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=AtMyAcuxAOkAX9mBYXW&_nc_ht=scontent.fpnq7-3.fna&oh=00_AfDkpwOwqRjdpHyU-P7tdwGInJv7paN17KO5DFgSOItmjw&oe=64EDE8EA",
    },
    {
      index: 7,
      src: "https://scontent.fpnq7-5.fna.fbcdn.net/v/t31.18172-8/24879529_1627820973927696_755651602209570558_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=a1GSTA3-ZhYAX-TavTG&_nc_ht=scontent.fpnq7-5.fna&oh=00_AfDMtg_l0I2IItKrg-kKkrEpQo5q0_MzG3VNQa_BElgf-A&oe=64EDDBAD",
    },
    {
      index: 8,
      src: "https://scontent.fpnq7-4.fna.fbcdn.net/v/t31.18172-8/24879948_1627820670594393_5516966320786056555_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=JU4l4W7ClV4AX8Hp_mf&_nc_ht=scontent.fpnq7-4.fna&oh=00_AfANhe6jAaHP0C93P4Rqxc9VgVNaQ-kpzAH-owcKJj69sg&oe=64EDCF46",
    },
    {
      index: 9,
      src: "https://scontent.fpnq7-2.fna.fbcdn.net/v/t31.18172-8/25074937_1627820667261060_6384469367356390225_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=kpEGVryidzsAX9jJPad&_nc_ht=scontent.fpnq7-2.fna&oh=00_AfAgxb5Jjw9ciZx1bJkYRs9qwYp0M3qurhKsTOf8s7vWYQ&oe=64EDEA9F",
    },
  ];

  console.log(index);

  const galleryControl = useAnimation();
  return (
    <AnimatePresence initial={true}>
      <div className="Gallery_Conatiner">
        <motion.div className="Gallery_Box">
          <button
            onClick={() => {
              if (index < images.length && index > 0) {
                // galleryControl.start("backward");
                setIndex((prev) => prev - 1);
              }
            }}
          >
            <AiFillCaretLeft />
          </button>
          <div className="Gallery_Window">
            <motion.div
              className="Gallery_Crouser"
              variants={galleryVariants}
              animate="forward"
            >
              {images.map((img) => (
                <motion.img
                  src={img.src}
                  id={img.index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      ease: [0.6, 0.01, 0.05, 0.98],
                      duration: 1.6,
                    },
                  }}
                />
              ))}
            </motion.div>
          </div>
          <button
            onClick={() => {
              if (index > -1 && index < images.length - 1) {
                // galleryControl.start("forward");
                setIndex((prev) => prev + 1);
              }
            }}
          >
            <AiFillCaretRight />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GalleryPage;
