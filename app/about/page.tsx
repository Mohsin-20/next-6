import cssStyle from "./about.module.css";
console.log(cssStyle,"CSS-Style");
function AboutPage(){
return <h1 className={cssStyle.green}>this is aboutpage</h1>
}
 export default AboutPage;
