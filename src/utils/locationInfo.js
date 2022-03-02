import $ from "jquery";

export const Browser = {};
const vendor = ((navigator && navigator.vendor) || "").toLowerCase();
const userAgent = ((navigator && navigator.userAgent) || "").toLowerCase();

// Start Detecting browser helpers functions
function isOpera() {
  const Opera = userAgent.match(/(?:^opera.+?version|opr)\/(\d+)/);
  return Opera !== null;
}

function isChrome() {
  const Chrome = /google inc/.test(vendor)
    ? userAgent.match(/(?:chrome|crios)\/(\d+)/)
    : null;
  return Chrome !== null;
}

function isFirefox() {
  const Firefox = userAgent.match(/(?:firefox|fxios)\/(\d+)/);
  return Firefox !== null;
}

function isSafari() {
  const Safari = userAgent.match(/version\/(\d+).+?safari/);
  return Safari !== null;
}

function isInternetExplorer() {
  const InternetExplorer = userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/);
  return InternetExplorer !== null;
}

Browser.getBrowserName = () => {
  if (isOpera()) return "opera";
  // Opera
  if (isChrome()) return "chrome";
  // Chrome
  if (isFirefox()) return "firefox";
  // Firefox
  if (isSafari()) return "safari";
  // Safari
  if (isInternetExplorer()) return "ie"; // Internet Explorer
  return "";
};
// End Detecting browser helpers functions

// export default Browser;

export const getUserInfo = () => {
  return $.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: (location) => {
      return {
        countryName: location.country_name,
        state: location.state,
        city: location.city,
        latitude: location.latitude,
        longitude: location.longitude,
        ip: location.IPv4,
      };
    },
  });
};
