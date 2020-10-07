function generateMainPage() {
  const mainPage = `
        <h1>
            My Bookmarks
        </h1>
        <div class = "group">
            <div class = "item">
                <form id ="add-bookmark">
                <button type = "submit" class ="btn">New</button>
                </form>
            </div>
            <form id="filter-form">
            <div class ="item">
                <select name="filter" class ="btn" id="filter-button">
                    <option id="filter1" value="1">Show 1+</option>
                    <option id="filter2" value="2">Show 2+</option>
                    <option id="filter3" value="3">Show 3+</option>
                    <option id="filter4" value="4">Show 4+</option>
                    <option id="filter5" value="5">Show 5</option>
                </select>
            </div>
        <div class="item">
            <button type="button" id="filter" class = "btn">Filter</button>
        </div>
        </form>
        </div>`;
  return mainPage;
}

function generateBookmarkItem(bookmark) {
  let bookmarkTitle = `<span class ="item" >${bookmark.title}</span>`;
  const bookmarkItem = `<li class="ind-bookmark" data-item-id="${bookmark.id}"><div class="top-row group"
    <div>
      ${bookmarkTitle}
      <p class = "item">${bookmark.rating}</p>
      </div>
      </div>
      <div class="bottom-row hidden">
      <a href ="${bookmark.url}">Visit Site</a>
      <p>${bookmark.desc}</p>
      <button type = "submit" class ="btn "id="delete">Delete</button>
      </div>
    </li>`;
  return bookmarkItem;
}
