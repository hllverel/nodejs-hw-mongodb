import { Router } from "express";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getContactsController, getContactByIdController, createContactController, deleteContactController, upsertContactController, patchContactController } from "../controllers/contacts.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema, updateContactSchema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";
import { authenticate } from "../middlewares/authenticate.js";

const contactsRouter = Router();
contactsRouter.use(authenticate);

contactsRouter.get('/contacts', ctrlWrapper(getContactsController));
contactsRouter.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactByIdController));

contactsRouter.post('/contacts', validateBody(createContactSchema), ctrlWrapper(createContactController));

contactsRouter.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));

contactsRouter.put('/contacts/:contactId', isValidId, ctrlWrapper(upsertContactController));

contactsRouter.patch('/contacts/:contactId', isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController));

contactsRouter.use(authenticate);

contactsRouter.get('/', ctrlWrapper(getContactsController));

export default contactsRouter;
