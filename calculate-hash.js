const crypto = require('crypto');
const fs = require('fs');

// current schema: v1
const schemaPath = './v1';

fs.readdirSync(schemaPath).forEach(fileName => {
  const path = `${schemaPath}/${fileName}`;
  const schema = JSON.parse(fs.readFileSync(path));

  const name = fileName.replace('.json', '');
  const id = schema['$id'];

  const minified = JSON.stringify(schema);
  const hash = crypto.createHash('sha256').update(minified).digest('hex');

  console.log(`${name} (${id}) - ${hash}`);
});
