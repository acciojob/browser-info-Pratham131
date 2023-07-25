//your JS code here. If required.
// const browser_info = document.getElementById("browser-info");
document.addEventListener('DOMContentLoaded', function() {
  const browserInfoElement = document.getElementById('browser-info');

  // Get browser name and version
  const browserName = getBrowserName();
  const browserVersion = getBrowserVersion();

  // Display browser information on the page
  const infoMessage = "You are using " + browserName + " version " + browserVersion;
  browserInfoElement.textContent = infoMessage;
});

function getBrowserName() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Firefox')) {
    return 'Firefox';
  } else if (userAgent.includes('Chrome')) {
    return 'Chrome';
  } else if (userAgent.includes('Safari')) {
    return 'Safari';
  } else if (userAgent.includes('MSIE') || userAgent.includes('Trident/')) {
    return 'Internet Explorer';
  } else {
    return 'Unknown Browser';
  }
}

function getBrowserVersion() {
  const userAgent = navigator.userAgent;
  const regExpFirefox = /Firefox\/([0-9.]+)/;
  const regExpChrome = /Chrome\/([0-9.]+)/;
  const regExpSafari = /Version\/([0-9.]+)/;
  const regExpIE = /MSIE ([0-9.]+)/;
  
  if (userAgent.match(regExpFirefox)) {
    return userAgent.match(regExpFirefox)[1];
  } else if (userAgent.match(regExpChrome)) {
    return userAgent.match(regExpChrome)[1];
  } else if (userAgent.match(regExpSafari)) {
    return userAgent.match(regExpSafari)[1];
  } else if (userAgent.match(regExpIE)) {
    return userAgent.match(regExpIE)[1];
  } else {
    return 'Unknown Version';
  }
}
