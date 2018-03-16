export const MARVEL_LOADED = 'MARVEL_LOADED';
export const marvelLoaded = (characters) => ({ type: MARVEL_LOADED, payload: { characters, isPending: false } });

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const changePage = (pageId) => ({ type: CHANGE_PAGE, payload: {pageId}}) 

export const CHARACTERS_DETAIL = 'CHARACTERS_DETAIL';
export const characterBio = (characterBio) => ({ type: CHARACTERS_DETAIL, payload: { characterBio }}) 