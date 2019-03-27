var data = [
  {
    name: 'Atom-Beautify',
    description: 'When used, it cleans up the code and makes
    it more readable.',
    author: 'Glavin Wiechert',
    url:'https://atom.io/packages/atom-beautify',
    downloads: 6028053,
    stars: 5053,
    selector: 'p1'
  },
  {
    name: 'Git Time-Machine',
    description: 'This package takes the Git base a step further,
    but saving every all changes made to the file so that one
    can go back to previous edits versus going to Github constantly',
    author: 'Bee Wilkerson',
    url:'https://atom.io/packages/git-time-machine',
    downloads:367266,
    stars: 1012,
    selector: 'p2'
  },
  {
    name: 'Highlight Selected',
    description: 'When this package is used one is hovering over a command
    word all the other same command words to search them out easier.',
    author: 'Richard Race',
    url:'https://atom.io/packages/highlight-selected',
    downloads: 1728544,
    stars: 3054,
    selector: 'p3'
  }];

function Package(data) {
  this.name = data.name;
  this.description = data.description;
  this.author = data.author;
  this.url = data.url;
  this.downloads = data.downloads;
  this.stars = data.stars;
  this.selector = data.selector;
  this.getFormattedDownloads = function() {
    return this.downloads.toLocaleString();};
  this.getFormattedStars = function() {
    return this.stars.toLocaleString();};
}
function writePackageInfo(package) {
  var selector = package.selector,
    nameEl = document.getElementById(selector + '-name'),
    urlE1 = document.getElementById(selector+ '-url'),
    descEl = document.getElementById(selector + '-description'),
    authE1 = document.getElementById(selector+ '-author'),
    downE1 = document.getElementById(selector+ '-downloads'),
    starsE1 = document.getElementById(selector+ '-stars');

  nameEl.textContent = package.name;
  urlE1.textontent = package.url;
  descEl.textContent = package.description;
  authE1.textcontent = package.author;
  downE1.textcontent = package.downloads;
  starsE1.textcontent = package.stars;
}
function init() {
  for (let i = 0; i < data.length; i++) {
    const package = data[i];
    console.log(package.name);
    writePackageInfo(package);
  }
}
init();
