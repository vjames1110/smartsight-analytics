import MockScreen from "./MockScreen";
import PhoneMock from "./PhoneMock";
import "./PhoneMock.css";

// Web app screen with the mobile app overlapping it, in the product's own theme.
function ProductVisual({ product, screenIndex = 0, mobileIndex = 0, phoneScale = 0.78 }) {
  const screen = product.screens[screenIndex % product.screens.length];
  const phone = product.mobile
    ? product.mobile.screens[mobileIndex % product.mobile.screens.length]
    : null;

  return (
    <div className="pv">
      <div className="pv-web" style={phone ? undefined : { width: "100%" }}>
        <MockScreen product={product} screen={screen} />
      </div>
      {phone && (
        <div className="pv-phone">
          <PhoneMock product={product} screen={phone} scale={phoneScale} />
        </div>
      )}
    </div>
  );
}

export default ProductVisual;
