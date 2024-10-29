// **** IMPORTS *****//
import { html } from '../lib.js' 
import {getAll} from '../api/data.js'
// Template for one thing
// Add info and user
const catalogTemp=()=> html `
// template
// Check if user creator for btns
`
// Template for full page 
const catalogsTemp=()=> html`
// Check if any info or map all to upper func
`
// FUNTION  
export async function showCatalog(ctx) {
    // create fucn in data.js 
    const info = await getAll()
    // rename info
    ctx.render(catalogsTemp(info, !!ctx.user))
}