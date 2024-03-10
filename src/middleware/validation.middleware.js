const Validation = {};

Validation.validate = (schema, location) => {
  return (req, res, next) => {
    let data;

    switch (location) {
      case 'body':
        data = req.body;
        break;
      case 'params':
        data = req.params;
        break;
      case 'query':
        data = req.query;
        break;
      default:
        return res
          .status(500)
          .json({ success: false, error: 'Invalid validation location' });
    }

    const { error } = schema.validate(data);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }
    next();
  };
};
export default Validation;
