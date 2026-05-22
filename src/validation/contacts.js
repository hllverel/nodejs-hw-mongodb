import Joi from 'joi';

export const createContactSchema = Joi.object({
    name: Joi.string().min(2).max(30).required().messages({
        'string.base': 'Name should be a string', // "string" türü için özelleştirilmiş mesaj
        'string.min': 'Name should have at least {#limit} characters',
        'string.max': 'Name should have at most {#limit} characters',
        'any.required': 'Name is required',
        }),
    phoneNumber: Joi.string.integer().min(6).max(16).required(),
    email: Joi.string,
    isFavourite: Joi.boolean,
    contactType: Joi.string().valid('work', 'home', 'personal').required,
});

const dataToValidate = {
  name: 'John Doe',
  age: 12,
  gender: 'male',
  avgMark: 10.2,
};

const validationResult = createContactSchema.validate(dataToValidate, {abortEarly: false,});
if (validationResult.error) {
  console.error(validationResult.error.message);
} else {
  console.log('Data is valid!');
}


export const updateContactSchema = Joi.object({
    name: Joi.string().min(2).max(30).required().messages({
        'string.base': 'Name should be a string', // "string" türü için özelleştirilmiş mesaj
        'string.min': 'Name should have at least {#limit} characters',
        'string.max': 'Name should have at most {#limit} characters',
        'any.required': 'Name is required',
        }),
    phoneNumber: Joi.string.integer().min(6).max(16).required(),
    email: Joi.string,
    isFavourite: Joi.boolean,
    contactType: Joi.string().valid('work', 'home', 'personal').required,
});
