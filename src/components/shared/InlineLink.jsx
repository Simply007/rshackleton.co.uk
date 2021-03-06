import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const InlineLink = ({ content, itemId, type, urlSlug }) => {
  let url;

  switch (type) {
    case 'article': {
      url = `/articles/${urlSlug}`;
      break;
    }

    case 'content_page': {
      url = `/${urlSlug}`;
      break;
    }

    default: {
      url = '/';
    }
  }

  return (
    <Link key={itemId} to={url}>
      {content}
    </Link>
  );
};

InlineLink.propTypes = {
  content: PropTypes.string,
  itemId: PropTypes.string,
  type: PropTypes.string,
  urlSlug: PropTypes.string,
};

export default InlineLink;
