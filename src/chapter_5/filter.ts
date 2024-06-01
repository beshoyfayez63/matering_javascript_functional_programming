const serviceResult = {
	accountsData: [
		{
			id: 'F220960K',
			balance: 1024,
		},
		{
			id: 'S120456T',
			balance: 2260,
		},
		{
			id: 'J140793A',
			balance: -38,
		},
		{
			id: 'M120396V',
			balance: -114,
		},
		{
			id: 'A120289L',
			balance: 55000,
		},
	],
};

const delinquent = serviceResult.accountsData.filter(v => v.balance < 0);

const myFilter = (arr: any[], fn: (item: any) => boolean) => arr.reduce((p: any[], c: any) => fn(c) ? p.concat(c) : p,[]);
console.log(myFilter(serviceResult.accountsData, (v: {balance: number}) => v.balance < 0));

