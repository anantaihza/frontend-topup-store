import ItemTopUp from "./ItemTopUp";
import PaymentTopUp from "./PaymentTopUp";

export default function TopUpForm() {
  return (
    <form action="./checkout.html" method="POST">
      {/* Verify ID */}
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
          />
        </div>
      </div>

      {/* Nominal Top Up */}
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          <ItemTopUp item={125} price={3250000} idValue={`topup${1}`} />
          <ItemTopUp item={225} price={3250000} idValue={`topup${2}`} />
          <ItemTopUp item={350} price={3250000} idValue={`topup${3}`} />
          <ItemTopUp item={550} price={3250000} idValue={`topup${4}`} />
          <ItemTopUp item={750} price={3250000} idValue={`topup${5}`} />
          <div className="col-lg-4 col-sm-6">{/* blank */}</div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            <PaymentTopUp method="Transfer" via="Worldwide Available" idValue="transfer" />
            <PaymentTopUp method="VISA" via="Credit Card" idValue="visa" />
            <div className="col-lg-4 col-sm-6">{/* blank */}</div>
          </div>
        </fieldset>
      </div>

      {/* Bank Account */}
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <a
          href="/checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </a>
        {/* <button type="submit"
                                className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</button> */}
      </div>
    </form>
  );
}
