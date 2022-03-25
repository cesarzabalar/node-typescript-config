import { ContactDataSource } from '../../data/interfaces/data-sources/contact-data-source';
import { Contact } from '../entities/contact';
import { ContactRepository } from '../interfaces/repositories/contact.repository';

export class ContactRepositoryImpl implements ContactRepository {
	constructor(private contactDataSource: ContactDataSource) {}

	async createContact(contact: Contact): Promise<boolean> {
		return await this.contactDataSource.create(contact);
	}

	async getContacts(): Promise<Contact[]> {
		return await this.contactDataSource.getAll();
	}
}
