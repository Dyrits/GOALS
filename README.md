# GOALS

## About The Project

A mobile educational project built with React Native and Expo: a simple to-do list application for tracking goals, per the repository description. Goals are added from a modal input and listed on the main screen.

### Built With

- React Native
- Expo

## Getting Started

### Prerequisites

- Node.js 18 or later and npm
- The Expo Go app on a device, or an emulator

### Installation

```sh
npm install
```

### Running

```sh
npm start
```

## Dependency compatibility

This project uses Expo SDK 53 and React Native 0.79.6. The React Native override keeps native tooling on the matching version instead of installing a newer incompatible peer.

After changing Expo packages, run `npx expo install --check` and `npx expo-doctor`. Web, Android and iOS JavaScript exports have been checked; native device builds and execution still need device or emulator testing.

Local npm audit still reports legacy Expo/Metro tooling advisories, including image-size. A forced image-size 2 override breaks the Metro 0.82 API and is not applied. SDK 54 and newer React Native versions require a higher Node minimum, so they are not selected automatically.

## License

No license file is present in this repository.

## Contact

Dyrits - https://github.com/Dyrits
