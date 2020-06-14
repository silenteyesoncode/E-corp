import { createSelector } from 'reselect';

// initial input selector
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// this way we convert that object of shop data into an array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

// Data Normalisation
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);


// when our data is stored in array
// also this used with find()
// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5}

// export const selectCollection = collectionUrlParam =>
// createSelector(
//  [selectCollections],
//    collections => collections.find(
//     collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]));
// 
// find() returns our collectionId although its compramise with time-complexity





