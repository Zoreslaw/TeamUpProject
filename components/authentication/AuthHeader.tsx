import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { useNavigation } from "expo-router";

import { useThemeColor } from "@/hooks/useThemeColor";
import TeamUpLogo from "@/components/svgs/TeamUpLogo";
import { BackButton } from "@/components/button/BackButton";

interface AuthHeaderProps {
  /**
   * The title to display below the logo
   */
  title: string;
  /**
   * Optional style overrides for the container
   */
  containerStyle?: ViewStyle;
  /**
   * Optional style overrides for the logo container
   */
  logoContainerStyle?: ViewStyle;
  /**
   * Optional style overrides for the title text
   */
  titleStyle?: TextStyle;
  /**
   * Optional color override for the SVG logo
   */
  logoColor?: string;
  /**
   * Whether to show the logo or not
   */
  showLogo?: boolean;
}

/**
 * AuthHeader component for authentication screens
 *
 * This component displays the AVA logo and a title underneath.
 * It's designed to be used at the top of authentication screens.
 *
 * @param {AuthHeaderProps} props - The props for the AuthHeader component
 * @returns {React.ReactElement} The rendered AuthHeader component
 */
export const AuthHeader: React.FC<AuthHeaderProps> = ({
  title,
  containerStyle,
  logoContainerStyle,
  titleStyle,
  logoColor,
  showLogo = true,
}) => {
  const navigation = useNavigation();

  const backgroundColor = useThemeColor({}, "background");
  const headerTextColor = useThemeColor({}, "text");
  const svgColor = logoColor || headerTextColor;

  const canGoBack = navigation.canGoBack();

  return (
    <View style={[styles.container, { backgroundColor }, containerStyle]}>
      <View style={[styles.topContainer, logoContainerStyle]}>
        {canGoBack && <BackButton />}
        {showLogo && <TeamUpLogo />}
      </View>
      <Text
        style={[
          styles.headerTitle,
          { color: headerTextColor },
          titleStyle,
          !showLogo && styles.headerTitleWithoutLogo,
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
    width: "100%",
    height: 45,
    position: "relative",
    zIndex: 10,
  },
  iconButtonContainer: {
    position: "absolute",
    left: 0,
    zIndex: 10,
  },
  headerTitle: {
    marginTop: 49,
    fontSize: 37,
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
    width: "100%",
  },
  headerTitleWithoutLogo: {
    marginTop: -50,
    paddingLeft: 20,
  },
});

export default AuthHeader;
