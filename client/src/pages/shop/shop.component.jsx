import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "./../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "./../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "./../collections/collections.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();

    return () => {
      console.log("unsubscribe..");
    };
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default connect(
  null,
  { fetchCollectionsStart }
)(ShopPage);
