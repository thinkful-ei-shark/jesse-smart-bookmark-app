function main() {
  api.getBookmarks().then((items) => {
    items.forEach((item) => store.addItem(item));
    generate.render();
  });
  generate.render();
  generate.bindEventListeners();
}

$(main);
