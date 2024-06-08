import { connect, ConnectedProps } from 'react-redux';
import React from 'react';
import { Text } from '@tarojs/components';
import classnames from 'classnames';

import { setVisibilityFilter } from '../../actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters';

import './FilterLink.scss';

const FILTER_TITLES: { [key: string]: string } = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

interface RootState {
  visibilityFilter: string;
}

const mapStateToProps = (state: RootState) => ({
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch: any) => ({
  setFilter: (filter: string) => {
    dispatch(setVisibilityFilter(filter));
  }
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface FilterLinkProps extends PropsFromRedux {
  filter: string;
}

class FilterLink extends React.Component<FilterLinkProps> {
  onClickHandler = () => {
    console.log('onClickHandler', this.props.filter);
    this.props.setFilter(this.props.filter);
  };

  render() {
    const { filter, visibilityFilter } = this.props;
    const text = FILTER_TITLES[filter];
    const active = visibilityFilter === filter;
    return (
      <Text
        className={classnames({ 'filters-link': true, 'selected': active })}
        onClick={this.onClickHandler}
      >
        {text}
      </Text>
    );
  }
}

export default connector(FilterLink);
