import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from '@blueprintjs/core';
import glamorous from 'glamorous';
import { css } from 'glamor';
import { getCharacters, getPageId, getIsPending } from '../../selectors';
import { loadCharacterDetail } from '../../thunk';
import { changePage } from '../../actions';
import Nav from '../nav';
import Body from '../body';
import Footer from '../footer';

const rotate = css.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const ContainerCenter = glamorous.div ({
  display: 'flex',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '45vh',
  marginBottom: '45vh',
  animation: `${rotate} 1s infinite linear`,
})

const App = ({characters = [], loadCharacterDetail, pageId = '', changePage, isPending = true}) => {
  return (
    <div>
      <Nav changePage={changePage}/>
      {isPending ? <ContainerCenter><Icon iconName="repeat" /></ContainerCenter> : null}
      <Body characters={characters} loadCharacterDetail={loadCharacterDetail} pageId={pageId} />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  pageId: getPageId(state),
  isPending: getIsPending(state),
  characters: getCharacters(state),
})

const mapDispatchToProps = {
  loadCharacterDetail,
  changePage,
};

App.propTypes = {
  characters: PropTypes.array,
  loadCharacterDetail: PropTypes.func.isRequired,
  pageId: PropTypes.string,
  isPending: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
