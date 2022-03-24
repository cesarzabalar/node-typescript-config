import { Contact } from '../../entities/contact';
import { ContactRepository } from '../../interfaces/repositories/contact.repository';
import { GetAllContactsUseCase } from '../../interfaces/use-cases/get-all-contacts';

export class GetAllContacts implements GetAllContactsUseCase {
	//contactRepository: ContactRepository;

	constructor(private contactRepository: ContactRepository) {}

	async execute(): Promise<Contact[]> {
		return await this.contactRepository.getContacts();
	}
}
