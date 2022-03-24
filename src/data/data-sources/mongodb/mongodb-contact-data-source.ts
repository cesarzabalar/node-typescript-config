import { ContactDataSource } from '../../interfaces/data-sources/contact-data-source';
import { DatabaseWrapper } from '../../interfaces/data-sources/database-wrapper';
import { Contact } from '../../../domain/entities/contact';

export class MongoDBContactDataSource implements ContactDataSource {
	constructor(private database: DatabaseWrapper) {}

	async create(contact: Contact): Promise<boolean> {
		return await this.database.insertOne(contact);
	}
	async getAll(): Promise<Contact[]> {
		const result = await this.database.find({});
		return result.map((item) => ({
			id: item._id.toString(),
			surName: item.surName,
			firstName: item.firstName,
			email: item.email,
		}));
	}
}
