import Image from "next/image";

interface PaymentTopUpProps {
  method: string;
  via: string;
  idValue: string;
}

export default function PaymentTopUp(props: PaymentTopUpProps) {
  const { method, via, idValue } = props;
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={idValue}
    >
      <input
        className="d-none"
        type="radio"
        id={idValue}
        name="paymentMethod"
        value={idValue}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 fw-medium m-0">{method}</p>
          <Image
            id="icon-check"
            src="/assets/icon/check.svg"
            width={20}
            height={20}
            alt="icon-check"
          />
        </div>
        <p className="text-lg color-palette-1 m-0">{via}</p>
      </div>
    </label>
  );
}
