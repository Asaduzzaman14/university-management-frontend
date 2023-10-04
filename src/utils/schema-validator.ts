export const getErrorMesageByPropertyName = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  // let propertyPath = admin.mane.firstName
  // let propertyPath = admin.mane.lastName

  const propertys = propertyPath.split("."); // ['admin','name', firstName']
  let value = obj;

  for (let prop of propertys) {
    if (value[prop]) {
      value = value[prop];
    } else {
      return undefined;
    }
  }
  return value.message;
};
