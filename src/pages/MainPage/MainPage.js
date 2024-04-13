import About from "../../component/about/About";
import Title from "../../component/title/Title";
import React from "react";

const AboutInfo={
  titel: "Some Title",
  body:"Some body"
}
function MainPage() {
    return( 
        <>
          <Title/>
          <About titel={AboutInfo.titel} body={AboutInfo.body} />
        </>
    );
  }

export default MainPage 