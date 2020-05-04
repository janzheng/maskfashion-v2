

// ex: 	https://github.com/sveltejs/sapper/blob/master/site/src/routes/docs/index.svelte
// 			https://github.com/sveltejs/sapper/blob/master/site/src/routes/docs/index.json.js

// // routes/blog/[slug].json.js
// import db from './_database.js'; // the underscore tells Sapper this isn't a route

// export async function get(req, res, next) {
// 	// the `slug` parameter is available because this file
// 	// is called [slug].json.js
// 	const { slug } = req.params;

// 	const article = await db.get(slug);

// 	if (article !== null) {
// 		res.setHeader('Content-Type', 'application/json');
// 		res.end(JSON.stringify(article));
// 	} else {
// 		next();
// 	}
// }

import send from '@polka/send';
import Cytosis from 'cytosis';
import * as sapper from '@sapper/server';

import { config } from "dotenv";
config(); // https://github.com/sveltejs/sapper/issues/122


let json;

export function get(req, res) {

	try {
	  let bases = [{
		  tables: ["Content"],
		  options: {
		    "view": "Published",
		  }
	  },{
		  tables: ["Products"],
		  options: {
		    "view": "Published",
		  }
	  }]

		const { slug } = req.params;

		console.log('loading cytosis...', bases)

	  let _cytosis = new Cytosis({
	    apiKey: 'keyAe6M1KoPfg25aO',
	    baseId: 'appdAX83m80owHrLO',
	    bases: 	bases,
	    routeDetails: '[chinook/get]',
	  })

	  _cytosis.then((_result) => {
			json = JSON.stringify(_result)
			send(res, 200, json, {
				'Content-Type': 'application/json'
			});
	  })
	} catch(err) {
		throw new Error('[chinook/get] Error', err)
	}
}






// preregging to Airtable

export function post(req, res) {

	res.writeHead(200, { 'Content-Type': 'application/json' })
	json = JSON.stringify(req.body)
	json = JSON.parse(json)

	const apiEditorKey = process.env.CHINOOK_AIRTABLE_PRIVATE_API
	const baseId = process.env.CHINOOK_AIRTABLE_PRIVATE_BASE

	console.log(' >>>>>> json >>>', json, json.email, apiEditorKey, baseId)

	// validate?

  const saveToCytosis = async () => {
    await Cytosis.save({
      apiKey: apiEditorKey,
      baseId: baseId,
      tableName: 'Messages',
      tableOptions: {
        insertOptions: ['typecast'],
      },
      payload: {
      	Name: json.email,
        Email: json.email,
      }
    })
  }

  saveToCytosis().then((_res) => {
  	console.log('saveToCytosis >>> ', _res)
		res.end()
  })

}



	// export async function preload(page, session) {

	//   let bases = [{
	// 	  tables: ["Site Content"],
	// 	  options: {
	// 	    "view": "content-2--view",
	// 	    "maxRecords": 1
	// 	  }
	//   }]

	// 	const { slug } = page.params;
 //    let cytosisObject = await new Cytosis({
 //      apiKey: 'keygfuzbhXK1VShlR',
 //      baseId: 'appc0M3MdTYATe7RO',
 //      bases: 	bases,
 //      routeDetails: 'Demo Five',
 //    })

	// 	return { cytosisObject };

	// 	