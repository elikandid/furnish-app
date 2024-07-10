const Navbar = () => {
  return (
    <nav className=" w-full  absolute top-6 left-0">
      <div className="grid grid-cols-2 px-[64px]">
        <a href="/">Logo</a>
        <ul className="flex space-x-[40px] active:[&_a]:text-white justify-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
