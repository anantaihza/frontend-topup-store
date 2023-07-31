import FooterSidebar from "./FooterSidebar";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
  menuActive: 'overview' | 'transactions' | 'messages' | 'card' | 'rewards' | 'settings' | 'logout';
}
export default function Sidebar(props: SidebarProps) {
  const { menuActive } = props;
  return (
    <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem icon="overview" title="Overview" href="/member" isActive={menuActive === 'overview'} />
                    <MenuItem icon="transactions" title="Transactions" href="/member/transactions" isActive={menuActive === 'transactions'} />
                    <MenuItem icon="messages" title="Messages" href="/member/messages" isActive={menuActive === 'messages'} />
                    <MenuItem icon="card" title="Card" href="/member/card" isActive={menuActive === 'card'} />
                    <MenuItem icon="rewards" title="Rewards" href="/member/rewards" isActive={menuActive === 'rewards'} />
                    <MenuItem icon="settings" title="Settings" href="/member/edit-profile" isActive={menuActive === 'settings'} />
                    <MenuItem icon="logout" title="Log Out" href="/sign-in" isActive={menuActive === 'logout'}/>
                </div>
                <FooterSidebar />
            </div>
        </section>
  )
}
