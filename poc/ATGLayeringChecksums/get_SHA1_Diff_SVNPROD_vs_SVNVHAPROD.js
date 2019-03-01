/**
 * Punto de entrada para actualizar
 * en mongodb los chechsums(sha1) del respositorio 
 * ATG Layering:
 * svn: //172.17.203.59:3691/liverpool/informatica/sistemas/sisope/ecommerce_v11_3/branches/environment/env-configuration
 * colocandolo en /tmp/liv_atg_layering_config
 */

var ATGLayeringConsistencyAPI = require('./ATGLayeringConsistencyAPI')

console.log("Starting find diff PROD vs HAPROD checksums: " + Date(Date.now()).toLocaleString('es-MX'))

ATGLayeringConsistencyAPI.get_SHA1_Diff_SVNPROD_vs_SVNVHAPROD().then((res) => {
    console.log("Sucessfully updated MongoDB collection 'SHA1_diff_PROD_vs_PRODHA' at: " + Date(Date.now()).toLocaleString('es-MX'))
});