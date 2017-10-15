import * as DataBinding from './context/DataBinding';
import * as DataStore from './context/DataStore';

const context = {
  DataBinding,
  DataStore
};

import * as MoreLikeThis from './components/MoreLikeThis';
import * as SearchBox from './components/MoreLikeThis';

const components = {
  MoreLikeThis,
  SearchBox
};

import * as DetailLayout from './layout/DetailLayout';
import * as ResultsLayout from './layout/ResultsLayout';

const layout = {
  DetailLayout,
  ResultsLayout
};

export { context, components, layout };