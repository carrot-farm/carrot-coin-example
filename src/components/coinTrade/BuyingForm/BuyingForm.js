import React from "react";
import classNames from "classnames/bind";
import { Icon } from "@material-ui/core";

import styles from "./styles.scss";
import { commSet } from "lib/tools";
import Elements from "components/common/Elements";

const cx = classNames.bind(styles);
const { InputCommSet } = Elements;

const BuyingForm = ({
  buttonClass,
  buttonText,
  myInfo,
  submitClick,
  buyingVolumeChange,
  buyingVolumeCommset,
  buyingPriceChange,
  buyingPriceCommset,
  handlePriceBlur,
  handleUpperTickClick,
  handleLowerTickClick,
  buyingTotalPriceCommset,
  handleBuyingTotalPriceChange,
  handleSubmitClick
}) => {
  const { ownPrice } = myInfo;

  return (
    <div className={cx("buying-form-root ")}>
      <dl className={cx("current-price-container flex between")}>
        <dt
          className={cx(
            "font-size .s-1d2 font-weight bold grey-text text-darken-2"
          )}
        >
          매수가능액
        </dt>
        <dd>
          <span className={cx("current-price font-size s-1d5")}>
            {commSet(ownPrice)}
          </span>
          &nbsp; KRW
        </dd>
      </dl>

      {/* form */}
      <form className={cx("buying-form")} onSubmit={submitClick}>
        {/* 매수수량 */}
        <dl className={cx("flex between")}>
          <dt className={cx("bold grey-text text-darken-2 bold")}>매수수량</dt>
          <dd
            className={cx("input-container buying-price-container flex around")}
          >
            <div className={cx("input-column")}>
              <InputCommSet
                name={"buyingVolume"}
                className={cx("right-align input-clear grey-text")}
                value={buyingVolumeCommset}
                digits={4}
                onChange={buyingVolumeChange}
              />
              &nbsp;&nbsp;
              <span className={cx("order-unit")}>BTC</span>
            </div>
          </dd>
        </dl>
        {/* 매수가격 */}
        <dl className={cx("flex between")}>
          <dt className={cx("bold grey-text text-darken-2 ")}>매수가격</dt>
          <dd className={cx("input-container flex around")}>
            <div className={cx("input-column")}>
              <InputCommSet
                name={"buyingPrice"}
                className={cx("left-align buying-price input-clear grey-text")}
                onChange={buyingPriceChange}
                value={buyingPriceCommset}
                onBlur={handlePriceBlur}
              />
              &nbsp;&nbsp;
            </div>
            <div className={cx("buttons-column center-align")}>
              <button
                type="button"
                className={cx(
                  " button-clear lower-price-button s6 font-size s-1d5"
                )}
                onClick={handleLowerTickClick}
              >
                -
              </button>
              <button
                type="button"
                className={cx(
                  " button-clear upper-price-button s6 font-size s-1d5"
                )}
                onClick={handleUpperTickClick}
              >
                +
              </button>
            </div>
          </dd>
        </dl>
        {/* 매수총액 */}
        <dl className={cx("flex between")}>
          <dt className={cx("bold grey-text text-darken-2 bold")}>매수총액</dt>
          <dd
            className={cx(
              "input-container buying-total-price-container flex around"
            )}
          >
            <div className={cx("input-column")}>
              <InputCommSet
                name={"buying-total-price"}
                className={cx(
                  "buying-total-price right-align input-clear grey-text"
                )}
                onChange={handleBuyingTotalPriceChange}
                value={buyingTotalPriceCommset}
              />
              &nbsp;&nbsp;
              <span
                className={cx(
                  "order-unit grey-text text-lighten-2 font-size s-0d8"
                )}
              >
                KRW
              </span>
            </div>
          </dd>
        </dl>
        {/* descript  */}
        <dl className={cx("flex between")}>
          <dt>&nbsp;</dt>
          <dd
            className={cx(
              "description-container font-size grey-text lighten-2"
            )}
          >
            <div>최소 주문 수량: 0.001</div>
            {/* <div>수수료: 0.1%</div> */}
          </dd>
        </dl>
        <div className={cx("order-button-container")}>
          <button
            type="submit"
            className={cx(
              `order-submit-button button-clear s12 font-size s-1 ${buttonClass}`
            )}
            onClick={handleSubmitClick}
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyingForm;
