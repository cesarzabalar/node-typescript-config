import Add from './class/Add';

const template = {
	name: 'cesar',
	role: 'dev',
	company: 'atlanticsoft',
	address: 'armenia, quindio',
	projects: 'returns',
	languages: 'js,node,react',
};

const add = new Add();
// eslint-disable-next-line no-console
console.log(add.sum(5, 8).getResult());
// eslint-disable-next-line no-console
console.log(template);
