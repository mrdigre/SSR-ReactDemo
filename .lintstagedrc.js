// module.exports = {
//   'src/**/*.{js,jsx,ts,tsx,json}': ['eslint  --cache --cache-location .next/cache/eslint/', 'npm run format']
// };


const path = require('path')
 
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`
 
module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}