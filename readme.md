keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000


Objectives:

Co-exist native with React native
Provide the best available developer experience leading to best agility and stability
Compatibility with react native eco-system. ( codepush, expo, hermes )
Provide control over customization.
Up to date with latest features of all frameworks
All devs are mobile devs - No IOS, android, RN dev anymore.

Current Experience

Find out time taken to start ern container
Find out time taken after pr checks
-- Manual Step of Review  ( Invariable Time )
find out time taken after master build
find out time taken after version upgrade build
time taken to create a container
time taken to publish the container to android and IOS container repos
time taken to publish ios container build to Maven repository

-- Separate Person Starts --
open IOS Code / android code
get the latest version of container for maven
try to integrate the changes in native code.
try to start the app...app crashes / does not work... back to step1

--- Another person keeps waiting.
-- No Single environment to test everything.
-- No Debugging at the same time.
-- No Real time visibility of the changes.
-- Too many uncontrollable variables before changes are permanently merged.
-- Unncessary publishing of packages without need.
-- Huge build and release times
-- Absolutly untestable integration errors due to multiple miniapps.

