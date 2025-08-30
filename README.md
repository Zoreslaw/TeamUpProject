# TeamUp - Gaming-Focused Dating App

## Project Overview

TeamUp is a sophisticated React Native mobile application designed to help gamers find compatible teammates based on shared gaming interests, language preferences, and personal compatibility. The app combines modern dating app functionality with gaming community features, creating a unique platform for gamers to connect.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Authentication System](#authentication-system)
- [Database Design](#database-design)
- [Localization](#localization)
- [Testing](#testing)
- [Build & Deployment](#build--deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Features

### Core Functionality
- **User Authentication**: Email/password, Google Sign-In, and Apple Sign-In support
- **Profile Management**: Comprehensive user profiles with gaming preferences, languages, and personal details
- **Swipe Interface**: Tinder-like card swiping system for discovering potential matches
- **Real-time Chat**: Instant messaging system for matched users
- **Match Algorithm**: Intelligent matching based on gaming preferences, languages, age, and gender
- **User Presence**: Online/offline status indicators
- **Search & Filtering**: Advanced search capabilities in conversations

### Gaming-Specific Features
- **Game Preferences**: Users can specify favorite games and gaming categories
- **Language Matching**: Multi-language support for international gaming communities
- **Team Formation**: Focus on finding compatible teammates for multiplayer games
- **Gaming Categories**: Organized gaming preference system

### User Experience
- **Responsive Design**: Optimized for both iOS and Android platforms
- **Dark/Light Theme**: Adaptive theming system
- **Haptic Feedback**: Enhanced user interaction with device vibrations
- **Smooth Animations**: React Native Reanimated for fluid user experience
- **Offline Support**: Robust error handling and offline capabilities

## Technology Stack

### Frontend
- **React Native 0.76.7**: Cross-platform mobile development
- **Expo SDK 52**: Development platform and tools
- **TypeScript**: Type-safe JavaScript development
- **React Navigation**: Navigation and routing system

### Backend & Services
- **Firebase**: Complete backend-as-a-service solution
  - Authentication (Firebase Auth)
  - Firestore Database
  - Real-time Database
  - Cloud Storage
  - Cloud Functions
  - Analytics & Crashlytics

### State Management & Data
- **React Context**: Global state management
- **React Query (TanStack)**: Server state management and caching
- **AsyncStorage**: Local data persistence

### UI & Animation
- **React Native Reanimated**: High-performance animations
- **Expo Linear Gradient**: Gradient effects
- **React Native Gesture Handler**: Touch and gesture handling
- **Expo Haptics**: Haptic feedback

### Development Tools
- **ESLint**: Code quality and consistency
- **Jest**: Testing framework
- **TypeScript**: Static type checking
- **Expo Dev Client**: Development and debugging tools

## Architecture

The application follows a modern React Native architecture with:

- **File-based Routing**: Using Expo Router for navigation
- **Component-based Architecture**: Modular, reusable components
- **Custom Hooks**: Encapsulated business logic
- **Context API**: Global state management
- **Service Layer**: Firebase integration and API calls
- **Type Safety**: Comprehensive TypeScript interfaces

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device (for development builds)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zoreslaw/TeamUpProject.git
   cd TeamUpProject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Configure Firebase project settings
   - Set up Google Services configuration files
   - Configure Apple Sign-In credentials

4. **Development Testing**
   ```bash
   # Start Expo development server
   npm start
   
   # Scan QR code with Expo Go app on your device
   # The app will load directly on your device for testing
   ```

5. **Production Testing**
   ```bash
   # Build production version in Expo cloud
   npm run build-production
   
   # Scan the generated QR code with your device
   # This will install the production build for testing
   ```

### Testing Workflow
- **Development**: Use `npm start` to generate QR code, scan with Expo Go app for live testing
- **Production**: Use `npm run build-production` to create cloud build, scan QR code to install production version
- **No Local Simulators Required**: All testing is done directly on physical devices via QR code scanning

### Available Scripts
- `npm start`: Start Expo development server and generate QR code for testing
- `npm test`: Run test suite
- `npm run lint`: Check code quality
- `npm run build-development`: Build development version in Expo cloud
- `npm run build-production`: Build production version in Expo cloud

## Project Structure

```
TeamUpProject/
├── app/                          # Main application screens
│   ├── (authentication)/        # Authentication flow
│   ├── (swipe)/                # Swipe/matching interface
│   ├── (tabs)/                 # Main tab navigation
│   ├── conversation/            # Chat conversations
│   └── index.tsx               # Entry point
├── components/                  # Reusable UI components
│   ├── authentication/          # Auth-related components
│   ├── button/                 # Button components
│   ├── Swipe/                  # Swipe interface components
│   └── ui/                     # Basic UI elements
├── contexts/                    # React Context providers
├── hooks/                       # Custom React hooks
├── localization/                # Internationalization
├── types/                       # TypeScript type definitions
├── utils/                       # Utility functions
└── assets/                      # Images, fonts, and static files
```

## Key Components

### Authentication Components
- **AuthContext**: Global authentication state management
- **SignInScreen**: User login interface
- **AuthHeader**: Authentication screen headers
- **Social Buttons**: Google and Apple sign-in buttons

### Swipe Interface
- **SwipeCard**: Individual user profile cards
- **SwipeTopBar**: Navigation and controls
- **SwipeBottomBar**: Like/dislike action buttons
- **MatchOverlay**: Match celebration screen

### Chat System
- **ChatCard**: Conversation list items
- **ConversationBubble**: Individual message display
- **ConversationInput**: Message input interface
- **MessagesList**: Scrollable message history

### Profile Management
- **ProfileHeader**: User profile information display
- **ProfileEditModal**: Profile editing interface
- **ProfileEditInput**: Various input types for profile data
- **ProfileAnimatedSubmenu**: Animated profile sections

## Authentication System

The app implements a comprehensive authentication system with:

- **Multiple Sign-in Methods**: Email/password, Google, Apple
- **Secure Token Management**: Firebase JWT tokens
- **User Profile Creation**: Automatic profile setup on first login
- **Session Persistence**: Maintains login state across app restarts
- **Error Handling**: User-friendly error messages and recovery

## Database Design

### Firestore Collections
- **users**: User profiles and preferences
- **conversations**: Chat conversation metadata
- **messages**: Individual chat messages
- **matches**: User matching data

### Data Models
- **User Profile**: Comprehensive user information including gaming preferences
- **Conversation**: Chat thread management
- **Message**: Individual message storage with metadata
- **Match**: User compatibility and interaction data

## Localization

The application supports multiple languages with:

- **i18next Integration**: Professional internationalization
- **Language Support**: English and Polish (expandable)
- **Dynamic Language Switching**: Runtime language changes
- **Fallback System**: Graceful handling of missing translations
- **RTL Support**: Right-to-left language compatibility

## Testing

The project includes a comprehensive testing setup:

- **Jest Framework**: Unit and integration testing
- **Component Testing**: React component test coverage
- **Snapshot Testing**: UI regression testing
- **Test Utilities**: Custom testing helpers and mocks

## Build & Deployment

### Development Builds
```bash
npm run build-development
```

### Production Builds
```bash
npm run build-production
```

### Platform-Specific Configuration
- **iOS**: Apple Sign-In, tablet support, localization
- **Android**: Google Services, adaptive icons, keyboard handling
- **Web**: Progressive web app capabilities

## Screenshots

---

### 🔐 Authentication Flow
<div align="center">

**Sign-In Screen**  
<img width="300" height="667" alt="Sign-In Screen" src="https://github.com/user-attachments/assets/666ad42c-1d6c-4145-bfbf-60a0974e1f3e" />

**Email Authentication**  
<img width="300" height="667" alt="Email Sign-In" src="https://github.com/user-attachments/assets/2f03ad20-9b3a-4345-b128-7ac07f219e6a" />

</div>

---

### 🏠 Home Screen
<div align="center">

**Main Home Interface**  
<img width="300" height="667" alt="Home Screen" src="https://github.com/user-attachments/assets/57488af4-816d-45d5-8d9f-20ac00aa1e9b" />

</div>

---

### 💫 Swipe Interface
<div align="center">

**User Profile Card**  
<img width="300" height="667" alt="Swipe Card" src="https://github.com/user-attachments/assets/183fb9d9-f943-49b7-85ab-bbed9b07b30d" />

**Swipe Controls**  
<img width="300" height="667" alt="Swipe Controls" src="https://github.com/user-attachments/assets/3cb8e402-9cf4-43ed-9101-4bd100950f72" />

**Match Interface**  
<img width="300" height="667" alt="Match Screen" src="https://github.com/user-attachments/assets/9c105ce5-c91b-421b-9f0b-e864bd67e396" />

</div>

---

### 💬 Chat Interface
<div align="center">

**Conversation List**  
<img width="300" height="667" alt="Chat List" src="https://github.com/user-attachments/assets/4f513404-caf9-4b9c-8ec0-0be391125122" />

**Active Chat**  
<img width="300" height="667" alt="Active Chat" src="https://github.com/user-attachments/assets/23a255a2-4492-4299-93f5-e1e5c52a3641" />

</div>

---

### 👤 Profile Management
<div align="center">

**Profile Overview**  
<img width="300" height="667" alt="Profile Screen" src="https://github.com/user-attachments/assets/eec79275-35fb-4be7-acdd-cdeefb8e6a0b" />

**Profile Editing**  
<img width="300" height="667" alt="Profile Edit" src="https://github.com/user-attachments/assets/fa0cd86d-7f0a-4644-9add-331f2beca383" />

**Preferences Settings**  
<img width="300" height="667" alt="Preferences" src="https://github.com/user-attachments/assets/2fdfb926-5280-4224-9f57-25773cfb362a" />

**Gaming Preferences**  
<img width="300" height="667" alt="Gaming Settings" src="https://github.com/user-attachments/assets/5989de96-4849-4484-90d0-4efca15b1cb9" />

**Profile Menu**  
<img width="300" height="667" alt="Profile Menu" src="https://github.com/user-attachments/assets/79dc6464-eec4-44e8-a8e6-ff69e46827dc" />

</div>

---

## Contributing

### Development Guidelines
- Follow TypeScript best practices
- Maintain component reusability
- Write comprehensive tests
- Follow the established code style
- Update documentation for new features

### Code Quality
- ESLint configuration for code consistency
- TypeScript for type safety
- Component testing with Jest
- Responsive design principles

## Project Status

**Current Version**: 1.0.0  
**Development Status**: Active Development  
**Platform Support**: iOS, Android, Web  
**Target Audience**: Gaming community members seeking teammates and relationships

## License

This project is proprietary software developed for educational purposes.

---

**Developed with ❤️ using React Native and Expo**
