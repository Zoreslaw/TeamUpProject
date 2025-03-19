import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

/**
 * SearchIcon SVG Component
 *
 * @example
 * // Basic usage
 * <SearchIcon />
 *
 * // Custom size
 * <SearchIcon width={24} height={24} />
 *
 * // Custom fill color
 * <SearchIcon fill="#000000" />
 *
 * @param {SvgProps} props - The props for the SVG component
 * @returns {React.ReactElement} The rendered SearchIcon SVG component
 */
interface SearchIconProps extends SvgProps {
  /**
   * The fill color of the icon
   */
  fill?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  fill = "#ADB5BD",
  ...props
}) => (
  <Svg
    width={18}
    height={17}
    viewBox="0 0 18 17"
    fill="none"
    {...props}
  >
    <Path
      d="M15.677 16.607L9.96198 10.891C7.41965 12.6985 3.91642 12.2564 1.90285 9.87395C-0.110711 7.49153 0.0371394 3.96361 2.24298 1.75802C4.44824 -0.448534 7.97651 -0.597024 10.3594 1.41644C12.7422 3.42989 13.1846 6.93347 11.377 9.47602L17.092 15.192L15.678 16.606L15.677 16.607ZM6.48498 2.00001C4.58868 1.99958 2.95267 3.3307 2.56745 5.18745C2.18224 7.04421 3.15369 8.91629 4.89366 9.67026C6.63362 10.4242 8.66388 9.85285 9.75522 8.30207C10.8466 6.75129 10.699 4.64734 9.40198 3.26402L10.007 3.86402L9.32498 3.18402L9.31298 3.17202C8.56477 2.4192 7.54637 1.99715 6.48498 2.00001Z"
      fill={fill}
    />
  </Svg>
);

export default SearchIcon;
