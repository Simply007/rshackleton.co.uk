import { graphql } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';

import Article from '@components/linked-items/Article';
import ContentPage from '@components/linked-items/ContentPage';

const LinkedItem = ({ linkedItem }) => {
  const type = get(linkedItem, 'system.type');

  switch (type) {
    case 'article': {
      return <Article linkedItem={linkedItem} />;
    }

    case 'content_page': {
      return <ContentPage linkedItem={linkedItem} />;
    }

    default:
      return null;
  }
};

LinkedItem.propTypes = {
  linkedItem: PropTypes.shape({
    system: PropTypes.shape({
      type: PropTypes.string,
    }),
  }),
};

export default LinkedItem;

export const LinkedItemsFragment = graphql`
  fragment LinkedItemsFragment on Node {
    ... on KenticoCloudItemArticle {
      ...KenticoCloudItemArticleFragment
    }
    ... on KenticoCloudItemContentPage {
      ...KenticoCloudItemContentPageFragment
    }
  }
`;
