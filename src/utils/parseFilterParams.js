const parseContactType = (type) => {
  const contactType = (type) => ['work', 'home', 'personal'].includes(type);

  if (contactType(type)) {
    return type;
    };
};

const parseIsFavourite = (favourite) => {
  if (favourite === 'true') {
    return true;
    };

  if (favourite === 'false') {
    return false;
    };

  return undefined;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  const filter = {};

  if (parsedContactType !== undefined) {
    filter.contactType = parsedContactType;
  }

  if (parsedIsFavourite !== undefined) {
    filter.isFavourite = parsedIsFavourite;
  }

  return filter;
};