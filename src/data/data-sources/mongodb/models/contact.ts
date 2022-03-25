import { Contact } from '../../../../domain/entities/contact';
import { Schema, model } from 'mongoose';

const ContactSchema = new Schema<Contact>(
	{
		firstName: { type: String, required: true },
		surName: { type: String, required: true },
		email: { type: String, required: true },
	},
	{ timestamps: true },
);

export default model<Contact>('Contact', ContactSchema);
