/* eslint-disable prettier/prettier */
import { MongoDBContactDataSource } from './mongodb-contact-data-source';
import { DatabaseWrapper } from '../../interfaces/data-sources/database-wrapper';

describe('MongoDB DataSource', () => {
	let mockDatabase: DatabaseWrapper;

	beforeAll(async () => {
		mockDatabase = {
			find: jest.fn(),
			insertOne: jest.fn(),
		};
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('getAll', async () => {
		const ds = new MongoDBContactDataSource(mockDatabase);
		jest
			.spyOn(mockDatabase, 'find')
			.mockImplementation(() =>
				Promise.resolve([{ surName: 'Smith', _id: '123', firstName: 'John', email: 'john@gmail.com' }]),
			);
		const result = await ds.getAll();
		expect(mockDatabase.find).toHaveBeenCalledWith({});
		expect(result).toStrictEqual([{ surName: 'Smith', id: '123', firstName: 'John', email: 'john@gmail.com' }]);
	});

	test('create', async () => {
		const ds = new MongoDBContactDataSource(mockDatabase);
		jest.spyOn(mockDatabase, 'insertOne').mockImplementation(() => Promise.resolve(true));
		const result = await ds.create({ surName: 'Smith', email: 'john@gmail.com', firstName: 'John' });
		expect(mockDatabase.insertOne).toHaveBeenCalledWith({
			surName: 'Smith',
			email: 'john@gmail.com',
			firstName: 'John',
		});
		expect(result).toStrictEqual(true);
	});
});
