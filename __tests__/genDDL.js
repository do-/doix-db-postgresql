const {DbLangPg} = require ('..')

test ('error', () => {

	const lang = new DbLangPg ()

	expect (() => [...lang.genAlter (0, 0)]).toThrow ()	

	expect (() => [...lang.genDDL ()]).toThrow ()	

	expect (lang.genColumnDefault ({default: 'NULL'})).toBe ('NULL')	

})

test ('empty', () => {

	const lang = new DbLangPg ()
	
	lang.migrationPlan = {toDo: new Map ()}

	expect ([...lang.genDDL ()]).toStrictEqual ([])

})