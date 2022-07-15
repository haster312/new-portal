import React from "react";
import { Link } from "react-router-dom";
import { useQuoteDetailContext } from "../core/QuoteDetailProvider";

const InfoRow = ({ text, value }: { text: string; value: any }) => {
  return (
    <div className="row mb-7">
      <label className="col-lg-4 fw-bold text-muted">{text}</label>
      <div className="col-lg-8">
        <span className="fw-bolder fs-6 text-dark">{value}</span>
      </div>
    </div>
  );
};

export function QuoteTermView() {
  const { quote } = useQuoteDetailContext();
  const { quote_term } = quote;
  const { quote_effect, warranty_condition, payment_term, bank_info } =
    quote_term || {};

  return (
    <>
      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Điều Khoản & Bảo Hành</h3>
          </div>

          <Link to="edit" className="btn btn-primary align-self-center">
            Chỉnh sửa
          </Link>
        </div>

        <div className="card-body p-9">
          <InfoRow text="Hiệu lực báo giá" value={quote_effect || "-"} />
          <InfoRow
            text="Thời gian và điều kiện bảo hành"
            value={warranty_condition || "-"}
          />
          <InfoRow text="Điều kiện thương mại" value={payment_term || "-"} />
          <InfoRow
            text="Thông tin ngân hàng"
            value={<p dangerouslySetInnerHTML={{ __html: bank_info || "-" }} />}
          />
        </div>
      </div>
    </>
  );
}
