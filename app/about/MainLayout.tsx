import "./global.css";
type MainLayout = {
    children: React.ReactNode;
};
const RootLayout: React.FC<MainLayout> =(props)=>{
console.log(props, "props");
return(
    <html lang="en">
    <body>{props.children}</body>
    </html>
);
};
export default RootLayout;

