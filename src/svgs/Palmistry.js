import * as React from "react";
import Svg, {Path} from "react-native-svg";
import PropTypes from "prop-types";

function Palmistry({color, height, width, style}) {
    return (
        <Svg height={height} width={width} viewBox="0 0 512 512" style={style}>
            <Path
                fill={color}
                d="M384 48a39.838 39.838 0 00-26.5 10.064 39.978 39.978 0 00-64-16 40 40 0 00-74.994 0A39.98 39.98 0 00152 72h16a24 24 0 0148 0v24h-32v16h32v48h-32v16h32v48a8 8 0 0016 0V56a24 24 0 0148 0v32h-32v16h32v48h-32v16h32v56a8 8 0 0016 0V72a24 24 0 0148 0v24h-32v16h32v48h-32v16h32v48a8 8 0 0016 0V88a24 24 0 0148 0v24h-32v16h32v48h-32v16h32v168a119.779 119.779 0 01-17.331 62.158l13.679 8.3A135.78 135.78 0 00424 360V88a40.045 40.045 0 00-40-40z"
            />
            <Path
                fill={color}
                d="M288 480h-64a120.136 120.136 0 01-120-120V168h8a40.045 40.045 0 0140 40v16h-32v16h32v40h-32v16h32v40a8 8 0 0016 0V95h-16v73.846A55.833 55.833 0 00112 152H96a8 8 0 00-8 8v200c0 74.99 61.009 136 136 136h64a135.847 135.847 0 00103.7-48.007l-12.2-10.357A119.87 119.87 0 01288 480z"
            />
            <Path
                fill={color}
                d="M192 256h192v16H192zM253.671 322.679c45.847 17.967 82.02 48.084 107.516 89.513l13.626-8.384c-34.224-55.616-81.925-83.046-115.914-96.264-36.837-14.326-65.415-15.5-66.613-15.539l-.581 15.989c.271.011 27.541 1.194 61.966 14.685zM10.34 21.657l11.312-11.312L39.65 28.343 28.338 39.655zM37.833 49.166l11.312-11.312 61.24 61.24-11.311 11.313zM111.069 122.407l11.312-11.312 19.247 19.248-11.312 11.312zM10.305 490.278l13.998-13.998 11.312 11.312-13.998 13.998zM38.554 462.035l43.744-43.744 11.312 11.312-43.744 43.744zM458.577 469.984l11.312-11.312 23.664 23.664-11.312 11.312zM426.251 437.685l11.312-11.312 22.997 22.997-11.312 11.312zM468.943 31.708l13.33-13.331 11.313 11.312-13.331 13.331zM434.279 66.368l25.33-25.33L470.92 52.35l-25.33 25.33zM436.205 156.877l55.974-27.986 7.152 14.304-55.974 27.986zM439.667 248h15.667v16h-15.667zM472 248h24v16h-24zM436.182 355.282l7.152-14.304 55.974 27.986-7.152 14.304zM12.171 368.824l55.987-28.94 7.343 14.208-55.986 28.939zM16 248h56v16H16zM12.284 143.062l7.343-14.207 55.987 28.94L68.27 172z"
            />
        </Svg>
    );
}

Palmistry.defaultProps = {
    height: 120,
    width: 120,
    color: "white",
};

Palmistry.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    style: PropTypes.object,
    color: PropTypes.string,
};

export default Palmistry;
