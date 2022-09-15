import type { NextPage } from "next";
import { Fragment, useRef, useState } from "react";
import MyFirst from "../component/first/MyFirst";
import Five from "../component/five/Five";
import Footer from "../component/footer/Footer";
import Four from "../component/four/Four";
import Gallery from "../component/gallery/Gallery";
import Message from "../component/massage/Message";
import WhaToDo from "../component/whatodo/WhaToDo";

const Home: NextPage = () => {
  const [refGalery, setRefGalery] = useState({});
  const [refAbout, setRefAbout] = useState({});
  const callback = (name: any) => {
    setRefGalery(name);
  };

  const linkAbout = (tag: any) => {
    setRefAbout(tag);
  };

  return (
    <Fragment>
      <MyFirst galery={refGalery} about={refAbout} />
      <Message />
      <WhaToDo />
      <Four />
      <Gallery galeryRef={callback} />
      <Five />
      <Footer aboutLink={linkAbout} />
    </Fragment>
  );
};

export default Home;
