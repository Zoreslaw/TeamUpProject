## 🇺🇸 English

# TeamUp – Gaming-Focused Dating App

## Project Overview

TeamUp is a React Native mobile app that helps gamers find compatible teammates and potential partners based on games played, language preferences, and personal fit. It combines familiar dating-app mechanics with community features tailored to multiplayer gaming.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Authentication](#authentication)
- [Database Design](#database-design)
- [Localization](#localization)
- [Testing](#testing)
- [Build & Deployment](#build--deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Project Status](#project-status)
- [License](#license)

## Features

### Core
- **Authentication**: Email/password, Google Sign-In, Apple Sign-In
- **Profiles**: Rich profiles with gaming preferences, languages, and personal details
- **Swipe Discovery**: Tinder-style card swiping to find matches
- **Real-Time Chat**: Messaging for matched users
- **Matching Algorithm**: Signals include games, languages, age, and gender
- **Presence**: Online/offline indicators
- **Search & Filters**: Advanced search within conversations

### Gaming-Specific
- **Game Preferences**: Favorite titles and categories
- **Language Matching**: Multi-language support for international play
- **Team Formation**: Focus on finding compatible squadmates
- **Organized Categories**: Structured interests and tags

### User Experience
- **Responsive**: Optimized for iOS and Android
- **Light/Dark Themes**: Adaptive theming
- **Haptics**: Device vibrations for key interactions
- **Smooth Animations**: Powered by Reanimated
- **Offline Resilience**: Graceful error handling and limited offline support

## Tech Stack

### Frontend
- React Native 0.76.7 (with Expo SDK 52)
- TypeScript
- React Navigation / Expo Router

### Backend & Services
- Firebase: Auth, Firestore, Realtime Database, Storage, Cloud Functions, Analytics, Crashlytics

### State & Data
- React Context (app state)
- React Query (TanStack) (server state & caching)
- AsyncStorage (local persistence)

### UI & Interaction
- React Native Reanimated, Gesture Handler, Expo Linear Gradient, Expo Haptics

### Dev Tooling
- ESLint, Jest, TypeScript, Expo Dev Client

## Architecture

- File-based routing with Expo Router
- Modular components and custom hooks for business logic
- Context API for global state
- Service layer for Firebase/API calls
- Strict typing via TypeScript interfaces

## Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI
- Expo Go app on your device (for dev builds)

### Steps

1. **Clone**
   ```bash
   git clone https://github.com/Zoreslaw/TeamUpProject.git
   cd TeamUpProject
   ```

2. **Install**
   ```bash
   npm install
   ```

3. **Configure**
   - Set up Firebase project and Google Services files
   - Configure Apple Sign-In credentials

4. **Run (dev)**
   ```bash
   npm start
   ```
   Scan the QR code with Expo Go.

5. **Build (prod)**
   ```bash
   npm run build-production
   ```
   Scan the generated QR code to install the production build.

### Scripts
- `npm start` – start Expo dev server (QR for live testing)
- `npm test` – run tests
- `npm run lint` – lint code
- `npm run build-development` – cloud dev build
- `npm run build-production` – cloud prod build

## Project Structure

```
TeamUpProject/
├─ app/
│  ├─ (authentication)/
│  ├─ (swipe)/
│  ├─ (tabs)/
│  ├─ conversation/
│  └─ index.tsx
├─ components/
│  ├─ authentication/
│  ├─ button/
│  ├─ Swipe/
│  └─ ui/
├─ contexts/
├─ hooks/
├─ localization/
├─ types/
├─ utils/
└─ assets/
```

## Key Components

- **Authentication**: AuthContext, SignInScreen, AuthHeader, Google/Apple buttons
- **Swipe**: SwipeCard, SwipeTopBar, SwipeBottomBar, MatchOverlay
- **Chat**: ChatCard, MessagesList, ConversationBubble, ConversationInput
- **Profile**: ProfileHeader, ProfileEditModal, ProfileEditInput, ProfileAnimatedSubmenu

## Authentication

- Multiple sign-in methods
- Secure JWT handling (Firebase)
- Auto profile creation on first login
- Persistent sessions
- Friendly error messages and recovery paths

## Database Design

### Firestore Collections
- **users** – profiles & preferences
- **conversations** – chat metadata
- **messages** – per-message records
- **matches** – compatibility and interaction data

### Data Models
- User, Conversation, Message, Match (typed with TS interfaces)

## Localization

- i18next integration
- English and Polish out of the box; easy to extend
- Runtime language switching and fallback handling
- RTL support

## Testing

- Jest unit & integration tests
- Component and snapshot testing
- Test utilities, helpers, and mocks

## Build & Deployment

- `npm run build-development` – development builds
- `npm run build-production` – production builds

Platform notes:
- iOS: Apple Sign-In, tablets, localization
- Android: Google Services, adaptive icons, keyboard handling
- Web: PWA capabilities

## Screenshots

---

### 🔐 Authentication Flow
<div align="center">

<img width="180" height="400" alt="Sign-In Screen" src="https://github.com/user-attachments/assets/666ad42c-1d6c-4145-bfbf-60a0974e1f3e" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Email Sign-In" src="https://github.com/user-attachments/assets/2f03ad20-9b3a-4345-b128-7ac07f219e6a" />

</div>

---

### 🏠 Home Screen
<div align="center">

<img width="180" height="400" alt="Home Screen" src="https://github.com/user-attachments/assets/57488af4-816d-45d5-8d9f-20ac00aa1e9b" />

</div>

---

### 💫 Swipe Interface
<div align="center">

<img width="180" height="400" alt="Swipe Card" src="https://github.com/user-attachments/assets/183fb9d9-f943-49b7-85ab-bbed9b07b30d" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Swipe Controls" src="https://github.com/user-attachments/assets/3cb8e402-9cf4-43ed-9101-4bd100950f72" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Match Screen" src="https://github.com/user-attachments/assets/9c105ce5-c91b-421b-9f0b-e864bd67e396" />

</div>

---

### 💬 Chat Interface
<div align="center">

<img width="180" height="400" alt="Chat List" src="https://github.com/user-attachments/assets/4f513404-caf9-4b9c-8ec0-0be391125122" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Active Chat" src="https://github.com/user-attachments/assets/23a255a2-4492-4299-93f5-e1e5c52a3641" />

</div>

---

### 👤 Profile Management
<div align="center">

<img width="180" height="400" alt="Profile Screen" src="https://github.com/user-attachments/assets/eec79275-35fb-4be7-acdd-cdeefb8e6a0b" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Profile Edit" src="https://github.com/user-attachments/assets/fa0cd86d-7f0a-4644-9add-331f2beca383" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Preferences" src="https://github.com/user-attachments/assets/2fdfb926-5280-4224-9f57-25773cfb362a" />

<br><br>

<img width="180" height="400" alt="Gaming Settings" src="https://github.com/user-attachments/assets/5989de96-4849-4484-90d0-4efca15b1cb9" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Profile Menu" src="https://github.com/user-attachments/assets/79dc6464-eec4-44e8-a8e6-ff69e46827dc" />

</div>

---

## Contributing

### Guidelines
- Follow TypeScript best practices
- Keep components reusable
- Write tests for new features
- Maintain code style and docs

### Code Quality
- ESLint for consistency
- Strong typing with TypeScript
- Jest for component coverage
- Responsive design principles

## Project Status

- **Version**: 1.0.0
- **Development**: Active
- **Platforms**: iOS, Android, Web
- **Audience**: Gamers seeking teammates and relationships

## License

Proprietary software developed for educational purposes.

Developed by Zoreslav Sushko and Oliwier Oblicki

---

## 🇵🇱 Polski

# TeamUp – Aplikacja Randkowa dla Graczy

## Opis Projektu

TeamUp to nowoczesna aplikacja mobilna stworzona w technologii React Native, która pomaga graczom znaleźć kompatybilnych partnerów do wspólnej gry na podstawie zainteresowań, preferencji językowych oraz osobistej zgodności. Projekt łączy funkcjonalności typowe dla aplikacji randkowych z elementami społeczności gamingowej, tworząc wyjątkową przestrzeń do poznawania nowych osób.

## Spis Treści

- [Funkcje](#funkcje)
- [Stos technologiczny](#stos-technologiczny)
- [Architektura](#architektura)
- [Instalacja i konfiguracja](#instalacja-i-konfiguracja)
- [Struktura projektu](#struktura-projektu)
- [Główne komponenty](#główne-komponenty)
- [System uwierzytelniania](#system-uwierzytelniania)
- [Projekt bazy danych](#projekt-bazy-danych)
- [Lokalizacja](#lokalizacja)
- [Testowanie](#testowanie)
- [Budowanie i wdrażanie](#budowanie-i-wdrażanie)
- [Zrzuty ekranu](#zrzuty-ekranu)
- [Współpraca](#współpraca)

## Funkcje

### Podstawowe

- **Logowanie i rejestracja**: obsługa email/hasło, Google Sign-In oraz Apple Sign-In
- **Profile użytkowników**: szczegółowe informacje, preferencje gier, języki, dane osobiste
- **Przesuwanie kart (swipe)**: interfejs w stylu Tinder do wyszukiwania dopasowań
- **Czat w czasie rzeczywistym**: komunikator dla dopasowanych osób
- **Algorytm dopasowywania**: inteligentny system biorący pod uwagę gry, języki, wiek i płeć
- **Status obecności**: widoczność online/offline
- **Wyszukiwanie i filtrowanie**: zaawansowane opcje w konwersacjach

### Funkcje dla graczy

- **Preferencje gier**: wybór ulubionych gier i kategorii
- **Dopasowanie językowe**: wsparcie wielu języków dla międzynarodowych społeczności
- **Tworzenie drużyn**: ułatwione znajdowanie partnerów do gier wieloosobowych
- **Kategorie gier**: uporządkowany system zainteresowań

### Doświadczenie użytkownika

- **Responsywny design**: optymalizacja dla iOS i Androida
- **Tryb jasny/ciemny**: adaptacyjne motywy
- **Wibracje haptyczne**: lepsze wrażenia podczas interakcji
- **Płynne animacje**: wsparcie React Native Reanimated
- **Tryb offline**: obsługa błędów i działanie bez internetu

## Stos technologiczny

### Frontend

- React Native 0.76.7 – tworzenie aplikacji wieloplatformowych
- Expo SDK 52 – narzędzia developerskie
- TypeScript – bezpieczne typowanie
- React Navigation – nawigacja i routing

### Backend i usługi

- Firebase – kompletne rozwiązanie backendowe (Auth, Firestore, Realtime DB, Cloud Storage, Functions, Analytics, Crashlytics)

### Zarządzanie stanem

- React Context – globalny stan aplikacji
- React Query (TanStack) – cache i obsługa danych z serwera
- AsyncStorage – lokalne przechowywanie danych

### UI i animacje

- React Native Reanimated – wydajne animacje
- Expo Linear Gradient – efekty gradientów
- React Native Gesture Handler – obsługa gestów i dotyku
- Expo Haptics – wibracje haptyczne

### Narzędzia developerskie

- ESLint – spójność kodu
- Jest – testy jednostkowe i integracyjne
- TypeScript – statyczne sprawdzanie typów
- Expo Dev Client – debugowanie i testowanie

## Architektura

Aplikacja opiera się na nowoczesnej architekturze React Native:

- Routing plikowy – dzięki Expo Router
- Komponenty wielokrotnego użytku – modularna budowa
- Custom hooks – logika biznesowa w osobnych funkcjach
- Context API – globalne zarządzanie stanem
- Warstwa usługowa – integracja Firebase i API
- Bezpieczeństwo typów – interfejsy TypeScript

## Instalacja i konfiguracja

### Wymagania

- Node.js (v18+)
- npm lub yarn
- Expo CLI
- Aplikacja Expo Go na urządzeniu mobilnym

### Instrukcje

1. **Sklonuj repozytorium**
   ```bash
   git clone https://github.com/Zoreslaw/TeamUpProject.git
   cd TeamUpProject
   ```

2. **Zainstaluj zależności**
   ```bash
   npm install
   ```

3. **Skonfiguruj środowisko** (Firebase, Google Services, Apple Sign-In)

4. **Uruchom w trybie developerskim:**
   ```bash
   npm start
   ```

5. **Zbuduj wersję produkcyjną:**
   ```bash
   npm run build-production
   ```

## Struktura projektu

(tutaj zostawiłem bez zmian – jest jasne i czytelne)

## Główne komponenty

- **Uwierzytelnianie**: logowanie, nagłówki, przyciski social
- **Przesuwanie (swipe)**: karty profili, pasek górny/dolny, ekran dopasowania
- **Czat**: lista konwersacji, bąbelki wiadomości, pole wprowadzania
- **Profil**: nagłówek profilu, edycja, preferencje gier, menu profilu

## System uwierzytelniania

- Obsługa wielu metod logowania
- Bezpieczne tokeny JWT Firebase
- Automatyczne tworzenie profilu przy pierwszym logowaniu
- Trwałe sesje użytkownika
- Przyjazna obsługa błędów

## Projekt bazy danych

- **users** – dane i preferencje użytkowników
- **conversations** – metadane czatów
- **messages** – wiadomości z historią
- **matches** – dane o dopasowaniach

## Lokalizacja

- i18next do internacjonalizacji
- Obsługa języków: polski i angielski (z możliwością rozszerzenia)
- Dynamiczna zmiana języka w aplikacji
- System fallback dla brakujących tłumaczeń
- Obsługa języków RTL

## Testowanie

- Jest – testy jednostkowe i integracyjne
- Testy komponentów React
- Snapshoty do wykrywania zmian UI
- Dedykowane helpery i mocki

## Budowanie i wdrażanie

- `npm run build-development` – wersja developerska
- `npm run build-production` – wersja produkcyjna
- Specjalne ustawienia dla iOS, Androida i PWA

## Zrzuty ekranu

---

### 🔐 Przepływ Uwierzytelniania
<div align="center">

<img width="180" height="400" alt="Ekran Logowania" src="https://github.com/user-attachments/assets/666ad42c-1d6c-4145-bfbf-60a0974e1f3e" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Uwierzytelnianie Email" src="https://github.com/user-attachments/assets/2f03ad20-9b3a-4345-b128-7ac07f219e6a" />

</div>

---

### 🏠 Ekran Główny
<div align="center">

<img width="180" height="400" alt="Ekran Główny" src="https://github.com/user-attachments/assets/57488af4-816d-45d5-8d9f-20ac00aa1e9b" />

</div>

---

### 💫 Interfejs Przesuwania
<div align="center">

<img width="180" height="400" alt="Karta Profilu" src="https://github.com/user-attachments/assets/183fb9d9-f943-49b7-85ab-bbed9b07b30d" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Kontrolki Przesuwania" src="https://github.com/user-attachments/assets/3cb8e402-9cf4-43ed-9101-4bd100950f72" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Interfejs Dopasowania" src="https://github.com/user-attachments/assets/9c105ce5-c91b-421b-9f0b-e864bd67e396" />

</div>

---

### 💬 Interfejs Czatowania
<div align="center">

<img width="180" height="400" alt="Lista Konwersacji" src="https://github.com/user-attachments/assets/4f513404-caf9-4b9c-8ec0-0be391125122" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Aktywny Czat" src="https://github.com/user-attachments/assets/23a255a2-4492-4299-93f5-e1e5c52a3641" />

</div>

---

### 👤 Zarządzanie Profilami
<div align="center">

<img width="180" height="400" alt="Ekran Profilu" src="https://github.com/user-attachments/assets/eec79275-35fb-4be7-acdd-cdeefb8e6a0b" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Edycja Profilu" src="https://github.com/user-attachments/assets/fa0cd86d-7f0a-4644-9add-331f2beca383" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Preferencje" src="https://github.com/user-attachments/assets/2fdfb926-5280-4224-9f57-25773cfb362a" />

<br><br>

<img width="180" height="400" alt="Preferencje Gamingowe" src="https://github.com/user-attachments/assets/5989de96-4849-4484-90d0-4efca15b1cb9" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img width="180" height="400" alt="Menu Profilu" src="https://github.com/user-attachments/assets/79dc6464-eec4-44e8-a8e6-ff69e46827dc" />

</div>

---

## Współpraca

### Wytyczne

- Postępuj zgodnie z najlepszymi praktykami TypeScript
- Utrzymywanie wielokrotnośći użycia komponentów
- Pisanie testów dla nowych funkcji
- Utrzymywanie stylu kodu i dokumentacji

### Jakość kodu

- ESLint dla spójności
- Silne typowanie z TypeScript
- Jest dla pokrycia komponentów
- Zasady responsywnego designu

## Status projektu

- **Wersja**: 1.0.0
- **Status**: aktywny rozwój
- **Platformy**: iOS, Android, Web
- **Docelowa grupa**: gracze szukający drużyn i relacji

## Licencja

Projekt jest oprogramowaniem własnościowym, rozwijanym w celach edukacyjnych.

**Autorzy**: Zoreslav Sushko i Oliwier Oblicki

---

<div align="center">

**🌍 Wybierz język / Choose language / Wybierz język**

[🇺🇸 English](#english) | [🇵🇱 Polski](#polish)

</div>
