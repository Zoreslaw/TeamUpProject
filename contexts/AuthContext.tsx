import React, { createContext, useState, useEffect, ReactNode } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";
import { useSegments } from "expo-router";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import * as AppleAuthentication from "expo-apple-authentication";
import { Alert, Platform } from "react-native";
import Constants from "expo-constants";
import * as FileSystem from "expo-file-system";

type AuthContextType = {
  user: FirebaseAuthTypes.User | null;
  userId: string | null;
  loading: boolean;
  error: string | null;
  signIn: (
    email: string,
    password: string,
  ) => Promise<FirebaseAuthTypes.UserCredential | undefined>;
  signUp: (
    name: string,
    email: string,
    password: string,
  ) => Promise<FirebaseAuthTypes.UserCredential | undefined>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<FirebaseAuthTypes.UserCredential | undefined>;
  signInWithApple: () => Promise<FirebaseAuthTypes.UserCredential | undefined>;
  clearError: () => void;
  updateUsername: (newUsername: string) => Promise<void>;
  updateAvatar: (uri: string) => Promise<void>;
};

const ERROR_CODES: { [key: string]: string } = {
  "auth/invalid-email": "The email address is not valid.",
  "auth/user-disabled": "This user account has been disabled.",
  "auth/user-not-found": "There is no user corresponding to this email.",
  "auth/wrong-password": "The password is invalid for the given email.",
  "auth/invalid-credential":
    "Houston, we have a problem. Your email or password didn't quite make it.",
  "auth/email-already-in-use": "That email address is already in use.",
  "auth/operation-not-allowed":
    "Well, this is awkward. Something went wrong, but we're not sure what. It's like a mystery novel, but less fun.",
  "auth/weak-password": "The password is not strong enough.",
  unknown: "Well, this is awkward. Error is unknown",
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

console.log("IS_DEV", __DEV__);
GoogleSignin.configure({
  webClientId: "557470981427-03c3mk56mknb028felssqmhu7rdmh8kl.apps.googleusercontent.com",
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const segments = useSegments();

  console.log(
    "STATE:",
    `user: ${user?.uid || "null"}`,
    `loading: ${loading}`,
    `error: ${error}`,
  );

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((_user) => {
      console.log(
        "Firebase onAuthStateChanged",
        `${JSON.stringify(_user, null, 2)}`,
      );
      if (JSON.stringify(user) !== JSON.stringify(_user)) {
        setUser(_user);
      }
      if (loading) setLoading(false);

      if (_user) {
        console.log("AnalyticsService.logSessionStart", _user.uid);
      } else {
        console.log("AnalyticsService.logSessionEnd");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    clearError();
  }, [segments]);

  const handleAuthError = (err: any) => {
    const errorMessage = ERROR_CODES[err.code] || ERROR_CODES["unknown"];
    setError(errorMessage);
    Alert.alert("Error", JSON.stringify(err));
    console.error(JSON.stringify(err));
    console.error(errorMessage);
  };

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      console.log("sign in with email:", email);
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log("User signed in successfully", {
        userId: userCredential.user.uid,
      });
      return userCredential;
    } catch (err: any) {
      handleAuthError(err);
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    try {
      setError(null);
      console.log("sign up:", { name, email });
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await userCredential.user.updateProfile({ displayName: name });
      console.log("User account created & signed in", {
        userId: userCredential.user.uid,
      });
      return userCredential;
    } catch (err: any) {
      handleAuthError(err);
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      console.log("sign out");
      await auth().signOut();
      console.log("User signed out", {
        userId: user?.uid || "unknown_user",
      });
      console.log("AnalyticsService.logSessionEnd", user?.uid || null);
    } catch (err: any) {
      handleAuthError(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setError(null);
      console.log("signInWithGoogle");
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.data?.idToken;

      if (!idToken) {
        throw new Error("Failed to retrieve ID token");
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);
      console.log("AnalyticsService.logSignInWithGoogle");
      return userCredential;
    } catch (err: any) {
      handleAuthError(err);
    }
  };

  const signInWithApple = async () => {
    try {
      setError(null);
      console.log("signInWithApple");
      const { state, identityToken } = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      const credential = auth.AppleAuthProvider.credential(
        identityToken,
        state || undefined,
      );
      const userCredential = await auth().signInWithCredential(credential);
      console.log("AnalyticsService.logSignInWithApple");
      return userCredential;
    } catch (err: any) {
      if (err.code === "ERR_CANCELED") {
        console.log("Apple Sign-In was canceled by the user");
      } else {
        handleAuthError(err);
      }
    }
  };

  const clearError = () => {
    if (error) setError(null);
  };

  const updateUsername = async (newUsername: string): Promise<void> => {
    try {
      if (!user) {
        throw new Error("No user is currently signed in.");
      }

      console.log("Updating username to:", newUsername);

      await auth().currentUser?.updateProfile({ displayName: newUsername });
      const updatedUser = await auth().currentUser;
      setUser(updatedUser);
      console.log("Username updated successfully", { userId: updatedUser?.uid });
    } catch (err: any) {
      handleAuthError(err);
    }
  };

  // Updated uploadAvatarToStorage to match your Firebase Storage rules
  const uploadAvatarToStorage = async (uri: string, uid: string) => {
    try {
      // Remove 'file://' prefix if needed
      const cleanedUri =
        Platform.OS === "android" && uri.startsWith("file://")
          ? uri.replace("file://", "")
          : uri;

      // Using the path that matches your rules: /users/{userId}/uploads/avatar
      const filename = `users/${uid}/uploads/avatar`;
      const reference = storage().ref(filename);

      // Await the upload
      await reference.putFile(cleanedUri);

      // Get and return the download URL
      const downloadURL = await reference.getDownloadURL();
      console.log("downloadURL", downloadURL);
      return downloadURL;
    } catch (err: any) {
      console.error("Error uploading avatar:", err);
      throw new Error(err.message || "Failed to upload avatar");
    }
  };

  const updateAvatar = async (uri: string): Promise<void> => {
    try {
      if (!user) {
        throw new Error("No user logged in");
      }

      console.log("Updating user avatar...");
      const downloadURL = await uploadAvatarToStorage(uri, user.uid);

      await auth().currentUser?.updateProfile({ photoURL: downloadURL });
      await auth().currentUser?.reload(); // Refresh
      const updatedUser = auth().currentUser;

      setUser(updatedUser);
      console.log("User avatar updated successfully", {
        userId: updatedUser?.uid,
      });
    } catch (err: any) {
      console.error("Error updating avatar:", err);
      handleAuthError(err);
      throw err; // Re-throw to handle in the UI
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userId: user?.uid || null,
        loading,
        error,
        signIn,
        signUp,
        signOut,
        signInWithGoogle,
        signInWithApple,
        clearError,
        updateUsername,
        updateAvatar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
