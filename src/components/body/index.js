import React, { Fragment } from 'react';
import glamorous from 'glamorous';
import { map } from 'ramda';
import CharacterDetail from '../characterDetail';
import Characters from '../characters';

const ContainerCard = glamorous.div ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '1020px',
  marginLeft: 'auto',
  marginRight: 'auto',
})

const Body = ({characters = [], loadCharacterDetail, pageId = ''}) => {
  if (pageId === 'detail') return <Fragment><CharacterDetail /></Fragment>;
  return (
    <Fragment>
      <ContainerCard>
        {map((character) => 
          <Characters 
            key={character.id}
            character={character}
            loadCharacterDetail={loadCharacterDetail}
          />
        , characters)}
      </ContainerCard>
    </Fragment>
  );
}

export default Body;