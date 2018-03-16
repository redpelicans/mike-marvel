import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from "@blueprintjs/core";

const Characters = ({character, loadCharacterDetail}) => {
  return (
      <Card interactive={true} elevation={Card.ELEVATION_TWO} onClick={() => loadCharacterDetail('detail', character.id)}>
        <h5>{character.name}</h5>
          <img alt={`${character.name}`} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} width='300px' height='300px'/>
          <br/>
        <Button onClick={() => loadCharacterDetail('detail', character.id)}>Details</Button>
      </Card>
  )
}

Characters.propTypes ={
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    })
  })
}

export default Characters;
