import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

/**
 * DislikeButtonIcon SVG Component
 *
 * @example
 * // Basic usage
 * <DislikeButtonIcon />
 *
 * // Custom size
 * <DislikeButtonIcon width={80} height={80} />
 *
 * // Custom colors
 * <DislikeButtonIcon stroke="#000" fill="#FF0000" />
 *
 * @param {SvgProps} props - The props for the SVG component
 * @returns {React.ReactElement} The rendered DislikeButtonIcon SVG component
 */
interface DislikeButtonIconProps extends SvgProps {
  /**
   * Stroke color for the outer circle
   */
  stroke?: string;
  /**
   * Stroke width for the outer circle
   */
  strokeWidth?: number;
  /**
   * Fill color for the "X" shape
   */
  fill?: string;
}

const DislikeButtonIcon: React.FC<DislikeButtonIconProps> = ({
  stroke = "#FF5E51",
  strokeWidth = 2,
  fill = "#FF5E51",
  ...props
}) => (
  <Svg
    width={62}
    height={62}
    viewBox="0 0 62 62"
    fill="none"
    {...props}
  >
    {/* Outer circle */}
    <Circle
      cx={31}
      cy={31}
      r={30}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* "X" shape */}
    <Path
      d="M34.5854 31.277C34.5488 31.2407 34.5198 31.1976 34.5 31.15C34.4802 31.1025 34.47 31.0515 34.47 31C34.47 30.9485 34.4802 30.8975 34.5 30.85C34.5198 30.8024 34.5488 30.7593 34.5854 30.723L42.314 22.9983C42.5315 22.7808 42.704 22.5226 42.8217 22.2384C42.9394 21.9543 43 21.6497 43 21.3421C43 21.0346 42.9394 20.73 42.8217 20.4458C42.704 20.1617 42.5315 19.9035 42.314 19.686C42.0965 19.4685 41.8383 19.296 41.5542 19.1783C41.27 19.0606 40.9654 19 40.6579 19C40.0367 19 39.441 19.2468 39.0017 19.686L31.277 27.4107C31.2407 27.4473 31.1976 27.4763 31.15 27.4961C31.1025 27.5159 31.0515 27.5261 31 27.5261C30.9485 27.5261 30.8975 27.5159 30.85 27.4961C30.8024 27.4763 30.7593 27.4473 30.723 27.4107L22.9983 19.686C22.559 19.2468 21.9633 19 21.3421 19C20.721 19 20.1252 19.2468 19.686 19.686C19.2468 20.1252 19 20.721 19 21.3421C19 21.9633 19.2468 22.559 19.686 22.9983L27.4107 30.723C27.4473 30.7593 27.4763 30.8024 27.4961 30.85C27.5159 30.8975 27.5261 30.9485 27.5261 31C27.5261 31.0515 27.5159 31.1025 27.4961 31.15C27.4763 31.1976 27.4473 31.2407 27.4107 31.277L19.686 39.0017C19.2468 39.441 19 40.0367 19 40.6579C19 41.279 19.2468 41.8748 19.686 42.314C20.1252 42.7532 20.721 43 21.3421 43C21.9633 43 22.559 42.7532 22.9983 42.314L30.723 34.5893C30.7593 34.5527 30.8024 34.5237 30.85 34.5039C30.8975 34.4841 30.9485 34.4739 31 34.4739C31.0515 34.4739 31.1025 34.4841 31.15 34.5039C31.1976 34.5237 31.2407 34.5527 31.277 34.5893L39.0017 42.314C39.441 42.7532 40.0367 43 40.6579 43C41.279 43 41.8748 42.7532 42.314 42.314C42.7532 41.8748 43 41.279 43 40.6579C43 40.0367 42.7532 39.441 42.314 39.0017L34.5854 31.277Z"
      fill={fill}
    />
  </Svg>
);

export default DislikeButtonIcon;
