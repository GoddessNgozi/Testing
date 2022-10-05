function stringLength (string) {
    const stringArray = string.split('');
    const length = stringArray.length;
    if (length > 0 && length < 10) {
        return length;
      }
      throw 'String must be between 1 and 10 characters';
}
  
  module.exports = { stringLength };