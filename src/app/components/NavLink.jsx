// NavLink.jsx
import Link from "next/link";

const NavLink = ({ href, title, icon }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-2 rounded-md  py-2 bg-transparent text-orange-500 "
    >
      <span className="text-sm font-bold">{title}</span>
    </Link>
  );
};

export default NavLink;