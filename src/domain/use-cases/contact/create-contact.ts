import { Contact } from '../../entities/contact';
import { ContactRepository } from '../../interfaces/repositories/contact.repository';
import { CreateContactUseCase } from '../../interfaces/use-cases/create-contact';

export class CreateContact implements CreateContactUseCase {
	constructor(private contactRepository: ContactRepository) {}

	async execute(contact: Contact): Promise<boolean> {
		return await this.contactRepository.createContact(contact);
	}
}
