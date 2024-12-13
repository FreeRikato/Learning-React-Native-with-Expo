# Installation and Setup
### **Installing Node.js and npm/pnpm**

#### **Step 1: Install Node.js**
1. Visit the [Node.js official website](https://nodejs.org/).
2. Download the **LTS version** for better stability.
3. Follow the instructions to install Node.js for your OS:
   - **Windows**: Use the installer (.msi) file and follow the setup wizard.
   - **macOS**: Use the `.pkg` installer or `brew`:
     ```bash
     brew install node
     ```
   - **Linux**: Use a package manager like `apt` or `dnf`:
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```

#### **Step 2: Verify Installation**
- Check Node.js and npm versions:
  ```bash
  node -v
  npm -v
  ```

#### **Step 3: Install pnpm (Optional but Recommended)**
- Install pnpm globally:
  ```bash
  npm install -g pnpm
  ```
- Verify pnpm installation:
  ```bash
  pnpm -v
  ```

---

### **Set Up Expo CLI and Create a New Project**

#### **Step 1: Install Expo CLI**
1. Use npm or pnpm to install the Expo CLI globally:
   ```bash
   npm install -g expo-cli
   # or
   pnpm add -g expo-cli
   ```

#### **Step 2: Verify Installation**
- Check the Expo CLI version:
  ```bash
  expo --version
  ```

#### **Step 3: Create a New Project**
1. Use `create-expo-app` to scaffold a new project:
   ```bash
   npx create-expo-app@latest my-app
   ```
2. Choose a template during the setup (e.g., "Blank" or "Tabs").
3. Navigate to the project directory:
   ```bash
   cd my-app
   ```

---

### **Install Development Tools**

#### **Neovim**
1. Install Neovim:
   - **macOS**:
     ```bash
     brew install neovim
     ```
   - **Windows**: Download the `.msi` from the [Neovim website](https://neovim.io/).
   - **Linux**:
     ```bash
     sudo apt install neovim
     ```

2. Install Plugins (Optional):
   - Use a plugin manager like [Packer](https://github.com/wbthomason/packer.nvim).
   - Add a plugin for JavaScript/TypeScript syntax highlighting, such as `nvim-treesitter`.

#### **Visual Studio Code**
1. Download VSCode from the [official website](https://code.visualstudio.com/).
2. Install the following extensions:
   - `Prettier - Code Formatter`
   - `ESLint`
   - `React Native Tools`
   - `Expo Snippets`

#### **Android Studio**
1. Download Android Studio from [developer.android.com](https://developer.android.com/studio).
2. Install it and configure:
   - Open **SDK Manager** and install the required SDK versions (e.g., API level 31+).
   - Set up a virtual device (AVD) for emulation.
   - Add `ANDROID_HOME` to your environment variables.

3. Add the required paths:
   ```bash
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
   ```

#### **Xcode (macOS Only)**
1. Install Xcode from the Mac App Store.
2. Install Xcode Command Line Tools:
   ```bash
   xcode-select --install
   ```
3. Open Xcode, agree to the license, and install additional components.

---

### **Run Expo App on Simulator/Emulator**

#### **Android Emulator**
1. Open Android Studio and launch the AVD Manager.
2. Start a virtual device from the list of emulators.
3. Run the app:
   ```bash
   expo start
   ```
4. Press `a` in the Expo CLI terminal to launch the app on the emulator.

#### **iOS Simulator (macOS Only)**
1. Open the iOS Simulator via Xcode:
   ```bash
   open -a Simulator
   ```
2. Run the app:
   ```bash
   expo start
   ```
3. Press `i` in the Expo CLI terminal to launch the app on the iOS Simulator.

---

### **Run Expo App on Physical Device Using Expo Go**

#### **Install Expo Go App**
1. Download the **Expo Go** app:
   - **Android**: [Google Play Store](https://play.google.com/store/apps).
   - **iOS**: [App Store](https://apps.apple.com/).

#### **Connect the Device**
1. Ensure your device and development machine are on the same network.
2. Start the Expo server:
   ```bash
   expo start
   ```
3. Open Expo Go on your device and scan the QR code shown in the terminal or web interface.

#### **Enable USB Debugging (Optional)**
- If the device is not on the same network, enable USB debugging (Android) or connect via cable (iOS) and use commands like:
  ```bash
  adb reverse tcp:8081 tcp:8081
  ```

---

### **General Debugging Tips**
- Use **Expo DevTools** (opens automatically with `expo start`) to monitor logs, reload the app, or access device settings.
- Use the **React Native Debugger** or Chrome Developer Tools for advanced debugging.

# Introduction to Expo with React Native

### **Creating a Simple "Hello World" Expo App**

To begin, ensure you have Node.js installed on your system. Then, use the following commands to create and run a new Expo project:

```bash
# Create a new Expo project named 'HelloWorldApp'
npx create-expo-app HelloWorldApp

# Navigate into the project directory
cd HelloWorldApp

# Start the development server
npx expo start
```

After running `npx expo start`, a QR code will appear in your terminal. Scan this QR code using the Expo Go app on your Android or iOS device to view the app. Alternatively, you can press 'w' in the terminal to open the app in a web browser. 

### **Exploring the Structure of an Expo Project**

An Expo project typically includes the following structure:
```
HelloWorldApp/
├── app/
│   ├── index.tsx
│   └── _layout.tsx
├── assets/
│   ├── images/
│   └── ...
├── node_modules/
├── .gitignore
├── app.json
├── babel.config.js
├── package.json
└── tsconfig.json
```

- `app/`: Contains the app's navigation, which is file-based. The file structure of this directory determines the app's navigation. For example, `app/index.tsx` serves as the entry point of the app. 

- `assets/`: Stores images, fonts, and other static resources.

- `node_modules/`: Includes all the project's dependencies.

- `.gitignore`: Specifies files and directories to be ignored by version control.

- `app.json`: Contains configuration settings for the app, such as the app name and slug.

- `babel.config.js`: Configures Babel for JavaScript code transpilation.

- `package.json`: Lists dependencies and scripts for the project.

- `tsconfig.json`: Configures TypeScript settings if you're using TypeScript.

### **Understanding Expo’s Managed Workflow and Its Limitations**

Expo offers two primary workflows: Managed and Bare.

- **Managed Workflow**: In this workflow, Expo manages all native configurations, allowing you to build your app using only JavaScript or TypeScript. This approach simplifies development and is ideal for most applications.

- **Bare Workflow**: This workflow provides full control over native code, enabling you to add custom native modules or modify native configurations. It's suitable for apps that require functionality beyond what the managed workflow offers.

#### **Limitations of the Managed Workflow**:

- Limited access to custom native modules.

- Dependence on Expo's updates for native APIs.

- Potential challenges when integrating certain third-party native libraries.

However, with the introduction of Expo Application Services (EAS), many of these limitations have been mitigated, making the managed workflow more versatile. 

### **Learning Hot Reloading and Live Reloading**

Both hot reloading and live reloading are features that expedite the development process by providing immediate feedback on code changes.

#### **Hot Reloading**: 

- Reloads only the files that were changed without losing the current state of the app. This allows you to see changes instantly without navigating back to the previous state.

#### **Live Reloading**: 
- Reloads the entire application when a file changes, which resets the state of the app.

To enable these features:

- **On Android and iOS Devices**: Shake the device to open the developer menu, where you can toggle hot reloading and live reloading.

- **On Simulators**:

  - **iOS Simulator**: Press `Cmd + D` to open the developer menu.

  - **Android Emulator**: Press `Cmd + M` (on macOS) or `Ctrl + M` (on Windows/Linux) to open the developer menu.

> **Note**: In Expo's managed workflow, these features are enabled by default. If you encounter issues with hot reloading or live reloading, ensure that your development environment is correctly set up and that you're running the app in development mode. 
