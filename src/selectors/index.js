import { createSelector } from 'reselect';


const characters = state => state.characters;
export const getCharacters = createSelector(characters, c => c) 

const characterBio = state => state.characterBio;
export const getCharacterBio = createSelector(characterBio, c => c) 

const pageId = state => state.pageId;
export const getPageId = createSelector(pageId, p => p) 

const selectOptions = state => state.options;
export const getSelectOptions = createSelector(selectOptions, s => s) 

const isPending = state => state.isPending;
export const getIsPending = createSelector(isPending, i => i) 
