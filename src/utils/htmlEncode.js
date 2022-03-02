import _ from "lodash";

const createMarkup = (encodedHtml) => ({
  __html: _.unescape(encodedHtml),
});

export default createMarkup;
