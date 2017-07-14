Example for CustomWebView with nativeConfig
----

*Important files*

Javascript implementation:
* [CustomWebView.js](./CustomWebView.js)

Usage from JS:
* [MyApp.js](./MyApp.js)

Android implementation:
* [CustomWebViewManager.java](./android/app/src/main/java/com/overridenativeconfig/CustomWebViewManager.java)
    * This file contains all the logic for the custom webview. In this case all I do is extend the ReactWebViewClient and override `shouldOverrideUrlLoading` which lets me hook into URL navigations. Dispatches `onNavigationCompleted` event if URL is equals to the `finalUrl` prop.
* [CustomWebViewManagerPackager.java](./android/app/src/main/java/com/overridenativeconfig/CustomWebViewManagerPackager.java)
    * The packager-class, used in MainApplication to hook up the above ViewManager to the app.

iOS implementation:
* [RCTCustomWebView.h](ios/overrideNativeConfig/RCTCustomWebView.h)
    * Header-file for the webview
* [RCTCustomWebView.m](ios/overrideNativeConfig/RCTCustomWebView.m)
    * Same logic as Android. Overriding `shouldStartLoadWithRequest` to hook into URL navigation. Dispatches `onNavigationCompleted` event if URL is equals to the `finalUrl` prop.
* [RCTCustomWebViewManager.h](ios/overrideNativeConfig/RCTCustomWebViewManager.h)
    * Header-file for view manager
* [RCTCustomWebViewManager.m](ios/overrideNativeConfig/RCTCustomWebViewManager.m)
    * Inherits from RN's RCTWebViewManager. Adds the `finalUrl` prop and the `onNavigationCompleted` event.
* [RCTWebView+Custom.h](ios/overrideNativeConfig/RCTWebView+Custom.h)
    * Adding a category to `RCTWebView` so we can expose (& call) `shouldStartLoadWithRequest` from (the child-cass) `RCTCustomWebView`. Not really important to this example, but good to note.