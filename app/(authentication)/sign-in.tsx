import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { GmailButton } from "@/components/authentication/buttons/GmailButton";
import { AppleButton } from "@/components/authentication/buttons/AppleButton";
import AuthHeader from "@/components/authentication/AuthHeader";
import AuthBottomText from "@/components/authentication/AuthBottomText";

import { useAuth } from "@/hooks/useAuth";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useTranslation } from "react-i18next";

export default function SignIn() {
  const router = useRouter();
  const { signInWithGoogle, signInWithApple } = useAuth();

  const backgroundColor = useThemeColor({}, "background");

  const { t } = useTranslation();
  const t_signIn = t("sign-in-page.sign-in");
  const t_welcomeWords = t("sign-in-page.welcome-words");

  const onGoogleSignInPress = async () => {
    await signInWithGoogle();
    router.replace("/home");
  };

  const onAppleSignInPress = async () => {
    await signInWithApple();
    router.replace("/home");
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <AuthHeader title={t_signIn} />
      <View style={styles.content}>
        <GmailButton onPress={onGoogleSignInPress} />
        {Platform.OS === "ios" && <AppleButton onPress={onAppleSignInPress} />}
      </View>
      <AuthBottomText>
        {t_welcomeWords}
      </AuthBottomText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    marginTop: 32,
    gap: 16,
  },
});
