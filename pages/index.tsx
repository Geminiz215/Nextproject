import type { NextPage } from "next";
import { Fragment } from "react";
import MyFirst from "../component/first/MyFirst";
import Five from "../component/five/Five";
import Footer from "../component/footer/Footer";
import Four from "../component/four/Four";
import Gallery from "../component/gallery/Gallery";
import Message from "../component/massage/Message";
import WhaToDo from "../component/whatodo/WhaToDo";


const Home: NextPage = () => {
  return (
    <Fragment>
        <MyFirst/>
        <Message/>
        <WhaToDo/>
        <Four/>
        <Gallery/>
        <Five/>
        <Footer/>
    </Fragment>
  );
};

export default Home;
