# Todo using State

# Project setup with NativeWind

```bash
npx create-expo-app@latest todo-state
cd todo-state
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
npx tailwindcss init
```

- Update the `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Update or Create `babel.config.js`

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

- Update or Create `metro.config.js`

```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: "./global.css" });
```

- Create `global.css` in the project root directory

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Create `nativewind-env.d.ts`

```typescript
/// <reference types="nativewind/types" />
```

- Import `global.css` from the project root directory
```tsx
import '../global.css'
```

## Todo Project


- Todo application has two inputs => Title and Description
- Create TextInput for the title and description, use attributes - placeholder,
  value and placeholderTextColor
- Create State Variables for title, description and todos
- The todos should have types that can be done with interface

```tsx
interface Todo {
   title: string,
   description: string,
   id: string
}
```

- Why id? To use it as key for rendering the todos
- Use array of the interface like `<Todo[]>` to define the todo state variable
- Create buttons with pressable native component and define add & clear todos
with functions that operates on the state variable
>Now, Render the list of todos with FlatList using attributes:
> - data: The array of todos itself
> - renderItem: Function that render each item in the array
> - keyExtractor:

