import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { map } from 'ramda';
import { getPageId, getCharacterBio, } from '../../selectors';

const ContainerCenter = glamorous.div ({
  display: 'flex',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
})

const Item = ({title}) => {
  return (<li>{title}</li>)
}

const CharacterDetail = ({characterBio = {}}) => { 
  return (
    <div>
      {characterBio.thumbnail ? <ContainerCenter> <img alt={`${characterBio.name}`} src={`${characterBio.thumbnail.path}.${characterBio.thumbnail.extension}`} /></ContainerCenter> : null}
      <br/>
      <h2>{characterBio.name}</h2>
      <p>{characterBio.description}</p>
      <h4>{characterBio.comics.available > 1 ? 'Comics:': 'Comic:'}</h4>
      <ul>
        {characterBio.comics.available ? map((item) => (<Item 
            key={item.name}
            title={item.name}
            />
          ), characterBio.comics.items)
        : <li>No Comic</li>}
      </ul>
      <h4>{characterBio.comics.available > 1 ? 'Series:': 'Serie:'}</h4>
        <ul>
        {characterBio.series.available ? map((item) => (<Item 
            key={item.name}
            title={item.name}
            />
          ), characterBio.series.items)
        : <li>No Series</li>}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  pageId: getPageId(state),
  characterBio: getCharacterBio(state),
})

CharacterDetail.propTypes ={
  characterBio: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }),
    series: PropTypes.shape.isRequired,
    comics: PropTypes.shape.isRequired,
  }),
}

Item.propTypes = state => ({
  title: PropTypes.string.isRequired,
})

export default connect(mapStateToProps)(CharacterDetail);
