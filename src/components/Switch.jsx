import { useSwitch } from "../context/SwitchContext";

function Switch({ width = "32px", height = "14px", btnSize = "16px" }) {
  const { switchOn, setSwitchOn } = useSwitch();
  const switchStyle = { width, height };
  const switchBtnStyle = { btnSize };

  return (
    <div
      className={`switch ${switchOn && "switch-on"}`}
      style={switchStyle}
      onClick={() => setSwitchOn(!switchOn)}
    >
      <div
        className="switch-btn"
        style={switchBtnStyle}
        onClick={() => setSwitchOn(!switchOn)}
      ></div>
    </div>
  );
}

export default Switch;
