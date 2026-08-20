plugins {
  id("com.android.application")
}

android {
  namespace = "com.willbooster.example"
  compileSdk = 36

  defaultConfig {
    applicationId = "com.willbooster.example"
    minSdk = 23
    targetSdk = 36
    versionCode = 1
    versionName = "1.0"
  }

}

dependencies {
  testImplementation("junit:junit:4.13.2")
}
