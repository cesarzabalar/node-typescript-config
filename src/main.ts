import server from './server';
import { APP_PORT, MONGO_URI } from './data/config/config-vars';
import ContactRouter from './presentation/routers/contact.router';
import { GetAllContacts } from './domain/use-cases/contact/get-all-contacts';
import { ContactRepositoryImpl } from './domain/repositories/contact.repository';
import { CreateContact } from './domain/use-cases/contact/create-contact';
import { DatabaseWrapper } from './data/interfaces/data-sources/database-wrapper';
import { MongoDBContactDataSource } from './data/data-sources/mongodb/mongodb-contact-data-source';
import ContactModel from './data/data-sources/mongodb/models/contact';
import { connect } from 'mongoose';

(async () => {
	await connect(MONGO_URI);

	const contactDatabase: DatabaseWrapper = {
		find: (query) => <any>ContactModel.find(query),
		insertOne: (doc) => ContactModel.create(doc),
	};

	const contactMiddleWare = ContactRouter(
		new GetAllContacts(new ContactRepositoryImpl(new MongoDBContactDataSource(contactDatabase))),
		new CreateContact(new ContactRepositoryImpl(new MongoDBContactDataSource(contactDatabase))),
	);

	server.use('/contact', contactMiddleWare);
	// eslint-disable-next-line no-console
	server.listen(APP_PORT, () => console.log(`Running on server port: ${APP_PORT}`));
})();
