!!! A small research on Expo vs React Native CLI. Which one should i proceed
with from Perplexity!!!
Refer [React Native CLI vs Expo.md](./React Native CLI vs Expo.md)

# Crash Course on React Native

## What is React Native?

> Develop application for IOS, Android and Web from single codebase

Use native components
- Better Performance
- More seamless UX

Also, Hot reloading or `Over-the-air-updates` and Strong community support is available which will boost
up the developer experience.

## What is Expo?
Expo is similar to create-react-app and vite that provides many tools and
services that simplify the development process so no need to configure -
- Dev environment
- Native dependencies

Expo offers pre-built components & APIs for
- Navigation
- Gestures
- Camera
- Maps
---

## Similarity between React Native and React
When Coding in React Native, we use Javascript like React JS
> but instead of rendering HTML elements, you'll be rendering native mobile
> components

```jsx
import React from 'react'
// import React Native components
import { View, Text } from 'react-native'

// Creating functional components
const App = () => {
  return (
  <View>
    <Text>Hello World</Text>
  </View>
  )
}
```

> Looking into the Text component
```jsx
<Text
  style = {{ fontsize: 24, color: 'blue' }}
>Hello World</Text>
```
This is similar to p or h1 tag to render text

## Styling in React Native
> React Native offers a stylesheet utility that helps us to define styles by
> creating a single JavaScript object that optimizes performance

> Nativewind: allows to write tailwind like styles within react native

## `<View>` Component

- A box or container that holds other components that is similar to `<div>`
element in HTML but with some added functionality specific to mobile apps
- used to create layout structures for other components
- has many different props that can be used to control its appearance and
behavior 

> `<View>` uses flexbox layout by default that makes it easier to control how
> its child components are laid out within the container

flexbox properties can be used here - flex-direction, justify-content or
align-items to achieve the layout desired

## Touchable Components
### `<TouchableOpacity>` Component


```jsx
import React from 'react'
// import React Native components
import { TouchableOpacity, Text } from 'react-native'

// Creating functional components
function MyButton(props){
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  )
}
```

- Like a Cousin to `<Button>` Component but with more customization and
flexibility

### `<TouchableHighlight>` Component

- Allows Views to respond to touch in a Unique way that when touched the
component reduces the opacity of the wrapped view revealing an underlay color

### `<TouchableWithoutFeedback>` Component

- Helps to create an element that is Clickable without visual feedback when
pressed that is useful for creating link or images that don't require any
additional styling or effects

## `<ActivityIndicator` Component

- Allows to show spinner or a loading indicator in the app

## `<Button>` Component

- Allows to set properties like title, color and onPress function to be called
when pressed

## `<Flatlist>` Component

- Helps to render a long list of items that needs to be scrolled efficiently
like the map function in React but has extra features like optimized scroll
performance and item separation 

> `<Flatlist>` => For larger lists with smooth scrolling
> Map function => For smaller lists

## `<ScrollView>` Component

- A magic box that can hold multiple components and views, providing a scrolling
  container for them like Overflow scroll property of a `div` in HTML allowing us to easily navigate through a list of items or a large amount of content within the app

## `<SafeAreaView>` Component

- Provides a Safe zone to render apps content without being covered by the
device's hardware features like the notch, home indicator or status bar to
support devices with different screen sizes and shapes

> This is not optimized for all devices so instead of the default native
> component, we can use it from the library > `react-native-safe-area-context`
> to ensure content is contained within the safe area on any mobile device
> preventing overlap with a notch or bottom navigation bar

## `<Image>` Component

- Display image

## `<ImageBackground>` Component
- Display image as background of a container allowing other components to
layered on top of it

> SVG is not supported by both the default components so a third party library
> has to be utilized > `react-native-svg`

---
-- React native has many ready-made components such as
- Modal
- Alert
- Switch (Toggle)
- StatusBar
and many more...

# Diving into Expo

~ A React Native app utilizing Expo tools (e.g., Expo SDK, CLI, Router)

## Expo tools
- Expo Open Source Tools:
  - Includes Expo CLI, Router, SDK, etc.
  - Free and MIT-licensed
- Expo Application Services (EAS):
  - Cloud-based services for app building, submission and updates
  - **Benefits** Automation, collaboration, and physical infrastructure (e.g.,
  servers, CDNs).

## Flexibility of Expo
- Use native tools like Fastlane or host your infrastrucure
- EAS integrates deeply with various Expo services, providing a seamless
workflow

## Development Workflows

### Expo Go vs Development Builds
- Expo Go:
  - Quick Prototype testing.
  - Not for production apps.
- Development Builds:
  - Debug builds with `expo-dev-client`.
  - Allows configuration of native libraries and features.
  - Created locally or with EAS build.

### Continous Native Generation (CNG)
- Native projects generated dynamically from app.json and package.json

+++ Advantages
- Simplifies updates and maintenance
- Easily re-generate native projects with `npx expo prebuild`
- Supports advanced features via config plugins

## Core Development Loop

![Core Development Loop](https://docs.expo.dev/static/images/guides/core-development-loop-dark.png)
![Development Loop](./autoDiagram_d22be54839d1a564bef2d1e67ae2afa073febae29a3c07ca5662be066d854a25.png)
> 1. Write and Run Javascript code:
> > - Develop components and business logic.
> > - Reflect changes instantly without native interaction
> 2. Update App Configuration:
> > - Modify app settings via app.json and app.config.js
> > - Changes may require native project updates
> 3. Write or Modify Native Code:
> > - Update native configurations or add native dependencies
> > Approaches:
> > > - Modify native directories easily.
> > > - Use config plugins for better maintainability.
> 4. Install Libraries requiring native modifications:
> > - Libraries may need configuration in app config or directly in native
> >   projects
> > - Requires creating a development build

## Development Workflows: Cloud vs Local
### Cloud-Based (EAS Build)
+++Benefits:
- No need for Android studio/Xcode
- Easily share builds with stakeholders
- Usage: Run `eas build` to compile your app

### Local Development
- Requirements: Install Android studio/Xcode
- Commands:
  - `npx expo run:android|ios` for builds
  - Modify or debug directly on native directories.






