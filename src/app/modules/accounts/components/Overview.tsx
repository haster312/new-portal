/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../apps/core/CurrentUserProvider";

export function Overview() {
  const { name, email, roleName, group, phone, position, joinAt } =
    useCurrentUser();
  return (
    <>
      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Profile Details</h3>
          </div>

          <Link
            to="/crafted/account/settings"
            className="btn btn-primary align-self-center"
          >
            Edit Profile
          </Link>
        </div>

        <div className="card-body p-9">
          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Tên đầy đủ</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{name}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Email</label>

            <div className="col-lg-8 fv-row">
              <span className="fw-bold fs-6">{email}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Phone
              <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Phone number must be active"
              ></i>
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">{phone || "-"}</span>

              <span className="badge badge-success">Verified</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Vị trí</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
                {position || "-"}
              </a>
            </div>
          </div>
          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Nhóm</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
                {group || "-"}
              </a>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Vai trò
              <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Country of origination"
              ></i>
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{roleName}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Ngày tạo</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{joinAt}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
