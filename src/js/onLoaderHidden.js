import getRefs from './get-refs';

const REFS = getRefs();

export default function onLoaderHidden() {
    REFS.loader.classList.add('visually-hidden');   
};