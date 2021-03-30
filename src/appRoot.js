import { readable } from 'svelte/store';


const _root = window.ovCompSettings && ovCompSettings[0].ovComponentRoot || '';

export const appRoot = readable(_root);