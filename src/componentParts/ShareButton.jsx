import React from 'react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
} from 'react-share';
import {
  WhatsAppIcon,
  FacebookIcon,
  EmailIcon,
  TwitterIcon,
  SortSidebarIcons,
} from './Icons';

export const objectToGetParams = (object) => {
  const params = Object.entries(object)
    .filter((_a) => {
      const value = _a[1];
      return value !== undefined && value !== null;
    })
    .map((_a) => {
      const key = _a[0];
      const value = _a[1];
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    });
  return params.length > 0 ? `?${params.join('&')}` : '';
};

function isMobileOrTablet() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}

export function ShareToFacebook({ url, text }) {
  console.log('share', text, url);
  return (
    <FacebookShareButton url={url} quote={text} hashtag="#wayapaychat">
      <FacebookIcon />{' '}
      <span>
        via Facebook <SortSidebarIcons name="arrowRight" />{' '}
      </span>
    </FacebookShareButton>
  );
}

export function ShareToWhatsapp({ url, text }) {
  console.log(url);
  return (
    // <a href={`https://wa.me/?text=${text}%0D%0A${url}`} target="_blank">
    // 	<WhatsAppIcon h='36' w='36' />
    // </a>
    <WhatsappShareButton
      url={url}
      title={text}
      //  separator={" "}
      media="http://res.cloudinary.com/lms-center/image/upload/v1599506126/alfons-morales-YLSwjSy7stw-unsplash_wcjqij.jpg"
      //  className={classes.socialMediaButton}
    >
      {/* <WhatsappIcon size={36} /> */}
      <WhatsAppIcon h="36" w="36" />
      <span>
        via Whatsapp <SortSidebarIcons name="arrowRight" />{' '}
      </span>
    </WhatsappShareButton>
  );
}

export const whatsappLink = (url, text) => {
  const title = text;
  const separator = ' ';
  // assert_1.default(url, 'whatsapp.url');
  return `https://${
    isMobileOrTablet() ? 'api' : 'web'
  }.whatsapp.com/send${objectToGetParams({
    text: title ? title + separator + url : url,
  })}`;
};

export function ShareToEmail({ url, text }) {
  return (
    <EmailShareButton
      url={url}
      quote={text}
      hashtag="#wayapaychat"
      media="http://res.cloudinary.com/lms-center/image/upload/v1599506126/alfons-morales-YLSwjSy7stw-unsplash_wcjqij.jpg"
      //  className={classes.socialMediaButton}
    >
      {/* <WhatsappIcon size={36} /> */}
      <EmailIcon />{' '}
      <span>
        via Email <SortSidebarIcons name="arrowRight" />{' '}
      </span>
    </EmailShareButton>
  );
}

export function ShareToTwitter({ url, text, username }) {
  return (
    <TwitterShareButton
      url={url}
      title={text}
      via={username}
      hashtag="#wayapaychat"
      media="http://res.cloudinary.com/lms-center/image/upload/v1599506126/alfons-morales-YLSwjSy7stw-unsplash_wcjqij.jpg"
    >
      <TwitterIcon />{' '}
      <span>
        via Twitter <SortSidebarIcons name="arrowRight" />{' '}
      </span>
    </TwitterShareButton>
  );
}

export function ShareToInstagram({ url, text }) {
  return (
    <LinkedinShareButton
      url={url}
      title={text}
      summary={text}
      source="WAYAPAY CHAT"
    >
      <TwitterIcon h="36" w="36" />
    </LinkedinShareButton>
  );
}
