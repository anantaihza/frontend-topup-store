import cx from "classnames";
import Link from "next/link";

//   title?: string; kalau bersifat tidak wajib
interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

// Partial karna dari interface ada yang tidak wajib
export default function Menu(props: Partial<MenuProps>) {
  //   bisa dikasi default value active = false karna parsial
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    "pe-4": true,
    active: active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href} className={classTitle} aria-current="page">
        {title}
      </Link>
    </li>
  );
}
