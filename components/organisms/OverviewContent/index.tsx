import CategoriesTopUp from "./CategoriesTopUp";
import TableRow from "./TableRow";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <CategoriesTopUp icon="game-desktop" nominal={18000500}>
                Game <br /> Desktop
              </CategoriesTopUp>
              <CategoriesTopUp icon="game-mobile" nominal={8455000}>
                Game <br /> Mobile
              </CategoriesTopUp>
              <CategoriesTopUp icon="game-other-categories" nominal={5000000}>
                Other <br /> Categories
              </CategoriesTopUp>
            </div>
          </div>
        </div>

        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow img="/assets/img/overview-1.png" title="Mobile Legends: The New Battle 2021" categories="Desktop" item={200} price={290000} status="Pending" />
                <TableRow img="/assets/img/overview-2.png" title="Call of Duty:Modern" categories="Desktop" item={550} price={740000} status="Success" />
                <TableRow img="/assets/img/overview-3.png" title="Clash of Clans" categories="Mobile" item={100} price={120000} status="Failed" />
                <TableRow img="/assets/img/overview-4.png" title="The Royal Game" categories="Mobile" item={225} price={200000} status="Pending" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
