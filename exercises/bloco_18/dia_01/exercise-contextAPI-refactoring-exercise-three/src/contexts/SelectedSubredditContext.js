import React, { createContext, Component } from 'react';

const SelectedSubredditContext = createContext();

export const SelectedSubredditConsumer = SelectedSubredditContext.Consumer;

export class SelectedSubredditProvider extends Component {
  state = {
    selectedSubreddit: 'reactjs',
  }

  selectSubreddit = (subreddit) => {
    this.setState({ selectedSubreddit: subreddit })
  }

  render() {
    const { selectSubreddit } = this;
    const { selectedSubreddit } = this.state;
    return (
      <SelectedSubredditContext.Provider value={ {
        selectSubreddit,
        selectedSubreddit,
      } }>
        { this.props.children }
      </SelectedSubredditContext.Provider>
    )
  }
}

export default SelectedSubredditContext;
