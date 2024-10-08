import Link from "next/link";
const HomePage= () =>{
  return(
    <div className="text-center">
      <nav className="navbar text-center">
    <div>

      <ul>
        <li>Home</li>
        <li>
      <Link href="/about">About</Link>
      </li>
      <li>
      <Link href="/contact">Contact</Link>
      </li>
      <li>
      <Link href="/service">Service</Link>
      </li>


      </ul>
      
      </div>
      </nav>
      </div>);
};
export default HomePage;