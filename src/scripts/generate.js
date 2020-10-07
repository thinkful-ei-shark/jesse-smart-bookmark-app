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

function generateBookmarkString(bookmarkList) {
  const pageHead = generateMainPage();
  const list = bookmarkList.map((item) => generateBookmarkItem(item));
  const items = pageHead + list;
  return items;
}

function handleNewButton() {
  $("main").on("submit", "#add-bookmark", function (e) {
    e.preventDefault();
    store.store.adding = true;
    render();
  });
}

function generateAddPage() {
  const addPage = `<h1>
    My Bookmarks
</h1>
<div class = "group">
<form id ="add-bookmark-form">
<div class="item-column"
  <label for ="url">Url Here</label>
  <input type ="text" id="url" name="url" placeholder="put url here" required>
</div> 
<div class="item-column">
  <label for = "name">Name</label>
  <input type="text" placeholder="Nickname" name="name" id="name" required>
</div>
<div class="item-column">  
  <label for = "rating">Rating</label>
  <input type="text" placeholder="rating 1-5" name="rating" id="rating">
</div>
<div class="item-column">  
  <label for="desc">Description</label>
  <textarea name="desc" id="desc" rows="4">No description</textarea>
</div>
<div class ="item-column">
  <button type ="submit"class = "btn">Add Bookmark</button>
  </div>
</form>
</div>`;
  return addPage;
}
