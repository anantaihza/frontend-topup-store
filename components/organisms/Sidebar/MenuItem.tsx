import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

interface MenuItemProps {
  icon:
    | "overview"
    | "transactions"
    | "messages"
    | "card"
    | "rewards"
    | "settings"
    | "logout";
  title: string;
  href: string;
  isActive?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
  const { icon, title, href, isActive = false } = props;
  const MenuClassname = cx({
    item: true,
    active: isActive,
    "mb-30": true,
  });

  return (
    <div className={MenuClassname}>
      <Image
        className="icon me-3"
        src={`/assets/icon/sidebar-${icon}.svg`}
        width={25}
        height={25}
        alt="Logo Overview"
      />
      <p className="item-title m-0">
        <Link href={href} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
